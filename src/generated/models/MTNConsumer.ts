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
import type { MTNCryptoAddressRiskScore } from './MTNCryptoAddressRiskScore';
import {
    MTNCryptoAddressRiskScoreFromJSON,
    MTNCryptoAddressRiskScoreFromJSONTyped,
    MTNCryptoAddressRiskScoreToJSON,
} from './MTNCryptoAddressRiskScore';

/**
 * A Consumer. Typically an user of a Bank.
 * @export
 * @interface MTNConsumer
 */
export interface MTNConsumer {
    /**
     * Consumer account identifier.
     * @type {string}
     * @memberof MTNConsumer
     */
    accountAlias?: string;
    /**
     * 
     * @type {MTNCryptoAddressRiskScore}
     * @memberof MTNConsumer
     */
    cryptoAddress?: MTNCryptoAddressRiskScore;
    /**
     * The type of wallet associated with an account alias
     * @type {string}
     * @memberof MTNConsumer
     */
    walletType?: string;
}

/**
 * Check if a given object implements the MTNConsumer interface.
 */
export function instanceOfMTNConsumer(value: object): boolean {
    return true;
}

export function MTNConsumerFromJSON(json: any): MTNConsumer {
    return MTNConsumerFromJSONTyped(json, false);
}

export function MTNConsumerFromJSONTyped(json: any, ignoreDiscriminator: boolean): MTNConsumer {
    if (json == null) {
        return json;
    }
    return {
        
        'accountAlias': json['accountAlias'] == null ? undefined : json['accountAlias'],
        'cryptoAddress': json['cryptoAddress'] == null ? undefined : MTNCryptoAddressRiskScoreFromJSON(json['cryptoAddress']),
        'walletType': json['walletType'] == null ? undefined : json['walletType'],
    };
}

export function MTNConsumerToJSON(value?: MTNConsumer | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'accountAlias': value['accountAlias'],
        'cryptoAddress': MTNCryptoAddressRiskScoreToJSON(value['cryptoAddress']),
        'walletType': value['walletType'],
    };
}

