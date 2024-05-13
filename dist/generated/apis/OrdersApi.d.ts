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
import type { MTNOrder } from '../models/index';
export interface GetOrderRequest {
    ica: string;
    orderId: string;
}
export interface OrderPostRequest {
    ica: string;
    mTNOrder: Omit<MTNOrder, 'orderId' | 'status' | 'settledDate' | 'createdDate' | 'updatedDate'>;
}
/**
 *
 */
export declare class OrdersApi extends runtime.BaseAPI {
    /**
     * This endpoint allows retrieving an existing consumer order from Crypto Source. Response is expected to be encrypted.
     * Retrieve a consumer order.
     */
    getOrderRaw(requestParameters: GetOrderRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MTNOrder>>;
    /**
     * This endpoint allows retrieving an existing consumer order from Crypto Source. Response is expected to be encrypted.
     * Retrieve a consumer order.
     */
    getOrder(requestParameters: GetOrderRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MTNOrder>;
    /**
     * This endpoint allows a consumer to place a cryptocurrency order in Crypto Source. Request and response are expected to be encrypted.
     * Place a new consumer order.
     */
    orderPostRaw(requestParameters: OrderPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MTNOrder>>;
    /**
     * This endpoint allows a consumer to place a cryptocurrency order in Crypto Source. Request and response are expected to be encrypted.
     * Place a new consumer order.
     */
    orderPost(requestParameters: OrderPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MTNOrder>;
}
