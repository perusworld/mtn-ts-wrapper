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
import type { MTNPayer } from './MTNPayer';
import type { MTNRecipient } from './MTNRecipient';
import type { MTNRelease } from './MTNRelease';
import type { MTNStatusReasonInformation } from './MTNStatusReasonInformation';
/**
 *
 * @export
 * @interface MTNEarmark
 */
export interface MTNEarmark {
    /**
     * Unique Identifier for earmark
     * @type {string}
     * @memberof MTNEarmark
     */
    readonly earmarkId?: string;
    /**
     * The externalReference for Earmark
     * @type {string}
     * @memberof MTNEarmark
     */
    externalReference?: string;
    /**
     * The amount of asset.
     * @type {number}
     * @memberof MTNEarmark
     */
    amount?: number;
    /**
     * More details on the error.
     * @type {Array<MTNStatusReasonInformation>}
     * @memberof MTNEarmark
     */
    statusReasonInformation?: Array<MTNStatusReasonInformation>;
    /**
     * Status of the Earmark operation. Valid values - RECEIVED, INITIATED, RELEASE_INITIATED,READY_FOR_RELEASE, PARTIALLY_EXECUTED, EXECUTED, CANCELLING, CANCELLED, EXPIRING, EXPIRED, FAILED
     * @type {string}
     * @memberof MTNEarmark
     */
    readonly status?: string;
    /**
     * Expiry datetime in ISO8601 format.
     * @type {Date}
     * @memberof MTNEarmark
     */
    readonly expiryDate?: Date;
    /**
     * Execution datetime in ISO8601 format.
     * @type {Date}
     * @memberof MTNEarmark
     */
    readonly executionDate?: Date;
    /**
     * The type of payment instruction associated with the report.
     * @type {string}
     * @memberof MTNEarmark
     */
    type?: string;
    /**
     *
     * @type {Array<MTNPayer>}
     * @memberof MTNEarmark
     */
    payers?: Array<MTNPayer>;
    /**
     *
     * @type {Array<MTNRecipient>}
     * @memberof MTNEarmark
     */
    recipients?: Array<MTNRecipient>;
    /**
     * The list of releases in which to distribute tokens.
     * @type {Array<MTNRelease>}
     * @memberof MTNEarmark
     */
    releases?: Array<MTNRelease>;
    /**
     * Creation datetime in ISO8601 format
     * @type {Date}
     * @memberof MTNEarmark
     */
    readonly createdDate?: Date;
    /**
     * Last updated datetime in ISO8601 format
     * @type {Date}
     * @memberof MTNEarmark
     */
    readonly lastUpdatedDate?: Date;
    /**
     * The created by user username.
     * @type {string}
     * @memberof MTNEarmark
     */
    readonly createdBy?: string;
    /**
     * Last updated by username.
     * @type {string}
     * @memberof MTNEarmark
     */
    readonly lastUpdatedBy?: string;
}
/**
 * Check if a given object implements the MTNEarmark interface.
 */
export declare function instanceOfMTNEarmark(value: object): boolean;
export declare function MTNEarmarkFromJSON(json: any): MTNEarmark;
export declare function MTNEarmarkFromJSONTyped(json: any, ignoreDiscriminator: boolean): MTNEarmark;
export declare function MTNEarmarkToJSON(value?: Omit<MTNEarmark, 'earmarkId' | 'status' | 'expiryDate' | 'executionDate' | 'createdDate' | 'lastUpdatedDate' | 'createdBy' | 'lastUpdatedBy'> | null): any;