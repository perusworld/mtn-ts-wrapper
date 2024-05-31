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
exports.MTNErrorResponseToJSON = exports.MTNErrorResponseFromJSONTyped = exports.MTNErrorResponseFromJSON = exports.instanceOfMTNErrorResponse = void 0;
const MTNErrors_1 = require("./MTNErrors");
/**
 * Check if a given object implements the MTNErrorResponse interface.
 */
function instanceOfMTNErrorResponse(value) {
    if (!('errors' in value))
        return false;
    return true;
}
exports.instanceOfMTNErrorResponse = instanceOfMTNErrorResponse;
function MTNErrorResponseFromJSON(json) {
    return MTNErrorResponseFromJSONTyped(json, false);
}
exports.MTNErrorResponseFromJSON = MTNErrorResponseFromJSON;
function MTNErrorResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'errors': (0, MTNErrors_1.MTNErrorsFromJSON)(json['Errors']),
    };
}
exports.MTNErrorResponseFromJSONTyped = MTNErrorResponseFromJSONTyped;
function MTNErrorResponseToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'Errors': (0, MTNErrors_1.MTNErrorsToJSON)(value['errors']),
    };
}
exports.MTNErrorResponseToJSON = MTNErrorResponseToJSON;
//# sourceMappingURL=MTNErrorResponse.js.map