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
exports.MTNReleaseConditionsToJSON = exports.MTNReleaseConditionsFromJSONTyped = exports.MTNReleaseConditionsFromJSON = exports.instanceOfMTNReleaseConditions = void 0;
/**
 * Check if a given object implements the MTNReleaseConditions interface.
 */
function instanceOfMTNReleaseConditions(value) {
    return true;
}
exports.instanceOfMTNReleaseConditions = instanceOfMTNReleaseConditions;
function MTNReleaseConditionsFromJSON(json) {
    return MTNReleaseConditionsFromJSONTyped(json, false);
}
exports.MTNReleaseConditionsFromJSON = MTNReleaseConditionsFromJSON;
function MTNReleaseConditionsFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'executionDate': json['executionDate'] == null ? undefined : (new Date(json['executionDate'])),
    };
}
exports.MTNReleaseConditionsFromJSONTyped = MTNReleaseConditionsFromJSONTyped;
function MTNReleaseConditionsToJSON(value) {
    if (value == null) {
        return value;
    }
    return {};
}
exports.MTNReleaseConditionsToJSON = MTNReleaseConditionsToJSON;
//# sourceMappingURL=MTNReleaseConditions.js.map