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
 * Refund for the payer of an Earmark.
 * @export
 * @interface MTNRefund
 */
export interface MTNRefund {
    /**
     * The amount of asset.
     * @type {number}
     * @memberof MTNRefund
     */
    amount?: number;
    /**
     * Status of the Earmark operation.
     * @type {string}
     * @memberof MTNRefund
     */
    readonly status?: string;
    /**
     * Creation datetime in ISO8601 format
     * @type {Date}
     * @memberof MTNRefund
     */
    readonly createdDate?: Date;
    /**
     * Last updated datetime in ISO8601 format
     * @type {Date}
     * @memberof MTNRefund
     */
    readonly lastUpdatedDate?: Date;
}

/**
 * Check if a given object implements the MTNRefund interface.
 */
export function instanceOfMTNRefund(value: object): boolean {
    return true;
}

export function MTNRefundFromJSON(json: any): MTNRefund {
    return MTNRefundFromJSONTyped(json, false);
}

export function MTNRefundFromJSONTyped(json: any, ignoreDiscriminator: boolean): MTNRefund {
    if (json == null) {
        return json;
    }
    return {
        
        'amount': json['amount'] == null ? undefined : json['amount'],
        'status': json['status'] == null ? undefined : json['status'],
        'createdDate': json['createdDate'] == null ? undefined : (new Date(json['createdDate'])),
        'lastUpdatedDate': json['lastUpdatedDate'] == null ? undefined : (new Date(json['lastUpdatedDate'])),
    };
}

export function MTNRefundToJSON(value?: Omit<MTNRefund, 'status'|'createdDate'|'lastUpdatedDate'> | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'amount': value['amount'],
    };
}

