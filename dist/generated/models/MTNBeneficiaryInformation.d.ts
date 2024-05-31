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
import type { MTNConsumerTravelTransferBeneficiary } from './MTNConsumerTravelTransferBeneficiary';
import type { MTNVasp } from './MTNVasp';
/**
 * Beneficiary information.
 * @export
 * @interface MTNBeneficiaryInformation
 */
export interface MTNBeneficiaryInformation {
    /**
     *
     * @type {MTNConsumerTravelTransferBeneficiary}
     * @memberof MTNBeneficiaryInformation
     */
    beneficiary?: MTNConsumerTravelTransferBeneficiary;
    /**
     *
     * @type {MTNVasp}
     * @memberof MTNBeneficiaryInformation
     */
    beneficiaryVasp?: MTNVasp;
}
/**
 * Check if a given object implements the MTNBeneficiaryInformation interface.
 */
export declare function instanceOfMTNBeneficiaryInformation(value: object): boolean;
export declare function MTNBeneficiaryInformationFromJSON(json: any): MTNBeneficiaryInformation;
export declare function MTNBeneficiaryInformationFromJSONTyped(json: any, ignoreDiscriminator: boolean): MTNBeneficiaryInformation;
export declare function MTNBeneficiaryInformationToJSON(value?: MTNBeneficiaryInformation | null): any;
