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
import type { MTNP2PInstruction } from './MTNP2PInstruction';
/**
 * Wrapper containing the P2P instruction requests and its meta data
 * @export
 * @interface MTNP2PInstructionPaginationDataAndMetaData
 */
export interface MTNP2PInstructionPaginationDataAndMetaData {
    /**
     * Row based offset in any API that supports Pagination. Starts and defaults at zero.
     * @type {number}
     * @memberof MTNP2PInstructionPaginationDataAndMetaData
     */
    offset?: number;
    /**
     * The max number of items to be returned in any API calls that supports Pagination. Defaults at 25, and maximum at 500.
     * @type {number}
     * @memberof MTNP2PInstructionPaginationDataAndMetaData
     */
    limit?: number;
    /**
     * The number of items in this pagination batch (the size of the items array).
     * @type {number}
     * @memberof MTNP2PInstructionPaginationDataAndMetaData
     */
    count?: number;
    /**
     * The grand total number of items in the whole pagination context. This number is affected by any filters that was applied.
     * @type {number}
     * @memberof MTNP2PInstructionPaginationDataAndMetaData
     */
    total?: number;
    /**
     * List of P2P instruction requests
     * @type {Array<MTNP2PInstruction>}
     * @memberof MTNP2PInstructionPaginationDataAndMetaData
     */
    items?: Array<MTNP2PInstruction>;
}
/**
 * Check if a given object implements the MTNP2PInstructionPaginationDataAndMetaData interface.
 */
export declare function instanceOfMTNP2PInstructionPaginationDataAndMetaData(value: object): boolean;
export declare function MTNP2PInstructionPaginationDataAndMetaDataFromJSON(json: any): MTNP2PInstructionPaginationDataAndMetaData;
export declare function MTNP2PInstructionPaginationDataAndMetaDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): MTNP2PInstructionPaginationDataAndMetaData;
export declare function MTNP2PInstructionPaginationDataAndMetaDataToJSON(value?: MTNP2PInstructionPaginationDataAndMetaData | null): any;
