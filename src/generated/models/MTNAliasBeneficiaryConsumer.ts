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

import { mapValues } from '../runtime';
import type { MTNCryptoAddressRiskScore } from './MTNCryptoAddressRiskScore';
import {
    MTNCryptoAddressRiskScoreFromJSON,
    MTNCryptoAddressRiskScoreFromJSONTyped,
    MTNCryptoAddressRiskScoreToJSON,
} from './MTNCryptoAddressRiskScore';

/**
 * A Beneficiary Consumer
 * @export
 * @interface MTNAliasBeneficiaryConsumer
 */
export interface MTNAliasBeneficiaryConsumer {
    /**
     * The VASP name.
     * @type {string}
     * @memberof MTNAliasBeneficiaryConsumer
     */
    vaspName?: string;
    /**
     * Consumer account identifier.
     * @type {string}
     * @memberof MTNAliasBeneficiaryConsumer
     */
    accountAlias?: string;
    /**
     * 
     * @type {MTNCryptoAddressRiskScore}
     * @memberof MTNAliasBeneficiaryConsumer
     */
    cryptoAddress?: MTNCryptoAddressRiskScore;
}

/**
 * Check if a given object implements the MTNAliasBeneficiaryConsumer interface.
 */
export function instanceOfMTNAliasBeneficiaryConsumer(value: object): boolean {
    return true;
}

export function MTNAliasBeneficiaryConsumerFromJSON(json: any): MTNAliasBeneficiaryConsumer {
    return MTNAliasBeneficiaryConsumerFromJSONTyped(json, false);
}

export function MTNAliasBeneficiaryConsumerFromJSONTyped(json: any, ignoreDiscriminator: boolean): MTNAliasBeneficiaryConsumer {
    if (json == null) {
        return json;
    }
    return {
        
        'vaspName': json['vaspName'] == null ? undefined : json['vaspName'],
        'accountAlias': json['accountAlias'] == null ? undefined : json['accountAlias'],
        'cryptoAddress': json['cryptoAddress'] == null ? undefined : MTNCryptoAddressRiskScoreFromJSON(json['cryptoAddress']),
    };
}

export function MTNAliasBeneficiaryConsumerToJSON(value?: MTNAliasBeneficiaryConsumer | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'vaspName': value['vaspName'],
        'accountAlias': value['accountAlias'],
        'cryptoAddress': MTNCryptoAddressRiskScoreToJSON(value['cryptoAddress']),
    };
}
