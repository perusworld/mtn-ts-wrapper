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
import type { MTNAliasBeneficiaryConsumer } from './MTNAliasBeneficiaryConsumer';
import type { MTNOriginatorConsumer } from './MTNOriginatorConsumer';
import type { MTNP2PInstruction } from './MTNP2PInstruction';
/**
 *
 * @export
 * @interface MTNAccountResolutionP2PInstruction
 */
export interface MTNAccountResolutionP2PInstruction extends MTNP2PInstruction {
    /**
     *
     * @type {MTNOriginatorConsumer}
     * @memberof MTNAccountResolutionP2PInstruction
     */
    originator?: MTNOriginatorConsumer;
    /**
     *
     * @type {MTNAliasBeneficiaryConsumer}
     * @memberof MTNAccountResolutionP2PInstruction
     */
    beneficiary?: MTNAliasBeneficiaryConsumer;
    /**
     * The flag to show whether travel rule is required. Default - False.
     * @type {boolean}
     * @memberof MTNAccountResolutionP2PInstruction
     */
    travelRuleRequired?: boolean;
}
/**
 * Check if a given object implements the MTNAccountResolutionP2PInstruction interface.
 */
export declare function instanceOfMTNAccountResolutionP2PInstruction(value: object): boolean;
export declare function MTNAccountResolutionP2PInstructionFromJSON(json: any): MTNAccountResolutionP2PInstruction;
export declare function MTNAccountResolutionP2PInstructionFromJSONTyped(json: any, ignoreDiscriminator: boolean): MTNAccountResolutionP2PInstruction;
export declare function MTNAccountResolutionP2PInstructionToJSON(value?: Omit<MTNAccountResolutionP2PInstruction, 'travelRuleExchangeId' | 'createdDate' | 'updatedDate'> | null): any;
