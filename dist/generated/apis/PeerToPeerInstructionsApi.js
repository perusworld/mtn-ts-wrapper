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
exports.PeerToPeerInstructionsApi = void 0;
const runtime = require("../runtime");
const index_1 = require("../models/index");
/**
 *
 */
class PeerToPeerInstructionsApi extends runtime.BaseAPI {
    /**
     * This endpoint allows for retrieving details of a P2P instruction request. Response is expected to be encrypted.
     * Retrieve a P2P instruction request.
     */
    getP2PInstructionRequestRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters['ica'] == null) {
                throw new runtime.RequiredError('ica', 'Required parameter "ica" was null or undefined when calling getP2PInstructionRequest().');
            }
            if (requestParameters['instructionId'] == null) {
                throw new runtime.RequiredError('instructionId', 'Required parameter "instructionId" was null or undefined when calling getP2PInstructionRequest().');
            }
            const queryParameters = {};
            const headerParameters = {};
            const response = yield this.request({
                path: `/customers/{ica}/peer-to-peer-instructions/{instruction_id}`.replace(`{${"ica"}}`, encodeURIComponent(String(requestParameters['ica']))).replace(`{${"instruction_id"}}`, encodeURIComponent(String(requestParameters['instructionId']))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.MTNP2PInstructionFromJSON)(jsonValue));
        });
    }
    /**
     * This endpoint allows for retrieving details of a P2P instruction request. Response is expected to be encrypted.
     * Retrieve a P2P instruction request.
     */
    getP2PInstructionRequest(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getP2PInstructionRequestRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * This endpoint allows for retrieving a list of P2P Instruction requests where the calling VASP is the beneficiary. Response is expected to be encrypted.
     * Retrieve P2P Instruction requests.
     */
    getP2PInstructionRequestsRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters['ica'] == null) {
                throw new runtime.RequiredError('ica', 'Required parameter "ica" was null or undefined when calling getP2PInstructionRequests().');
            }
            const queryParameters = {};
            if (requestParameters['status'] != null) {
                queryParameters['status'] = requestParameters['status'];
            }
            if (requestParameters['offset'] != null) {
                queryParameters['offset'] = requestParameters['offset'];
            }
            if (requestParameters['limit'] != null) {
                queryParameters['limit'] = requestParameters['limit'];
            }
            if (requestParameters['sort'] != null) {
                queryParameters['sort'] = requestParameters['sort'];
            }
            if (requestParameters['requestType'] != null) {
                queryParameters['request_type'] = requestParameters['requestType'];
            }
            const headerParameters = {};
            const response = yield this.request({
                path: `/customers/{ica}/peer-to-peer-instructions`.replace(`{${"ica"}}`, encodeURIComponent(String(requestParameters['ica']))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.MTNP2PInstructionsFromJSON)(jsonValue));
        });
    }
    /**
     * This endpoint allows for retrieving a list of P2P Instruction requests where the calling VASP is the beneficiary. Response is expected to be encrypted.
     * Retrieve P2P Instruction requests.
     */
    getP2PInstructionRequests(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getP2PInstructionRequestsRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * This endpoint allows for creating an instruction to resolve crypto address and attestation for sending and receiving account aliases. Request and response are expected to be encrypted.
     * Creates a P2P instruction request.
     */
    resolveP2PInstructionRequestRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters['ica'] == null) {
                throw new runtime.RequiredError('ica', 'Required parameter "ica" was null or undefined when calling resolveP2PInstructionRequest().');
            }
            if (requestParameters['mTNP2PInstruction'] == null) {
                throw new runtime.RequiredError('mTNP2PInstruction', 'Required parameter "mTNP2PInstruction" was null or undefined when calling resolveP2PInstructionRequest().');
            }
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            const response = yield this.request({
                path: `/customers/{ica}/peer-to-peer-instructions`.replace(`{${"ica"}}`, encodeURIComponent(String(requestParameters['ica']))),
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: (0, index_1.MTNP2PInstructionToJSON)(requestParameters['mTNP2PInstruction']),
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.MTNP2PInstructionFromJSON)(jsonValue));
        });
    }
    /**
     * This endpoint allows for creating an instruction to resolve crypto address and attestation for sending and receiving account aliases. Request and response are expected to be encrypted.
     * Creates a P2P instruction request.
     */
    resolveP2PInstructionRequest(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.resolveP2PInstructionRequestRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Endpoint to update the P2P instruction request status and provide originator and beneficiary details at different states. Request is expected to be encrypted.
     * Update a P2P instruction request.
     */
    updateP2PInstructionRequestRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters['ica'] == null) {
                throw new runtime.RequiredError('ica', 'Required parameter "ica" was null or undefined when calling updateP2PInstructionRequest().');
            }
            if (requestParameters['instructionId'] == null) {
                throw new runtime.RequiredError('instructionId', 'Required parameter "instructionId" was null or undefined when calling updateP2PInstructionRequest().');
            }
            if (requestParameters['mTNP2PInstruction'] == null) {
                throw new runtime.RequiredError('mTNP2PInstruction', 'Required parameter "mTNP2PInstruction" was null or undefined when calling updateP2PInstructionRequest().');
            }
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            const response = yield this.request({
                path: `/customers/{ica}/peer-to-peer-instructions/{instruction_id}`.replace(`{${"ica"}}`, encodeURIComponent(String(requestParameters['ica']))).replace(`{${"instruction_id"}}`, encodeURIComponent(String(requestParameters['instructionId']))),
                method: 'PUT',
                headers: headerParameters,
                query: queryParameters,
                body: (0, index_1.MTNP2PInstructionToJSON)(requestParameters['mTNP2PInstruction']),
            }, initOverrides);
            return new runtime.VoidApiResponse(response);
        });
    }
    /**
     * Endpoint to update the P2P instruction request status and provide originator and beneficiary details at different states. Request is expected to be encrypted.
     * Update a P2P instruction request.
     */
    updateP2PInstructionRequest(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.updateP2PInstructionRequestRaw(requestParameters, initOverrides);
        });
    }
}
exports.PeerToPeerInstructionsApi = PeerToPeerInstructionsApi;
//# sourceMappingURL=PeerToPeerInstructionsApi.js.map