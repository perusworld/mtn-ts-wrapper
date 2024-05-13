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
  MTNOrder,
} from '../models/index';
import {
    MTNErrorResponseFromJSON,
    MTNErrorResponseToJSON,
    MTNOrderFromJSON,
    MTNOrderToJSON,
} from '../models/index';

export interface GetOrderRequest {
    ica: string;
    orderId: string;
}

export interface OrderPostRequest {
    ica: string;
    mTNOrder: Omit<MTNOrder, 'orderId'|'status'|'settledDate'|'createdDate'|'updatedDate'>;
}

/**
 * 
 */
export class OrdersApi extends runtime.BaseAPI {

    /**
     * This endpoint allows retrieving an existing consumer order from Crypto Source. Response is expected to be encrypted.
     * Retrieve a consumer order.
     */
    async getOrderRaw(requestParameters: GetOrderRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MTNOrder>> {
        if (requestParameters['ica'] == null) {
            throw new runtime.RequiredError(
                'ica',
                'Required parameter "ica" was null or undefined when calling getOrder().'
            );
        }

        if (requestParameters['orderId'] == null) {
            throw new runtime.RequiredError(
                'orderId',
                'Required parameter "orderId" was null or undefined when calling getOrder().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/customers/{ica}/orders/{order_id}`.replace(`{${"ica"}}`, encodeURIComponent(String(requestParameters['ica']))).replace(`{${"order_id"}}`, encodeURIComponent(String(requestParameters['orderId']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => MTNOrderFromJSON(jsonValue));
    }

    /**
     * This endpoint allows retrieving an existing consumer order from Crypto Source. Response is expected to be encrypted.
     * Retrieve a consumer order.
     */
    async getOrder(requestParameters: GetOrderRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MTNOrder> {
        const response = await this.getOrderRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * This endpoint allows a consumer to place a cryptocurrency order in Crypto Source. Request and response are expected to be encrypted.
     * Place a new consumer order.
     */
    async orderPostRaw(requestParameters: OrderPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MTNOrder>> {
        if (requestParameters['ica'] == null) {
            throw new runtime.RequiredError(
                'ica',
                'Required parameter "ica" was null or undefined when calling orderPost().'
            );
        }

        if (requestParameters['mTNOrder'] == null) {
            throw new runtime.RequiredError(
                'mTNOrder',
                'Required parameter "mTNOrder" was null or undefined when calling orderPost().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/customers/{ica}/orders`.replace(`{${"ica"}}`, encodeURIComponent(String(requestParameters['ica']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: MTNOrderToJSON(requestParameters['mTNOrder']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => MTNOrderFromJSON(jsonValue));
    }

    /**
     * This endpoint allows a consumer to place a cryptocurrency order in Crypto Source. Request and response are expected to be encrypted.
     * Place a new consumer order.
     */
    async orderPost(requestParameters: OrderPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MTNOrder> {
        const response = await this.orderPostRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
