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
 * @interface MTNCryptoAddress
 */
export interface MTNCryptoAddress {
    /**
     * Unique id per alias and network combination.
     * @type {string}
     * @memberof MTNCryptoAddress
     */
    readonly cryptoAddressId?: string;
    /**
     * Consumer account identifier.
     * @type {string}
     * @memberof MTNCryptoAddress
     */
    accountAlias?: string;
    /**
     * Status of asset.
     * @type {string}
     * @memberof MTNCryptoAddress
     */
    readonly status?: string;
    /**
     * An Asset that can be hold in an account.
     * @type {string}
     * @memberof MTNCryptoAddress
     */
    asset?: string;
    /**
     * A blockchain address of an Asset of an Account Alias.
     * @type {string}
     * @memberof MTNCryptoAddress
     */
    blockchainAddress?: string;
    /**
     * Network to send transaction.
     * @type {string}
     * @memberof MTNCryptoAddress
     */
    network?: string;
    /**
     * Creation datetime in ISO8601 format
     * @type {Date}
     * @memberof MTNCryptoAddress
     */
    readonly createdDate?: Date;
    /**
     * Last updated datetime in ISO8601 format
     * @type {Date}
     * @memberof MTNCryptoAddress
     */
    readonly updatedDate?: Date;
}

/**
 * Check if a given object implements the MTNCryptoAddress interface.
 */
export function instanceOfMTNCryptoAddress(value: object): boolean {
    return true;
}

export function MTNCryptoAddressFromJSON(json: any): MTNCryptoAddress {
    return MTNCryptoAddressFromJSONTyped(json, false);
}

export function MTNCryptoAddressFromJSONTyped(json: any, ignoreDiscriminator: boolean): MTNCryptoAddress {
    if (json == null) {
        return json;
    }
    return {
        
        'cryptoAddressId': json['cryptoAddressId'] == null ? undefined : json['cryptoAddressId'],
        'accountAlias': json['accountAlias'] == null ? undefined : json['accountAlias'],
        'status': json['status'] == null ? undefined : json['status'],
        'asset': json['asset'] == null ? undefined : json['asset'],
        'blockchainAddress': json['blockchainAddress'] == null ? undefined : json['blockchainAddress'],
        'network': json['network'] == null ? undefined : json['network'],
        'createdDate': json['createdDate'] == null ? undefined : (new Date(json['createdDate'])),
        'updatedDate': json['updatedDate'] == null ? undefined : (new Date(json['updatedDate'])),
    };
}

export function MTNCryptoAddressToJSON(value?: Omit<MTNCryptoAddress, 'cryptoAddressId'|'status'|'createdDate'|'updatedDate'> | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'accountAlias': value['accountAlias'],
        'asset': value['asset'],
        'blockchainAddress': value['blockchainAddress'],
        'network': value['network'],
    };
}

