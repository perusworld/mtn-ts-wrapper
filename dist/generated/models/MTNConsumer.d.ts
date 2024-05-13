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
import type { MTNCryptoAddressRiskScore } from './MTNCryptoAddressRiskScore';
/**
 * A Consumer. Typically an user of a Bank.
 * @export
 * @interface MTNConsumer
 */
export interface MTNConsumer {
    /**
     * Consumer account identifier.
     * @type {string}
     * @memberof MTNConsumer
     */
    accountAlias?: string;
    /**
     *
     * @type {MTNCryptoAddressRiskScore}
     * @memberof MTNConsumer
     */
    cryptoAddress?: MTNCryptoAddressRiskScore;
}
/**
 * Check if a given object implements the MTNConsumer interface.
 */
export declare function instanceOfMTNConsumer(value: object): boolean;
export declare function MTNConsumerFromJSON(json: any): MTNConsumer;
export declare function MTNConsumerFromJSONTyped(json: any, ignoreDiscriminator: boolean): MTNConsumer;
export declare function MTNConsumerToJSON(value?: MTNConsumer | null): any;