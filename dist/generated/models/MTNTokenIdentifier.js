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
exports.MTNTokenIdentifierToJSON = exports.MTNTokenIdentifierFromJSONTyped = exports.MTNTokenIdentifierFromJSON = exports.instanceOfMTNTokenIdentifier = void 0;
/**
 * Check if a given object implements the MTNTokenIdentifier interface.
 */
function instanceOfMTNTokenIdentifier(value) {
    if (!('chainId' in value))
        return false;
    if (!('identifierType' in value))
        return false;
    if (!('identifierValue' in value))
        return false;
    return true;
}
exports.instanceOfMTNTokenIdentifier = instanceOfMTNTokenIdentifier;
function MTNTokenIdentifierFromJSON(json) {
    return MTNTokenIdentifierFromJSONTyped(json, false);
}
exports.MTNTokenIdentifierFromJSON = MTNTokenIdentifierFromJSON;
function MTNTokenIdentifierFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'chainId': json['chainId'],
        'identifierType': json['identifierType'],
        'identifierValue': json['identifierValue'],
    };
}
exports.MTNTokenIdentifierFromJSONTyped = MTNTokenIdentifierFromJSONTyped;
function MTNTokenIdentifierToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'chainId': value['chainId'],
        'identifierType': value['identifierType'],
        'identifierValue': value['identifierValue'],
    };
}
exports.MTNTokenIdentifierToJSON = MTNTokenIdentifierToJSON;
//# sourceMappingURL=MTNTokenIdentifier.js.map