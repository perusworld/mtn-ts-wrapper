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
import type { MTNBlockchainTransaction } from './MTNBlockchainTransaction';
import {
    MTNBlockchainTransactionFromJSON,
    MTNBlockchainTransactionFromJSONTyped,
    MTNBlockchainTransactionToJSON,
} from './MTNBlockchainTransaction';
import type { MTNTokenIdentifier } from './MTNTokenIdentifier';
import {
    MTNTokenIdentifierFromJSON,
    MTNTokenIdentifierFromJSONTyped,
    MTNTokenIdentifierToJSON,
} from './MTNTokenIdentifier';
import type { MTNTokenOperation } from './MTNTokenOperation';
import {
    MTNTokenOperationFromJSON,
    MTNTokenOperationFromJSONTyped,
    MTNTokenOperationToJSON,
} from './MTNTokenOperation';

/**
 * Mint bank tokens.
 * @export
 * @interface MTNMintOperation
 */
export interface MTNMintOperation extends MTNTokenOperation {
    /**
     * Amount of tokens to mint.
     * @type {number}
     * @memberof MTNMintOperation
     */
    amount: number;
    /**
     * Consumer account identifier.
     * @type {string}
     * @memberof MTNMintOperation
     */
    to: string;
}

/**
 * Check if a given object implements the MTNMintOperation interface.
 */
export function instanceOfMTNMintOperation(value: object): boolean {
    if (!('amount' in value)) return false;
    if (!('to' in value)) return false;
    return true;
}

export function MTNMintOperationFromJSON(json: any): MTNMintOperation {
    return MTNMintOperationFromJSONTyped(json, false);
}

export function MTNMintOperationFromJSONTyped(json: any, ignoreDiscriminator: boolean): MTNMintOperation {
    if (json == null) {
        return json;
    }
    return {
        ...MTNTokenOperationFromJSONTyped(json, ignoreDiscriminator),
        'amount': json['amount'],
        'to': json['to'],
    };
}

export function MTNMintOperationToJSON(value?: Omit<MTNMintOperation, 'operationId'|'status'|'blockchainTransactions'> | null): any {
    if (value == null) {
        return value;
    }
    return {
        ...MTNTokenOperationToJSON(value),
        'amount': value['amount'],
        'to': value['to'],
    };
}

