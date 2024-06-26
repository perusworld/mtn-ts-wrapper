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
exports.MTNReportToJSON = exports.MTNReportFromJSONTyped = exports.MTNReportFromJSON = exports.instanceOfMTNReport = void 0;
const MTNTransactionReportCriteria_1 = require("./MTNTransactionReportCriteria");
/**
 * Check if a given object implements the MTNReport interface.
 */
function instanceOfMTNReport(value) {
    if (!('reportType' in value))
        return false;
    return true;
}
exports.instanceOfMTNReport = instanceOfMTNReport;
function MTNReportFromJSON(json) {
    return MTNReportFromJSONTyped(json, false);
}
exports.MTNReportFromJSON = MTNReportFromJSON;
function MTNReportFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'reportId': json['reportId'] == null ? undefined : json['reportId'],
        'reportType': json['reportType'],
        'status': json['status'] == null ? undefined : json['status'],
        'transactionReportCriteria': json['transactionReportCriteria'] == null ? undefined : (0, MTNTransactionReportCriteria_1.MTNTransactionReportCriteriaFromJSON)(json['transactionReportCriteria']),
        'createdDate': json['createdDate'] == null ? undefined : (new Date(json['createdDate'])),
    };
}
exports.MTNReportFromJSONTyped = MTNReportFromJSONTyped;
function MTNReportToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'reportId': value['reportId'],
        'reportType': value['reportType'],
        'status': value['status'],
        'transactionReportCriteria': (0, MTNTransactionReportCriteria_1.MTNTransactionReportCriteriaToJSON)(value['transactionReportCriteria']),
    };
}
exports.MTNReportToJSON = MTNReportToJSON;
//# sourceMappingURL=MTNReport.js.map