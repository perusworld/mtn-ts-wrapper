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


import * as runtime from '../runtime';
import type {
  MTNErrorResponse,
  MTNTokenizedBurnOperation,
  MTNTokenizedBurnOperationInformation,
  MTNTokenizedDepositBalance,
  MTNTokenizedDepositOperationInformation,
  MTNTokenizedMintOperation,
  MTNTokenizedMintOperationInformation,
  MTNTokenizedTransferOperation,
  MTNTokenizedTransferOperationInformation,
  MTNTotalTokenSupply,
} from '../models/index';
import {
    MTNErrorResponseFromJSON,
    MTNErrorResponseToJSON,
    MTNTokenizedBurnOperationFromJSON,
    MTNTokenizedBurnOperationToJSON,
    MTNTokenizedBurnOperationInformationFromJSON,
    MTNTokenizedBurnOperationInformationToJSON,
    MTNTokenizedDepositBalanceFromJSON,
    MTNTokenizedDepositBalanceToJSON,
    MTNTokenizedDepositOperationInformationFromJSON,
    MTNTokenizedDepositOperationInformationToJSON,
    MTNTokenizedMintOperationFromJSON,
    MTNTokenizedMintOperationToJSON,
    MTNTokenizedMintOperationInformationFromJSON,
    MTNTokenizedMintOperationInformationToJSON,
    MTNTokenizedTransferOperationFromJSON,
    MTNTokenizedTransferOperationToJSON,
    MTNTokenizedTransferOperationInformationFromJSON,
    MTNTokenizedTransferOperationInformationToJSON,
    MTNTotalTokenSupplyFromJSON,
    MTNTotalTokenSupplyToJSON,
} from '../models/index';

export interface GetTokenBalancesRequest {
    ica: string;
    currency: string;
    mTNTokenizedDepositBalance: Omit<MTNTokenizedDepositBalance, 'balance'>;
}

export interface GetTokenOperationRequest {
    ica: string;
    operationId: string;
}

export interface GetTotalSupplyRequest {
    ica: string;
    currency: string;
    mTNTotalTokenSupply: Omit<MTNTotalTokenSupply, 'balance'>;
}

export interface SubmitBurnOperationRequest {
    ica: string;
    currency: string;
    idempotencyKey: string;
    mTNTokenizedBurnOperation: MTNTokenizedBurnOperation;
}

export interface SubmitMintOperationRequest {
    ica: string;
    currency: string;
    idempotencyKey: string;
    mTNTokenizedMintOperation: MTNTokenizedMintOperation;
}

export interface SubmitTransferOperationRequest {
    ica: string;
    currency: string;
    idempotencyKey: string;
    mTNTokenizedTransferOperation: MTNTokenizedTransferOperation;
}

/**
 * 
 */
export class TokenizedDepositsManagementApi extends runtime.BaseAPI {

    /**
     * This endpoint allows a consumer to retrieve the token balance for any crypto address. Request is expected to be encrypted.
     * Retrieve token balance.
     */
    async getTokenBalancesRaw(requestParameters: GetTokenBalancesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MTNTokenizedDepositBalance>> {
        if (requestParameters['ica'] == null) {
            throw new runtime.RequiredError(
                'ica',
                'Required parameter "ica" was null or undefined when calling getTokenBalances().'
            );
        }

        if (requestParameters['currency'] == null) {
            throw new runtime.RequiredError(
                'currency',
                'Required parameter "currency" was null or undefined when calling getTokenBalances().'
            );
        }

        if (requestParameters['mTNTokenizedDepositBalance'] == null) {
            throw new runtime.RequiredError(
                'mTNTokenizedDepositBalance',
                'Required parameter "mTNTokenizedDepositBalance" was null or undefined when calling getTokenBalances().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/customers/{ica}/tokenized-deposits/{currency}/token-balances`.replace(`{${"ica"}}`, encodeURIComponent(String(requestParameters['ica']))).replace(`{${"currency"}}`, encodeURIComponent(String(requestParameters['currency']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: MTNTokenizedDepositBalanceToJSON(requestParameters['mTNTokenizedDepositBalance']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => MTNTokenizedDepositBalanceFromJSON(jsonValue));
    }

    /**
     * This endpoint allows a consumer to retrieve the token balance for any crypto address. Request is expected to be encrypted.
     * Retrieve token balance.
     */
    async getTokenBalances(requestParameters: GetTokenBalancesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MTNTokenizedDepositBalance> {
        const response = await this.getTokenBalancesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * This endpoint allows a consumer to retrieve details of a tokenized deposits operation. Response is expected to be encrypted.
     * Retrieve details of tokenized deposits operation.
     */
    async getTokenOperationRaw(requestParameters: GetTokenOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MTNTokenizedDepositOperationInformation>> {
        if (requestParameters['ica'] == null) {
            throw new runtime.RequiredError(
                'ica',
                'Required parameter "ica" was null or undefined when calling getTokenOperation().'
            );
        }

        if (requestParameters['operationId'] == null) {
            throw new runtime.RequiredError(
                'operationId',
                'Required parameter "operationId" was null or undefined when calling getTokenOperation().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/customers/{ica}/tokenized-deposits/{operation_id}`.replace(`{${"ica"}}`, encodeURIComponent(String(requestParameters['ica']))).replace(`{${"operation_id"}}`, encodeURIComponent(String(requestParameters['operationId']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => MTNTokenizedDepositOperationInformationFromJSON(jsonValue));
    }

    /**
     * This endpoint allows a consumer to retrieve details of a tokenized deposits operation. Response is expected to be encrypted.
     * Retrieve details of tokenized deposits operation.
     */
    async getTokenOperation(requestParameters: GetTokenOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MTNTokenizedDepositOperationInformation> {
        const response = await this.getTokenOperationRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * This endpoint allows a consumer to retrieve the total supply of tokens. Request is expected to be encrypted.
     * Retrieve total supply of tokens.
     */
    async getTotalSupplyRaw(requestParameters: GetTotalSupplyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MTNTotalTokenSupply>> {
        if (requestParameters['ica'] == null) {
            throw new runtime.RequiredError(
                'ica',
                'Required parameter "ica" was null or undefined when calling getTotalSupply().'
            );
        }

        if (requestParameters['currency'] == null) {
            throw new runtime.RequiredError(
                'currency',
                'Required parameter "currency" was null or undefined when calling getTotalSupply().'
            );
        }

        if (requestParameters['mTNTotalTokenSupply'] == null) {
            throw new runtime.RequiredError(
                'mTNTotalTokenSupply',
                'Required parameter "mTNTotalTokenSupply" was null or undefined when calling getTotalSupply().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/customers/{ica}/tokenized-deposits/{currency}/total-supplies`.replace(`{${"ica"}}`, encodeURIComponent(String(requestParameters['ica']))).replace(`{${"currency"}}`, encodeURIComponent(String(requestParameters['currency']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: MTNTotalTokenSupplyToJSON(requestParameters['mTNTotalTokenSupply']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => MTNTotalTokenSupplyFromJSON(jsonValue));
    }

    /**
     * This endpoint allows a consumer to retrieve the total supply of tokens. Request is expected to be encrypted.
     * Retrieve total supply of tokens.
     */
    async getTotalSupply(requestParameters: GetTotalSupplyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MTNTotalTokenSupply> {
        const response = await this.getTotalSupplyRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * This endpoint allows a consumer to submit a tokenized deposits burn operation. Request and response are expected to be encrypted.
     * Submit a tokenized deposits burn operation.
     */
    async submitBurnOperationRaw(requestParameters: SubmitBurnOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MTNTokenizedBurnOperationInformation>> {
        if (requestParameters['ica'] == null) {
            throw new runtime.RequiredError(
                'ica',
                'Required parameter "ica" was null or undefined when calling submitBurnOperation().'
            );
        }

        if (requestParameters['currency'] == null) {
            throw new runtime.RequiredError(
                'currency',
                'Required parameter "currency" was null or undefined when calling submitBurnOperation().'
            );
        }

        if (requestParameters['idempotencyKey'] == null) {
            throw new runtime.RequiredError(
                'idempotencyKey',
                'Required parameter "idempotencyKey" was null or undefined when calling submitBurnOperation().'
            );
        }

        if (requestParameters['mTNTokenizedBurnOperation'] == null) {
            throw new runtime.RequiredError(
                'mTNTokenizedBurnOperation',
                'Required parameter "mTNTokenizedBurnOperation" was null or undefined when calling submitBurnOperation().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (requestParameters['idempotencyKey'] != null) {
            headerParameters['Idempotency-Key'] = String(requestParameters['idempotencyKey']);
        }

        const response = await this.request({
            path: `/customers/{ica}/tokenized-deposits/{currency}/burns`.replace(`{${"ica"}}`, encodeURIComponent(String(requestParameters['ica']))).replace(`{${"currency"}}`, encodeURIComponent(String(requestParameters['currency']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: MTNTokenizedBurnOperationToJSON(requestParameters['mTNTokenizedBurnOperation']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => MTNTokenizedBurnOperationInformationFromJSON(jsonValue));
    }

    /**
     * This endpoint allows a consumer to submit a tokenized deposits burn operation. Request and response are expected to be encrypted.
     * Submit a tokenized deposits burn operation.
     */
    async submitBurnOperation(requestParameters: SubmitBurnOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MTNTokenizedBurnOperationInformation> {
        const response = await this.submitBurnOperationRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * This endpoint allows a consumer to submit a tokenized deposits mint operation. Request and response are expected to be encrypted.
     * Submit a tokenized deposits mint operation.
     */
    async submitMintOperationRaw(requestParameters: SubmitMintOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MTNTokenizedMintOperationInformation>> {
        if (requestParameters['ica'] == null) {
            throw new runtime.RequiredError(
                'ica',
                'Required parameter "ica" was null or undefined when calling submitMintOperation().'
            );
        }

        if (requestParameters['currency'] == null) {
            throw new runtime.RequiredError(
                'currency',
                'Required parameter "currency" was null or undefined when calling submitMintOperation().'
            );
        }

        if (requestParameters['idempotencyKey'] == null) {
            throw new runtime.RequiredError(
                'idempotencyKey',
                'Required parameter "idempotencyKey" was null or undefined when calling submitMintOperation().'
            );
        }

        if (requestParameters['mTNTokenizedMintOperation'] == null) {
            throw new runtime.RequiredError(
                'mTNTokenizedMintOperation',
                'Required parameter "mTNTokenizedMintOperation" was null or undefined when calling submitMintOperation().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (requestParameters['idempotencyKey'] != null) {
            headerParameters['Idempotency-Key'] = String(requestParameters['idempotencyKey']);
        }

        const response = await this.request({
            path: `/customers/{ica}/tokenized-deposits/{currency}/mints`.replace(`{${"ica"}}`, encodeURIComponent(String(requestParameters['ica']))).replace(`{${"currency"}}`, encodeURIComponent(String(requestParameters['currency']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: MTNTokenizedMintOperationToJSON(requestParameters['mTNTokenizedMintOperation']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => MTNTokenizedMintOperationInformationFromJSON(jsonValue));
    }

    /**
     * This endpoint allows a consumer to submit a tokenized deposits mint operation. Request and response are expected to be encrypted.
     * Submit a tokenized deposits mint operation.
     */
    async submitMintOperation(requestParameters: SubmitMintOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MTNTokenizedMintOperationInformation> {
        const response = await this.submitMintOperationRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * This endpoint allows a consumer to submit a tokenized deposits transfer operation. Request and response are expected to be encrypted.
     * Submit a tokenized deposits transfer operation.
     */
    async submitTransferOperationRaw(requestParameters: SubmitTransferOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MTNTokenizedTransferOperationInformation>> {
        if (requestParameters['ica'] == null) {
            throw new runtime.RequiredError(
                'ica',
                'Required parameter "ica" was null or undefined when calling submitTransferOperation().'
            );
        }

        if (requestParameters['currency'] == null) {
            throw new runtime.RequiredError(
                'currency',
                'Required parameter "currency" was null or undefined when calling submitTransferOperation().'
            );
        }

        if (requestParameters['idempotencyKey'] == null) {
            throw new runtime.RequiredError(
                'idempotencyKey',
                'Required parameter "idempotencyKey" was null or undefined when calling submitTransferOperation().'
            );
        }

        if (requestParameters['mTNTokenizedTransferOperation'] == null) {
            throw new runtime.RequiredError(
                'mTNTokenizedTransferOperation',
                'Required parameter "mTNTokenizedTransferOperation" was null or undefined when calling submitTransferOperation().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (requestParameters['idempotencyKey'] != null) {
            headerParameters['Idempotency-Key'] = String(requestParameters['idempotencyKey']);
        }

        const response = await this.request({
            path: `/customers/{ica}/tokenized-deposits/{currency}/transfers`.replace(`{${"ica"}}`, encodeURIComponent(String(requestParameters['ica']))).replace(`{${"currency"}}`, encodeURIComponent(String(requestParameters['currency']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: MTNTokenizedTransferOperationToJSON(requestParameters['mTNTokenizedTransferOperation']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => MTNTokenizedTransferOperationInformationFromJSON(jsonValue));
    }

    /**
     * This endpoint allows a consumer to submit a tokenized deposits transfer operation. Request and response are expected to be encrypted.
     * Submit a tokenized deposits transfer operation.
     */
    async submitTransferOperation(requestParameters: SubmitTransferOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MTNTokenizedTransferOperationInformation> {
        const response = await this.submitTransferOperationRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
