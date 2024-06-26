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
import type { MTNStatusReasonInformation } from './MTNStatusReasonInformation';
import {
    MTNStatusReasonInformationFromJSON,
    MTNStatusReasonInformationFromJSONTyped,
    MTNStatusReasonInformationToJSON,
} from './MTNStatusReasonInformation';

/**
 * 
 * @export
 * @interface MTNBlockchainTransaction
 */
export interface MTNBlockchainTransaction {
    /**
     * Identifier for the operation.
     * @type {string}
     * @memberof MTNBlockchainTransaction
     */
    readonly blockchainTransactionId?: string;
    /**
     * The cryptographic hash of the blockchain transaction.
     * @type {string}
     * @memberof MTNBlockchainTransaction
     */
    readonly transactionHash?: string;
    /**
     * The block number the transaction was added to.
     * @type {number}
     * @memberof MTNBlockchainTransaction
     */
    readonly blockNumber?: number;
    /**
     * Name of the smart contract function.
     * @type {string}
     * @memberof MTNBlockchainTransaction
     */
    readonly functionName?: string;
    /**
     * Status of Blockchain transaction.  Valid values - "PENDING" , "COMPLETED" , "FAILED". Default PENDING
     * @type {string}
     * @memberof MTNBlockchainTransaction
     */
    status?: string;
    /**
     * More details on the error.
     * @type {Array<MTNStatusReasonInformation>}
     * @memberof MTNBlockchainTransaction
     */
    statusReasonInformation?: Array<MTNStatusReasonInformation>;
}

/**
 * Check if a given object implements the MTNBlockchainTransaction interface.
 */
export function instanceOfMTNBlockchainTransaction(value: object): boolean {
    return true;
}

export function MTNBlockchainTransactionFromJSON(json: any): MTNBlockchainTransaction {
    return MTNBlockchainTransactionFromJSONTyped(json, false);
}

export function MTNBlockchainTransactionFromJSONTyped(json: any, ignoreDiscriminator: boolean): MTNBlockchainTransaction {
    if (json == null) {
        return json;
    }
    return {
        
        'blockchainTransactionId': json['blockchainTransactionId'] == null ? undefined : json['blockchainTransactionId'],
        'transactionHash': json['transactionHash'] == null ? undefined : json['transactionHash'],
        'blockNumber': json['blockNumber'] == null ? undefined : json['blockNumber'],
        'functionName': json['functionName'] == null ? undefined : json['functionName'],
        'status': json['status'] == null ? undefined : json['status'],
        'statusReasonInformation': json['statusReasonInformation'] == null ? undefined : ((json['statusReasonInformation'] as Array<any>).map(MTNStatusReasonInformationFromJSON)),
    };
}

export function MTNBlockchainTransactionToJSON(value?: Omit<MTNBlockchainTransaction, 'blockchainTransactionId'|'transactionHash'|'blockNumber'|'functionName'> | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'status': value['status'],
        'statusReasonInformation': value['statusReasonInformation'] == null ? undefined : ((value['statusReasonInformation'] as Array<any>).map(MTNStatusReasonInformationToJSON)),
    };
}

