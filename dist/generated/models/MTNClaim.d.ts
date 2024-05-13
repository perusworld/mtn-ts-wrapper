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
 * A currency claim to a certain bank.
 * @export
 * @interface MTNClaim
 */
export interface MTNClaim {
    /**
     * Name of the bank involved in the claim.
     * @type {string}
     * @memberof MTNClaim
     */
    bank?: string;
    /**
     * Unique identifier for the bank involved in the claim.
     * @type {string}
     * @memberof MTNClaim
     */
    ica?: string;
    /**
     * The claim amount of the settlement.
     * @type {number}
     * @memberof MTNClaim
     */
    amount?: number;
}
/**
 * Check if a given object implements the MTNClaim interface.
 */
export declare function instanceOfMTNClaim(value: object): boolean;
export declare function MTNClaimFromJSON(json: any): MTNClaim;
export declare function MTNClaimFromJSONTyped(json: any, ignoreDiscriminator: boolean): MTNClaim;
export declare function MTNClaimToJSON(value?: MTNClaim | null): any;
