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
 * Create Fiat Withdrawal Request Object.
 * @export
 * @interface MTNCreateFiatWithdrawal
 */
export interface MTNCreateFiatWithdrawal {
    /**
     * An external Fiat Withdrawal identifier provided by the customer.
     * @type {string}
     * @memberof MTNCreateFiatWithdrawal
     */
    externalReference?: string;
    /**
     * The amount of the asset (fiat) to spend or acquire using the specified amount. The maximum precision is 8 decimals.
     * @type {number}
     * @memberof MTNCreateFiatWithdrawal
     */
    amount: number;
    /**
     * Currency Code of funding account in service provider system . Valid values - USD
     * @type {string}
     * @memberof MTNCreateFiatWithdrawal
     */
    fundingCurrency: string;
}
/**
 * Check if a given object implements the MTNCreateFiatWithdrawal interface.
 */
export declare function instanceOfMTNCreateFiatWithdrawal(value: object): boolean;
export declare function MTNCreateFiatWithdrawalFromJSON(json: any): MTNCreateFiatWithdrawal;
export declare function MTNCreateFiatWithdrawalFromJSONTyped(json: any, ignoreDiscriminator: boolean): MTNCreateFiatWithdrawal;
export declare function MTNCreateFiatWithdrawalToJSON(value?: MTNCreateFiatWithdrawal | null): any;
