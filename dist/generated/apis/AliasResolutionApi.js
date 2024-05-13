"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * Mastercard Multi Token Network API
 * MTN (Multi Token Network) API is for customers and their consumers to - create account - buy/sell/hold cryptos - resolve alias and addresses - mint/transfer/burn tokenized deposits on blockchain
 *
 * The version of the OpenAPI document: 0.0.1
 * Contact: apisupport@mastercard.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
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
exports.AliasResolutionApi = void 0;
const runtime = require("../runtime");
const index_1 = require("../models/index");
/**
 *
 */
class AliasResolutionApi extends runtime.BaseAPI {
    /**
     * This endpoint allows for retrieving details of an account resolution request. Response is expected to be encrypted.
     * Retrieve an account resolution request.
     */
    getAliasResolutionRequestRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters['ica'] == null) {
                throw new runtime.RequiredError('ica', 'Required parameter "ica" was null or undefined when calling getAliasResolutionRequest().');
            }
            if (requestParameters['requestId'] == null) {
                throw new runtime.RequiredError('requestId', 'Required parameter "requestId" was null or undefined when calling getAliasResolutionRequest().');
            }
            const queryParameters = {};
            const headerParameters = {};
            const response = yield this.request({
                path: `/customers/{ica}/alias-resolutions/{request_id}`.replace(`{${"ica"}}`, encodeURIComponent(String(requestParameters['ica']))).replace(`{${"request_id"}}`, encodeURIComponent(String(requestParameters['requestId']))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.MTNAccountResolutionFromJSON)(jsonValue));
        });
    }
    /**
     * This endpoint allows for retrieving details of an account resolution request. Response is expected to be encrypted.
     * Retrieve an account resolution request.
     */
    getAliasResolutionRequest(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getAliasResolutionRequestRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * This endpoint allows for retrieving a list of account resolution requests where the calling VASP is the beneficiary. Response is expected to be encrypted.
     * Retrieve account resolution requests.
     */
    getAliasResolutionRequestsRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters['ica'] == null) {
                throw new runtime.RequiredError('ica', 'Required parameter "ica" was null or undefined when calling getAliasResolutionRequests().');
            }
            const queryParameters = {};
            if (requestParameters['status'] != null) {
                queryParameters['status'] = requestParameters['status'];
            }
            if (requestParameters['offset'] != null) {
                queryParameters['offset'] = requestParameters['offset'];
            }
            if (requestParameters['limit'] != null) {
                queryParameters['limit'] = requestParameters['limit'];
            }
            if (requestParameters['sort'] != null) {
                queryParameters['sort'] = requestParameters['sort'];
            }
            const headerParameters = {};
            const response = yield this.request({
                path: `/customers/{ica}/alias-resolutions`.replace(`{${"ica"}}`, encodeURIComponent(String(requestParameters['ica']))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.MTNAccountResolutionsFromJSON)(jsonValue));
        });
    }
    /**
     * This endpoint allows for retrieving a list of account resolution requests where the calling VASP is the beneficiary. Response is expected to be encrypted.
     * Retrieve account resolution requests.
     */
    getAliasResolutionRequests(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getAliasResolutionRequestsRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * This endpoint allows for creating a request to resolve crypto address for a given account alias. Request and response are expected to be encrypted.
     * Creates an account resolution request.
     */
    resolveAccountAliasRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters['ica'] == null) {
                throw new runtime.RequiredError('ica', 'Required parameter "ica" was null or undefined when calling resolveAccountAlias().');
            }
            if (requestParameters['mTNAccountResolution'] == null) {
                throw new runtime.RequiredError('mTNAccountResolution', 'Required parameter "mTNAccountResolution" was null or undefined when calling resolveAccountAlias().');
            }
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            const response = yield this.request({
                path: `/customers/{ica}/alias-resolutions`.replace(`{${"ica"}}`, encodeURIComponent(String(requestParameters['ica']))),
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: (0, index_1.MTNAccountResolutionToJSON)(requestParameters['mTNAccountResolution']),
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.MTNAccountResolutionFromJSON)(jsonValue));
        });
    }
    /**
     * This endpoint allows for creating a request to resolve crypto address for a given account alias. Request and response are expected to be encrypted.
     * Creates an account resolution request.
     */
    resolveAccountAlias(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.resolveAccountAliasRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Endpoint to update the account resolution request status and provide originator and beneficiary details at different states. Request is expected to be encrypted.
     * Update an account resolution request.
     */
    updateAccountResolutionRequestRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters['ica'] == null) {
                throw new runtime.RequiredError('ica', 'Required parameter "ica" was null or undefined when calling updateAccountResolutionRequest().');
            }
            if (requestParameters['requestId'] == null) {
                throw new runtime.RequiredError('requestId', 'Required parameter "requestId" was null or undefined when calling updateAccountResolutionRequest().');
            }
            if (requestParameters['mTNAccountResolution'] == null) {
                throw new runtime.RequiredError('mTNAccountResolution', 'Required parameter "mTNAccountResolution" was null or undefined when calling updateAccountResolutionRequest().');
            }
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            const response = yield this.request({
                path: `/customers/{ica}/alias-resolutions/{request_id}`.replace(`{${"ica"}}`, encodeURIComponent(String(requestParameters['ica']))).replace(`{${"request_id"}}`, encodeURIComponent(String(requestParameters['requestId']))),
                method: 'PUT',
                headers: headerParameters,
                query: queryParameters,
                body: (0, index_1.MTNAccountResolutionToJSON)(requestParameters['mTNAccountResolution']),
            }, initOverrides);
            return new runtime.VoidApiResponse(response);
        });
    }
    /**
     * Endpoint to update the account resolution request status and provide originator and beneficiary details at different states. Request is expected to be encrypted.
     * Update an account resolution request.
     */
    updateAccountResolutionRequest(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.updateAccountResolutionRequestRaw(requestParameters, initOverrides);
        });
    }
}
exports.AliasResolutionApi = AliasResolutionApi;
//# sourceMappingURL=AliasResolutionApi.js.map