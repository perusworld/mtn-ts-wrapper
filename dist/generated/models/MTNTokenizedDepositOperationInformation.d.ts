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
export declare function instanceOfMTNTokenizedDepositOperationInformation(value: object): boolean;
export declare function MTNTokenizedDepositOperationInformationFromJSON(json: any): MTNTokenizedDepositOperationInformation;
export declare function MTNTokenizedDepositOperationInformationFromJSONTyped(json: any, ignoreDiscriminator: boolean): MTNTokenizedDepositOperationInformation;
export declare function MTNTokenizedDepositOperationInformationToJSON(value?: Omit<MTNTokenizedDepositOperationInformation, 'operationId' | 'status' | 'blockchainTransactions'> | null): any;
