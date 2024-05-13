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
 * A List of Errors resulting from a request
 * @export
 * @interface MTNError
 */
export interface MTNError {
    /**
     * Further details on what caused the error
     * @type {string}
     * @memberof MTNError
     */
    description?: string;
    /**
     * Details of exact location of Error in the service and/or identifiers for tracing the request
     * @type {string}
     * @memberof MTNError
     */
    details?: string;
    /**
     * Code that identifies the Error
     * @type {string}
     * @memberof MTNError
     */
    reasonCode?: string;
    /**
     * Describes if a request is able to continue after Error
     * @type {boolean}
     * @memberof MTNError
     */
    recoverable?: boolean;
    /**
     * Identifies the service where the Error occurred
     * @type {string}
     * @memberof MTNError
     */
    source?: string;
}
/**
 * Check if a given object implements the MTNError interface.
 */
export declare function instanceOfMTNError(value: object): boolean;
export declare function MTNErrorFromJSON(json: any): MTNError;
export declare function MTNErrorFromJSONTyped(json: any, ignoreDiscriminator: boolean): MTNError;
export declare function MTNErrorToJSON(value?: MTNError | null): any;
