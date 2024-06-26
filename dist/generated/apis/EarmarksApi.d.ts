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
import type { MTNEarmark, MTNEarmarks, MTNPayer } from '../models/index';
export interface EarmarkSearchRequest {
    ica: string;
    offset?: number;
    limit?: number;
    status?: string;
    sort?: string;
}
export interface GetEarmarkRequest {
    ica: string;
    earmarkId: string;
}
export interface PostEarmarkRequest {
    ica: string;
    mTNEarmark: Omit<MTNEarmark, 'earmarkId' | 'status' | 'expiryDate' | 'executionDate' | 'createdDate' | 'lastUpdatedDate' | 'createdBy' | 'lastUpdatedBy'>;
}
export interface UpdateEarmarkRequest {
    ica: string;
    earmarkId: string;
    mTNEarmark: Omit<MTNEarmark, 'earmarkId' | 'status' | 'expiryDate' | 'executionDate' | 'createdDate' | 'lastUpdatedDate' | 'createdBy' | 'lastUpdatedBy'>;
}
export interface UpdateEarmarkForCancelRequest {
    ica: string;
    earmarkId: string;
    mTNEarmark: Omit<MTNEarmark, 'earmarkId' | 'status' | 'expiryDate' | 'executionDate' | 'createdDate' | 'lastUpdatedDate' | 'createdBy' | 'lastUpdatedBy'>;
}
export interface UpdateEarmarkForDepositsRequest {
    ica: string;
    earmarkId: string;
    mTNPayer: MTNPayer;
}
export interface UpdateEarmarkForReleaseRequest {
    ica: string;
    earmarkId: string;
    mTNEarmark: Omit<MTNEarmark, 'earmarkId' | 'status' | 'expiryDate' | 'executionDate' | 'createdDate' | 'lastUpdatedDate' | 'createdBy' | 'lastUpdatedBy'>;
}
/**
 *
 */
export declare class EarmarksApi extends runtime.BaseAPI {
    /**
     * This endpoint allows for retrieving details on existing earmarks from Crypto Source. The response is expected to be encrypted.
     * Retrieve earmarks details
     */
    earmarkSearchRaw(requestParameters: EarmarkSearchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MTNEarmarks>>;
    /**
     * This endpoint allows for retrieving details on existing earmarks from Crypto Source. The response is expected to be encrypted.
     * Retrieve earmarks details
     */
    earmarkSearch(requestParameters: EarmarkSearchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MTNEarmarks>;
    /**
     * This endpoint allows for retrieving details of an earmark by using EarmarkId. The response is expected to be encrypted.
     * Retrieve an earmark by using earmarkId
     */
    getEarmarkRaw(requestParameters: GetEarmarkRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MTNEarmark>>;
    /**
     * This endpoint allows for retrieving details of an earmark by using EarmarkId. The response is expected to be encrypted.
     * Retrieve an earmark by using earmarkId
     */
    getEarmark(requestParameters: GetEarmarkRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MTNEarmark>;
    /**
     * This endpoint allows for creating an earmark. Request and response are expected to be encrypted.
     * Creates an Earmark request
     */
    postEarmarkRaw(requestParameters: PostEarmarkRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MTNEarmark>>;
    /**
     * This endpoint allows for creating an earmark. Request and response are expected to be encrypted.
     * Creates an Earmark request
     */
    postEarmark(requestParameters: PostEarmarkRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MTNEarmark>;
    /**
     * Endpoint to update an earmark. Request is expected to be encrypted.
     * Update an earmark
     */
    updateEarmarkRaw(requestParameters: UpdateEarmarkRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;
    /**
     * Endpoint to update an earmark. Request is expected to be encrypted.
     * Update an earmark
     */
    updateEarmark(requestParameters: UpdateEarmarkRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;
    /**
     * This endpoint allows you to cancel an earmark with a status reason and a status description. Request is expected to be encrypted.
     * Request to cancel an earmark
     */
    updateEarmarkForCancelRaw(requestParameters: UpdateEarmarkForCancelRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;
    /**
     * This endpoint allows you to cancel an earmark with a status reason and a status description. Request is expected to be encrypted.
     * Request to cancel an earmark
     */
    updateEarmarkForCancel(requestParameters: UpdateEarmarkForCancelRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;
    /**
     * Endpoint to update deposit with payer\'s account alias and request amount. Request is expected to be encrypted.
     * Deposit funds for an Earmark.
     */
    updateEarmarkForDepositsRaw(requestParameters: UpdateEarmarkForDepositsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;
    /**
     * Endpoint to update deposit with payer\'s account alias and request amount. Request is expected to be encrypted.
     * Deposit funds for an Earmark.
     */
    updateEarmarkForDeposits(requestParameters: UpdateEarmarkForDepositsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;
    /**
     * This endpoint allows you to release an earmark by providing reason code and description. Request is expected to be encrypted.
     * Request to release funds for an earmark
     */
    updateEarmarkForReleaseRaw(requestParameters: UpdateEarmarkForReleaseRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;
    /**
     * This endpoint allows you to release an earmark by providing reason code and description. Request is expected to be encrypted.
     * Request to release funds for an earmark
     */
    updateEarmarkForRelease(requestParameters: UpdateEarmarkForReleaseRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;
}
