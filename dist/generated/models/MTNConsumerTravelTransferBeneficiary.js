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
exports.MTNConsumerTravelTransferBeneficiaryToJSON = exports.MTNConsumerTravelTransferBeneficiaryFromJSONTyped = exports.MTNConsumerTravelTransferBeneficiaryFromJSON = exports.instanceOfMTNConsumerTravelTransferBeneficiary = void 0;
const MTNPerson_1 = require("./MTNPerson");
/**
 * Check if a given object implements the MTNConsumerTravelTransferBeneficiary interface.
 */
function instanceOfMTNConsumerTravelTransferBeneficiary(value) {
    return true;
}
exports.instanceOfMTNConsumerTravelTransferBeneficiary = instanceOfMTNConsumerTravelTransferBeneficiary;
function MTNConsumerTravelTransferBeneficiaryFromJSON(json) {
    return MTNConsumerTravelTransferBeneficiaryFromJSONTyped(json, false);
}
exports.MTNConsumerTravelTransferBeneficiaryFromJSON = MTNConsumerTravelTransferBeneficiaryFromJSON;
function MTNConsumerTravelTransferBeneficiaryFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'beneficiaryPersons': json['beneficiaryPersons'] == null ? undefined : (json['beneficiaryPersons'].map(MTNPerson_1.MTNPersonFromJSON)),
        'accountNumbers': json['accountNumbers'] == null ? undefined : json['accountNumbers'],
    };
}
exports.MTNConsumerTravelTransferBeneficiaryFromJSONTyped = MTNConsumerTravelTransferBeneficiaryFromJSONTyped;
function MTNConsumerTravelTransferBeneficiaryToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'beneficiaryPersons': value['beneficiaryPersons'] == null ? undefined : (value['beneficiaryPersons'].map(MTNPerson_1.MTNPersonToJSON)),
        'accountNumbers': value['accountNumbers'],
    };
}
exports.MTNConsumerTravelTransferBeneficiaryToJSON = MTNConsumerTravelTransferBeneficiaryToJSON;
//# sourceMappingURL=MTNConsumerTravelTransferBeneficiary.js.map