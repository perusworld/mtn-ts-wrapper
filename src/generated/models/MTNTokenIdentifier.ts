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
 * A token Identifier.
 * @export
 * @interface MTNTokenIdentifier
 */
export interface MTNTokenIdentifier {
    /**
     * MTN Id of chain.
     * @type {string}
     * @memberof MTNTokenIdentifier
     */
    chainId: string;
    /**
     * Type of token identifier
     * @type {string}
     * @memberof MTNTokenIdentifier
     */
    identifierType: string;
    /**
     * Value of token identifier
     * @type {string}
     * @memberof MTNTokenIdentifier
     */
    identifierValue: string;
}

/**
 * Check if a given object implements the MTNTokenIdentifier interface.
 */
export function instanceOfMTNTokenIdentifier(value: object): boolean {
    if (!('chainId' in value)) return false;
    if (!('identifierType' in value)) return false;
    if (!('identifierValue' in value)) return false;
    return true;
}

export function MTNTokenIdentifierFromJSON(json: any): MTNTokenIdentifier {
    return MTNTokenIdentifierFromJSONTyped(json, false);
}

export function MTNTokenIdentifierFromJSONTyped(json: any, ignoreDiscriminator: boolean): MTNTokenIdentifier {
    if (json == null) {
        return json;
    }
    return {
        
        'chainId': json['chainId'],
        'identifierType': json['identifierType'],
        'identifierValue': json['identifierValue'],
    };
}

export function MTNTokenIdentifierToJSON(value?: MTNTokenIdentifier | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'chainId': value['chainId'],
        'identifierType': value['identifierType'],
        'identifierValue': value['identifierValue'],
    };
}

