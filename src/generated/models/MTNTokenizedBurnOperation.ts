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

/**
 * A request body to burn bank tokens.
 * @export
 * @interface MTNTokenizedBurnOperation
 */
export interface MTNTokenizedBurnOperation {
    /**
     * Amount of tokens to burn.
     * @type {number}
     * @memberof MTNTokenizedBurnOperation
     */
    amount: number;
    /**
     * Consumer account identifier.
     * @type {string}
     * @memberof MTNTokenizedBurnOperation
     */
    from: string;
    /**
     * 
     * @type {MTNTokenIdentifier}
     * @memberof MTNTokenizedBurnOperation
     */
    tokenIdentifier: MTNTokenIdentifier;
    /**
     * Identifier for the operation.
     * @type {string}
     * @memberof MTNTokenizedBurnOperation
     */
    readonly operationId?: string;
    /**
     * Status of the token operation. Valid values - RECEIVED, PENDING, COMPLETED, ERROR, FAILED
     * @type {string}
     * @memberof MTNTokenizedBurnOperation
     */
    readonly status?: string;
    /**
     * Details of transactions on Blockchain.
     * @type {Array<MTNBlockchainTransaction>}
     * @memberof MTNTokenizedBurnOperation
     */
    readonly blockchainTransactions?: Array<MTNBlockchainTransaction>;
}

/**
 * Check if a given object implements the MTNTokenizedBurnOperation interface.
 */
export function instanceOfMTNTokenizedBurnOperation(value: object): boolean {
    if (!('amount' in value)) return false;
    if (!('from' in value)) return false;
    if (!('tokenIdentifier' in value)) return false;
    return true;
}

export function MTNTokenizedBurnOperationFromJSON(json: any): MTNTokenizedBurnOperation {
    return MTNTokenizedBurnOperationFromJSONTyped(json, false);
}

export function MTNTokenizedBurnOperationFromJSONTyped(json: any, ignoreDiscriminator: boolean): MTNTokenizedBurnOperation {
    if (json == null) {
        return json;
    }
    return {
        
        'amount': json['amount'],
        'from': json['from'],
        'tokenIdentifier': MTNTokenIdentifierFromJSON(json['tokenIdentifier']),
        'operationId': json['operationId'] == null ? undefined : json['operationId'],
        'status': json['status'] == null ? undefined : json['status'],
        'blockchainTransactions': json['blockchainTransactions'] == null ? undefined : ((json['blockchainTransactions'] as Array<any>).map(MTNBlockchainTransactionFromJSON)),
    };
}

export function MTNTokenizedBurnOperationToJSON(value?: Omit<MTNTokenizedBurnOperation, 'operationId'|'status'|'blockchainTransactions'> | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'amount': value['amount'],
        'from': value['from'],
        'tokenIdentifier': MTNTokenIdentifierToJSON(value['tokenIdentifier']),
    };
}

