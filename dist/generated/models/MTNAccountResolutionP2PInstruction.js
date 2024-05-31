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
exports.MTNAccountResolutionP2PInstructionToJSON = exports.MTNAccountResolutionP2PInstructionFromJSONTyped = exports.MTNAccountResolutionP2PInstructionFromJSON = exports.instanceOfMTNAccountResolutionP2PInstruction = void 0;
const MTNAliasBeneficiaryConsumer_1 = require("./MTNAliasBeneficiaryConsumer");
const MTNOriginatorConsumer_1 = require("./MTNOriginatorConsumer");
const MTNP2PInstruction_1 = require("./MTNP2PInstruction");
/**
 * Check if a given object implements the MTNAccountResolutionP2PInstruction interface.
 */
function instanceOfMTNAccountResolutionP2PInstruction(value) {
    return true;
}
exports.instanceOfMTNAccountResolutionP2PInstruction = instanceOfMTNAccountResolutionP2PInstruction;
function MTNAccountResolutionP2PInstructionFromJSON(json) {
    return MTNAccountResolutionP2PInstructionFromJSONTyped(json, false);
}
exports.MTNAccountResolutionP2PInstructionFromJSON = MTNAccountResolutionP2PInstructionFromJSON;
function MTNAccountResolutionP2PInstructionFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return Object.assign(Object.assign({}, (0, MTNP2PInstruction_1.MTNP2PInstructionFromJSONTyped)(json, ignoreDiscriminator)), { 'originator': json['originator'] == null ? undefined : (0, MTNOriginatorConsumer_1.MTNOriginatorConsumerFromJSON)(json['originator']), 'beneficiary': json['beneficiary'] == null ? undefined : (0, MTNAliasBeneficiaryConsumer_1.MTNAliasBeneficiaryConsumerFromJSON)(json['beneficiary']), 'travelRuleRequired': json['travelRuleRequired'] == null ? undefined : json['travelRuleRequired'] });
}
exports.MTNAccountResolutionP2PInstructionFromJSONTyped = MTNAccountResolutionP2PInstructionFromJSONTyped;
function MTNAccountResolutionP2PInstructionToJSON(value) {
    if (value == null) {
        return value;
    }
    return Object.assign(Object.assign({}, (0, MTNP2PInstruction_1.MTNP2PInstructionToJSON)(value)), { 'originator': (0, MTNOriginatorConsumer_1.MTNOriginatorConsumerToJSON)(value['originator']), 'beneficiary': (0, MTNAliasBeneficiaryConsumer_1.MTNAliasBeneficiaryConsumerToJSON)(value['beneficiary']), 'travelRuleRequired': value['travelRuleRequired'] });
}
exports.MTNAccountResolutionP2PInstructionToJSON = MTNAccountResolutionP2PInstructionToJSON;
//# sourceMappingURL=MTNAccountResolutionP2PInstruction.js.map