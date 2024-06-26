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
import type { MTNPerson } from './MTNPerson';
import {
    MTNPersonFromJSON,
    MTNPersonFromJSONTyped,
    MTNPersonToJSON,
} from './MTNPerson';

/**
 * 
 * @export
 * @interface MTNConsumerTravelTransferBeneficiary
 */
export interface MTNConsumerTravelTransferBeneficiary {
    /**
     * 
     * @type {Array<MTNPerson>}
     * @memberof MTNConsumerTravelTransferBeneficiary
     */
    beneficiaryPersons?: Array<MTNPerson>;
    /**
     * 
     * @type {Array<string>}
     * @memberof MTNConsumerTravelTransferBeneficiary
     */
    accountNumbers?: Array<string>;
}

/**
 * Check if a given object implements the MTNConsumerTravelTransferBeneficiary interface.
 */
export function instanceOfMTNConsumerTravelTransferBeneficiary(value: object): boolean {
    return true;
}

export function MTNConsumerTravelTransferBeneficiaryFromJSON(json: any): MTNConsumerTravelTransferBeneficiary {
    return MTNConsumerTravelTransferBeneficiaryFromJSONTyped(json, false);
}

export function MTNConsumerTravelTransferBeneficiaryFromJSONTyped(json: any, ignoreDiscriminator: boolean): MTNConsumerTravelTransferBeneficiary {
    if (json == null) {
        return json;
    }
    return {
        
        'beneficiaryPersons': json['beneficiaryPersons'] == null ? undefined : ((json['beneficiaryPersons'] as Array<any>).map(MTNPersonFromJSON)),
        'accountNumbers': json['accountNumbers'] == null ? undefined : json['accountNumbers'],
    };
}

export function MTNConsumerTravelTransferBeneficiaryToJSON(value?: MTNConsumerTravelTransferBeneficiary | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'beneficiaryPersons': value['beneficiaryPersons'] == null ? undefined : ((value['beneficiaryPersons'] as Array<any>).map(MTNPersonToJSON)),
        'accountNumbers': value['accountNumbers'],
    };
}

