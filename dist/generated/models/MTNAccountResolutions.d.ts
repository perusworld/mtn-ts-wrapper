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
import type { MTNAccountResolutionPaginationDataAndMetaData } from './MTNAccountResolutionPaginationDataAndMetaData';
/**
 * Contains the response of the GET all api endpoint
 * @export
 * @interface MTNAccountResolutions
 */
export interface MTNAccountResolutions {
    /**
     *
     * @type {MTNAccountResolutionPaginationDataAndMetaData}
     * @memberof MTNAccountResolutions
     */
    data?: MTNAccountResolutionPaginationDataAndMetaData;
}
/**
 * Check if a given object implements the MTNAccountResolutions interface.
 */
export declare function instanceOfMTNAccountResolutions(value: object): boolean;
export declare function MTNAccountResolutionsFromJSON(json: any): MTNAccountResolutions;
export declare function MTNAccountResolutionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): MTNAccountResolutions;
export declare function MTNAccountResolutionsToJSON(value?: MTNAccountResolutions | null): any;
