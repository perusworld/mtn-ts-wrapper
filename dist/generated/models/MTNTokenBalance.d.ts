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
import type { MTNTokenIdentifier } from './MTNTokenIdentifier';
/**
 * Get token balance.
 * @export
 * @interface MTNTokenBalance
 */
export interface MTNTokenBalance {
    /**
     *
     * @type {MTNTokenIdentifier}
     * @memberof MTNTokenBalance
     */
    tokenIdentifier: MTNTokenIdentifier;
    /**
     * Consumer account identifier.
     * @type {string}
     * @memberof MTNTokenBalance
     */
    accountAlias?: string;
    /**
     * Balance for a given token.
     * @type {number}
     * @memberof MTNTokenBalance
     */
    readonly balance?: number;
}
/**
 * Check if a given object implements the MTNTokenBalance interface.
 */
export declare function instanceOfMTNTokenBalance(value: object): boolean;
export declare function MTNTokenBalanceFromJSON(json: any): MTNTokenBalance;
export declare function MTNTokenBalanceFromJSONTyped(json: any, ignoreDiscriminator: boolean): MTNTokenBalance;
export declare function MTNTokenBalanceToJSON(value?: Omit<MTNTokenBalance, 'balance'> | null): any;
