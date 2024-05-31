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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReportsApi = void 0;
const runtime = require("../runtime");
const index_1 = require("../models/index");
/**
 *
 */
class ReportsApi extends runtime.BaseAPI {
    /**
     * This endpoint allows a financial institution to request a report based on provided criteria.
     * Create a report request
     */
    createReportRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters['ica'] == null) {
                throw new runtime.RequiredError('ica', 'Required parameter "ica" was null or undefined when calling createReport().');
            }
            if (requestParameters['mTNReport'] == null) {
                throw new runtime.RequiredError('mTNReport', 'Required parameter "mTNReport" was null or undefined when calling createReport().');
            }
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            const response = yield this.request({
                path: `/customers/{ica}/reports`.replace(`{${"ica"}}`, encodeURIComponent(String(requestParameters['ica']))),
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: (0, index_1.MTNReportToJSON)(requestParameters['mTNReport']),
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.MTNReportFromJSON)(jsonValue));
        });
    }
    /**
     * This endpoint allows a financial institution to request a report based on provided criteria.
     * Create a report request
     */
    createReport(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.createReportRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * This endpoint returns details about a requested report based on provided Report Id.
     * Retrieve a report request
     */
    getReportRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters['ica'] == null) {
                throw new runtime.RequiredError('ica', 'Required parameter "ica" was null or undefined when calling getReport().');
            }
            if (requestParameters['reportId'] == null) {
                throw new runtime.RequiredError('reportId', 'Required parameter "reportId" was null or undefined when calling getReport().');
            }
            const queryParameters = {};
            const headerParameters = {};
            const response = yield this.request({
                path: `/customers/{ica}/reports/{report_id}`.replace(`{${"ica"}}`, encodeURIComponent(String(requestParameters['ica']))).replace(`{${"report_id"}}`, encodeURIComponent(String(requestParameters['reportId']))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.MTNReportFromJSON)(jsonValue));
        });
    }
    /**
     * This endpoint returns details about a requested report based on provided Report Id.
     * Retrieve a report request
     */
    getReport(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getReportRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * This endpoint allows for retrieving a list of report requests.
     * Retrieve report requests
     */
    getReportRequestsRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters['ica'] == null) {
                throw new runtime.RequiredError('ica', 'Required parameter "ica" was null or undefined when calling getReportRequests().');
            }
            const queryParameters = {};
            if (requestParameters['offset'] != null) {
                queryParameters['offset'] = requestParameters['offset'];
            }
            if (requestParameters['limit'] != null) {
                queryParameters['limit'] = requestParameters['limit'];
            }
            if (requestParameters['sort'] != null) {
                queryParameters['sort'] = requestParameters['sort'];
            }
            if (requestParameters['reportType'] != null) {
                queryParameters['report_type'] = requestParameters['reportType'];
            }
            if (requestParameters['status'] != null) {
                queryParameters['status'] = requestParameters['status'];
            }
            const headerParameters = {};
            const response = yield this.request({
                path: `/customers/{ica}/reports`.replace(`{${"ica"}}`, encodeURIComponent(String(requestParameters['ica']))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.MTNReportsFromJSON)(jsonValue));
        });
    }
    /**
     * This endpoint allows for retrieving a list of report requests.
     * Retrieve report requests
     */
    getReportRequests(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getReportRequestsRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
}
exports.ReportsApi = ReportsApi;
//# sourceMappingURL=ReportsApi.js.map