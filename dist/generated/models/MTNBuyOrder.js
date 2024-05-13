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
exports.MTNBuyOrderToJSON = exports.MTNBuyOrderFromJSONTyped = exports.MTNBuyOrderFromJSON = exports.instanceOfMTNBuyOrder = void 0;
/**
 * Check if a given object implements the MTNBuyOrder interface.
 */
function instanceOfMTNBuyOrder(value) {
    return true;
}
exports.instanceOfMTNBuyOrder = instanceOfMTNBuyOrder;
function MTNBuyOrderFromJSON(json) {
    return MTNBuyOrderFromJSONTyped(json, false);
}
exports.MTNBuyOrderFromJSON = MTNBuyOrderFromJSON;
function MTNBuyOrderFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'asset': json['asset'] == null ? undefined : json['asset'],
        'currency': json['currency'] == null ? undefined : json['currency'],
        'amount': json['amount'] == null ? undefined : json['amount'],
        'quantity': json['quantity'] == null ? undefined : json['quantity'],
        'price': json['price'] == null ? undefined : json['price'],
    };
}
exports.MTNBuyOrderFromJSONTyped = MTNBuyOrderFromJSONTyped;
function MTNBuyOrderToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'asset': value['asset'],
        'currency': value['currency'],
        'amount': value['amount'],
    };
}
exports.MTNBuyOrderToJSON = MTNBuyOrderToJSON;
//# sourceMappingURL=MTNBuyOrder.js.map