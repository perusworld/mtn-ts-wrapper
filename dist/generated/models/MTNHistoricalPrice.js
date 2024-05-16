"use strict";
/* tslint:disable */
/* eslint-disable */
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.MTNHistoricalPriceToJSON = exports.MTNHistoricalPriceFromJSONTyped = exports.MTNHistoricalPriceFromJSON = exports.instanceOfMTNHistoricalPrice = void 0;
/**
 * Check if a given object implements the MTNHistoricalPrice interface.
 */
function instanceOfMTNHistoricalPrice(value) {
    return true;
}
exports.instanceOfMTNHistoricalPrice = instanceOfMTNHistoricalPrice;
function MTNHistoricalPriceFromJSON(json) {
    return MTNHistoricalPriceFromJSONTyped(json, false);
}
exports.MTNHistoricalPriceFromJSON = MTNHistoricalPriceFromJSON;
function MTNHistoricalPriceFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'averagePrice': json['averagePrice'] == null ? undefined : json['averagePrice'],
        'timestamp': json['timestamp'] == null ? undefined : (new Date(json['timestamp'])),
    };
}
exports.MTNHistoricalPriceFromJSONTyped = MTNHistoricalPriceFromJSONTyped;
function MTNHistoricalPriceToJSON(value) {
    if (value == null) {
        return value;
    }
    return {};
}
exports.MTNHistoricalPriceToJSON = MTNHistoricalPriceToJSON;
//# sourceMappingURL=MTNHistoricalPrice.js.map