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
import type { MTNPerson } from './MTNPerson';
/**
 *
 * @export
 * @interface MTNConsumerTravelTransferOriginator
 */
export interface MTNConsumerTravelTransferOriginator {
    /**
     *
     * @type {Array<MTNPerson>}
     * @memberof MTNConsumerTravelTransferOriginator
     */
    originatorPersons?: Array<MTNPerson>;
    /**
     *
     * @type {Array<string>}
     * @memberof MTNConsumerTravelTransferOriginator
     */
    accountNumbers?: Array<string>;
}
/**
 * Check if a given object implements the MTNConsumerTravelTransferOriginator interface.
 */
export declare function instanceOfMTNConsumerTravelTransferOriginator(value: object): boolean;
export declare function MTNConsumerTravelTransferOriginatorFromJSON(json: any): MTNConsumerTravelTransferOriginator;
export declare function MTNConsumerTravelTransferOriginatorFromJSONTyped(json: any, ignoreDiscriminator: boolean): MTNConsumerTravelTransferOriginator;
export declare function MTNConsumerTravelTransferOriginatorToJSON(value?: MTNConsumerTravelTransferOriginator | null): any;
