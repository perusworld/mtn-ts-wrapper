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
 * A Quote Order made with an Account
 * @export
 * @interface MTNQuoteOrder
 */
export interface MTNQuoteOrder {
    /**
     * The ID of the quote used to create this order execution
     * @type {string}
     * @memberof MTNQuoteOrder
     */
    id?: string;
    /**
     * The guaranteed price of the quote.
     * @type {number}
     * @memberof MTNQuoteOrder
     */
    readonly price?: number;
    /**
     * The amount of assets (crypto) in the transaction. The maximum precision is 8 decimals.
     * @type {number}
     * @memberof MTNQuoteOrder
     */
    quantity?: number;
    /**
     * An Asset that can be hold in an account.
     * @type {string}
     * @memberof MTNQuoteOrder
     */
    asset?: string;
    /**
     * The amount of the asset (fiat) to spend or acquire using the specified amount. The maximum precision is 2 decimals for buy quote order.
     * @type {number}
     * @memberof MTNQuoteOrder
     */
    amount?: number;
    /**
     * The base currency for any order.
     * @type {string}
     * @memberof MTNQuoteOrder
     */
    currency?: string;
    /**
     * Creation datetime in ISO8601 format
     * @type {Date}
     * @memberof MTNQuoteOrder
     */
    readonly createdDate?: Date;
    /**
     * Expire datetime in ISO8601 format
     * @type {Date}
     * @memberof MTNQuoteOrder
     */
    readonly expiryDate?: Date;
}
/**
 * Check if a given object implements the MTNQuoteOrder interface.
 */
export declare function instanceOfMTNQuoteOrder(value: object): boolean;
export declare function MTNQuoteOrderFromJSON(json: any): MTNQuoteOrder;
export declare function MTNQuoteOrderFromJSONTyped(json: any, ignoreDiscriminator: boolean): MTNQuoteOrder;
export declare function MTNQuoteOrderToJSON(value?: Omit<MTNQuoteOrder, 'price' | 'createdDate' | 'expiryDate'> | null): any;
