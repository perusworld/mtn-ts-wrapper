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
exports.EarmarkService = void 0;
const apis_1 = require("./generated/apis");
const util_1 = require("./util");
const logger = (0, util_1.getLogger)('EarmarkService');
class EarmarkService {
    /**
     * Constructor
     *
     * @class EarmarkService
     * @constructor
     */
    constructor(cfg) {
        this.configuration = (0, util_1.buildConfiguration)(cfg);
        this.em = new apis_1.EarmarksApi(this.configuration);
    }
    getEarmarkDetails(req) {
        return __awaiter(this, void 0, void 0, function* () {
            let ret = undefined;
            try {
                ret = yield this.em.getEarmark(req);
            }
            catch (error) {
                logger.error(error);
            }
            return ret;
        });
    }
    searchEarmarks(req) {
        return __awaiter(this, void 0, void 0, function* () {
            let ret = undefined;
            try {
                ret = yield this.em.earmarkSearch(req);
            }
            catch (error) {
                logger.error(error);
            }
            return ret;
        });
    }
    createEarmark(req) {
        return __awaiter(this, void 0, void 0, function* () {
            let ret = undefined;
            try {
                ret = yield this.em.postEarmark(req);
            }
            catch (error) {
                logger.error(error);
            }
            return ret;
        });
    }
    releaseEarmark(req) {
        return __awaiter(this, void 0, void 0, function* () {
            let ret = false;
            try {
                yield this.em.updateEarmarkForRelease(req);
                ret = true;
            }
            catch (error) {
                logger.error(error);
            }
            return ret;
        });
    }
    waitForEarmarkStatus(status_1, req_1) {
        return __awaiter(this, arguments, void 0, function* (status, req, sleepTime = 1000, maxRetry = 15) {
            let ret = false;
            try {
                ret = yield (0, util_1.doWait)(() => __awaiter(this, void 0, void 0, function* () {
                    const em = yield this.getEarmarkDetails(req);
                    return em && em.status && (em.status === status) ? em.status : undefined;
                }), sleepTime, maxRetry);
            }
            catch (error) {
                logger.error(error);
            }
            return ret;
        });
    }
}
exports.EarmarkService = EarmarkService;
//# sourceMappingURL=earmark-svc.js.map