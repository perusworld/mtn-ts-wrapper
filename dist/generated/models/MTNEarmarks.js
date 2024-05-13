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
exports.MTNEarmarksToJSON = exports.MTNEarmarksFromJSONTyped = exports.MTNEarmarksFromJSON = exports.instanceOfMTNEarmarks = void 0;
const MTNEarmarkPaginationDataAndMetaData_1 = require("./MTNEarmarkPaginationDataAndMetaData");
/**
 * Check if a given object implements the MTNEarmarks interface.
 */
function instanceOfMTNEarmarks(value) {
    return true;
}
exports.instanceOfMTNEarmarks = instanceOfMTNEarmarks;
function MTNEarmarksFromJSON(json) {
    return MTNEarmarksFromJSONTyped(json, false);
}
exports.MTNEarmarksFromJSON = MTNEarmarksFromJSON;
function MTNEarmarksFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'data': json['data'] == null ? undefined : (0, MTNEarmarkPaginationDataAndMetaData_1.MTNEarmarkPaginationDataAndMetaDataFromJSON)(json['data']),
    };
}
exports.MTNEarmarksFromJSONTyped = MTNEarmarksFromJSONTyped;
function MTNEarmarksToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'data': (0, MTNEarmarkPaginationDataAndMetaData_1.MTNEarmarkPaginationDataAndMetaDataToJSON)(value['data']),
    };
}
exports.MTNEarmarksToJSON = MTNEarmarksToJSON;
//# sourceMappingURL=MTNEarmarks.js.map