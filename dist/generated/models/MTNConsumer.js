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
exports.MTNConsumerToJSON = exports.MTNConsumerFromJSONTyped = exports.MTNConsumerFromJSON = exports.instanceOfMTNConsumer = void 0;
const MTNCryptoAddressRiskScore_1 = require("./MTNCryptoAddressRiskScore");
/**
 * Check if a given object implements the MTNConsumer interface.
 */
function instanceOfMTNConsumer(value) {
    return true;
}
exports.instanceOfMTNConsumer = instanceOfMTNConsumer;
function MTNConsumerFromJSON(json) {
    return MTNConsumerFromJSONTyped(json, false);
}
exports.MTNConsumerFromJSON = MTNConsumerFromJSON;
function MTNConsumerFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'accountAlias': json['accountAlias'] == null ? undefined : json['accountAlias'],
        'cryptoAddress': json['cryptoAddress'] == null ? undefined : (0, MTNCryptoAddressRiskScore_1.MTNCryptoAddressRiskScoreFromJSON)(json['cryptoAddress']),
        'walletType': json['walletType'] == null ? undefined : json['walletType'],
    };
}
exports.MTNConsumerFromJSONTyped = MTNConsumerFromJSONTyped;
function MTNConsumerToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'accountAlias': value['accountAlias'],
        'cryptoAddress': (0, MTNCryptoAddressRiskScore_1.MTNCryptoAddressRiskScoreToJSON)(value['cryptoAddress']),
        'walletType': value['walletType'],
    };
}
exports.MTNConsumerToJSON = MTNConsumerToJSON;
//# sourceMappingURL=MTNConsumer.js.map