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
 * Quote details for provided quote request.
 * @export
 * @interface MTNQuote
 */
export interface MTNQuote {
    /**
     * An Asset that can be hold in an account.
     * @type {string}
     * @memberof MTNQuote
     */
    asset?: string;
    /**
     * The base currency for any order.
     * @type {string}
     * @memberof MTNQuote
     */
    currency?: string;
    /**
     * This amount (in given currency) spend to BUY asset at latest quote price.
     * @type {number}
     * @memberof MTNQuote
     */
    amount?: number;
    /**
     * This quantity of asset (crypto) spend to SELL at latest quote price.
     * @type {number}
     * @memberof MTNQuote
     */
    quantity?: number;
    /**
     * ID for a Quote
     * @type {string}
     * @memberof MTNQuote
     */
    id?: string;
    /**
     * Side of the order (buy/sell)
     * @type {string}
     * @memberof MTNQuote
     */
    side?: string;
    /**
     * The guaranteed price, held until expiryDate.
     * @type {number}
     * @memberof MTNQuote
     */
    price?: number;
    /**
     * Creation datetime in ISO8601 format
     * @type {Date}
     * @memberof MTNQuote
     */
    readonly createdDate?: Date;
    /**
     * Expire datetime in ISO8601 format
     * @type {Date}
     * @memberof MTNQuote
     */
    readonly expiryDate?: Date;
}
/**
 * Check if a given object implements the MTNQuote interface.
 */
export declare function instanceOfMTNQuote(value: object): boolean;
export declare function MTNQuoteFromJSON(json: any): MTNQuote;
export declare function MTNQuoteFromJSONTyped(json: any, ignoreDiscriminator: boolean): MTNQuote;
export declare function MTNQuoteToJSON(value?: Omit<MTNQuote, 'createdDate' | 'expiryDate'> | null): any;
