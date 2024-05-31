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

import { mapValues } from '../runtime';
import type { MTNBeneficiaryPayeeConfirmation } from './MTNBeneficiaryPayeeConfirmation';
import {
    MTNBeneficiaryPayeeConfirmationFromJSON,
    MTNBeneficiaryPayeeConfirmationFromJSONTyped,
    MTNBeneficiaryPayeeConfirmationToJSON,
} from './MTNBeneficiaryPayeeConfirmation';
import type { MTNOriginatorPayeeConfirmation } from './MTNOriginatorPayeeConfirmation';
import {
    MTNOriginatorPayeeConfirmationFromJSON,
    MTNOriginatorPayeeConfirmationFromJSONTyped,
    MTNOriginatorPayeeConfirmationToJSON,
} from './MTNOriginatorPayeeConfirmation';

/**
 * Confirmation Of the payee.
 * @export
 * @interface MTNPayeeConfirmation
 */
export interface MTNPayeeConfirmation {
    /**
     * Unique payee confirmation identifier.
     * @type {string}
     * @memberof MTNPayeeConfirmation
     */
    readonly requestId?: string;
    /**
     * 
     * @type {MTNOriginatorPayeeConfirmation}
     * @memberof MTNPayeeConfirmation
     */
    originator?: MTNOriginatorPayeeConfirmation;
    /**
     * 
     * @type {MTNBeneficiaryPayeeConfirmation}
     * @memberof MTNPayeeConfirmation
     */
    beneficiary?: MTNBeneficiaryPayeeConfirmation;
    /**
     * Status of payee confirmation.
     * @type {string}
     * @memberof MTNPayeeConfirmation
     */
    status?: string;
    /**
     * Creation datetime in ISO8601 format
     * @type {Date}
     * @memberof MTNPayeeConfirmation
     */
    readonly createdDate?: Date;
    /**
     * Last updated datetime in ISO8601 format
     * @type {Date}
     * @memberof MTNPayeeConfirmation
     */
    readonly updatedDate?: Date;
}

/**
 * Check if a given object implements the MTNPayeeConfirmation interface.
 */
export function instanceOfMTNPayeeConfirmation(value: object): boolean {
    return true;
}

export function MTNPayeeConfirmationFromJSON(json: any): MTNPayeeConfirmation {
    return MTNPayeeConfirmationFromJSONTyped(json, false);
}

export function MTNPayeeConfirmationFromJSONTyped(json: any, ignoreDiscriminator: boolean): MTNPayeeConfirmation {
    if (json == null) {
        return json;
    }
    return {
        
        'requestId': json['requestId'] == null ? undefined : json['requestId'],
        'originator': json['originator'] == null ? undefined : MTNOriginatorPayeeConfirmationFromJSON(json['originator']),
        'beneficiary': json['beneficiary'] == null ? undefined : MTNBeneficiaryPayeeConfirmationFromJSON(json['beneficiary']),
        'status': json['status'] == null ? undefined : json['status'],
        'createdDate': json['createdDate'] == null ? undefined : (new Date(json['createdDate'])),
        'updatedDate': json['updatedDate'] == null ? undefined : (new Date(json['updatedDate'])),
    };
}

export function MTNPayeeConfirmationToJSON(value?: Omit<MTNPayeeConfirmation, 'requestId'|'createdDate'|'updatedDate'> | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'originator': MTNOriginatorPayeeConfirmationToJSON(value['originator']),
        'beneficiary': MTNBeneficiaryPayeeConfirmationToJSON(value['beneficiary']),
        'status': value['status'],
    };
}

