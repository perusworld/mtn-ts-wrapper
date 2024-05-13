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
 * A currency obligation to a certain bank.
 * @export
 * @interface MTNObligation
 */
export interface MTNObligation {
    /**
     * Name of the bank involved in the obligation.
     * @type {string}
     * @memberof MTNObligation
     */
    bank?: string;
    /**
     * Unique identifier for the bank involved in the obligation.
     * @type {string}
     * @memberof MTNObligation
     */
    ica?: string;
    /**
     * The obligation amount of the settlement.
     * @type {number}
     * @memberof MTNObligation
     */
    amount?: number;
}
/**
 * Check if a given object implements the MTNObligation interface.
 */
export declare function instanceOfMTNObligation(value: object): boolean;
export declare function MTNObligationFromJSON(json: any): MTNObligation;
export declare function MTNObligationFromJSONTyped(json: any, ignoreDiscriminator: boolean): MTNObligation;
export declare function MTNObligationToJSON(value?: MTNObligation | null): any;