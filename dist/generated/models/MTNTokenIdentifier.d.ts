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
/**
 * A token Identifier.
 * @export
 * @interface MTNTokenIdentifier
 */
export interface MTNTokenIdentifier {
    /**
     * MTN Id of chain.
     * @type {string}
     * @memberof MTNTokenIdentifier
     */
    chainId: string;
    /**
     * Type of token identifier
     * @type {string}
     * @memberof MTNTokenIdentifier
     */
    identifierType: string;
    /**
     * Value of token identifier
     * @type {string}
     * @memberof MTNTokenIdentifier
     */
    identifierValue: string;
}
/**
 * Check if a given object implements the MTNTokenIdentifier interface.
 */
export declare function instanceOfMTNTokenIdentifier(value: object): boolean;
export declare function MTNTokenIdentifierFromJSON(json: any): MTNTokenIdentifier;
export declare function MTNTokenIdentifierFromJSONTyped(json: any, ignoreDiscriminator: boolean): MTNTokenIdentifier;
export declare function MTNTokenIdentifierToJSON(value?: MTNTokenIdentifier | null): any;
