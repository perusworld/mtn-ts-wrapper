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
import type { MTNReportPaginationDataAndMetaData } from './MTNReportPaginationDataAndMetaData';
/**
 *
 * @export
 * @interface MTNReports
 */
export interface MTNReports {
    /**
     *
     * @type {MTNReportPaginationDataAndMetaData}
     * @memberof MTNReports
     */
    data?: MTNReportPaginationDataAndMetaData;
}
/**
 * Check if a given object implements the MTNReports interface.
 */
export declare function instanceOfMTNReports(value: object): boolean;
export declare function MTNReportsFromJSON(json: any): MTNReports;
export declare function MTNReportsFromJSONTyped(json: any, ignoreDiscriminator: boolean): MTNReports;
export declare function MTNReportsToJSON(value?: MTNReports | null): any;
