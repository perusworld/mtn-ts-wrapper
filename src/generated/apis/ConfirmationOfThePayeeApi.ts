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
  MTNErrorResponse,
  MTNPayeeConfirmation,
} from '../models/index';
import {
    MTNErrorResponseFromJSON,
    MTNErrorResponseToJSON,
    MTNPayeeConfirmationFromJSON,
    MTNPayeeConfirmationToJSON,
} from '../models/index';

export interface CreatePayeeConfirmationRequestRequest {
    ica: string;
    mTNPayeeConfirmation: Omit<MTNPayeeConfirmation, 'requestId'|'createdDate'|'updatedDate'>;
}

export interface GetPayeeConfirmationDetailsRequest {
    ica: string;
    requestId: string;
}

export interface UpdatePayeeConfirmationRequestRequest {
    ica: string;
    requestId: string;
    mTNPayeeConfirmation: Omit<MTNPayeeConfirmation, 'requestId'|'createdDate'|'updatedDate'>;
}

/**
 * 
 */
export class ConfirmationOfThePayeeApi extends runtime.BaseAPI {

    /**
     * This endpoint allows for creating a request to confirm payee details
     * Creates a payee confirmation request.
     */
    async createPayeeConfirmationRequestRaw(requestParameters: CreatePayeeConfirmationRequestRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MTNPayeeConfirmation>> {
        if (requestParameters['ica'] == null) {
            throw new runtime.RequiredError(
                'ica',
                'Required parameter "ica" was null or undefined when calling createPayeeConfirmationRequest().'
            );
        }

        if (requestParameters['mTNPayeeConfirmation'] == null) {
            throw new runtime.RequiredError(
                'mTNPayeeConfirmation',
                'Required parameter "mTNPayeeConfirmation" was null or undefined when calling createPayeeConfirmationRequest().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/customers/{ica}/payee-confirmations`.replace(`{${"ica"}}`, encodeURIComponent(String(requestParameters['ica']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: MTNPayeeConfirmationToJSON(requestParameters['mTNPayeeConfirmation']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => MTNPayeeConfirmationFromJSON(jsonValue));
    }

    /**
     * This endpoint allows for creating a request to confirm payee details
     * Creates a payee confirmation request.
     */
    async createPayeeConfirmationRequest(requestParameters: CreatePayeeConfirmationRequestRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MTNPayeeConfirmation> {
        const response = await this.createPayeeConfirmationRequestRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * This endpoint allows for getting payee confirmation details
     * Get a payee confirmation details.
     */
    async getPayeeConfirmationDetailsRaw(requestParameters: GetPayeeConfirmationDetailsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MTNPayeeConfirmation>> {
        if (requestParameters['ica'] == null) {
            throw new runtime.RequiredError(
                'ica',
                'Required parameter "ica" was null or undefined when calling getPayeeConfirmationDetails().'
            );
        }

        if (requestParameters['requestId'] == null) {
            throw new runtime.RequiredError(
                'requestId',
                'Required parameter "requestId" was null or undefined when calling getPayeeConfirmationDetails().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/customers/{ica}/payee-confirmations/{request_id}`.replace(`{${"ica"}}`, encodeURIComponent(String(requestParameters['ica']))).replace(`{${"request_id"}}`, encodeURIComponent(String(requestParameters['requestId']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => MTNPayeeConfirmationFromJSON(jsonValue));
    }

    /**
     * This endpoint allows for getting payee confirmation details
     * Get a payee confirmation details.
     */
    async getPayeeConfirmationDetails(requestParameters: GetPayeeConfirmationDetailsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MTNPayeeConfirmation> {
        const response = await this.getPayeeConfirmationDetailsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * This endpoint allows to update a request to confirm the payee details.
     * Update a payee confirmation request.
     */
    async updatePayeeConfirmationRequestRaw(requestParameters: UpdatePayeeConfirmationRequestRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['ica'] == null) {
            throw new runtime.RequiredError(
                'ica',
                'Required parameter "ica" was null or undefined when calling updatePayeeConfirmationRequest().'
            );
        }

        if (requestParameters['requestId'] == null) {
            throw new runtime.RequiredError(
                'requestId',
                'Required parameter "requestId" was null or undefined when calling updatePayeeConfirmationRequest().'
            );
        }

        if (requestParameters['mTNPayeeConfirmation'] == null) {
            throw new runtime.RequiredError(
                'mTNPayeeConfirmation',
                'Required parameter "mTNPayeeConfirmation" was null or undefined when calling updatePayeeConfirmationRequest().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/customers/{ica}/payee-confirmations/{request_id}`.replace(`{${"ica"}}`, encodeURIComponent(String(requestParameters['ica']))).replace(`{${"request_id"}}`, encodeURIComponent(String(requestParameters['requestId']))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: MTNPayeeConfirmationToJSON(requestParameters['mTNPayeeConfirmation']),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * This endpoint allows to update a request to confirm the payee details.
     * Update a payee confirmation request.
     */
    async updatePayeeConfirmationRequest(requestParameters: UpdatePayeeConfirmationRequestRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.updatePayeeConfirmationRequestRaw(requestParameters, initOverrides);
    }

}
