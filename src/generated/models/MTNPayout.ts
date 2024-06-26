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
 * A Payout for a release of an Earmark
 * @export
 * @interface MTNPayout
 */
export interface MTNPayout {
    /**
     * Consumer account identifier.
     * @type {string}
     * @memberof MTNPayout
     */
    accountAlias?: string;
    /**
     * The amount of asset.
     * @type {number}
     * @memberof MTNPayout
     */
    amount?: number;
    /**
     * This amount of asset.
     * @type {number}
     * @memberof MTNPayout
     */
    percentage?: number;
}

/**
 * Check if a given object implements the MTNPayout interface.
 */
export function instanceOfMTNPayout(value: object): boolean {
    return true;
}

export function MTNPayoutFromJSON(json: any): MTNPayout {
    return MTNPayoutFromJSONTyped(json, false);
}

export function MTNPayoutFromJSONTyped(json: any, ignoreDiscriminator: boolean): MTNPayout {
    if (json == null) {
        return json;
    }
    return {
        
        'accountAlias': json['accountAlias'] == null ? undefined : json['accountAlias'],
        'amount': json['amount'] == null ? undefined : json['amount'],
        'percentage': json['percentage'] == null ? undefined : json['percentage'],
    };
}

export function MTNPayoutToJSON(value?: MTNPayout | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'accountAlias': value['accountAlias'],
        'amount': value['amount'],
        'percentage': value['percentage'],
    };
}

