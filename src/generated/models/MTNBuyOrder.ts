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
 * A buy Order made with an Account
 * @export
 * @interface MTNBuyOrder
 */
export interface MTNBuyOrder {
    /**
     * An Asset that can be hold in an account.
     * @type {string}
     * @memberof MTNBuyOrder
     */
    asset?: string;
    /**
     * The base currency for any order.
     * @type {string}
     * @memberof MTNBuyOrder
     */
    currency?: string;
    /**
     * The amount of the asset (fiat) to spend or acquire using the specified amount. The maximum precision is 2 decimals.
     * @type {number}
     * @memberof MTNBuyOrder
     */
    amount?: number;
    /**
     * An amount of asset to sell. The maximum precision is 8 decimals.
     * @type {number}
     * @memberof MTNBuyOrder
     */
    readonly quantity?: number;
    /**
     * The guaranteed price of the quote.
     * @type {number}
     * @memberof MTNBuyOrder
     */
    readonly price?: number;
}

/**
 * Check if a given object implements the MTNBuyOrder interface.
 */
export function instanceOfMTNBuyOrder(value: object): boolean {
    return true;
}

export function MTNBuyOrderFromJSON(json: any): MTNBuyOrder {
    return MTNBuyOrderFromJSONTyped(json, false);
}

export function MTNBuyOrderFromJSONTyped(json: any, ignoreDiscriminator: boolean): MTNBuyOrder {
    if (json == null) {
        return json;
    }
    return {
        
        'asset': json['asset'] == null ? undefined : json['asset'],
        'currency': json['currency'] == null ? undefined : json['currency'],
        'amount': json['amount'] == null ? undefined : json['amount'],
        'quantity': json['quantity'] == null ? undefined : json['quantity'],
        'price': json['price'] == null ? undefined : json['price'],
    };
}

export function MTNBuyOrderToJSON(value?: Omit<MTNBuyOrder, 'quantity'|'price'> | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'asset': value['asset'],
        'currency': value['currency'],
        'amount': value['amount'],
    };
}

