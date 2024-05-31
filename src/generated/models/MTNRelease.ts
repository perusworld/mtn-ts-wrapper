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
import type { MTNPayout } from './MTNPayout';
import {
    MTNPayoutFromJSON,
    MTNPayoutFromJSONTyped,
    MTNPayoutToJSON,
} from './MTNPayout';
import type { MTNReleaseConditions } from './MTNReleaseConditions';
import {
    MTNReleaseConditionsFromJSON,
    MTNReleaseConditionsFromJSONTyped,
    MTNReleaseConditionsToJSON,
} from './MTNReleaseConditions';

/**
 * Release details in which to update or create an Earmark.
 * @export
 * @interface MTNRelease
 */
export interface MTNRelease {
    /**
     * The index triggered by the earmark.
     * @type {number}
     * @memberof MTNRelease
     */
    triggerIndex?: number;
    /**
     * Status of the release Trigger operation.
     * @type {string}
     * @memberof MTNRelease
     */
    readonly status?: string;
    /**
     * Creation datetime in ISO8601 format
     * @type {Date}
     * @memberof MTNRelease
     */
    readonly createdDate?: Date;
    /**
     * Last updated datetime in ISO8601 format
     * @type {Date}
     * @memberof MTNRelease
     */
    readonly lastUpdatedDate?: Date;
    /**
     * 
     * @type {MTNReleaseConditions}
     * @memberof MTNRelease
     */
    conditions?: MTNReleaseConditions;
    /**
     * The list of payouts for each release.
     * @type {Array<MTNPayout>}
     * @memberof MTNRelease
     */
    payouts?: Array<MTNPayout>;
}

/**
 * Check if a given object implements the MTNRelease interface.
 */
export function instanceOfMTNRelease(value: object): boolean {
    return true;
}

export function MTNReleaseFromJSON(json: any): MTNRelease {
    return MTNReleaseFromJSONTyped(json, false);
}

export function MTNReleaseFromJSONTyped(json: any, ignoreDiscriminator: boolean): MTNRelease {
    if (json == null) {
        return json;
    }
    return {
        
        'triggerIndex': json['triggerIndex'] == null ? undefined : json['triggerIndex'],
        'status': json['status'] == null ? undefined : json['status'],
        'createdDate': json['createdDate'] == null ? undefined : (new Date(json['createdDate'])),
        'lastUpdatedDate': json['lastUpdatedDate'] == null ? undefined : (new Date(json['lastUpdatedDate'])),
        'conditions': json['conditions'] == null ? undefined : MTNReleaseConditionsFromJSON(json['conditions']),
        'payouts': json['payouts'] == null ? undefined : ((json['payouts'] as Array<any>).map(MTNPayoutFromJSON)),
    };
}

export function MTNReleaseToJSON(value?: Omit<MTNRelease, 'status'|'createdDate'|'lastUpdatedDate'> | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'triggerIndex': value['triggerIndex'],
        'conditions': MTNReleaseConditionsToJSON(value['conditions']),
        'payouts': value['payouts'] == null ? undefined : ((value['payouts'] as Array<any>).map(MTNPayoutToJSON)),
    };
}

