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
 * Details regarding the account balance.
 * @export
 * @interface MTNAccountBalance
 */
export interface MTNAccountBalance {
    /**
     * The currency code that the account holds.
     * @type {string}
     * @memberof MTNAccountBalance
     */
    currencyCode?: string;
    /**
     * The balance of currency in the account.
     * @type {number}
     * @memberof MTNAccountBalance
     */
    readonly accountBalance?: number;
}

/**
 * Check if a given object implements the MTNAccountBalance interface.
 */
export function instanceOfMTNAccountBalance(value: object): boolean {
    return true;
}

export function MTNAccountBalanceFromJSON(json: any): MTNAccountBalance {
    return MTNAccountBalanceFromJSONTyped(json, false);
}

export function MTNAccountBalanceFromJSONTyped(json: any, ignoreDiscriminator: boolean): MTNAccountBalance {
    if (json == null) {
        return json;
    }
    return {
        
        'currencyCode': json['currencyCode'] == null ? undefined : json['currencyCode'],
        'accountBalance': json['accountBalance'] == null ? undefined : json['accountBalance'],
    };
}

export function MTNAccountBalanceToJSON(value?: Omit<MTNAccountBalance, 'accountBalance'> | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'currencyCode': value['currencyCode'],
    };
}

