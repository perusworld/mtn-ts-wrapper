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
import type { MTNPayout } from './MTNPayout';
import type { MTNReleaseConditions } from './MTNReleaseConditions';
/**
 * Release details in which to update or create an Earmark.
 * @export
 * @interface MTNRelease
 */
export interface MTNRelease {
    /**
     * The index triggered by the earmark.
     * @type {number}
     * @memberof MTNRelease
     */
    triggerIndex?: number;
    /**
     * Status of the release Trigger operation.
     * @type {string}
     * @memberof MTNRelease
     */
    readonly status?: string;
    /**
     * Creation datetime in ISO8601 format
     * @type {Date}
     * @memberof MTNRelease
     */
    readonly createdDate?: Date;
    /**
     * Last updated datetime in ISO8601 format
     * @type {Date}
     * @memberof MTNRelease
     */
    readonly lastUpdatedDate?: Date;
    /**
     *
     * @type {MTNReleaseConditions}
     * @memberof MTNRelease
     */
    conditions?: MTNReleaseConditions;
    /**
     * The list of payouts for each release.
     * @type {Array<MTNPayout>}
     * @memberof MTNRelease
     */
    payouts?: Array<MTNPayout>;
}
/**
 * Check if a given object implements the MTNRelease interface.
 */
export declare function instanceOfMTNRelease(value: object): boolean;
export declare function MTNReleaseFromJSON(json: any): MTNRelease;
export declare function MTNReleaseFromJSONTyped(json: any, ignoreDiscriminator: boolean): MTNRelease;
export declare function MTNReleaseToJSON(value?: Omit<MTNRelease, 'status' | 'createdDate' | 'lastUpdatedDate'> | null): any;