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
exports.MTNEarmarkPaginationDataAndMetaDataToJSON = exports.MTNEarmarkPaginationDataAndMetaDataFromJSONTyped = exports.MTNEarmarkPaginationDataAndMetaDataFromJSON = exports.instanceOfMTNEarmarkPaginationDataAndMetaData = void 0;
const MTNEarmark_1 = require("./MTNEarmark");
/**
 * Check if a given object implements the MTNEarmarkPaginationDataAndMetaData interface.
 */
function instanceOfMTNEarmarkPaginationDataAndMetaData(value) {
    return true;
}
exports.instanceOfMTNEarmarkPaginationDataAndMetaData = instanceOfMTNEarmarkPaginationDataAndMetaData;
function MTNEarmarkPaginationDataAndMetaDataFromJSON(json) {
    return MTNEarmarkPaginationDataAndMetaDataFromJSONTyped(json, false);
}
exports.MTNEarmarkPaginationDataAndMetaDataFromJSON = MTNEarmarkPaginationDataAndMetaDataFromJSON;
function MTNEarmarkPaginationDataAndMetaDataFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'offset': json['offset'] == null ? undefined : json['offset'],
        'limit': json['limit'] == null ? undefined : json['limit'],
        'count': json['count'] == null ? undefined : json['count'],
        'total': json['total'] == null ? undefined : json['total'],
        'items': json['items'] == null ? undefined : (json['items'].map(MTNEarmark_1.MTNEarmarkFromJSON)),
    };
}
exports.MTNEarmarkPaginationDataAndMetaDataFromJSONTyped = MTNEarmarkPaginationDataAndMetaDataFromJSONTyped;
function MTNEarmarkPaginationDataAndMetaDataToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'offset': value['offset'],
        'limit': value['limit'],
        'count': value['count'],
        'total': value['total'],
        'items': value['items'] == null ? undefined : (value['items'].map(MTNEarmark_1.MTNEarmarkToJSON)),
    };
}
exports.MTNEarmarkPaginationDataAndMetaDataToJSON = MTNEarmarkPaginationDataAndMetaDataToJSON;
//# sourceMappingURL=MTNEarmarkPaginationDataAndMetaData.js.map