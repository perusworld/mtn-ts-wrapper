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
import type { MTNPayeeConfirmation } from '../models/index';
export interface CreatePayeeConfirmationRequestRequest {
    ica: string;
    mTNPayeeConfirmation: Omit<MTNPayeeConfirmation, 'requestId' | 'createdDate' | 'updatedDate'>;
}
export interface GetPayeeConfirmationDetailsRequest {
    ica: string;
    requestId: string;
}
export interface UpdatePayeeConfirmationRequestRequest {
    ica: string;
    requestId: string;
    mTNPayeeConfirmation: Omit<MTNPayeeConfirmation, 'requestId' | 'createdDate' | 'updatedDate'>;
}
/**
 *
 */
export declare class ConfirmationOfThePayeeApi extends runtime.BaseAPI {
    /**
     * This endpoint allows for creating a request to confirm payee details
     * Creates a payee confirmation request.
     */
    createPayeeConfirmationRequestRaw(requestParameters: CreatePayeeConfirmationRequestRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MTNPayeeConfirmation>>;
    /**
     * This endpoint allows for creating a request to confirm payee details
     * Creates a payee confirmation request.
     */
    createPayeeConfirmationRequest(requestParameters: CreatePayeeConfirmationRequestRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MTNPayeeConfirmation>;
    /**
     * This endpoint allows for getting payee confirmation details
     * Get a payee confirmation details.
     */
    getPayeeConfirmationDetailsRaw(requestParameters: GetPayeeConfirmationDetailsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MTNPayeeConfirmation>>;
    /**
     * This endpoint allows for getting payee confirmation details
     * Get a payee confirmation details.
     */
    getPayeeConfirmationDetails(requestParameters: GetPayeeConfirmationDetailsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MTNPayeeConfirmation>;
    /**
     * This endpoint allows to update a request to confirm the payee details.
     * Update a payee confirmation request.
     */
    updatePayeeConfirmationRequestRaw(requestParameters: UpdatePayeeConfirmationRequestRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;
    /**
     * This endpoint allows to update a request to confirm the payee details.
     * Update a payee confirmation request.
     */
    updatePayeeConfirmationRequest(requestParameters: UpdatePayeeConfirmationRequestRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;
}
