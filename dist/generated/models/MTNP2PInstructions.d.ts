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
import type { MTNP2PInstructionPaginationDataAndMetaData } from './MTNP2PInstructionPaginationDataAndMetaData';
/**
 * Contains the response of the GET all api endpoint
 * @export
 * @interface MTNP2PInstructions
 */
export interface MTNP2PInstructions {
    /**
     *
     * @type {MTNP2PInstructionPaginationDataAndMetaData}
     * @memberof MTNP2PInstructions
     */
    data?: MTNP2PInstructionPaginationDataAndMetaData;
}
/**
 * Check if a given object implements the MTNP2PInstructions interface.
 */
export declare function instanceOfMTNP2PInstructions(value: object): boolean;
export declare function MTNP2PInstructionsFromJSON(json: any): MTNP2PInstructions;
export declare function MTNP2PInstructionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): MTNP2PInstructions;
export declare function MTNP2PInstructionsToJSON(value?: MTNP2PInstructions | null): any;
