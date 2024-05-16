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
import type { MTNTokenizedDepositOperationInformation } from './MTNTokenizedDepositOperationInformation';
import {
    MTNTokenizedDepositOperationInformationFromJSON,
    MTNTokenizedDepositOperationInformationFromJSONTyped,
    MTNTokenizedDepositOperationInformationToJSON,
} from './MTNTokenizedDepositOperationInformation';

/**
 * A response body to transfer bank tokens.
 * @export
 * @interface MTNTokenizedTransferOperationInformation
 */
export interface MTNTokenizedTransferOperationInformation extends MTNTokenizedDepositOperationInformation {
    /**
     * Amount of transferred tokens.
     * @type {number}
     * @memberof MTNTokenizedTransferOperationInformation
     */
    amount?: number;
    /**
     * Consumer account identifier.
     * @type {string}
     * @memberof MTNTokenizedTransferOperationInformation
     */
    to?: string;
    /**
     * Consumer account identifier.
     * @type {string}
     * @memberof MTNTokenizedTransferOperationInformation
     */
    from?: string;
    /**
     * Settlement method. Valid values - DEFERRED, REALTIME
     * @type {string}
     * @memberof MTNTokenizedTransferOperationInformation
     */
    readonly settlementMethod?: string;
}

/**
 * Check if a given object implements the MTNTokenizedTransferOperationInformation interface.
 */
export function instanceOfMTNTokenizedTransferOperationInformation(value: object): boolean {
    return true;
}

export function MTNTokenizedTransferOperationInformationFromJSON(json: any): MTNTokenizedTransferOperationInformation {
    return MTNTokenizedTransferOperationInformationFromJSONTyped(json, false);
}

export function MTNTokenizedTransferOperationInformationFromJSONTyped(json: any, ignoreDiscriminator: boolean): MTNTokenizedTransferOperationInformation {
    if (json == null) {
        return json;
    }
    return {
        ...MTNTokenizedDepositOperationInformationFromJSONTyped(json, ignoreDiscriminator),
        'amount': json['amount'] == null ? undefined : json['amount'],
        'to': json['to'] == null ? undefined : json['to'],
        'from': json['from'] == null ? undefined : json['from'],
        'settlementMethod': json['settlementMethod'] == null ? undefined : json['settlementMethod'],
    };
}

export function MTNTokenizedTransferOperationInformationToJSON(value?: Omit<MTNTokenizedTransferOperationInformation, 'settlementMethod'|'operationId'|'status'|'blockchainTransactions'> | null): any {
    if (value == null) {
        return value;
    }
    return {
        ...MTNTokenizedDepositOperationInformationToJSON(value),
        'amount': value['amount'],
        'to': value['to'],
        'from': value['from'],
    };
}

