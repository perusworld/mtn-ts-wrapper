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
import type { MTNEarmarkPaginationDataAndMetaData } from './MTNEarmarkPaginationDataAndMetaData';
/**
 *
 * @export
 * @interface MTNEarmarks
 */
export interface MTNEarmarks {
    /**
     *
     * @type {MTNEarmarkPaginationDataAndMetaData}
     * @memberof MTNEarmarks
     */
    data?: MTNEarmarkPaginationDataAndMetaData;
}
/**
 * Check if a given object implements the MTNEarmarks interface.
 */
export declare function instanceOfMTNEarmarks(value: object): boolean;
export declare function MTNEarmarksFromJSON(json: any): MTNEarmarks;
export declare function MTNEarmarksFromJSONTyped(json: any, ignoreDiscriminator: boolean): MTNEarmarks;
export declare function MTNEarmarksToJSON(value?: MTNEarmarks | null): any;
