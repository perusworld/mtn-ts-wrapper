"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * Mastercard Multi Token Network API
 * MTN (Multi Token Network) API is for customers and their consumers to - create account - buy/sell/hold cryptos - resolve alias and addresses - mint/transfer/burn tokenized deposits on blockchain
 *
 * The version of the OpenAPI document: 0.0.2
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
exports.TokenizedDepositsManagementApi = void 0;
const runtime = require("../runtime");
const index_1 = require("../models/index");
/**
 *
 */
class TokenizedDepositsManagementApi extends runtime.BaseAPI {
    /**
     * This endpoint allows a consumer to retrieve the token balance for any crypto address. Request is expected to be encrypted.
     * Retrieve token balance.
     */
    getTokenBalancesRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters['ica'] == null) {
                throw new runtime.RequiredError('ica', 'Required parameter "ica" was null or undefined when calling getTokenBalances().');
            }
            if (requestParameters['currency'] == null) {
                throw new runtime.RequiredError('currency', 'Required parameter "currency" was null or undefined when calling getTokenBalances().');
            }
            if (requestParameters['mTNTokenizedDepositBalance'] == null) {
                throw new runtime.RequiredError('mTNTokenizedDepositBalance', 'Required parameter "mTNTokenizedDepositBalance" was null or undefined when calling getTokenBalances().');
            }
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            const response = yield this.request({
                path: `/customers/{ica}/tokenized-deposits/{currency}/token-balances`.replace(`{${"ica"}}`, encodeURIComponent(String(requestParameters['ica']))).replace(`{${"currency"}}`, encodeURIComponent(String(requestParameters['currency']))),
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: (0, index_1.MTNTokenizedDepositBalanceToJSON)(requestParameters['mTNTokenizedDepositBalance']),
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.MTNTokenizedDepositBalanceFromJSON)(jsonValue));
        });
    }
    /**
     * This endpoint allows a consumer to retrieve the token balance for any crypto address. Request is expected to be encrypted.
     * Retrieve token balance.
     */
    getTokenBalances(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getTokenBalancesRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * This endpoint allows a consumer to retrieve details of a tokenized deposits operation. Response is expected to be encrypted.
     * Retrieve details of tokenized deposits operation.
     */
    getTokenOperationRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters['ica'] == null) {
                throw new runtime.RequiredError('ica', 'Required parameter "ica" was null or undefined when calling getTokenOperation().');
            }
            if (requestParameters['operationId'] == null) {
                throw new runtime.RequiredError('operationId', 'Required parameter "operationId" was null or undefined when calling getTokenOperation().');
            }
            const queryParameters = {};
            const headerParameters = {};
            const response = yield this.request({
                path: `/customers/{ica}/tokenized-deposits/{operation_id}`.replace(`{${"ica"}}`, encodeURIComponent(String(requestParameters['ica']))).replace(`{${"operation_id"}}`, encodeURIComponent(String(requestParameters['operationId']))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.MTNTokenizedDepositOperationInformationFromJSON)(jsonValue));
        });
    }
    /**
     * This endpoint allows a consumer to retrieve details of a tokenized deposits operation. Response is expected to be encrypted.
     * Retrieve details of tokenized deposits operation.
     */
    getTokenOperation(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getTokenOperationRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * This endpoint allows a consumer to retrieve the total supply of tokens. Request is expected to be encrypted.
     * Retrieve total supply of tokens.
     */
    getTotalSupplyRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters['ica'] == null) {
                throw new runtime.RequiredError('ica', 'Required parameter "ica" was null or undefined when calling getTotalSupply().');
            }
            if (requestParameters['currency'] == null) {
                throw new runtime.RequiredError('currency', 'Required parameter "currency" was null or undefined when calling getTotalSupply().');
            }
            if (requestParameters['mTNTotalTokenSupply'] == null) {
                throw new runtime.RequiredError('mTNTotalTokenSupply', 'Required parameter "mTNTotalTokenSupply" was null or undefined when calling getTotalSupply().');
            }
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            const response = yield this.request({
                path: `/customers/{ica}/tokenized-deposits/{currency}/total-supplies`.replace(`{${"ica"}}`, encodeURIComponent(String(requestParameters['ica']))).replace(`{${"currency"}}`, encodeURIComponent(String(requestParameters['currency']))),
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: (0, index_1.MTNTotalTokenSupplyToJSON)(requestParameters['mTNTotalTokenSupply']),
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.MTNTotalTokenSupplyFromJSON)(jsonValue));
        });
    }
    /**
     * This endpoint allows a consumer to retrieve the total supply of tokens. Request is expected to be encrypted.
     * Retrieve total supply of tokens.
     */
    getTotalSupply(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getTotalSupplyRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * This endpoint allows a consumer to submit a tokenized deposits burn operation. Request and response are expected to be encrypted.
     * Submit a tokenized deposits burn operation.
     */
    submitBurnOperationRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters['ica'] == null) {
                throw new runtime.RequiredError('ica', 'Required parameter "ica" was null or undefined when calling submitBurnOperation().');
            }
            if (requestParameters['currency'] == null) {
                throw new runtime.RequiredError('currency', 'Required parameter "currency" was null or undefined when calling submitBurnOperation().');
            }
            if (requestParameters['idempotencyKey'] == null) {
                throw new runtime.RequiredError('idempotencyKey', 'Required parameter "idempotencyKey" was null or undefined when calling submitBurnOperation().');
            }
            if (requestParameters['mTNTokenizedBurnOperation'] == null) {
                throw new runtime.RequiredError('mTNTokenizedBurnOperation', 'Required parameter "mTNTokenizedBurnOperation" was null or undefined when calling submitBurnOperation().');
            }
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            if (requestParameters['idempotencyKey'] != null) {
                headerParameters['Idempotency-Key'] = String(requestParameters['idempotencyKey']);
            }
            const response = yield this.request({
                path: `/customers/{ica}/tokenized-deposits/{currency}/burns`.replace(`{${"ica"}}`, encodeURIComponent(String(requestParameters['ica']))).replace(`{${"currency"}}`, encodeURIComponent(String(requestParameters['currency']))),
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: (0, index_1.MTNTokenizedBurnOperationToJSON)(requestParameters['mTNTokenizedBurnOperation']),
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.MTNTokenizedBurnOperationInformationFromJSON)(jsonValue));
        });
    }
    /**
     * This endpoint allows a consumer to submit a tokenized deposits burn operation. Request and response are expected to be encrypted.
     * Submit a tokenized deposits burn operation.
     */
    submitBurnOperation(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.submitBurnOperationRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * This endpoint allows a consumer to submit a tokenized deposits mint operation. Request and response are expected to be encrypted.
     * Submit a tokenized deposits mint operation.
     */
    submitMintOperationRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters['ica'] == null) {
                throw new runtime.RequiredError('ica', 'Required parameter "ica" was null or undefined when calling submitMintOperation().');
            }
            if (requestParameters['currency'] == null) {
                throw new runtime.RequiredError('currency', 'Required parameter "currency" was null or undefined when calling submitMintOperation().');
            }
            if (requestParameters['idempotencyKey'] == null) {
                throw new runtime.RequiredError('idempotencyKey', 'Required parameter "idempotencyKey" was null or undefined when calling submitMintOperation().');
            }
            if (requestParameters['mTNTokenizedMintOperation'] == null) {
                throw new runtime.RequiredError('mTNTokenizedMintOperation', 'Required parameter "mTNTokenizedMintOperation" was null or undefined when calling submitMintOperation().');
            }
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            if (requestParameters['idempotencyKey'] != null) {
                headerParameters['Idempotency-Key'] = String(requestParameters['idempotencyKey']);
            }
            const response = yield this.request({
                path: `/customers/{ica}/tokenized-deposits/{currency}/mints`.replace(`{${"ica"}}`, encodeURIComponent(String(requestParameters['ica']))).replace(`{${"currency"}}`, encodeURIComponent(String(requestParameters['currency']))),
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: (0, index_1.MTNTokenizedMintOperationToJSON)(requestParameters['mTNTokenizedMintOperation']),
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.MTNTokenizedMintOperationInformationFromJSON)(jsonValue));
        });
    }
    /**
     * This endpoint allows a consumer to submit a tokenized deposits mint operation. Request and response are expected to be encrypted.
     * Submit a tokenized deposits mint operation.
     */
    submitMintOperation(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.submitMintOperationRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * This endpoint allows a consumer to submit a tokenized deposits transfer operation. Request and response are expected to be encrypted.
     * Submit a tokenized deposits transfer operation.
     */
    submitTransferOperationRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters['ica'] == null) {
                throw new runtime.RequiredError('ica', 'Required parameter "ica" was null or undefined when calling submitTransferOperation().');
            }
            if (requestParameters['currency'] == null) {
                throw new runtime.RequiredError('currency', 'Required parameter "currency" was null or undefined when calling submitTransferOperation().');
            }
            if (requestParameters['idempotencyKey'] == null) {
                throw new runtime.RequiredError('idempotencyKey', 'Required parameter "idempotencyKey" was null or undefined when calling submitTransferOperation().');
            }
            if (requestParameters['mTNTokenizedTransferOperation'] == null) {
                throw new runtime.RequiredError('mTNTokenizedTransferOperation', 'Required parameter "mTNTokenizedTransferOperation" was null or undefined when calling submitTransferOperation().');
            }
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            if (requestParameters['idempotencyKey'] != null) {
                headerParameters['Idempotency-Key'] = String(requestParameters['idempotencyKey']);
            }
            const response = yield this.request({
                path: `/customers/{ica}/tokenized-deposits/{currency}/transfers`.replace(`{${"ica"}}`, encodeURIComponent(String(requestParameters['ica']))).replace(`{${"currency"}}`, encodeURIComponent(String(requestParameters['currency']))),
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: (0, index_1.MTNTokenizedTransferOperationToJSON)(requestParameters['mTNTokenizedTransferOperation']),
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.MTNTokenizedTransferOperationInformationFromJSON)(jsonValue));
        });
    }
    /**
     * This endpoint allows a consumer to submit a tokenized deposits transfer operation. Request and response are expected to be encrypted.
     * Submit a tokenized deposits transfer operation.
     */
    submitTransferOperation(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.submitTransferOperationRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
}
exports.TokenizedDepositsManagementApi = TokenizedDepositsManagementApi;
//# sourceMappingURL=TokenizedDepositsManagementApi.js.map