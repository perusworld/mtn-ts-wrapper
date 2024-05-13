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
 * Conditions in which to perform the release.
 * @export
 * @interface MTNReleaseConditions
 */
export interface MTNReleaseConditions {
    /**
     * Execution datetime in ISO8601 format.
     * @type {Date}
     * @memberof MTNReleaseConditions
     */
    readonly executionDate?: Date;
}

/**
 * Check if a given object implements the MTNReleaseConditions interface.
 */
export function instanceOfMTNReleaseConditions(value: object): boolean {
    return true;
}

export function MTNReleaseConditionsFromJSON(json: any): MTNReleaseConditions {
    return MTNReleaseConditionsFromJSONTyped(json, false);
}

export function MTNReleaseConditionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): MTNReleaseConditions {
    if (json == null) {
        return json;
    }
    return {
        
        'executionDate': json['executionDate'] == null ? undefined : (new Date(json['executionDate'])),
    };
}

export function MTNReleaseConditionsToJSON(value?: Omit<MTNReleaseConditions, 'executionDate'> | null): any {
    if (value == null) {
        return value;
    }
    return {
        
    };
}
