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
exports.MTNSettlementAdvisementToJSON = exports.MTNSettlementAdvisementFromJSONTyped = exports.MTNSettlementAdvisementFromJSON = exports.instanceOfMTNSettlementAdvisement = void 0;
const MTNAdvisement_1 = require("./MTNAdvisement");
/**
 * Check if a given object implements the MTNSettlementAdvisement interface.
 */
function instanceOfMTNSettlementAdvisement(value) {
    return true;
}
exports.instanceOfMTNSettlementAdvisement = instanceOfMTNSettlementAdvisement;
function MTNSettlementAdvisementFromJSON(json) {
    return MTNSettlementAdvisementFromJSONTyped(json, false);
}
exports.MTNSettlementAdvisementFromJSON = MTNSettlementAdvisementFromJSON;
function MTNSettlementAdvisementFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'advisementDate': json['advisementDate'] == null ? undefined : (new Date(json['advisementDate'])),
        'advisements': json['advisements'] == null ? undefined : (json['advisements'].map(MTNAdvisement_1.MTNAdvisementFromJSON)),
    };
}
exports.MTNSettlementAdvisementFromJSONTyped = MTNSettlementAdvisementFromJSONTyped;
function MTNSettlementAdvisementToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'advisements': value['advisements'] == null ? undefined : (value['advisements'].map(MTNAdvisement_1.MTNAdvisementToJSON)),
    };
}
exports.MTNSettlementAdvisementToJSON = MTNSettlementAdvisementToJSON;
//# sourceMappingURL=MTNSettlementAdvisement.js.map