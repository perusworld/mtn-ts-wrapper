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
exports.MTNAttestationP2PInstructionToJSON = exports.MTNAttestationP2PInstructionFromJSONTyped = exports.MTNAttestationP2PInstructionFromJSON = exports.instanceOfMTNAttestationP2PInstruction = void 0;
const MTNAttestationBeneficiaryConsumer_1 = require("./MTNAttestationBeneficiaryConsumer");
const MTNOriginatorConsumer_1 = require("./MTNOriginatorConsumer");
const MTNP2PInstruction_1 = require("./MTNP2PInstruction");
const MTNP2PWeb3Data_1 = require("./MTNP2PWeb3Data");
/**
 * Check if a given object implements the MTNAttestationP2PInstruction interface.
 */
function instanceOfMTNAttestationP2PInstruction(value) {
    return true;
}
exports.instanceOfMTNAttestationP2PInstruction = instanceOfMTNAttestationP2PInstruction;
function MTNAttestationP2PInstructionFromJSON(json) {
    return MTNAttestationP2PInstructionFromJSONTyped(json, false);
}
exports.MTNAttestationP2PInstructionFromJSON = MTNAttestationP2PInstructionFromJSON;
function MTNAttestationP2PInstructionFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return Object.assign(Object.assign({}, (0, MTNP2PInstruction_1.MTNP2PInstructionFromJSONTyped)(json, ignoreDiscriminator)), { 'originator': json['originator'] == null ? undefined : (0, MTNOriginatorConsumer_1.MTNOriginatorConsumerFromJSON)(json['originator']), 'beneficiary': json['beneficiary'] == null ? undefined : (0, MTNAttestationBeneficiaryConsumer_1.MTNAttestationBeneficiaryConsumerFromJSON)(json['beneficiary']), 'web3': json['web3'] == null ? undefined : (0, MTNP2PWeb3Data_1.MTNP2PWeb3DataFromJSON)(json['web3']), 'activity': json['activity'] == null ? undefined : json['activity'], 'attestationData': json['attestationData'] == null ? undefined : json['attestationData'], 'travelRuleRequired': json['travelRuleRequired'] == null ? undefined : json['travelRuleRequired'] });
}
exports.MTNAttestationP2PInstructionFromJSONTyped = MTNAttestationP2PInstructionFromJSONTyped;
function MTNAttestationP2PInstructionToJSON(value) {
    if (value == null) {
        return value;
    }
    return Object.assign(Object.assign({}, (0, MTNP2PInstruction_1.MTNP2PInstructionToJSON)(value)), { 'originator': (0, MTNOriginatorConsumer_1.MTNOriginatorConsumerToJSON)(value['originator']), 'beneficiary': (0, MTNAttestationBeneficiaryConsumer_1.MTNAttestationBeneficiaryConsumerToJSON)(value['beneficiary']), 'web3': (0, MTNP2PWeb3Data_1.MTNP2PWeb3DataToJSON)(value['web3']), 'activity': value['activity'], 'attestationData': value['attestationData'], 'travelRuleRequired': value['travelRuleRequired'] });
}
exports.MTNAttestationP2PInstructionToJSON = MTNAttestationP2PInstructionToJSON;
//# sourceMappingURL=MTNAttestationP2PInstruction.js.map