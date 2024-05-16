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
/**
 * A Cotp beneficiary information.
 * @export
 * @interface MTNInformation
 */
export interface MTNInformation {
    /**
     * A Cotp first name.
     * @type {string}
     * @memberof MTNInformation
     */
    firstName?: string;
    /**
     * A Cotp last name.
     * @type {string}
     * @memberof MTNInformation
     */
    lastName?: string;
    /**
     * A Cotp match type
     * @type {string}
     * @memberof MTNInformation
     */
    matchType?: string;
}
/**
 * Check if a given object implements the MTNInformation interface.
 */
export declare function instanceOfMTNInformation(value: object): boolean;
export declare function MTNInformationFromJSON(json: any): MTNInformation;
export declare function MTNInformationFromJSONTyped(json: any, ignoreDiscriminator: boolean): MTNInformation;
export declare function MTNInformationToJSON(value?: MTNInformation | null): any;
