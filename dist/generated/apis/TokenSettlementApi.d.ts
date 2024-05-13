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
import type { MTNSettlementAdvisement } from '../models/index';
export interface GetSettlementAdvisementRequest {
    ica: string;
}
/**
 *
 */
export declare class TokenSettlementApi extends runtime.BaseAPI {
    /**
     * This endpoint will return the current total amount of obligations and claims grouped by currency for the caller customer ica.
     * Get Settlement Advisement.
     */
    getSettlementAdvisementRaw(requestParameters: GetSettlementAdvisementRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MTNSettlementAdvisement>>;
    /**
     * This endpoint will return the current total amount of obligations and claims grouped by currency for the caller customer ica.
     * Get Settlement Advisement.
     */
    getSettlementAdvisement(requestParameters: GetSettlementAdvisementRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MTNSettlementAdvisement>;
}
