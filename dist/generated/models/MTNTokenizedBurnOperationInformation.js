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
exports.MTNTokenizedBurnOperationInformationToJSON = exports.MTNTokenizedBurnOperationInformationFromJSONTyped = exports.MTNTokenizedBurnOperationInformationFromJSON = exports.instanceOfMTNTokenizedBurnOperationInformation = void 0;
const MTNTokenizedDepositOperationInformation_1 = require("./MTNTokenizedDepositOperationInformation");
/**
 * Check if a given object implements the MTNTokenizedBurnOperationInformation interface.
 */
function instanceOfMTNTokenizedBurnOperationInformation(value) {
    return true;
}
exports.instanceOfMTNTokenizedBurnOperationInformation = instanceOfMTNTokenizedBurnOperationInformation;
function MTNTokenizedBurnOperationInformationFromJSON(json) {
    return MTNTokenizedBurnOperationInformationFromJSONTyped(json, false);
}
exports.MTNTokenizedBurnOperationInformationFromJSON = MTNTokenizedBurnOperationInformationFromJSON;
function MTNTokenizedBurnOperationInformationFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return Object.assign(Object.assign({}, (0, MTNTokenizedDepositOperationInformation_1.MTNTokenizedDepositOperationInformationFromJSONTyped)(json, ignoreDiscriminator)), { 'amount': json['amount'] == null ? undefined : json['amount'], 'from': json['from'] == null ? undefined : json['from'] });
}
exports.MTNTokenizedBurnOperationInformationFromJSONTyped = MTNTokenizedBurnOperationInformationFromJSONTyped;
function MTNTokenizedBurnOperationInformationToJSON(value) {
    if (value == null) {
        return value;
    }
    return Object.assign(Object.assign({}, (0, MTNTokenizedDepositOperationInformation_1.MTNTokenizedDepositOperationInformationToJSON)(value)), { 'amount': value['amount'], 'from': value['from'] });
}
exports.MTNTokenizedBurnOperationInformationToJSON = MTNTokenizedBurnOperationInformationToJSON;
//# sourceMappingURL=MTNTokenizedBurnOperationInformation.js.map