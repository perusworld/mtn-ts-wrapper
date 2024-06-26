"use strict";
/* tslint:disable */
/* eslint-disable */
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.MTNPriceToJSON = exports.MTNPriceFromJSONTyped = exports.MTNPriceFromJSON = exports.instanceOfMTNPrice = void 0;
/**
 * Check if a given object implements the MTNPrice interface.
 */
function instanceOfMTNPrice(value) {
    return true;
}
exports.instanceOfMTNPrice = instanceOfMTNPrice;
function MTNPriceFromJSON(json) {
    return MTNPriceFromJSONTyped(json, false);
}
exports.MTNPriceFromJSON = MTNPriceFromJSON;
function MTNPriceFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'asset': json['asset'] == null ? undefined : json['asset'],
        'currency': json['currency'] == null ? undefined : json['currency'],
        'bidPrice': json['bidPrice'] == null ? undefined : json['bidPrice'],
        'askPrice': json['askPrice'] == null ? undefined : json['askPrice'],
    };
}
exports.MTNPriceFromJSONTyped = MTNPriceFromJSONTyped;
function MTNPriceToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'asset': value['asset'],
        'currency': value['currency'],
    };
}
exports.MTNPriceToJSON = MTNPriceToJSON;
//# sourceMappingURL=MTNPrice.js.map