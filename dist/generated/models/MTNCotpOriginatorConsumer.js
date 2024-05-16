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
exports.MTNCotpOriginatorConsumerToJSON = exports.MTNCotpOriginatorConsumerFromJSONTyped = exports.MTNCotpOriginatorConsumerFromJSON = exports.instanceOfMTNCotpOriginatorConsumer = void 0;
/**
 * Check if a given object implements the MTNCotpOriginatorConsumer interface.
 */
function instanceOfMTNCotpOriginatorConsumer(value) {
    return true;
}
exports.instanceOfMTNCotpOriginatorConsumer = instanceOfMTNCotpOriginatorConsumer;
function MTNCotpOriginatorConsumerFromJSON(json) {
    return MTNCotpOriginatorConsumerFromJSONTyped(json, false);
}
exports.MTNCotpOriginatorConsumerFromJSON = MTNCotpOriginatorConsumerFromJSON;
function MTNCotpOriginatorConsumerFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'accountAlias': json['accountAlias'] == null ? undefined : json['accountAlias'],
    };
}
exports.MTNCotpOriginatorConsumerFromJSONTyped = MTNCotpOriginatorConsumerFromJSONTyped;
function MTNCotpOriginatorConsumerToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'accountAlias': value['accountAlias'],
    };
}
exports.MTNCotpOriginatorConsumerToJSON = MTNCotpOriginatorConsumerToJSON;
//# sourceMappingURL=MTNCotpOriginatorConsumer.js.map