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
import type { MTNTokenIdentifier } from './MTNTokenIdentifier';
/**
 * Balance of tokens for a given alias.
 * @export
 * @interface MTNTokenizedDepositBalance
 */
export interface MTNTokenizedDepositBalance {
    /**
     *
     * @type {MTNTokenIdentifier}
     * @memberof MTNTokenizedDepositBalance
     */
    tokenIdentifier: MTNTokenIdentifier;
    /**
     * Consumer account identifier.
     * @type {string}
     * @memberof MTNTokenizedDepositBalance
     */
    accountAlias?: string;
    /**
     * Balance for a given token.
     * @type {number}
     * @memberof MTNTokenizedDepositBalance
     */
    readonly balance?: number;
}
/**
 * Check if a given object implements the MTNTokenizedDepositBalance interface.
 */
export declare function instanceOfMTNTokenizedDepositBalance(value: object): boolean;
export declare function MTNTokenizedDepositBalanceFromJSON(json: any): MTNTokenizedDepositBalance;
export declare function MTNTokenizedDepositBalanceFromJSONTyped(json: any, ignoreDiscriminator: boolean): MTNTokenizedDepositBalance;
export declare function MTNTokenizedDepositBalanceToJSON(value?: Omit<MTNTokenizedDepositBalance, 'balance'> | null): any;
