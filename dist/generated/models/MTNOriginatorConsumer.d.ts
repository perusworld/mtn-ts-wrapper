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
 * An Originator Consumer to an Originator Consumer.
 * @export
 * @interface MTNOriginatorConsumer
 */
export interface MTNOriginatorConsumer {
    /**
     * Consumer account identifier.
     * @type {string}
     * @memberof MTNOriginatorConsumer
     */
    accountAlias?: string;
    /**
     *
     * @type {MTNCryptoAddressRiskScore}
     * @memberof MTNOriginatorConsumer
     */
    cryptoAddress?: MTNCryptoAddressRiskScore;
}
/**
 * Check if a given object implements the MTNOriginatorConsumer interface.
 */
export declare function instanceOfMTNOriginatorConsumer(value: object): boolean;
export declare function MTNOriginatorConsumerFromJSON(json: any): MTNOriginatorConsumer;
export declare function MTNOriginatorConsumerFromJSONTyped(json: any, ignoreDiscriminator: boolean): MTNOriginatorConsumer;
export declare function MTNOriginatorConsumerToJSON(value?: MTNOriginatorConsumer | null): any;
