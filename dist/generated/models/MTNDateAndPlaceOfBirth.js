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
exports.MTNDateAndPlaceOfBirthToJSON = exports.MTNDateAndPlaceOfBirthFromJSONTyped = exports.MTNDateAndPlaceOfBirthFromJSON = exports.instanceOfMTNDateAndPlaceOfBirth = void 0;
/**
 * Check if a given object implements the MTNDateAndPlaceOfBirth interface.
 */
function instanceOfMTNDateAndPlaceOfBirth(value) {
    return true;
}
exports.instanceOfMTNDateAndPlaceOfBirth = instanceOfMTNDateAndPlaceOfBirth;
function MTNDateAndPlaceOfBirthFromJSON(json) {
    return MTNDateAndPlaceOfBirthFromJSONTyped(json, false);
}
exports.MTNDateAndPlaceOfBirthFromJSON = MTNDateAndPlaceOfBirthFromJSON;
function MTNDateAndPlaceOfBirthFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'dateOfBirth': json['dateOfBirth'] == null ? undefined : json['dateOfBirth'],
        'placeOfBirth': json['placeOfBirth'] == null ? undefined : json['placeOfBirth'],
    };
}
exports.MTNDateAndPlaceOfBirthFromJSONTyped = MTNDateAndPlaceOfBirthFromJSONTyped;
function MTNDateAndPlaceOfBirthToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'dateOfBirth': value['dateOfBirth'],
        'placeOfBirth': value['placeOfBirth'],
    };
}
exports.MTNDateAndPlaceOfBirthToJSON = MTNDateAndPlaceOfBirthToJSON;
//# sourceMappingURL=MTNDateAndPlaceOfBirth.js.map