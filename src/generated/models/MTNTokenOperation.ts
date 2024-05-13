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

import {
    MTNBurnOperation,
     MTNBurnOperationFromJSONTyped,
     MTNBurnOperationToJSON,
     MTNMintOperation,
     MTNMintOperationFromJSONTyped,
     MTNMintOperationToJSON,
     MTNTransferOperation,
     MTNTransferOperationFromJSONTyped,
     MTNTransferOperationToJSON,
     instanceOfMTNBurnOperation,
     instanceOfMTNMintOperation,
     instanceOfMTNTransferOperation
} from './index';

/**
 * An bank token operation.
 * @export
 * @interface MTNTokenOperation
 */
export interface MTNTokenOperation {
    /**
     * 
     * @type {MTNTokenIdentifier}
     * @memberof MTNTokenOperation
     */
    tokenIdentifier: MTNTokenIdentifier;
    /**
     * Identifier for the operation.
     * @type {string}
     * @memberof MTNTokenOperation
     */
    readonly operationId?: string;
    /**
     * Status of the token operation. Valid values - RECEIVED, PENDING, COMPLETED, ERROR, FAILED
     * @type {string}
     * @memberof MTNTokenOperation
     */
    readonly status?: string;
    /**
     * Type of operation. Valid values - MINT, TRANSFER, BURN
     * @type {string}
     * @memberof MTNTokenOperation
     */
    operationType: string;
    /**
     * Details of transactions on Blockchain.
     * @type {Array<MTNBlockchainTransaction>}
     * @memberof MTNTokenOperation
     */
    readonly blockchainTransactions?: Array<MTNBlockchainTransaction>;
}

/**
 * Check if a given object implements the MTNTokenOperation interface.
 */
export function instanceOfMTNTokenOperation(value: object): boolean {
    if (!('tokenIdentifier' in value)) return false;
    if (!('operationType' in value)) return false;
    return true;
}

export function MTNTokenOperationFromJSON(json: any): MTNTokenOperation {
    return MTNTokenOperationFromJSONTyped(json, false);
}

export function MTNTokenOperationFromJSONTyped(json: any, ignoreDiscriminator: boolean): MTNTokenOperation {
    if (json == null) {
        return json;
    }
    if (!ignoreDiscriminator) {
        if (json['operationType'] === 'BURN') {
            return MTNBurnOperationFromJSONTyped(json, true);
        }
        if (json['operationType'] === 'MINT') {
            return MTNMintOperationFromJSONTyped(json, true);
        }
        if (json['operationType'] === 'TRANSFER') {
            return MTNTransferOperationFromJSONTyped(json, true);
        }
    }
    return {
        
        'tokenIdentifier': MTNTokenIdentifierFromJSON(json['tokenIdentifier']),
        'operationId': json['operationId'] == null ? undefined : json['operationId'],
        'status': json['status'] == null ? undefined : json['status'],
        'operationType': json['operationType'],
        'blockchainTransactions': json['blockchainTransactions'] == null ? undefined : ((json['blockchainTransactions'] as Array<any>).map(MTNBlockchainTransactionFromJSON)),
    };
}

export function MTNTokenOperationToJSON(value?: Omit<MTNTokenOperation, 'operationId'|'status'|'blockchainTransactions'> | null): any {
    if (value == null) {
        return value;
    }
    return {
        'tokenIdentifier': MTNTokenIdentifierToJSON(value['tokenIdentifier']),
        'operationType': value['operationType'],
    };
}

export function WrappedMTNTokenOperationToJSON(value?: MTNTokenOperation | null): any {
    if (value == null) {
        return value;
    }
    if (instanceOfMTNTransferOperation(value)) {
        return MTNTransferOperationToJSON(value as MTNTransferOperation)
    }
    if (instanceOfMTNMintOperation(value)) {
        return MTNMintOperationToJSON(value as MTNMintOperation)
    }
    if (instanceOfMTNBurnOperation(value)) {
        return MTNBurnOperationToJSON(value as MTNBurnOperation)
    }
    return {
        'tokenIdentifier': MTNTokenIdentifierToJSON(value['tokenIdentifier']),
        'operationType': value['operationType'],
    };
}

