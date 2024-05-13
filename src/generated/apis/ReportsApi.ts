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


import * as runtime from '../runtime';
import type {
  MTNErrorResponse,
  MTNReport,
  MTNReports,
} from '../models/index';
import {
    MTNErrorResponseFromJSON,
    MTNErrorResponseToJSON,
    MTNReportFromJSON,
    MTNReportToJSON,
    MTNReportsFromJSON,
    MTNReportsToJSON,
} from '../models/index';

export interface CreateReportRequest {
    ica: string;
    mTNReport: Omit<MTNReport, 'createdDate'>;
}

export interface GetReportRequest {
    ica: string;
    reportId: string;
}

export interface GetReportRequestsRequest {
    ica: string;
    offset?: number;
    limit?: number;
    sort?: string;
    reportType?: string;
    status?: string;
}

/**
 * 
 */
export class ReportsApi extends runtime.BaseAPI {

    /**
     * This endpoint allows a financial institution to request a report based on provided criteria.
     * Create a report request
     */
    async createReportRaw(requestParameters: CreateReportRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MTNReport>> {
        if (requestParameters['ica'] == null) {
            throw new runtime.RequiredError(
                'ica',
                'Required parameter "ica" was null or undefined when calling createReport().'
            );
        }

        if (requestParameters['mTNReport'] == null) {
            throw new runtime.RequiredError(
                'mTNReport',
                'Required parameter "mTNReport" was null or undefined when calling createReport().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/customers/{ica}/reports`.replace(`{${"ica"}}`, encodeURIComponent(String(requestParameters['ica']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: MTNReportToJSON(requestParameters['mTNReport']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => MTNReportFromJSON(jsonValue));
    }

    /**
     * This endpoint allows a financial institution to request a report based on provided criteria.
     * Create a report request
     */
    async createReport(requestParameters: CreateReportRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MTNReport> {
        const response = await this.createReportRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * This endpoint returns details about a requested report based on provided Report Id.
     * Retrieve a report request
     */
    async getReportRaw(requestParameters: GetReportRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MTNReport>> {
        if (requestParameters['ica'] == null) {
            throw new runtime.RequiredError(
                'ica',
                'Required parameter "ica" was null or undefined when calling getReport().'
            );
        }

        if (requestParameters['reportId'] == null) {
            throw new runtime.RequiredError(
                'reportId',
                'Required parameter "reportId" was null or undefined when calling getReport().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/customers/{ica}/reports/{report_id}`.replace(`{${"ica"}}`, encodeURIComponent(String(requestParameters['ica']))).replace(`{${"report_id"}}`, encodeURIComponent(String(requestParameters['reportId']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => MTNReportFromJSON(jsonValue));
    }

    /**
     * This endpoint returns details about a requested report based on provided Report Id.
     * Retrieve a report request
     */
    async getReport(requestParameters: GetReportRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MTNReport> {
        const response = await this.getReportRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * This endpoint allows for retrieving a list of report requests.
     * Retrieve report requests
     */
    async getReportRequestsRaw(requestParameters: GetReportRequestsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MTNReports>> {
        if (requestParameters['ica'] == null) {
            throw new runtime.RequiredError(
                'ica',
                'Required parameter "ica" was null or undefined when calling getReportRequests().'
            );
        }

        const queryParameters: any = {};

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

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/customers/{ica}/reports`.replace(`{${"ica"}}`, encodeURIComponent(String(requestParameters['ica']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => MTNReportsFromJSON(jsonValue));
    }

    /**
     * This endpoint allows for retrieving a list of report requests.
     * Retrieve report requests
     */
    async getReportRequests(requestParameters: GetReportRequestsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MTNReports> {
        const response = await this.getReportRequestsRaw(requestParameters, initOverrides);
        return await response.value();
    }

}