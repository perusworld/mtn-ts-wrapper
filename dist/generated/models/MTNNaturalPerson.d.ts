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
import type { MTNName } from './MTNName';
/**
 *
 * @export
 * @interface MTNNaturalPerson
 */
export interface MTNNaturalPerson {
    /**
     *
     * @type {MTNName}
     * @memberof MTNNaturalPerson
     */
    name?: MTNName;
}
/**
 * Check if a given object implements the MTNNaturalPerson interface.
 */
export declare function instanceOfMTNNaturalPerson(value: object): boolean;
export declare function MTNNaturalPersonFromJSON(json: any): MTNNaturalPerson;
export declare function MTNNaturalPersonFromJSONTyped(json: any, ignoreDiscriminator: boolean): MTNNaturalPerson;
export declare function MTNNaturalPersonToJSON(value?: MTNNaturalPerson | null): any;