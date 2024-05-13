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
exports.MTNErrorToJSON = exports.MTNErrorFromJSONTyped = exports.MTNErrorFromJSON = exports.instanceOfMTNError = void 0;
/**
 * Check if a given object implements the MTNError interface.
 */
function instanceOfMTNError(value) {
    return true;
}
exports.instanceOfMTNError = instanceOfMTNError;
function MTNErrorFromJSON(json) {
    return MTNErrorFromJSONTyped(json, false);
}
exports.MTNErrorFromJSON = MTNErrorFromJSON;
function MTNErrorFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'description': json['Description'] == null ? undefined : json['Description'],
        'details': json['Details'] == null ? undefined : json['Details'],
        'reasonCode': json['ReasonCode'] == null ? undefined : json['ReasonCode'],
        'recoverable': json['Recoverable'] == null ? undefined : json['Recoverable'],
        'source': json['Source'] == null ? undefined : json['Source'],
    };
}
exports.MTNErrorFromJSONTyped = MTNErrorFromJSONTyped;
function MTNErrorToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'Description': value['description'],
        'Details': value['details'],
        'ReasonCode': value['reasonCode'],
        'Recoverable': value['recoverable'],
        'Source': value['source'],
    };
}
exports.MTNErrorToJSON = MTNErrorToJSON;
//# sourceMappingURL=MTNError.js.map