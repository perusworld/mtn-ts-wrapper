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
import type { MTNEarmark } from './MTNEarmark';
/**
 * Wrapper containing Earmark requests and its meta data.
 * @export
 * @interface MTNEarmarkPaginationDataAndMetaData
 */
export interface MTNEarmarkPaginationDataAndMetaData {
    /**
     * Row based offset in any API that supports Pagination. Starts and defaults at zero.
     * @type {number}
     * @memberof MTNEarmarkPaginationDataAndMetaData
     */
    offset?: number;
    /**
     * The max number of items to be returned in any API calls that supports Pagination. Defaults at 25, and maximum at 500.
     * @type {number}
     * @memberof MTNEarmarkPaginationDataAndMetaData
     */
    limit?: number;
    /**
     * The number of items in this pagination batch (the size of the items array).
     * @type {number}
     * @memberof MTNEarmarkPaginationDataAndMetaData
     */
    count?: number;
    /**
     * The grand total number of items in the whole pagination context. This number is affected by any filters that was applied.
     * @type {number}
     * @memberof MTNEarmarkPaginationDataAndMetaData
     */
    total?: number;
    /**
     * List of Earmark requests.
     * @type {Array<MTNEarmark>}
     * @memberof MTNEarmarkPaginationDataAndMetaData
     */
    items?: Array<MTNEarmark>;
}
/**
 * Check if a given object implements the MTNEarmarkPaginationDataAndMetaData interface.
 */
export declare function instanceOfMTNEarmarkPaginationDataAndMetaData(value: object): boolean;
export declare function MTNEarmarkPaginationDataAndMetaDataFromJSON(json: any): MTNEarmarkPaginationDataAndMetaData;
export declare function MTNEarmarkPaginationDataAndMetaDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): MTNEarmarkPaginationDataAndMetaData;
export declare function MTNEarmarkPaginationDataAndMetaDataToJSON(value?: MTNEarmarkPaginationDataAndMetaData | null): any;
