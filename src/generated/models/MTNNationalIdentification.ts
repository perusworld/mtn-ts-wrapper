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
 * 
 * @export
 * @interface MTNNationalIdentification
 */
export interface MTNNationalIdentification {
    /**
     * Identification national number for given person.
     * @type {string}
     * @memberof MTNNationalIdentification
     */
    nationalIdentifier?: string;
    /**
     * type of national identifier.
     * @type {string}
     * @memberof MTNNationalIdentification
     */
    nationalIdentifierType?: string;
    /**
     * Issuing country code.
     * @type {string}
     * @memberof MTNNationalIdentification
     */
    countryOfIssue?: string;
}

/**
 * Check if a given object implements the MTNNationalIdentification interface.
 */
export function instanceOfMTNNationalIdentification(value: object): boolean {
    return true;
}

export function MTNNationalIdentificationFromJSON(json: any): MTNNationalIdentification {
    return MTNNationalIdentificationFromJSONTyped(json, false);
}

export function MTNNationalIdentificationFromJSONTyped(json: any, ignoreDiscriminator: boolean): MTNNationalIdentification {
    if (json == null) {
        return json;
    }
    return {
        
        'nationalIdentifier': json['nationalIdentifier'] == null ? undefined : json['nationalIdentifier'],
        'nationalIdentifierType': json['nationalIdentifierType'] == null ? undefined : json['nationalIdentifierType'],
        'countryOfIssue': json['countryOfIssue'] == null ? undefined : json['countryOfIssue'],
    };
}

export function MTNNationalIdentificationToJSON(value?: MTNNationalIdentification | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'nationalIdentifier': value['nationalIdentifier'],
        'nationalIdentifierType': value['nationalIdentifierType'],
        'countryOfIssue': value['countryOfIssue'],
    };
}

