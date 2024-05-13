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
exports.MTNNameIdentifierToJSON = exports.MTNNameIdentifierFromJSONTyped = exports.MTNNameIdentifierFromJSON = exports.instanceOfMTNNameIdentifier = void 0;
/**
 * Check if a given object implements the MTNNameIdentifier interface.
 */
function instanceOfMTNNameIdentifier(value) {
    return true;
}
exports.instanceOfMTNNameIdentifier = instanceOfMTNNameIdentifier;
function MTNNameIdentifierFromJSON(json) {
    return MTNNameIdentifierFromJSONTyped(json, false);
}
exports.MTNNameIdentifierFromJSON = MTNNameIdentifierFromJSON;
function MTNNameIdentifierFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'primaryIdentifier': json['primaryIdentifier'] == null ? undefined : json['primaryIdentifier'],
        'secondaryIdentifier': json['secondaryIdentifier'] == null ? undefined : json['secondaryIdentifier'],
        'nameIdentifierType': json['nameIdentifierType'] == null ? undefined : json['nameIdentifierType'],
    };
}
exports.MTNNameIdentifierFromJSONTyped = MTNNameIdentifierFromJSONTyped;
function MTNNameIdentifierToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'primaryIdentifier': value['primaryIdentifier'],
        'secondaryIdentifier': value['secondaryIdentifier'],
        'nameIdentifierType': value['nameIdentifierType'],
    };
}
exports.MTNNameIdentifierToJSON = MTNNameIdentifierToJSON;
//# sourceMappingURL=MTNNameIdentifier.js.map