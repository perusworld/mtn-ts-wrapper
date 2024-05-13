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
exports.MTNAliasBeneficiaryConsumerToJSON = exports.MTNAliasBeneficiaryConsumerFromJSONTyped = exports.MTNAliasBeneficiaryConsumerFromJSON = exports.instanceOfMTNAliasBeneficiaryConsumer = void 0;
const MTNCryptoAddressRiskScore_1 = require("./MTNCryptoAddressRiskScore");
/**
 * Check if a given object implements the MTNAliasBeneficiaryConsumer interface.
 */
function instanceOfMTNAliasBeneficiaryConsumer(value) {
    return true;
}
exports.instanceOfMTNAliasBeneficiaryConsumer = instanceOfMTNAliasBeneficiaryConsumer;
function MTNAliasBeneficiaryConsumerFromJSON(json) {
    return MTNAliasBeneficiaryConsumerFromJSONTyped(json, false);
}
exports.MTNAliasBeneficiaryConsumerFromJSON = MTNAliasBeneficiaryConsumerFromJSON;
function MTNAliasBeneficiaryConsumerFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'vaspName': json['vaspName'] == null ? undefined : json['vaspName'],
        'accountAlias': json['accountAlias'] == null ? undefined : json['accountAlias'],
        'cryptoAddress': json['cryptoAddress'] == null ? undefined : (0, MTNCryptoAddressRiskScore_1.MTNCryptoAddressRiskScoreFromJSON)(json['cryptoAddress']),
    };
}
exports.MTNAliasBeneficiaryConsumerFromJSONTyped = MTNAliasBeneficiaryConsumerFromJSONTyped;
function MTNAliasBeneficiaryConsumerToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'vaspName': value['vaspName'],
        'accountAlias': value['accountAlias'],
        'cryptoAddress': (0, MTNCryptoAddressRiskScore_1.MTNCryptoAddressRiskScoreToJSON)(value['cryptoAddress']),
    };
}
exports.MTNAliasBeneficiaryConsumerToJSON = MTNAliasBeneficiaryConsumerToJSON;
//# sourceMappingURL=MTNAliasBeneficiaryConsumer.js.map