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
import type { MTNAdvisement } from './MTNAdvisement';
import {
    MTNAdvisementFromJSON,
    MTNAdvisementFromJSONTyped,
    MTNAdvisementToJSON,
} from './MTNAdvisement';

/**
 * A settlement advisement.
 * @export
 * @interface MTNSettlementAdvisement
 */
export interface MTNSettlementAdvisement {
    /**
     * Date & time Advisement was generated in ISO8601 format
     * @type {Date}
     * @memberof MTNSettlementAdvisement
     */
    readonly advisementDate?: Date;
    /**
     * List of settlement advisements returned as part of this request
     * @type {Array<MTNAdvisement>}
     * @memberof MTNSettlementAdvisement
     */
    advisements?: Array<MTNAdvisement>;
}

/**
 * Check if a given object implements the MTNSettlementAdvisement interface.
 */
export function instanceOfMTNSettlementAdvisement(value: object): boolean {
    return true;
}

export function MTNSettlementAdvisementFromJSON(json: any): MTNSettlementAdvisement {
    return MTNSettlementAdvisementFromJSONTyped(json, false);
}

export function MTNSettlementAdvisementFromJSONTyped(json: any, ignoreDiscriminator: boolean): MTNSettlementAdvisement {
    if (json == null) {
        return json;
    }
    return {
        
        'advisementDate': json['advisementDate'] == null ? undefined : (new Date(json['advisementDate'])),
        'advisements': json['advisements'] == null ? undefined : ((json['advisements'] as Array<any>).map(MTNAdvisementFromJSON)),
    };
}

export function MTNSettlementAdvisementToJSON(value?: Omit<MTNSettlementAdvisement, 'advisementDate'> | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'advisements': value['advisements'] == null ? undefined : ((value['advisements'] as Array<any>).map(MTNAdvisementToJSON)),
    };
}

