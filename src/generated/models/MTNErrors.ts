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
 * 
 * @export
 * @interface MTNErrors
 */
export interface MTNErrors {
    /**
     * A List of Errors resulting from a request
     * @type {Array<Error>}
     * @memberof MTNErrors
     */
    error: Array<Error>;
}

/**
 * Check if a given object implements the MTNErrors interface.
 */
export function instanceOfMTNErrors(value: object): boolean {
    if (!('error' in value)) return false;
    return true;
}

export function MTNErrorsFromJSON(json: any): MTNErrors {
    return MTNErrorsFromJSONTyped(json, false);
}

export function MTNErrorsFromJSONTyped(json: any, ignoreDiscriminator: boolean): MTNErrors {
    if (json == null) {
        return json;
    }
    return {
        
        'error': json['Error'],
    };
}

export function MTNErrorsToJSON(value?: MTNErrors | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'Error': value['error'],
    };
}

