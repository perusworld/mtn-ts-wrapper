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
import type { MTNStatusReasonInformation } from './MTNStatusReasonInformation';
/**
 * A basic Peer to Peer POST payload
 * @export
 * @interface MTNP2PInstruction
 */
export interface MTNP2PInstruction {
    /**
     * Payment Instruction type.
     * @type {string}
     * @memberof MTNP2PInstruction
     */
    requestType?: string;
    /**
     * unique id for the P2P lookup request.
     * @type {string}
     * @memberof MTNP2PInstruction
     */
    instructionId?: string;
    /**
     * Quantity of Asset for the Account Resolution request, such as the quantity of BTC to be transferred.
     * @type {number}
     * @memberof MTNP2PInstruction
     */
    quantity?: number;
    /**
     * The status of an Alias Resolution request.
     * @type {string}
     * @memberof MTNP2PInstruction
     */
    status?: string;
    /**
     * More details on the error.
     * @type {Array<MTNStatusReasonInformation>}
     * @memberof MTNP2PInstruction
     */
    statusReasonInformation?: Array<MTNStatusReasonInformation>;
    /**
     * The hash of a blockchain.
     * @type {string}
     * @memberof MTNP2PInstruction
     */
    blockchainTxnHash?: string;
    /**
     * The exchange identifier received from CipherTrace.
     * @type {string}
     * @memberof MTNP2PInstruction
     */
    readonly travelRuleExchangeId?: string;
    /**
     * Creation datetime in ISO8601 format
     * @type {Date}
     * @memberof MTNP2PInstruction
     */
    readonly createdDate?: Date;
    /**
     * Last updated datetime in ISO8601 format
     * @type {Date}
     * @memberof MTNP2PInstruction
     */
    readonly updatedDate?: Date;
}
/**
 * Check if a given object implements the MTNP2PInstruction interface.
 */
export declare function instanceOfMTNP2PInstruction(value: object): boolean;
export declare function MTNP2PInstructionFromJSON(json: any): MTNP2PInstruction;
export declare function MTNP2PInstructionFromJSONTyped(json: any, ignoreDiscriminator: boolean): MTNP2PInstruction;
export declare function MTNP2PInstructionToJSON(value?: Omit<MTNP2PInstruction, 'travelRuleExchangeId' | 'createdDate' | 'updatedDate'> | null): any;
