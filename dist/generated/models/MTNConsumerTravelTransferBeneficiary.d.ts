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
import type { MTNPerson } from './MTNPerson';
/**
 *
 * @export
 * @interface MTNConsumerTravelTransferBeneficiary
 */
export interface MTNConsumerTravelTransferBeneficiary {
    /**
     *
     * @type {Array<MTNPerson>}
     * @memberof MTNConsumerTravelTransferBeneficiary
     */
    beneficiaryPersons?: Array<MTNPerson>;
    /**
     *
     * @type {Array<string>}
     * @memberof MTNConsumerTravelTransferBeneficiary
     */
    accountNumbers?: Array<string>;
}
/**
 * Check if a given object implements the MTNConsumerTravelTransferBeneficiary interface.
 */
export declare function instanceOfMTNConsumerTravelTransferBeneficiary(value: object): boolean;
export declare function MTNConsumerTravelTransferBeneficiaryFromJSON(json: any): MTNConsumerTravelTransferBeneficiary;
export declare function MTNConsumerTravelTransferBeneficiaryFromJSONTyped(json: any, ignoreDiscriminator: boolean): MTNConsumerTravelTransferBeneficiary;
export declare function MTNConsumerTravelTransferBeneficiaryToJSON(value?: MTNConsumerTravelTransferBeneficiary | null): any;
