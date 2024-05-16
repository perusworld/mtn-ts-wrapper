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

/**
 * A bank token operation.
 * @export
 * @interface MTNTokenizedDepositOperation
 */
export interface MTNTokenizedDepositOperation {
    /**
     * 
     * @type {MTNTokenIdentifier}
     * @memberof MTNTokenizedDepositOperation
     */
    tokenIdentifier: MTNTokenIdentifier;
    /**
     * Identifier for the operation.
     * @type {string}
     * @memberof MTNTokenizedDepositOperation
     */
    readonly operationId?: string;
    /**
     * Status of the token operation. Valid values - RECEIVED, PENDING, COMPLETED, ERROR, FAILED
     * @type {string}
     * @memberof MTNTokenizedDepositOperation
     */
    readonly status?: string;
    /**
     * Details of transactions on Blockchain.
     * @type {Array<MTNBlockchainTransaction>}
     * @memberof MTNTokenizedDepositOperation
     */
    readonly blockchainTransactions?: Array<MTNBlockchainTransaction>;
}

/**
 * Check if a given object implements the MTNTokenizedDepositOperation interface.
 */
export function instanceOfMTNTokenizedDepositOperation(value: object): boolean {
    if (!('tokenIdentifier' in value)) return false;
    return true;
}

export function MTNTokenizedDepositOperationFromJSON(json: any): MTNTokenizedDepositOperation {
    return MTNTokenizedDepositOperationFromJSONTyped(json, false);
}

export function MTNTokenizedDepositOperationFromJSONTyped(json: any, ignoreDiscriminator: boolean): MTNTokenizedDepositOperation {
    if (json == null) {
        return json;
    }
    return {
        
        'tokenIdentifier': MTNTokenIdentifierFromJSON(json['tokenIdentifier']),
        'operationId': json['operationId'] == null ? undefined : json['operationId'],
        'status': json['status'] == null ? undefined : json['status'],
        'blockchainTransactions': json['blockchainTransactions'] == null ? undefined : ((json['blockchainTransactions'] as Array<any>).map(MTNBlockchainTransactionFromJSON)),
    };
}

export function MTNTokenizedDepositOperationToJSON(value?: Omit<MTNTokenizedDepositOperation, 'operationId'|'status'|'blockchainTransactions'> | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'tokenIdentifier': MTNTokenIdentifierToJSON(value['tokenIdentifier']),
    };
}
