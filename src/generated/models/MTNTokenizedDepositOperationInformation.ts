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
     MTNTokenizedBurnOperationInformationFromJSONTyped,
     MTNTokenizedMintOperationInformationFromJSONTyped,
     MTNTokenizedTransferOperationInformationFromJSONTyped
} from './index';

/**
 * A response body to get tokenized deposits operation.
 * @export
 * @interface MTNTokenizedDepositOperationInformation
 */
export interface MTNTokenizedDepositOperationInformation {
    /**
     * 
     * @type {MTNTokenIdentifier}
     * @memberof MTNTokenizedDepositOperationInformation
     */
    tokenIdentifier: MTNTokenIdentifier;
    /**
     * Identifier for the operation.
     * @type {string}
     * @memberof MTNTokenizedDepositOperationInformation
     */
    readonly operationId?: string;
    /**
     * Status of the token operation. Valid values - RECEIVED, PENDING, COMPLETED, ERROR, FAILED
     * @type {string}
     * @memberof MTNTokenizedDepositOperationInformation
     */
    readonly status?: string;
    /**
     * Details of transactions on Blockchain.
     * @type {Array<MTNBlockchainTransaction>}
     * @memberof MTNTokenizedDepositOperationInformation
     */
    readonly blockchainTransactions?: Array<MTNBlockchainTransaction>;
    /**
     * Type of operation. Valid values - MINT, TRANSFER, BURN
     * @type {string}
     * @memberof MTNTokenizedDepositOperationInformation
     */
    operationType: string;
}

/**
 * Check if a given object implements the MTNTokenizedDepositOperationInformation interface.
 */
export function instanceOfMTNTokenizedDepositOperationInformation(value: object): boolean {
    if (!('tokenIdentifier' in value)) return false;
    if (!('operationType' in value)) return false;
    return true;
}

export function MTNTokenizedDepositOperationInformationFromJSON(json: any): MTNTokenizedDepositOperationInformation {
    return MTNTokenizedDepositOperationInformationFromJSONTyped(json, false);
}

export function MTNTokenizedDepositOperationInformationFromJSONTyped(json: any, ignoreDiscriminator: boolean): MTNTokenizedDepositOperationInformation {
    if (json == null) {
        return json;
    }
    if (!ignoreDiscriminator) {
        if (json['operationType'] === 'BURN') {
            return MTNTokenizedBurnOperationInformationFromJSONTyped(json, true);
        }
        if (json['operationType'] === 'MINT') {
            return MTNTokenizedMintOperationInformationFromJSONTyped(json, true);
        }
        if (json['operationType'] === 'TRANSFER') {
            return MTNTokenizedTransferOperationInformationFromJSONTyped(json, true);
        }
    }
    return {
        
        'tokenIdentifier': MTNTokenIdentifierFromJSON(json['tokenIdentifier']),
        'operationId': json['operationId'] == null ? undefined : json['operationId'],
        'status': json['status'] == null ? undefined : json['status'],
        'blockchainTransactions': json['blockchainTransactions'] == null ? undefined : ((json['blockchainTransactions'] as Array<any>).map(MTNBlockchainTransactionFromJSON)),
        'operationType': json['operationType'],
    };
}

export function MTNTokenizedDepositOperationInformationToJSON(value?: Omit<MTNTokenizedDepositOperationInformation, 'operationId'|'status'|'blockchainTransactions'> | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'tokenIdentifier': MTNTokenIdentifierToJSON(value['tokenIdentifier']),
        'operationType': value['operationType'],
    };
}
