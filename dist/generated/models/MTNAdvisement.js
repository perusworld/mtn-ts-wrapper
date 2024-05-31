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
exports.MTNAdvisementToJSON = exports.MTNAdvisementFromJSONTyped = exports.MTNAdvisementFromJSON = exports.instanceOfMTNAdvisement = void 0;
const MTNClaim_1 = require("./MTNClaim");
const MTNObligation_1 = require("./MTNObligation");
/**
 * Check if a given object implements the MTNAdvisement interface.
 */
function instanceOfMTNAdvisement(value) {
    return true;
}
exports.instanceOfMTNAdvisement = instanceOfMTNAdvisement;
function MTNAdvisementFromJSON(json) {
    return MTNAdvisementFromJSONTyped(json, false);
}
exports.MTNAdvisementFromJSON = MTNAdvisementFromJSON;
function MTNAdvisementFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'currency': json['currency'] == null ? undefined : json['currency'],
        'totalObligations': json['totalObligations'] == null ? undefined : json['totalObligations'],
        'totalClaims': json['totalClaims'] == null ? undefined : json['totalClaims'],
        'balance': json['balance'] == null ? undefined : json['balance'],
        'obligations': json['obligations'] == null ? undefined : (json['obligations'].map(MTNObligation_1.MTNObligationFromJSON)),
        'claims': json['claims'] == null ? undefined : (json['claims'].map(MTNClaim_1.MTNClaimFromJSON)),
    };
}
exports.MTNAdvisementFromJSONTyped = MTNAdvisementFromJSONTyped;
function MTNAdvisementToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'currency': value['currency'],
        'totalObligations': value['totalObligations'],
        'totalClaims': value['totalClaims'],
        'balance': value['balance'],
        'obligations': value['obligations'] == null ? undefined : (value['obligations'].map(MTNObligation_1.MTNObligationToJSON)),
        'claims': value['claims'] == null ? undefined : (value['claims'].map(MTNClaim_1.MTNClaimToJSON)),
    };
}
exports.MTNAdvisementToJSON = MTNAdvisementToJSON;
//# sourceMappingURL=MTNAdvisement.js.map