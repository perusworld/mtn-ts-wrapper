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
exports.MTNBurnOperationToJSON = exports.MTNBurnOperationFromJSONTyped = exports.MTNBurnOperationFromJSON = exports.instanceOfMTNBurnOperation = void 0;
const MTNTokenOperation_1 = require("./MTNTokenOperation");
/**
 * Check if a given object implements the MTNBurnOperation interface.
 */
function instanceOfMTNBurnOperation(value) {
    if (!('amount' in value))
        return false;
    if (!('from' in value))
        return false;
    return true;
}
exports.instanceOfMTNBurnOperation = instanceOfMTNBurnOperation;
function MTNBurnOperationFromJSON(json) {
    return MTNBurnOperationFromJSONTyped(json, false);
}
exports.MTNBurnOperationFromJSON = MTNBurnOperationFromJSON;
function MTNBurnOperationFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return Object.assign(Object.assign({}, (0, MTNTokenOperation_1.MTNTokenOperationFromJSONTyped)(json, ignoreDiscriminator)), { 'amount': json['amount'], 'from': json['from'] });
}
exports.MTNBurnOperationFromJSONTyped = MTNBurnOperationFromJSONTyped;
function MTNBurnOperationToJSON(value) {
    if (value == null) {
        return value;
    }
    return Object.assign(Object.assign({}, (0, MTNTokenOperation_1.MTNTokenOperationToJSON)(value)), { 'amount': value['amount'], 'from': value['from'] });
}
exports.MTNBurnOperationToJSON = MTNBurnOperationToJSON;
//# sourceMappingURL=MTNBurnOperation.js.map