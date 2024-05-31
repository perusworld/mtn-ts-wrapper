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
 * The beneficiary information for the payee confirmation.
 * @export
 * @interface MTNInformation
 */
export interface MTNInformation {
    /**
     * The first name of the payee confirmation.
     * @type {string}
     * @memberof MTNInformation
     */
    firstName?: string;
    /**
     * The last name of the payee confirmation.
     * @type {string}
     * @memberof MTNInformation
     */
    lastName?: string;
    /**
     * The payee confirmation match type.
     * @type {string}
     * @memberof MTNInformation
     */
    matchType?: string;
}

/**
 * Check if a given object implements the MTNInformation interface.
 */
export function instanceOfMTNInformation(value: object): boolean {
    return true;
}

export function MTNInformationFromJSON(json: any): MTNInformation {
    return MTNInformationFromJSONTyped(json, false);
}

export function MTNInformationFromJSONTyped(json: any, ignoreDiscriminator: boolean): MTNInformation {
    if (json == null) {
        return json;
    }
    return {
        
        'firstName': json['firstName'] == null ? undefined : json['firstName'],
        'lastName': json['lastName'] == null ? undefined : json['lastName'],
        'matchType': json['matchType'] == null ? undefined : json['matchType'],
    };
}

export function MTNInformationToJSON(value?: MTNInformation | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'firstName': value['firstName'],
        'lastName': value['lastName'],
        'matchType': value['matchType'],
    };
}

