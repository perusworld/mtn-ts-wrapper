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
import type { MTNPerson } from './MTNPerson';
import {
    MTNPersonFromJSON,
    MTNPersonFromJSONTyped,
    MTNPersonToJSON,
} from './MTNPerson';

/**
 * 
 * @export
 * @interface MTNConsumerTravelTransferOriginator
 */
export interface MTNConsumerTravelTransferOriginator {
    /**
     * 
     * @type {Array<MTNPerson>}
     * @memberof MTNConsumerTravelTransferOriginator
     */
    originatorPersons?: Array<MTNPerson>;
    /**
     * 
     * @type {Array<string>}
     * @memberof MTNConsumerTravelTransferOriginator
     */
    accountNumbers?: Array<string>;
}

/**
 * Check if a given object implements the MTNConsumerTravelTransferOriginator interface.
 */
export function instanceOfMTNConsumerTravelTransferOriginator(value: object): boolean {
    return true;
}

export function MTNConsumerTravelTransferOriginatorFromJSON(json: any): MTNConsumerTravelTransferOriginator {
    return MTNConsumerTravelTransferOriginatorFromJSONTyped(json, false);
}

export function MTNConsumerTravelTransferOriginatorFromJSONTyped(json: any, ignoreDiscriminator: boolean): MTNConsumerTravelTransferOriginator {
    if (json == null) {
        return json;
    }
    return {
        
        'originatorPersons': json['originatorPersons'] == null ? undefined : ((json['originatorPersons'] as Array<any>).map(MTNPersonFromJSON)),
        'accountNumbers': json['accountNumbers'] == null ? undefined : json['accountNumbers'],
    };
}

export function MTNConsumerTravelTransferOriginatorToJSON(value?: MTNConsumerTravelTransferOriginator | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'originatorPersons': value['originatorPersons'] == null ? undefined : ((value['originatorPersons'] as Array<any>).map(MTNPersonToJSON)),
        'accountNumbers': value['accountNumbers'],
    };
}

