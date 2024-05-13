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
exports.MTNFiatWithdrawalToJSON = exports.MTNFiatWithdrawalFromJSONTyped = exports.MTNFiatWithdrawalFromJSON = exports.instanceOfMTNFiatWithdrawal = void 0;
const MTNFee_1 = require("./MTNFee");
/**
 * Check if a given object implements the MTNFiatWithdrawal interface.
 */
function instanceOfMTNFiatWithdrawal(value) {
    if (!('amount' in value))
        return false;
    if (!('fundingCurrency' in value))
        return false;
    return true;
}
exports.instanceOfMTNFiatWithdrawal = instanceOfMTNFiatWithdrawal;
function MTNFiatWithdrawalFromJSON(json) {
    return MTNFiatWithdrawalFromJSONTyped(json, false);
}
exports.MTNFiatWithdrawalFromJSON = MTNFiatWithdrawalFromJSON;
function MTNFiatWithdrawalFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'externalReference': json['externalReference'] == null ? undefined : json['externalReference'],
        'fiatWithdrawalId': json['fiatWithdrawalId'] == null ? undefined : json['fiatWithdrawalId'],
        'fiatAccountId': json['fiatAccountId'] == null ? undefined : json['fiatAccountId'],
        'amount': json['amount'],
        'fees': json['fees'] == null ? undefined : (json['fees'].map(MTNFee_1.MTNFeeFromJSON)),
        'total': json['total'] == null ? undefined : json['total'],
        'fundingCurrency': json['fundingCurrency'],
        'status': json['status'] == null ? undefined : json['status'],
        'createdDate': json['createdDate'] == null ? undefined : (new Date(json['createdDate'])),
        'updatedDate': json['updatedDate'] == null ? undefined : (new Date(json['updatedDate'])),
    };
}
exports.MTNFiatWithdrawalFromJSONTyped = MTNFiatWithdrawalFromJSONTyped;
function MTNFiatWithdrawalToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'externalReference': value['externalReference'],
        'fiatAccountId': value['fiatAccountId'],
        'amount': value['amount'],
        'fees': value['fees'] == null ? undefined : (value['fees'].map(MTNFee_1.MTNFeeToJSON)),
        'total': value['total'],
        'fundingCurrency': value['fundingCurrency'],
    };
}
exports.MTNFiatWithdrawalToJSON = MTNFiatWithdrawalToJSON;
//# sourceMappingURL=MTNFiatWithdrawal.js.map