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
 * Release details in which to update or create an Earmark.
 * @export
 * @interface MTNTriggerIndex
 */
export interface MTNTriggerIndex {
    /**
     * The index triggered by the earmark.
     * @type {number}
     * @memberof MTNTriggerIndex
     */
    triggerIndex?: number;
}

/**
 * Check if a given object implements the MTNTriggerIndex interface.
 */
export function instanceOfMTNTriggerIndex(value: object): boolean {
    return true;
}

export function MTNTriggerIndexFromJSON(json: any): MTNTriggerIndex {
    return MTNTriggerIndexFromJSONTyped(json, false);
}

export function MTNTriggerIndexFromJSONTyped(json: any, ignoreDiscriminator: boolean): MTNTriggerIndex {
    if (json == null) {
        return json;
    }
    return {
        
        'triggerIndex': json['triggerIndex'] == null ? undefined : json['triggerIndex'],
    };
}

export function MTNTriggerIndexToJSON(value?: MTNTriggerIndex | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'triggerIndex': value['triggerIndex'],
    };
}
