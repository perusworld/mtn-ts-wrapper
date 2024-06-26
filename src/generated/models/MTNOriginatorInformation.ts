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
import type { MTNConsumerTravelTransferOriginator } from './MTNConsumerTravelTransferOriginator';
import {
    MTNConsumerTravelTransferOriginatorFromJSON,
    MTNConsumerTravelTransferOriginatorFromJSONTyped,
    MTNConsumerTravelTransferOriginatorToJSON,
} from './MTNConsumerTravelTransferOriginator';
import type { MTNVasp } from './MTNVasp';
import {
    MTNVaspFromJSON,
    MTNVaspFromJSONTyped,
    MTNVaspToJSON,
} from './MTNVasp';

/**
 * Originator information.
 * @export
 * @interface MTNOriginatorInformation
 */
export interface MTNOriginatorInformation {
    /**
     * 
     * @type {MTNConsumerTravelTransferOriginator}
     * @memberof MTNOriginatorInformation
     */
    originator?: MTNConsumerTravelTransferOriginator;
    /**
     * 
     * @type {MTNVasp}
     * @memberof MTNOriginatorInformation
     */
    originatorVasp?: MTNVasp;
    /**
     * The date on which the transaction will be executed.
     * @type {string}
     * @memberof MTNOriginatorInformation
     */
    executionDate?: string;
}

/**
 * Check if a given object implements the MTNOriginatorInformation interface.
 */
export function instanceOfMTNOriginatorInformation(value: object): boolean {
    return true;
}

export function MTNOriginatorInformationFromJSON(json: any): MTNOriginatorInformation {
    return MTNOriginatorInformationFromJSONTyped(json, false);
}

export function MTNOriginatorInformationFromJSONTyped(json: any, ignoreDiscriminator: boolean): MTNOriginatorInformation {
    if (json == null) {
        return json;
    }
    return {
        
        'originator': json['originator'] == null ? undefined : MTNConsumerTravelTransferOriginatorFromJSON(json['originator']),
        'originatorVasp': json['originatorVasp'] == null ? undefined : MTNVaspFromJSON(json['originatorVasp']),
        'executionDate': json['executionDate'] == null ? undefined : json['executionDate'],
    };
}

export function MTNOriginatorInformationToJSON(value?: MTNOriginatorInformation | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'originator': MTNConsumerTravelTransferOriginatorToJSON(value['originator']),
        'originatorVasp': MTNVaspToJSON(value['originatorVasp']),
        'executionDate': value['executionDate'],
    };
}

