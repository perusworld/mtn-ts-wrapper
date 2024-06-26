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
import type { MTNAttestationBeneficiaryConsumer } from './MTNAttestationBeneficiaryConsumer';
import {
    MTNAttestationBeneficiaryConsumerFromJSON,
    MTNAttestationBeneficiaryConsumerFromJSONTyped,
    MTNAttestationBeneficiaryConsumerToJSON,
} from './MTNAttestationBeneficiaryConsumer';
import type { MTNOriginatorConsumer } from './MTNOriginatorConsumer';
import {
    MTNOriginatorConsumerFromJSON,
    MTNOriginatorConsumerFromJSONTyped,
    MTNOriginatorConsumerToJSON,
} from './MTNOriginatorConsumer';
import type { MTNP2PInstruction } from './MTNP2PInstruction';
import {
    MTNP2PInstructionFromJSON,
    MTNP2PInstructionFromJSONTyped,
    MTNP2PInstructionToJSON,
} from './MTNP2PInstruction';
import type { MTNP2PWeb3Data } from './MTNP2PWeb3Data';
import {
    MTNP2PWeb3DataFromJSON,
    MTNP2PWeb3DataFromJSONTyped,
    MTNP2PWeb3DataToJSON,
} from './MTNP2PWeb3Data';
import type { MTNStatusReasonInformation } from './MTNStatusReasonInformation';
import {
    MTNStatusReasonInformationFromJSON,
    MTNStatusReasonInformationFromJSONTyped,
    MTNStatusReasonInformationToJSON,
} from './MTNStatusReasonInformation';

/**
 * A basic Peer to Peer POST payload
 * @export
 * @interface MTNAttestationP2PInstruction
 */
export interface MTNAttestationP2PInstruction extends MTNP2PInstruction {
    /**
     * 
     * @type {MTNOriginatorConsumer}
     * @memberof MTNAttestationP2PInstruction
     */
    originator?: MTNOriginatorConsumer;
    /**
     * 
     * @type {MTNAttestationBeneficiaryConsumer}
     * @memberof MTNAttestationP2PInstruction
     */
    beneficiary?: MTNAttestationBeneficiaryConsumer;
    /**
     * 
     * @type {MTNP2PWeb3Data}
     * @memberof MTNAttestationP2PInstruction
     */
    web3?: MTNP2PWeb3Data;
    /**
     * The activity name of the specific attestation.
     * @type {string}
     * @memberof MTNAttestationP2PInstruction
     */
    activity?: string;
    /**
     * The digital signature of the specific attestation.
     * @type {string}
     * @memberof MTNAttestationP2PInstruction
     */
    attestationData?: string;
    /**
     * The flag to show whether travel rule is required. Default - False.
     * @type {boolean}
     * @memberof MTNAttestationP2PInstruction
     */
    travelRuleRequired?: boolean;
}

/**
 * Check if a given object implements the MTNAttestationP2PInstruction interface.
 */
export function instanceOfMTNAttestationP2PInstruction(value: object): boolean {
    return true;
}

export function MTNAttestationP2PInstructionFromJSON(json: any): MTNAttestationP2PInstruction {
    return MTNAttestationP2PInstructionFromJSONTyped(json, false);
}

export function MTNAttestationP2PInstructionFromJSONTyped(json: any, ignoreDiscriminator: boolean): MTNAttestationP2PInstruction {
    if (json == null) {
        return json;
    }
    return {
        ...MTNP2PInstructionFromJSONTyped(json, ignoreDiscriminator),
        'originator': json['originator'] == null ? undefined : MTNOriginatorConsumerFromJSON(json['originator']),
        'beneficiary': json['beneficiary'] == null ? undefined : MTNAttestationBeneficiaryConsumerFromJSON(json['beneficiary']),
        'web3': json['web3'] == null ? undefined : MTNP2PWeb3DataFromJSON(json['web3']),
        'activity': json['activity'] == null ? undefined : json['activity'],
        'attestationData': json['attestationData'] == null ? undefined : json['attestationData'],
        'travelRuleRequired': json['travelRuleRequired'] == null ? undefined : json['travelRuleRequired'],
    };
}

export function MTNAttestationP2PInstructionToJSON(value?: Omit<MTNAttestationP2PInstruction, 'travelRuleExchangeId'|'createdDate'|'updatedDate'> | null): any {
    if (value == null) {
        return value;
    }
    return {
        ...MTNP2PInstructionToJSON(value),
        'originator': MTNOriginatorConsumerToJSON(value['originator']),
        'beneficiary': MTNAttestationBeneficiaryConsumerToJSON(value['beneficiary']),
        'web3': MTNP2PWeb3DataToJSON(value['web3']),
        'activity': value['activity'],
        'attestationData': value['attestationData'],
        'travelRuleRequired': value['travelRuleRequired'],
    };
}

