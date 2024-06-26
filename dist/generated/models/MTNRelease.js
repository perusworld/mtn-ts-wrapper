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
exports.MTNReleaseToJSON = exports.MTNReleaseFromJSONTyped = exports.MTNReleaseFromJSON = exports.instanceOfMTNRelease = void 0;
const MTNPayout_1 = require("./MTNPayout");
const MTNReleaseConditions_1 = require("./MTNReleaseConditions");
/**
 * Check if a given object implements the MTNRelease interface.
 */
function instanceOfMTNRelease(value) {
    return true;
}
exports.instanceOfMTNRelease = instanceOfMTNRelease;
function MTNReleaseFromJSON(json) {
    return MTNReleaseFromJSONTyped(json, false);
}
exports.MTNReleaseFromJSON = MTNReleaseFromJSON;
function MTNReleaseFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'triggerIndex': json['triggerIndex'] == null ? undefined : json['triggerIndex'],
        'status': json['status'] == null ? undefined : json['status'],
        'createdDate': json['createdDate'] == null ? undefined : (new Date(json['createdDate'])),
        'lastUpdatedDate': json['lastUpdatedDate'] == null ? undefined : (new Date(json['lastUpdatedDate'])),
        'conditions': json['conditions'] == null ? undefined : (0, MTNReleaseConditions_1.MTNReleaseConditionsFromJSON)(json['conditions']),
        'payouts': json['payouts'] == null ? undefined : (json['payouts'].map(MTNPayout_1.MTNPayoutFromJSON)),
    };
}
exports.MTNReleaseFromJSONTyped = MTNReleaseFromJSONTyped;
function MTNReleaseToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'triggerIndex': value['triggerIndex'],
        'conditions': (0, MTNReleaseConditions_1.MTNReleaseConditionsToJSON)(value['conditions']),
        'payouts': value['payouts'] == null ? undefined : (value['payouts'].map(MTNPayout_1.MTNPayoutToJSON)),
    };
}
exports.MTNReleaseToJSON = MTNReleaseToJSON;
//# sourceMappingURL=MTNRelease.js.map