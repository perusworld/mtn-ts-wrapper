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
exports.FiatWithdrawalsApi = void 0;
const runtime = require("../runtime");
const index_1 = require("../models/index");
/**
 *
 */
class FiatWithdrawalsApi extends runtime.BaseAPI {
    /**
     * This endpoint initiates a new fiat withdrawal between customer and bank account belonging to the service provider in Crypto Source.
     * Initiates a new fiat withdrawal.
     */
    createFiatWithdrawalRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters['ica'] == null) {
                throw new runtime.RequiredError('ica', 'Required parameter "ica" was null or undefined when calling createFiatWithdrawal().');
            }
            if (requestParameters['mTNCreateFiatWithdrawal'] == null) {
                throw new runtime.RequiredError('mTNCreateFiatWithdrawal', 'Required parameter "mTNCreateFiatWithdrawal" was null or undefined when calling createFiatWithdrawal().');
            }
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            const response = yield this.request({
                path: `/customers/{ica}/fiat-withdrawals`.replace(`{${"ica"}}`, encodeURIComponent(String(requestParameters['ica']))),
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: (0, index_1.MTNCreateFiatWithdrawalToJSON)(requestParameters['mTNCreateFiatWithdrawal']),
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.MTNFiatWithdrawalFromJSON)(jsonValue));
        });
    }
    /**
     * This endpoint initiates a new fiat withdrawal between customer and bank account belonging to the service provider in Crypto Source.
     * Initiates a new fiat withdrawal.
     */
    createFiatWithdrawal(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.createFiatWithdrawalRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * This endpoint returns details about an existing fiat withdrawal within Crypto Source.
     * Retrieves an existing fiat withdrawal.
     */
    getFiatWithdrawalRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters['ica'] == null) {
                throw new runtime.RequiredError('ica', 'Required parameter "ica" was null or undefined when calling getFiatWithdrawal().');
            }
            if (requestParameters['fiatWithdrawalId'] == null) {
                throw new runtime.RequiredError('fiatWithdrawalId', 'Required parameter "fiatWithdrawalId" was null or undefined when calling getFiatWithdrawal().');
            }
            const queryParameters = {};
            const headerParameters = {};
            const response = yield this.request({
                path: `/customers/{ica}/fiat-withdrawals/{fiat_withdrawal_id}`.replace(`{${"ica"}}`, encodeURIComponent(String(requestParameters['ica']))).replace(`{${"fiat_withdrawal_id"}}`, encodeURIComponent(String(requestParameters['fiatWithdrawalId']))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.MTNFiatWithdrawalFromJSON)(jsonValue));
        });
    }
    /**
     * This endpoint returns details about an existing fiat withdrawal within Crypto Source.
     * Retrieves an existing fiat withdrawal.
     */
    getFiatWithdrawal(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getFiatWithdrawalRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
}
exports.FiatWithdrawalsApi = FiatWithdrawalsApi;
//# sourceMappingURL=FiatWithdrawalsApi.js.map