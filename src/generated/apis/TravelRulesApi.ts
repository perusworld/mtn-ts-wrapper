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
  MTNBeneficiaryInformation,
  MTNErrorResponse,
  MTNOriginatorInformation,
} from '../models/index';
import {
    MTNBeneficiaryInformationFromJSON,
    MTNBeneficiaryInformationToJSON,
    MTNErrorResponseFromJSON,
    MTNErrorResponseToJSON,
    MTNOriginatorInformationFromJSON,
    MTNOriginatorInformationToJSON,
} from '../models/index';

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
export class TravelRulesApi extends runtime.BaseAPI {

    /**
     * This endpoint allows you to provide beneficiary information required as per travel rules. Request is expected to be encrypted.
     * Provide beneficiary information required as per travel rules.
     */
    async putBeneficiaryDetailsRaw(requestParameters: PutBeneficiaryDetailsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['ica'] == null) {
            throw new runtime.RequiredError(
                'ica',
                'Required parameter "ica" was null or undefined when calling putBeneficiaryDetails().'
            );
        }

        if (requestParameters['travelRuleTransferId'] == null) {
            throw new runtime.RequiredError(
                'travelRuleTransferId',
                'Required parameter "travelRuleTransferId" was null or undefined when calling putBeneficiaryDetails().'
            );
        }

        if (requestParameters['mTNBeneficiaryInformation'] == null) {
            throw new runtime.RequiredError(
                'mTNBeneficiaryInformation',
                'Required parameter "mTNBeneficiaryInformation" was null or undefined when calling putBeneficiaryDetails().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/customers/{ica}/travel-rule-transfers/{travel_rule_transfer_id}/beneficiary-details`.replace(`{${"ica"}}`, encodeURIComponent(String(requestParameters['ica']))).replace(`{${"travel_rule_transfer_id"}}`, encodeURIComponent(String(requestParameters['travelRuleTransferId']))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: MTNBeneficiaryInformationToJSON(requestParameters['mTNBeneficiaryInformation']),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * This endpoint allows you to provide beneficiary information required as per travel rules. Request is expected to be encrypted.
     * Provide beneficiary information required as per travel rules.
     */
    async putBeneficiaryDetails(requestParameters: PutBeneficiaryDetailsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.putBeneficiaryDetailsRaw(requestParameters, initOverrides);
    }

    /**
     * This endpoint allows you to provide originator information required as per travel rules. Request is expected to be encrypted.
     * Provide originator information required as per travel rules.
     */
    async putOriginatorDetailsRaw(requestParameters: PutOriginatorDetailsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['ica'] == null) {
            throw new runtime.RequiredError(
                'ica',
                'Required parameter "ica" was null or undefined when calling putOriginatorDetails().'
            );
        }

        if (requestParameters['travelRuleTransferId'] == null) {
            throw new runtime.RequiredError(
                'travelRuleTransferId',
                'Required parameter "travelRuleTransferId" was null or undefined when calling putOriginatorDetails().'
            );
        }

        if (requestParameters['mTNOriginatorInformation'] == null) {
            throw new runtime.RequiredError(
                'mTNOriginatorInformation',
                'Required parameter "mTNOriginatorInformation" was null or undefined when calling putOriginatorDetails().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/customers/{ica}/travel-rule-transfers/{travel_rule_transfer_id}/originator-details`.replace(`{${"ica"}}`, encodeURIComponent(String(requestParameters['ica']))).replace(`{${"travel_rule_transfer_id"}}`, encodeURIComponent(String(requestParameters['travelRuleTransferId']))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: MTNOriginatorInformationToJSON(requestParameters['mTNOriginatorInformation']),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * This endpoint allows you to provide originator information required as per travel rules. Request is expected to be encrypted.
     * Provide originator information required as per travel rules.
     */
    async putOriginatorDetails(requestParameters: PutOriginatorDetailsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.putOriginatorDetailsRaw(requestParameters, initOverrides);
    }

}
