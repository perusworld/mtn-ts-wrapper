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
 * Deposit for an Earmark.
 * @export
 * @interface MTNDeposit
 */
export interface MTNDeposit {
    /**
     * The amount of asset.
     * @type {number}
     * @memberof MTNDeposit
     */
    amount?: number;
    /**
     * Status of the Earmark operation.
     * @type {string}
     * @memberof MTNDeposit
     */
    readonly status?: string;
    /**
     * Creation datetime in ISO8601 format
     * @type {Date}
     * @memberof MTNDeposit
     */
    readonly createdDate?: Date;
    /**
     * Last updated datetime in ISO8601 format
     * @type {Date}
     * @memberof MTNDeposit
     */
    readonly lastUpdatedDate?: Date;
}
/**
 * Check if a given object implements the MTNDeposit interface.
 */
export declare function instanceOfMTNDeposit(value: object): boolean;
export declare function MTNDepositFromJSON(json: any): MTNDeposit;
export declare function MTNDepositFromJSONTyped(json: any, ignoreDiscriminator: boolean): MTNDeposit;
export declare function MTNDepositToJSON(value?: Omit<MTNDeposit, 'status' | 'createdDate' | 'lastUpdatedDate'> | null): any;
