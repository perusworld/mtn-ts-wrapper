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
 * @interface MTNGeographicAddress
 */
export interface MTNGeographicAddress {
    /**
     * Type of specified address.
     * @type {string}
     * @memberof MTNGeographicAddress
     */
    addressType?: string;
    /**
     * Name of street of given person resides on.
     * @type {string}
     * @memberof MTNGeographicAddress
     */
    streetName?: string;
    /**
     * Number of building in which given person resides on, if applicable.
     * @type {string}
     * @memberof MTNGeographicAddress
     */
    buildingNumber?: string;
    /**
     * Postal code for given person.
     * @type {string}
     * @memberof MTNGeographicAddress
     */
    postCode?: string;
    /**
     * Name of town person resides in.
     * @type {string}
     * @memberof MTNGeographicAddress
     */
    townName?: string;
    /**
     * Country code person resides in.
     * @type {string}
     * @memberof MTNGeographicAddress
     */
    country?: string;
}

/**
 * Check if a given object implements the MTNGeographicAddress interface.
 */
export function instanceOfMTNGeographicAddress(value: object): boolean {
    return true;
}

export function MTNGeographicAddressFromJSON(json: any): MTNGeographicAddress {
    return MTNGeographicAddressFromJSONTyped(json, false);
}

export function MTNGeographicAddressFromJSONTyped(json: any, ignoreDiscriminator: boolean): MTNGeographicAddress {
    if (json == null) {
        return json;
    }
    return {
        
        'addressType': json['addressType'] == null ? undefined : json['addressType'],
        'streetName': json['streetName'] == null ? undefined : json['streetName'],
        'buildingNumber': json['buildingNumber'] == null ? undefined : json['buildingNumber'],
        'postCode': json['postCode'] == null ? undefined : json['postCode'],
        'townName': json['townName'] == null ? undefined : json['townName'],
        'country': json['country'] == null ? undefined : json['country'],
    };
}

export function MTNGeographicAddressToJSON(value?: MTNGeographicAddress | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'addressType': value['addressType'],
        'streetName': value['streetName'],
        'buildingNumber': value['buildingNumber'],
        'postCode': value['postCode'],
        'townName': value['townName'],
        'country': value['country'],
    };
}

