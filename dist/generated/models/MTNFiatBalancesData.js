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
exports.MTNFiatBalancesDataToJSON = exports.MTNFiatBalancesDataFromJSONTyped = exports.MTNFiatBalancesDataFromJSON = exports.instanceOfMTNFiatBalancesData = void 0;
const MTNAccountBalance_1 = require("./MTNAccountBalance");
/**
 * Check if a given object implements the MTNFiatBalancesData interface.
 */
function instanceOfMTNFiatBalancesData(value) {
    return true;
}
exports.instanceOfMTNFiatBalancesData = instanceOfMTNFiatBalancesData;
function MTNFiatBalancesDataFromJSON(json) {
    return MTNFiatBalancesDataFromJSONTyped(json, false);
}
exports.MTNFiatBalancesDataFromJSON = MTNFiatBalancesDataFromJSON;
function MTNFiatBalancesDataFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'count': json['count'] == null ? undefined : json['count'],
        'items': json['items'] == null ? undefined : (json['items'].map(MTNAccountBalance_1.MTNAccountBalanceFromJSON)),
    };
}
exports.MTNFiatBalancesDataFromJSONTyped = MTNFiatBalancesDataFromJSONTyped;
function MTNFiatBalancesDataToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'count': value['count'],
        'items': value['items'] == null ? undefined : (value['items'].map(MTNAccountBalance_1.MTNAccountBalanceToJSON)),
    };
}
exports.MTNFiatBalancesDataToJSON = MTNFiatBalancesDataToJSON;
//# sourceMappingURL=MTNFiatBalancesData.js.map