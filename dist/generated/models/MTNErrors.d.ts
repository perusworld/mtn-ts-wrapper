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
 *
 * @export
 * @interface MTNErrors
 */
export interface MTNErrors {
    /**
     * A List of Errors resulting from a request
     * @type {Array<Error>}
     * @memberof MTNErrors
     */
    error: Array<Error>;
}
/**
 * Check if a given object implements the MTNErrors interface.
 */
export declare function instanceOfMTNErrors(value: object): boolean;
export declare function MTNErrorsFromJSON(json: any): MTNErrors;
export declare function MTNErrorsFromJSONTyped(json: any, ignoreDiscriminator: boolean): MTNErrors;
export declare function MTNErrorsToJSON(value?: MTNErrors | null): any;