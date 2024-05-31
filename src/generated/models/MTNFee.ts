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
/**
 * 
 * @export
 * @interface MTNFee
 */
export interface MTNFee {
    /**
     * The amount of the fee as part of the fiat withdrawal. The maximum precision is 8 decimals.
     * @type {number}
     * @memberof MTNFee
     */
    amount?: number;
    /**
     * The base currency for any fiat withdrawal.
     * @type {string}
     * @memberof MTNFee
     */
    currency?: string;
}

/**
 * Check if a given object implements the MTNFee interface.
 */
export function instanceOfMTNFee(value: object): boolean {
    return true;
}

export function MTNFeeFromJSON(json: any): MTNFee {
    return MTNFeeFromJSONTyped(json, false);
}

export function MTNFeeFromJSONTyped(json: any, ignoreDiscriminator: boolean): MTNFee {
    if (json == null) {
        return json;
    }
    return {
        
        'amount': json['amount'] == null ? undefined : json['amount'],
        'currency': json['currency'] == null ? undefined : json['currency'],
    };
}

export function MTNFeeToJSON(value?: MTNFee | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'amount': value['amount'],
        'currency': value['currency'],
    };
}

