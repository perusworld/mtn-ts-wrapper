"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetEarmarkReleaseRequest = exports.GetEarmarkDepositRequest = exports.GetEarmarkDetailsRequest = exports.GetEarmarkCreateRequest = exports.GetBurnRequest = exports.GetTransferRequest = exports.GetMintRequest = exports.GetBalanceRequest = exports.GetMTNOperationRequest = exports.GetTokenIdentifier = exports.buildEarmarkConfigurationFromEnv = exports.buildTokenConfigurationFromEnv = exports.buildConfiguration = exports.JWEMiddleware = exports.doWait = exports.snooze = exports.rndId = exports.uuid = exports.pathOf = exports.readString = exports.getLogger = exports.STR_DATE_FORMAT = exports.QUERY_DATE_FORMAT = void 0;
const runtime_1 = require("./generated/runtime");
const winston_1 = require("winston");
const fs = require("fs");
const uuid_1 = require("uuid");
const mcAuth = require('mastercard-oauth1-signer');
exports.QUERY_DATE_FORMAT = 'yyyy-MM-dd';
exports.STR_DATE_FORMAT = 'LLL dd yyyy';
const LOG_LEVEL = process.env.BE_LOG_LEVEL || 'debug';
const APP_NAME = process.env.BE_APP_NAME || 'default-app';
const loggerFormat = 'simple' === (process.env.BE_LOG_FORMAT || 'simple') ?
    winston_1.format.combine(winston_1.format.timestamp({
        format: 'YYYY-MM-DD HH:mm:ss'
    }), winston_1.format.errors({ stack: true }), winston_1.format.splat(), winston_1.format.printf(({ level, message, timestamp }) => {
        return `${timestamp} ${level}: ${message}`;
    })) : winston_1.format.combine(winston_1.format.timestamp({
    format: 'YYYY-MM-DD HH:mm:ss'
}), winston_1.format.errors({ stack: true }), winston_1.format.splat(), winston_1.format.json());
const logger = (0, winston_1.createLogger)({
    level: LOG_LEVEL,
    format: loggerFormat,
    defaultMeta: { service: APP_NAME },
    transports: [
        new winston_1.transports.Console()
    ],
});
const getLogger = (name) => {
    return logger.child({ for: name });
};
exports.getLogger = getLogger;
const readString = (filePath) => {
    return fs.readFileSync(`${filePath}`).toString();
};
exports.readString = readString;
const pathOf = (filePath) => {
    return fs.realpathSync(`${filePath}`);
};
exports.pathOf = pathOf;
const uuid = () => {
    return (0, uuid_1.v4)();
};
exports.uuid = uuid;
const rndId = (prefix = 'ID', len = 7, from = 2, sep = '-') => {
    return `${prefix}${sep}${Math.random().toString(36).substring(from, from + len)}`.toUpperCase();
};
exports.rndId = rndId;
const snooze = (ms = 1000) => {
    return new Promise(resolve => setTimeout(resolve, ms));
};
exports.snooze = snooze;
const UTIL_LOGGER = (0, exports.getLogger)('Util');
const doWait = (callBack_1, ...args_1) => __awaiter(void 0, [callBack_1, ...args_1], void 0, function* (callBack, sleepTime = 1000, maxRetry = 15) {
    let ret = yield callBack();
    let done = false;
    do {
        if (undefined === ret) {
            UTIL_LOGGER.debug('waiting; %d remaining', maxRetry);
            yield (0, exports.snooze)(sleepTime);
            ret = yield callBack();
        }
        else {
            done = true;
        }
    } while (!done && 0 < --maxRetry);
    return ret;
});
exports.doWait = doWait;
class JWEMiddleware {
    constructor(cfg) {
        this.cfg = cfg;
        this.configEnc = {
            paths: [
                {
                    path: "$",
                    toEncrypt: [
                        {
                            element: "$",
                            obj: "$",
                        },
                    ],
                    toDecrypt: [],
                },
            ],
            mode: "JWE",
            encryptedValueFieldName: "encryptedData",
            encryptionCertificate: "blah",
            privateKey: "blah",
        };
        this.configDec = {
            paths: [
                {
                    path: "$",
                    toEncrypt: [],
                    toDecrypt: [
                        {
                            element: "$",
                            obj: "$",
                        },
                    ],
                },
            ],
            mode: "JWE",
            encryptedValueFieldName: "encryptedResponse",
            encryptionCertificate: "blah",
            privateKey: "blah",
        };
        this.configEnc.encryptionCertificate = cfg.encryptionCertificate;
        this.configEnc.privateKey = cfg.privateKey;
        this.configDec.encryptionCertificate = cfg.encryptionCertificate;
        this.configDec.privateKey = cfg.privateKey;
        this.jwe = new (require("mastercard-client-encryption").JweEncryption)(this.configEnc);
        this.jwd = new (require("mastercard-client-encryption").JweEncryption)(this.configDec);
    }
    pre(context) {
        return __awaiter(this, void 0, void 0, function* () {
            if (context.init.headers) {
                const payload = this.jwe.encrypt(context.url, context.init.headers, context.init.body);
                context.init.body = JSON.stringify(payload.body);
                context.init.headers["Authorization"] =
                    mcAuth.getAuthorizationHeader(context.url, context.init.method, context.init.body, this.cfg.consumerKey, this.cfg.signingKey);
            }
        });
    }
    post(context) {
        return __awaiter(this, void 0, void 0, function* () {
            const respJson = context && context.response && 204 === context.response.status ? {} : yield context.response.json();
            const skipDecrypt = context && context.response && 204 === context.response.status;
            let resp = {};
            if (respJson.Errors) {
                resp = respJson;
            }
            else {
                resp = skipDecrypt ? respJson : this.jwd.decrypt(Object.assign({ body: respJson }, { request: { url: context.url } }));
            }
            const ret = Object.assign(Object.assign({}, context.response), {
                json: () => __awaiter(this, void 0, void 0, function* () {
                    return resp;
                }),
                status: context.response.status,
            });
            context.response = ret;
            return ret;
        });
    }
}
exports.JWEMiddleware = JWEMiddleware;
const buildConfiguration = (cfg) => {
    return new runtime_1.Configuration({
        basePath: cfg.basePath,
        middleware: [new JWEMiddleware({
                consumerKey: cfg.consumerKey, signingKey: (0, exports.readString)(cfg.pkcs12KeyFile),
                encryptionCertificate: (0, exports.pathOf)(cfg.encryptionCertificateFile),
                privateKey: (0, exports.pathOf)(cfg.privateKeyFile)
            })]
    });
};
exports.buildConfiguration = buildConfiguration;
const buildTokenConfigurationFromEnv = () => {
    return {
        basePath: process.env.BASE_PATH,
        consumerKey: process.env.TOKEN_CONSUMER_KEY,
        pkcs12KeyFile: process.env.TOKEN_PKCS12_KEY_FILE,
        encryptionCertificateFile: process.env.TOKEN_ENCRYPTION_CERTIFICATE_FILE,
        privateKeyFile: process.env.TOKEN_PRIVATE_KEY_FILE,
        ica: process.env.TOKEN_ICA,
        tokenSymbol: process.env.TOKEN_SYMBOL,
        chainId: process.env.CHAIN_ID,
        identifierType: process.env.IDENTIFIER_TYPE
    };
};
exports.buildTokenConfigurationFromEnv = buildTokenConfigurationFromEnv;
const buildEarmarkConfigurationFromEnv = () => {
    return {
        basePath: process.env.BASE_PATH,
        consumerKey: process.env.EARMARK_CONSUMER_KEY,
        pkcs12KeyFile: process.env.EARMARK_PKCS12_KEY_FILE,
        encryptionCertificateFile: process.env.EARMARK_ENCRYPTION_CERTIFICATE_FILE,
        privateKeyFile: process.env.EARMARK_PRIVATE_KEY_FILE,
        ica: process.env.EARMARK_ICA,
        chainId: process.env.CHAIN_ID,
        identifierType: process.env.IDENTIFIER_TYPE
    };
};
exports.buildEarmarkConfigurationFromEnv = buildEarmarkConfigurationFromEnv;
const GetTokenIdentifier = (cfg) => {
    return { chainId: cfg.chainId, identifierType: cfg.identifierType, identifierValue: cfg.tokenSymbol || '' };
};
exports.GetTokenIdentifier = GetTokenIdentifier;
const GetMTNOperationRequest = (ica, operationId) => {
    return { ica, operationId };
};
exports.GetMTNOperationRequest = GetMTNOperationRequest;
const GetBalanceRequest = (accountAlias, cfg) => {
    return {
        ica: cfg.ica, mTNTokenBalance: Object.assign({ tokenIdentifier: (0, exports.GetTokenIdentifier)(cfg) }, (accountAlias && { accountAlias }))
    };
};
exports.GetBalanceRequest = GetBalanceRequest;
const GetMintRequest = (requestId, to, amount, cfg) => {
    const mTNTokenOperation = {
        tokenIdentifier: (0, exports.GetTokenIdentifier)(cfg),
        operationType: 'MINT', to, amount
    };
    return {
        ica: cfg.ica, idempotencyKey: requestId, mTNTokenOperation
    };
};
exports.GetMintRequest = GetMintRequest;
const GetTransferRequest = (requestId, from, to, amount, cfg) => {
    const mTNTokenOperation = {
        tokenIdentifier: (0, exports.GetTokenIdentifier)(cfg),
        operationType: 'TRANSFER', from, to, amount
    };
    return {
        ica: cfg.ica, idempotencyKey: requestId, mTNTokenOperation
    };
};
exports.GetTransferRequest = GetTransferRequest;
const GetBurnRequest = (requestId, from, amount, cfg) => {
    const mTNTokenOperation = {
        tokenIdentifier: (0, exports.GetTokenIdentifier)(cfg),
        operationType: 'BURN', from, amount
    };
    return {
        ica: cfg.ica, idempotencyKey: requestId, mTNTokenOperation
    };
};
exports.GetBurnRequest = GetBurnRequest;
const GetEarmarkCreateRequest = (cfg, externalReference, payers, recipients) => {
    return {
        ica: cfg.ica, mTNEarmark: {
            amount: payers.reduce((prev, curr) => prev + (curr.amount || 0), 0),
            externalReference, payers, recipients,
        }
    };
};
exports.GetEarmarkCreateRequest = GetEarmarkCreateRequest;
const GetEarmarkDetailsRequest = (cfg, earmarkId) => {
    return { ica: cfg.ica, earmarkId };
};
exports.GetEarmarkDetailsRequest = GetEarmarkDetailsRequest;
const GetEarmarkDepositRequest = (cfg, earmarkId, payerAlias, amount) => {
    return {
        ica: cfg.ica, earmarkId, mTNPayer: {
            accountAlias: payerAlias, amount: amount
        }
    };
};
exports.GetEarmarkDepositRequest = GetEarmarkDepositRequest;
const GetEarmarkReleaseRequest = (cfg, earmarkId, reasonCode = 'CONTRACT_SETTLED', description = 'Contract settled') => {
    return {
        ica: cfg.ica, earmarkId, mTNEarmark: {
            statusReasonInformation: [{ reasonCode, description }]
        }
    };
};
exports.GetEarmarkReleaseRequest = GetEarmarkReleaseRequest;
//# sourceMappingURL=util.js.map