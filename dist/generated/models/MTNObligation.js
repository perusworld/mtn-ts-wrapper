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
exports.MTNObligationToJSON = exports.MTNObligationFromJSONTyped = exports.MTNObligationFromJSON = exports.instanceOfMTNObligation = void 0;
/**
 * Check if a given object implements the MTNObligation interface.
 */
function instanceOfMTNObligation(value) {
    return true;
}
exports.instanceOfMTNObligation = instanceOfMTNObligation;
function MTNObligationFromJSON(json) {
    return MTNObligationFromJSONTyped(json, false);
}
exports.MTNObligationFromJSON = MTNObligationFromJSON;
function MTNObligationFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'bank': json['bank'] == null ? undefined : json['bank'],
        'ica': json['ica'] == null ? undefined : json['ica'],
        'amount': json['amount'] == null ? undefined : json['amount'],
    };
}
exports.MTNObligationFromJSONTyped = MTNObligationFromJSONTyped;
function MTNObligationToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'bank': value['bank'],
        'ica': value['ica'],
        'amount': value['amount'],
    };
}
exports.MTNObligationToJSON = MTNObligationToJSON;
//# sourceMappingURL=MTNObligation.js.map