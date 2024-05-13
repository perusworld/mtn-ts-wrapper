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
 * A request body example to burn bank tokens.
 * @export
 * @interface MTNBurnOperation
 */
export interface MTNBurnOperation extends MTNTokenOperation {
    /**
     * Amount of tokens to burn.
     * @type {number}
     * @memberof MTNBurnOperation
     */
    amount: number;
    /**
     * Consumer account identifier.
     * @type {string}
     * @memberof MTNBurnOperation
     */
    from: string;
}

/**
 * Check if a given object implements the MTNBurnOperation interface.
 */
export function instanceOfMTNBurnOperation(value: object): boolean {
    if (!('amount' in value)) return false;
    if (!('from' in value)) return false;
    return true;
}

export function MTNBurnOperationFromJSON(json: any): MTNBurnOperation {
    return MTNBurnOperationFromJSONTyped(json, false);
}

export function MTNBurnOperationFromJSONTyped(json: any, ignoreDiscriminator: boolean): MTNBurnOperation {
    if (json == null) {
        return json;
    }
    return {
        ...MTNTokenOperationFromJSONTyped(json, ignoreDiscriminator),
        'amount': json['amount'],
        'from': json['from'],
    };
}

export function MTNBurnOperationToJSON(value?: Omit<MTNBurnOperation, 'operationId'|'status'|'blockchainTransactions'> | null): any {
    if (value == null) {
        return value;
    }
    return {
        ...MTNTokenOperationToJSON(value),
        'amount': value['amount'],
        'from': value['from'],
    };
}

