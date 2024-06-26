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
exports.MTNBlockchainTransactionToJSON = exports.MTNBlockchainTransactionFromJSONTyped = exports.MTNBlockchainTransactionFromJSON = exports.instanceOfMTNBlockchainTransaction = void 0;
const MTNStatusReasonInformation_1 = require("./MTNStatusReasonInformation");
/**
 * Check if a given object implements the MTNBlockchainTransaction interface.
 */
function instanceOfMTNBlockchainTransaction(value) {
    return true;
}
exports.instanceOfMTNBlockchainTransaction = instanceOfMTNBlockchainTransaction;
function MTNBlockchainTransactionFromJSON(json) {
    return MTNBlockchainTransactionFromJSONTyped(json, false);
}
exports.MTNBlockchainTransactionFromJSON = MTNBlockchainTransactionFromJSON;
function MTNBlockchainTransactionFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'blockchainTransactionId': json['blockchainTransactionId'] == null ? undefined : json['blockchainTransactionId'],
        'transactionHash': json['transactionHash'] == null ? undefined : json['transactionHash'],
        'blockNumber': json['blockNumber'] == null ? undefined : json['blockNumber'],
        'functionName': json['functionName'] == null ? undefined : json['functionName'],
        'status': json['status'] == null ? undefined : json['status'],
        'statusReasonInformation': json['statusReasonInformation'] == null ? undefined : (json['statusReasonInformation'].map(MTNStatusReasonInformation_1.MTNStatusReasonInformationFromJSON)),
    };
}
exports.MTNBlockchainTransactionFromJSONTyped = MTNBlockchainTransactionFromJSONTyped;
function MTNBlockchainTransactionToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'status': value['status'],
        'statusReasonInformation': value['statusReasonInformation'] == null ? undefined : (value['statusReasonInformation'].map(MTNStatusReasonInformation_1.MTNStatusReasonInformationToJSON)),
    };
}
exports.MTNBlockchainTransactionToJSON = MTNBlockchainTransactionToJSON;
//# sourceMappingURL=MTNBlockchainTransaction.js.map