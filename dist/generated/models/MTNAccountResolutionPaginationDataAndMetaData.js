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
exports.MTNAccountResolutionPaginationDataAndMetaDataToJSON = exports.MTNAccountResolutionPaginationDataAndMetaDataFromJSONTyped = exports.MTNAccountResolutionPaginationDataAndMetaDataFromJSON = exports.instanceOfMTNAccountResolutionPaginationDataAndMetaData = void 0;
const MTNAccountResolution_1 = require("./MTNAccountResolution");
/**
 * Check if a given object implements the MTNAccountResolutionPaginationDataAndMetaData interface.
 */
function instanceOfMTNAccountResolutionPaginationDataAndMetaData(value) {
    return true;
}
exports.instanceOfMTNAccountResolutionPaginationDataAndMetaData = instanceOfMTNAccountResolutionPaginationDataAndMetaData;
function MTNAccountResolutionPaginationDataAndMetaDataFromJSON(json) {
    return MTNAccountResolutionPaginationDataAndMetaDataFromJSONTyped(json, false);
}
exports.MTNAccountResolutionPaginationDataAndMetaDataFromJSON = MTNAccountResolutionPaginationDataAndMetaDataFromJSON;
function MTNAccountResolutionPaginationDataAndMetaDataFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'offset': json['offset'] == null ? undefined : json['offset'],
        'limit': json['limit'] == null ? undefined : json['limit'],
        'count': json['count'] == null ? undefined : json['count'],
        'total': json['total'] == null ? undefined : json['total'],
        'items': json['items'] == null ? undefined : (json['items'].map(MTNAccountResolution_1.MTNAccountResolutionFromJSON)),
    };
}
exports.MTNAccountResolutionPaginationDataAndMetaDataFromJSONTyped = MTNAccountResolutionPaginationDataAndMetaDataFromJSONTyped;
function MTNAccountResolutionPaginationDataAndMetaDataToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'offset': value['offset'],
        'limit': value['limit'],
        'count': value['count'],
        'total': value['total'],
        'items': value['items'] == null ? undefined : (value['items'].map(MTNAccountResolution_1.MTNAccountResolutionToJSON)),
    };
}
exports.MTNAccountResolutionPaginationDataAndMetaDataToJSON = MTNAccountResolutionPaginationDataAndMetaDataToJSON;
//# sourceMappingURL=MTNAccountResolutionPaginationDataAndMetaData.js.map