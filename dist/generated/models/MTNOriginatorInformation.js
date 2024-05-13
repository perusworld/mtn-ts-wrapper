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
exports.MTNOriginatorInformationToJSON = exports.MTNOriginatorInformationFromJSONTyped = exports.MTNOriginatorInformationFromJSON = exports.instanceOfMTNOriginatorInformation = void 0;
const MTNConsumerTravelTransferOriginator_1 = require("./MTNConsumerTravelTransferOriginator");
const MTNVasp_1 = require("./MTNVasp");
/**
 * Check if a given object implements the MTNOriginatorInformation interface.
 */
function instanceOfMTNOriginatorInformation(value) {
    return true;
}
exports.instanceOfMTNOriginatorInformation = instanceOfMTNOriginatorInformation;
function MTNOriginatorInformationFromJSON(json) {
    return MTNOriginatorInformationFromJSONTyped(json, false);
}
exports.MTNOriginatorInformationFromJSON = MTNOriginatorInformationFromJSON;
function MTNOriginatorInformationFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'originator': json['originator'] == null ? undefined : (0, MTNConsumerTravelTransferOriginator_1.MTNConsumerTravelTransferOriginatorFromJSON)(json['originator']),
        'originatorVasp': json['originatorVasp'] == null ? undefined : (0, MTNVasp_1.MTNVaspFromJSON)(json['originatorVasp']),
        'executionDate': json['executionDate'] == null ? undefined : json['executionDate'],
    };
}
exports.MTNOriginatorInformationFromJSONTyped = MTNOriginatorInformationFromJSONTyped;
function MTNOriginatorInformationToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'originator': (0, MTNConsumerTravelTransferOriginator_1.MTNConsumerTravelTransferOriginatorToJSON)(value['originator']),
        'originatorVasp': (0, MTNVasp_1.MTNVaspToJSON)(value['originatorVasp']),
        'executionDate': value['executionDate'],
    };
}
exports.MTNOriginatorInformationToJSON = MTNOriginatorInformationToJSON;
//# sourceMappingURL=MTNOriginatorInformation.js.map