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
exports.TokenService = void 0;
const apis_1 = require("./generated/apis");
const util_1 = require("./util");
const logger = (0, util_1.getLogger)('TokenService');
class TokenService {
    /**
     * Constructor
     *
     * @class TokenService
     * @constructor
     */
    constructor(cfg) {
        this.configuration = (0, util_1.buildConfiguration)(cfg);
        this.td = new apis_1.TokenizedDepositsManagementApi(this.configuration);
        this.tkn = new apis_1.TokenManagementApi(this.configuration);
        this.em = new apis_1.EarmarksApi(this.configuration);
    }
    /**
     * @deprecated
     */
    getBalance(req) {
        return __awaiter(this, void 0, void 0, function* () {
            let ret = undefined;
            try {
                ret = yield this.tkn.getBalances(req);
            }
            catch (error) {
                logger.error(error);
            }
            return ret;
        });
    }
    getTokenBalances(req) {
        return __awaiter(this, void 0, void 0, function* () {
            let ret = undefined;
            try {
                ret = yield this.td.getTokenBalances(req);
            }
            catch (error) {
                logger.error(error);
            }
            return ret;
        });
    }
    /**
     * @deprecated
     */
    submitOperation(req) {
        return __awaiter(this, void 0, void 0, function* () {
            let ret = undefined;
            try {
                ret = yield this.tkn.submitOperation(req);
            }
            catch (error) {
                logger.error(error);
            }
            return ret;
        });
    }
    depositIntoEarmark(req) {
        return __awaiter(this, void 0, void 0, function* () {
            let ret = false;
            try {
                yield this.em.updateEarmarkForDeposits(req);
                ret = true;
            }
            catch (error) {
                logger.error(error);
            }
            return ret;
        });
    }
    /**
     * @deprecated
     */
    waitForTokenOperation(operationId_1, cfg_1) {
        return __awaiter(this, arguments, void 0, function* (operationId, cfg, sleepTime = 1000, maxRetry = 15) {
            let ret = false;
            try {
                ret = yield (0, util_1.doWait)(() => __awaiter(this, void 0, void 0, function* () {
                    const resp = yield this.tkn.getOperation((0, util_1.GetMTNOperationRequest)(cfg.ica, operationId));
                    return resp.status && (resp.status === 'RECEIVED'
                        || resp.status === 'PENDING') ? undefined : resp.status;
                }), sleepTime, maxRetry);
            }
            catch (error) {
                logger.error(error);
            }
            return ret;
        });
    }
}
exports.TokenService = TokenService;
//# sourceMappingURL=token-svc.js.map