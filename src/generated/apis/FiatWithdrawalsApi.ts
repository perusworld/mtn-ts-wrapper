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


import * as runtime from '../runtime';
import type {
  MTNCreateFiatWithdrawal,
  MTNErrorResponse,
  MTNFiatWithdrawal,
} from '../models/index';
import {
    MTNCreateFiatWithdrawalFromJSON,
    MTNCreateFiatWithdrawalToJSON,
    MTNErrorResponseFromJSON,
    MTNErrorResponseToJSON,
    MTNFiatWithdrawalFromJSON,
    MTNFiatWithdrawalToJSON,
} from '../models/index';

export interface CreateFiatWithdrawalRequest {
    ica: string;
    mTNCreateFiatWithdrawal: MTNCreateFiatWithdrawal;
}

export interface GetFiatWithdrawalRequest {
    ica: string;
    fiatWithdrawalId: string;
}

/**
 * 
 */
export class FiatWithdrawalsApi extends runtime.BaseAPI {

    /**
     * This endpoint initiates a new fiat withdrawal between customer and bank account belonging to the service provider in Crypto Source.
     * Initiates a new fiat withdrawal.
     */
    async createFiatWithdrawalRaw(requestParameters: CreateFiatWithdrawalRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MTNFiatWithdrawal>> {
        if (requestParameters['ica'] == null) {
            throw new runtime.RequiredError(
                'ica',
                'Required parameter "ica" was null or undefined when calling createFiatWithdrawal().'
            );
        }

        if (requestParameters['mTNCreateFiatWithdrawal'] == null) {
            throw new runtime.RequiredError(
                'mTNCreateFiatWithdrawal',
                'Required parameter "mTNCreateFiatWithdrawal" was null or undefined when calling createFiatWithdrawal().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/customers/{ica}/fiat-withdrawals`.replace(`{${"ica"}}`, encodeURIComponent(String(requestParameters['ica']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: MTNCreateFiatWithdrawalToJSON(requestParameters['mTNCreateFiatWithdrawal']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => MTNFiatWithdrawalFromJSON(jsonValue));
    }

    /**
     * This endpoint initiates a new fiat withdrawal between customer and bank account belonging to the service provider in Crypto Source.
     * Initiates a new fiat withdrawal.
     */
    async createFiatWithdrawal(requestParameters: CreateFiatWithdrawalRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MTNFiatWithdrawal> {
        const response = await this.createFiatWithdrawalRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * This endpoint returns details about an existing fiat withdrawal within Crypto Source.
     * Retrieves an existing fiat withdrawal.
     */
    async getFiatWithdrawalRaw(requestParameters: GetFiatWithdrawalRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MTNFiatWithdrawal>> {
        if (requestParameters['ica'] == null) {
            throw new runtime.RequiredError(
                'ica',
                'Required parameter "ica" was null or undefined when calling getFiatWithdrawal().'
            );
        }

        if (requestParameters['fiatWithdrawalId'] == null) {
            throw new runtime.RequiredError(
                'fiatWithdrawalId',
                'Required parameter "fiatWithdrawalId" was null or undefined when calling getFiatWithdrawal().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/customers/{ica}/fiat-withdrawals/{fiat_withdrawal_id}`.replace(`{${"ica"}}`, encodeURIComponent(String(requestParameters['ica']))).replace(`{${"fiat_withdrawal_id"}}`, encodeURIComponent(String(requestParameters['fiatWithdrawalId']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => MTNFiatWithdrawalFromJSON(jsonValue));
    }

    /**
     * This endpoint returns details about an existing fiat withdrawal within Crypto Source.
     * Retrieves an existing fiat withdrawal.
     */
    async getFiatWithdrawal(requestParameters: GetFiatWithdrawalRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MTNFiatWithdrawal> {
        const response = await this.getFiatWithdrawalRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
