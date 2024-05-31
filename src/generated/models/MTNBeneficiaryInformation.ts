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

import { mapValues } from '../runtime';
import type { MTNConsumerTravelTransferBeneficiary } from './MTNConsumerTravelTransferBeneficiary';
import {
    MTNConsumerTravelTransferBeneficiaryFromJSON,
    MTNConsumerTravelTransferBeneficiaryFromJSONTyped,
    MTNConsumerTravelTransferBeneficiaryToJSON,
} from './MTNConsumerTravelTransferBeneficiary';
import type { MTNVasp } from './MTNVasp';
import {
    MTNVaspFromJSON,
    MTNVaspFromJSONTyped,
    MTNVaspToJSON,
} from './MTNVasp';

/**
 * Beneficiary information.
 * @export
 * @interface MTNBeneficiaryInformation
 */
export interface MTNBeneficiaryInformation {
    /**
     * 
     * @type {MTNConsumerTravelTransferBeneficiary}
     * @memberof MTNBeneficiaryInformation
     */
    beneficiary?: MTNConsumerTravelTransferBeneficiary;
    /**
     * 
     * @type {MTNVasp}
     * @memberof MTNBeneficiaryInformation
     */
    beneficiaryVasp?: MTNVasp;
}

/**
 * Check if a given object implements the MTNBeneficiaryInformation interface.
 */
export function instanceOfMTNBeneficiaryInformation(value: object): boolean {
    return true;
}

export function MTNBeneficiaryInformationFromJSON(json: any): MTNBeneficiaryInformation {
    return MTNBeneficiaryInformationFromJSONTyped(json, false);
}

export function MTNBeneficiaryInformationFromJSONTyped(json: any, ignoreDiscriminator: boolean): MTNBeneficiaryInformation {
    if (json == null) {
        return json;
    }
    return {
        
        'beneficiary': json['beneficiary'] == null ? undefined : MTNConsumerTravelTransferBeneficiaryFromJSON(json['beneficiary']),
        'beneficiaryVasp': json['beneficiaryVasp'] == null ? undefined : MTNVaspFromJSON(json['beneficiaryVasp']),
    };
}

export function MTNBeneficiaryInformationToJSON(value?: MTNBeneficiaryInformation | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'beneficiary': MTNConsumerTravelTransferBeneficiaryToJSON(value['beneficiary']),
        'beneficiaryVasp': MTNVaspToJSON(value['beneficiaryVasp']),
    };
}

