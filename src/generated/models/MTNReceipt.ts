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
/**
 * Receipt for the recipients of an Earmark.
 * @export
 * @interface MTNReceipt
 */
export interface MTNReceipt {
    /**
     * Consumer account identifier.
     * @type {string}
     * @memberof MTNReceipt
     */
    payerAccountAlias?: string;
    /**
     * The amount of asset.
     * @type {number}
     * @memberof MTNReceipt
     */
    amount?: number;
    /**
     * Status of the Earmark operation.
     * @type {string}
     * @memberof MTNReceipt
     */
    readonly status?: string;
    /**
     * Creation datetime in ISO8601 format
     * @type {Date}
     * @memberof MTNReceipt
     */
    readonly createdDate?: Date;
    /**
     * Last updated datetime in ISO8601 format
     * @type {Date}
     * @memberof MTNReceipt
     */
    readonly lastUpdatedDate?: Date;
}

/**
 * Check if a given object implements the MTNReceipt interface.
 */
export function instanceOfMTNReceipt(value: object): boolean {
    return true;
}

export function MTNReceiptFromJSON(json: any): MTNReceipt {
    return MTNReceiptFromJSONTyped(json, false);
}

export function MTNReceiptFromJSONTyped(json: any, ignoreDiscriminator: boolean): MTNReceipt {
    if (json == null) {
        return json;
    }
    return {
        
        'payerAccountAlias': json['payerAccountAlias'] == null ? undefined : json['payerAccountAlias'],
        'amount': json['amount'] == null ? undefined : json['amount'],
        'status': json['status'] == null ? undefined : json['status'],
        'createdDate': json['createdDate'] == null ? undefined : (new Date(json['createdDate'])),
        'lastUpdatedDate': json['lastUpdatedDate'] == null ? undefined : (new Date(json['lastUpdatedDate'])),
    };
}

export function MTNReceiptToJSON(value?: Omit<MTNReceipt, 'status'|'createdDate'|'lastUpdatedDate'> | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'payerAccountAlias': value['payerAccountAlias'],
        'amount': value['amount'],
    };
}
