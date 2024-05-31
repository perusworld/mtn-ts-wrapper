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
import type { MTNTokenizedDepositOperationInformation } from './MTNTokenizedDepositOperationInformation';
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
export declare function instanceOfMTNTokenizedTransferOperationInformation(value: object): boolean;
export declare function MTNTokenizedTransferOperationInformationFromJSON(json: any): MTNTokenizedTransferOperationInformation;
export declare function MTNTokenizedTransferOperationInformationFromJSONTyped(json: any, ignoreDiscriminator: boolean): MTNTokenizedTransferOperationInformation;
export declare function MTNTokenizedTransferOperationInformationToJSON(value?: Omit<MTNTokenizedTransferOperationInformation, 'settlementMethod' | 'operationId' | 'status' | 'blockchainTransactions'> | null): any;
