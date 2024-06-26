/* tslint:disable */
/* eslint-disable */
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

import { mapValues } from '../runtime';
import type { MTNHistoricalPrice } from './MTNHistoricalPrice';
import {
    MTNHistoricalPriceFromJSON,
    MTNHistoricalPriceFromJSONTyped,
    MTNHistoricalPriceToJSON,
} from './MTNHistoricalPrice';

/**
 * Wrapper containing the historial prices requests and its meta data
 * @export
 * @interface MTNHistoricalPricesPaginationDataAndMetaData
 */
export interface MTNHistoricalPricesPaginationDataAndMetaData {
    /**
     * Row based offset in any API that supports Pagination. Starts and defaults at zero.
     * @type {number}
     * @memberof MTNHistoricalPricesPaginationDataAndMetaData
     */
    offset?: number;
    /**
     * The max number of items to be returned for the Historical Prices API. Defaults at 100, and maximum at 100.
     * @type {number}
     * @memberof MTNHistoricalPricesPaginationDataAndMetaData
     */
    limit?: number;
    /**
     * The number of items in this pagination batch (the size of the items array).
     * @type {number}
     * @memberof MTNHistoricalPricesPaginationDataAndMetaData
     */
    count?: number;
    /**
     * List of historical prices requests
     * @type {Array<MTNHistoricalPrice>}
     * @memberof MTNHistoricalPricesPaginationDataAndMetaData
     */
    items?: Array<MTNHistoricalPrice>;
}

/**
 * Check if a given object implements the MTNHistoricalPricesPaginationDataAndMetaData interface.
 */
export function instanceOfMTNHistoricalPricesPaginationDataAndMetaData(value: object): boolean {
    return true;
}

export function MTNHistoricalPricesPaginationDataAndMetaDataFromJSON(json: any): MTNHistoricalPricesPaginationDataAndMetaData {
    return MTNHistoricalPricesPaginationDataAndMetaDataFromJSONTyped(json, false);
}

export function MTNHistoricalPricesPaginationDataAndMetaDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): MTNHistoricalPricesPaginationDataAndMetaData {
    if (json == null) {
        return json;
    }
    return {
        
        'offset': json['offset'] == null ? undefined : json['offset'],
        'limit': json['limit'] == null ? undefined : json['limit'],
        'count': json['count'] == null ? undefined : json['count'],
        'items': json['items'] == null ? undefined : ((json['items'] as Array<any>).map(MTNHistoricalPriceFromJSON)),
    };
}

export function MTNHistoricalPricesPaginationDataAndMetaDataToJSON(value?: MTNHistoricalPricesPaginationDataAndMetaData | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'offset': value['offset'],
        'limit': value['limit'],
        'count': value['count'],
        'items': value['items'] == null ? undefined : ((value['items'] as Array<any>).map(MTNHistoricalPriceToJSON)),
    };
}

