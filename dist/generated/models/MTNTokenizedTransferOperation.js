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
exports.MTNTokenizedTransferOperationToJSON = exports.MTNTokenizedTransferOperationFromJSONTyped = exports.MTNTokenizedTransferOperationFromJSON = exports.instanceOfMTNTokenizedTransferOperation = void 0;
const MTNBlockchainTransaction_1 = require("./MTNBlockchainTransaction");
const MTNTokenIdentifier_1 = require("./MTNTokenIdentifier");
/**
 * Check if a given object implements the MTNTokenizedTransferOperation interface.
 */
function instanceOfMTNTokenizedTransferOperation(value) {
    if (!('amount' in value))
        return false;
    if (!('to' in value))
        return false;
    if (!('from' in value))
        return false;
    if (!('tokenIdentifier' in value))
        return false;
    return true;
}
exports.instanceOfMTNTokenizedTransferOperation = instanceOfMTNTokenizedTransferOperation;
function MTNTokenizedTransferOperationFromJSON(json) {
    return MTNTokenizedTransferOperationFromJSONTyped(json, false);
}
exports.MTNTokenizedTransferOperationFromJSON = MTNTokenizedTransferOperationFromJSON;
function MTNTokenizedTransferOperationFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'amount': json['amount'],
        'to': json['to'],
        'from': json['from'],
        'tokenIdentifier': (0, MTNTokenIdentifier_1.MTNTokenIdentifierFromJSON)(json['tokenIdentifier']),
        'operationId': json['operationId'] == null ? undefined : json['operationId'],
        'status': json['status'] == null ? undefined : json['status'],
        'blockchainTransactions': json['blockchainTransactions'] == null ? undefined : (json['blockchainTransactions'].map(MTNBlockchainTransaction_1.MTNBlockchainTransactionFromJSON)),
    };
}
exports.MTNTokenizedTransferOperationFromJSONTyped = MTNTokenizedTransferOperationFromJSONTyped;
function MTNTokenizedTransferOperationToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'amount': value['amount'],
        'to': value['to'],
        'from': value['from'],
        'tokenIdentifier': (0, MTNTokenIdentifier_1.MTNTokenIdentifierToJSON)(value['tokenIdentifier']),
    };
}
exports.MTNTokenizedTransferOperationToJSON = MTNTokenizedTransferOperationToJSON;
//# sourceMappingURL=MTNTokenizedTransferOperation.js.map