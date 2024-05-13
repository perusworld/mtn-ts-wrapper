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
import type { MTNBeneficiaryInformation, MTNOriginatorInformation } from '../models/index';
export interface PutBeneficiaryDetailsRequest {
    ica: string;
    travelRuleTransferId: string;
    mTNBeneficiaryInformation: MTNBeneficiaryInformation;
}
export interface PutOriginatorDetailsRequest {
    ica: string;
    travelRuleTransferId: string;
    mTNOriginatorInformation: MTNOriginatorInformation;
}
/**
 *
 */
export declare class TravelRulesApi extends runtime.BaseAPI {
    /**
     * This endpoint allows you to provide beneficiary information required as per travel rules. Request is expected to be encrypted.
     * Provide beneficiary information required as per travel rules.
     */
    putBeneficiaryDetailsRaw(requestParameters: PutBeneficiaryDetailsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;
    /**
     * This endpoint allows you to provide beneficiary information required as per travel rules. Request is expected to be encrypted.
     * Provide beneficiary information required as per travel rules.
     */
    putBeneficiaryDetails(requestParameters: PutBeneficiaryDetailsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;
    /**
     * This endpoint allows you to provide originator information required as per travel rules. Request is expected to be encrypted.
     * Provide originator information required as per travel rules.
     */
    putOriginatorDetailsRaw(requestParameters: PutOriginatorDetailsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;
    /**
     * This endpoint allows you to provide originator information required as per travel rules. Request is expected to be encrypted.
     * Provide originator information required as per travel rules.
     */
    putOriginatorDetails(requestParameters: PutOriginatorDetailsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;
}
