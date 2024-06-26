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
import type { MTNBlockchainTransaction } from './MTNBlockchainTransaction';
import type { MTNTokenIdentifier } from './MTNTokenIdentifier';
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
export declare function instanceOfMTNTokenizedDepositOperation(value: object): boolean;
export declare function MTNTokenizedDepositOperationFromJSON(json: any): MTNTokenizedDepositOperation;
export declare function MTNTokenizedDepositOperationFromJSONTyped(json: any, ignoreDiscriminator: boolean): MTNTokenizedDepositOperation;
export declare function MTNTokenizedDepositOperationToJSON(value?: Omit<MTNTokenizedDepositOperation, 'operationId' | 'status' | 'blockchainTransactions'> | null): any;
