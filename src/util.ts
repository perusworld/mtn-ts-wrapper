import { Configuration, FetchParams, Middleware, RequestContext, ResponseContext } from './generated/runtime';
import { createLogger, format, transports } from "winston";
import * as fs from "fs";
import { GetBalancesRequest, GetEarmarkRequest, GetOperationRequest, GetTokenBalancesRequest, PostEarmarkRequest, SubmitOperationRequest, UpdateEarmarkForCancelRequest, UpdateEarmarkForDepositsRequest, UpdateEarmarkForReleaseRequest } from './generated/apis';
import { MTNBurnOperation, MTNMintOperation, MTNPayer, MTNRecipient, MTNTokenIdentifier, MTNTransferOperation } from './generated/models';
import { v4 as uuidv4 } from 'uuid';
const mcAuth = require('mastercard-oauth1-signer');

export const QUERY_DATE_FORMAT = 'yyyy-MM-dd';
export const STR_DATE_FORMAT = 'LLL dd yyyy';

const LOG_LEVEL = process.env.BE_LOG_LEVEL || 'debug';
const APP_NAME = process.env.BE_APP_NAME || 'default-app';
const loggerFormat = 'simple' === (process.env.BE_LOG_FORMAT || 'simple') ?
  format.combine(
    format.timestamp({
      format: 'YYYY-MM-DD HH:mm:ss'
    }),
    format.errors({ stack: true }),
    format.splat(),
    format.printf(
      ({ level, message, timestamp }) => {
        return `${timestamp} ${level}: ${message}`;
      })
  ) : format.combine(
    format.timestamp({
      format: 'YYYY-MM-DD HH:mm:ss'
    }),
    format.errors({ stack: true }),
    format.splat(),
    format.json()
  );
const logger = createLogger({
  level: LOG_LEVEL,
  format: loggerFormat,
  defaultMeta: { service: APP_NAME },
  transports: [
    new transports.Console()
  ],
});

export const getLogger = (name: string): any => {
  return logger.child({ for: name });
}

export const readString = (filePath: string): any => {
  return fs.readFileSync(`${filePath}`).toString();
}

export const pathOf = (filePath: string): string => {
  return fs.realpathSync(`${filePath}`);
}

export const uuid = (): string => {
  return uuidv4();
}

export const rndId = (prefix: string = 'ID', len = 7, from = 2, sep = '-'): string => {
  return `${prefix}${sep}${Math.random().toString(36).substring(from, from + len)}`.toUpperCase();
}


export const snooze = (ms = 1000): Promise<any> => {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const UTIL_LOGGER = getLogger('Util');

export const doWait = async (callBack: () => Promise<any>, sleepTime = 1000, maxRetry = 15): Promise<any | undefined> => {
  let ret = await callBack();
  let done = false;
  do {
    if (undefined === ret) {
      UTIL_LOGGER.debug('waiting; %d remaining', maxRetry);
      await snooze(sleepTime);
      ret = await callBack();
    } else {
      done = true;
    }
  } while (!done && 0 < --maxRetry)
  return ret;
}

export interface JWEMiddlewareConfig {
  consumerKey: string,
  signingKey: string,
  encryptionCertificate: string,
  privateKey: string,
}

export class JWEMiddleware implements Middleware {
  private configEnc = {
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

  private configDec = {
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

  private jwe;
  private jwd;
  constructor(private cfg: JWEMiddlewareConfig) {
    this.configEnc.encryptionCertificate = cfg.encryptionCertificate;
    this.configEnc.privateKey = cfg.privateKey;
    this.configDec.encryptionCertificate = cfg.encryptionCertificate;
    this.configDec.privateKey = cfg.privateKey;

    this.jwe = new (require("mastercard-client-encryption").JweEncryption)(this.configEnc);
    this.jwd = new (require("mastercard-client-encryption").JweEncryption)(this.configDec);
  }

  public async pre(context: RequestContext): Promise<void | FetchParams> {
    if (context.init.headers) {
      const payload = this.jwe.encrypt(context.url, context.init.headers, context.init.body);
      context.init.body = JSON.stringify(payload.body);
      (context.init.headers as Record<string, string>)["Authorization"] =
        mcAuth.getAuthorizationHeader(context.url, context.init.method, context.init.body, this.cfg.consumerKey, this.cfg.signingKey);
    }
  }

  public async post(context: ResponseContext): Promise<void | Response> {
    const respJson = context && context.response && 204 === context.response.status ? {} : await context.response.json();
    const skipDecrypt = context && context.response && 204 === context.response.status;
    let resp = {};
    if (respJson.Errors) {
      resp = respJson;
    } else {
      resp = skipDecrypt ? respJson : this.jwd.decrypt({ body: respJson, ...{ request: { url: context.url } } });
    }
    const ret = {
      ...context.response, ...{
        json: async () => {
          return resp;
        },
        status: context.response.status,
      }
    };
    context.response = ret;
    return ret;
  }
}

export interface ConfigurationOptions {
  basePath: string;
  consumerKey: string;
  pkcs12KeyFile: string;
  encryptionCertificateFile: string;
  privateKeyFile: string;
  ica: string;
  currency?: string;
  tokenSymbol?: string;
  chainId: string;
  identifierType: string;
}

export const buildConfiguration = (cfg: ConfigurationOptions): Configuration => {
  return new Configuration({
    basePath: cfg.basePath,
    middleware: [new JWEMiddleware({
      consumerKey: cfg.consumerKey, signingKey: readString(cfg.pkcs12KeyFile),
      encryptionCertificate: pathOf(cfg.encryptionCertificateFile),
      privateKey: pathOf(cfg.privateKeyFile)
    })]
  });

}

export const buildTokenConfigurationFromEnv = (): ConfigurationOptions => {
  return {
    basePath: process.env.BASE_PATH!,
    consumerKey: process.env.TOKEN_CONSUMER_KEY!,
    pkcs12KeyFile: process.env.TOKEN_PKCS12_KEY_FILE!,
    encryptionCertificateFile: process.env.TOKEN_ENCRYPTION_CERTIFICATE_FILE!,
    privateKeyFile: process.env.TOKEN_PRIVATE_KEY_FILE!,
    ica: process.env.TOKEN_ICA!,
    currency: process.env.TOKEN_CURRENCY!,
    tokenSymbol: process.env.TOKEN_SYMBOL!,
    chainId: process.env.CHAIN_ID!,
    identifierType: process.env.IDENTIFIER_TYPE!
  };
};

export const buildEarmarkConfigurationFromEnv = (): ConfigurationOptions => {
  return {
    basePath: process.env.BASE_PATH!,
    consumerKey: process.env.EARMARK_CONSUMER_KEY!,
    pkcs12KeyFile: process.env.EARMARK_PKCS12_KEY_FILE!,
    encryptionCertificateFile: process.env.EARMARK_ENCRYPTION_CERTIFICATE_FILE!,
    privateKeyFile: process.env.EARMARK_PRIVATE_KEY_FILE!,
    ica: process.env.EARMARK_ICA!,
    chainId: process.env.CHAIN_ID!,
    identifierType: process.env.IDENTIFIER_TYPE!
  };
};

export const GetTokenIdentifier = (cfg: ConfigurationOptions): MTNTokenIdentifier => {
  return { chainId: cfg.chainId, identifierType: cfg.identifierType, identifierValue: cfg.tokenSymbol || '' };
}


export const GetMTNOperationRequest = (ica: string, operationId: string): GetOperationRequest => {
  return { ica, operationId };
}


export const GetBalanceRequest = (accountAlias: string | undefined, cfg: ConfigurationOptions): GetBalancesRequest => {
  return {
    ica: cfg.ica, mTNTokenBalance: {
      tokenIdentifier: GetTokenIdentifier(cfg),
      ...(accountAlias && { accountAlias })
    }
  };
}

export const GetTokenBalanceRequest = (accountAlias: string | undefined, cfg: ConfigurationOptions): GetTokenBalancesRequest => {
  return {
    ica: cfg.ica, currency: cfg.currency || '', mTNTokenizedDepositBalance: {
      tokenIdentifier: GetTokenIdentifier(cfg),
      ...(accountAlias && { accountAlias })
    }
  };
}

export const GetMintRequest = (requestId: string, to: string, amount: number, cfg: ConfigurationOptions): SubmitOperationRequest => {
  const mTNTokenOperation: MTNMintOperation = {
    tokenIdentifier: GetTokenIdentifier(cfg),
    operationType: 'MINT', to, amount
  }
  return {
    ica: cfg.ica, idempotencyKey: requestId, mTNTokenOperation
  };
}

export const GetTransferRequest = (requestId: string, from: string, to: string, amount: number, cfg: ConfigurationOptions): SubmitOperationRequest => {
  const mTNTokenOperation: MTNTransferOperation = {
    tokenIdentifier: GetTokenIdentifier(cfg),
    operationType: 'TRANSFER', from, to, amount
  }
  return {
    ica: cfg.ica, idempotencyKey: requestId, mTNTokenOperation
  };
}

export const GetBurnRequest = (requestId: string, from: string, amount: number, cfg: ConfigurationOptions): SubmitOperationRequest => {
  const mTNTokenOperation: MTNBurnOperation = {
    tokenIdentifier: GetTokenIdentifier(cfg),
    operationType: 'BURN', from, amount
  }
  return {
    ica: cfg.ica, idempotencyKey: requestId, mTNTokenOperation
  };
}

export const GetEarmarkCreateRequest = (cfg: ConfigurationOptions, externalReference: string, payers: MTNPayer[],
  recipients: MTNRecipient[]): PostEarmarkRequest => {
  return {
    ica: cfg.ica, mTNEarmark: {
      amount: payers.reduce((prev, curr) => prev + (curr.amount || 0), 0),
      externalReference, payers, recipients,
    }
  };
}

export const GetEarmarkDetailsRequest = (cfg: ConfigurationOptions, earmarkId: string): GetEarmarkRequest => {
  return { ica: cfg.ica, earmarkId };
}

export const GetEarmarkDepositRequest = (cfg: ConfigurationOptions, earmarkId: string, payerAlias: string,
  amount: number): UpdateEarmarkForDepositsRequest => {
  return {
    ica: cfg.ica, earmarkId, mTNPayer: {
      accountAlias: payerAlias, amount: amount
    }
  };
}

export const GetEarmarkReleaseRequest = (cfg: ConfigurationOptions, earmarkId: string,
  reasonCode = 'CONTRACT_SETTLED', description = 'Contract settled'): UpdateEarmarkForReleaseRequest => {
  return {
    ica: cfg.ica, earmarkId, mTNEarmark: {
      statusReasonInformation: [{ reasonCode, description }]
    }
  };
}
