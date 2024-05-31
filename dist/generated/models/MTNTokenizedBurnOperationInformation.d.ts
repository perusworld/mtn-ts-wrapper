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
 * A response body for burn bank tokens.
 * @export
 * @interface MTNTokenizedBurnOperationInformation
 */
export interface MTNTokenizedBurnOperationInformation extends MTNTokenizedDepositOperationInformation {
    /**
     * Amount of burned tokens.
     * @type {number}
     * @memberof MTNTokenizedBurnOperationInformation
     */
    amount?: number;
    /**
     * Consumer account identifier.
     * @type {string}
     * @memberof MTNTokenizedBurnOperationInformation
     */
    from?: string;
}
/**
 * Check if a given object implements the MTNTokenizedBurnOperationInformation interface.
 */
export declare function instanceOfMTNTokenizedBurnOperationInformation(value: object): boolean;
export declare function MTNTokenizedBurnOperationInformationFromJSON(json: any): MTNTokenizedBurnOperationInformation;
export declare function MTNTokenizedBurnOperationInformationFromJSONTyped(json: any, ignoreDiscriminator: boolean): MTNTokenizedBurnOperationInformation;
export declare function MTNTokenizedBurnOperationInformationToJSON(value?: Omit<MTNTokenizedBurnOperationInformation, 'operationId' | 'status' | 'blockchainTransactions'> | null): any;
