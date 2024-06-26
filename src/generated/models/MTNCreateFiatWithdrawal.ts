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
/**
 * Create Fiat Withdrawal Request Object.
 * @export
 * @interface MTNCreateFiatWithdrawal
 */
export interface MTNCreateFiatWithdrawal {
    /**
     * An external Fiat Withdrawal identifier provided by the customer.
     * @type {string}
     * @memberof MTNCreateFiatWithdrawal
     */
    externalReference?: string;
    /**
     * The amount of the asset (fiat) to spend or acquire using the specified amount. The maximum precision is 8 decimals.
     * @type {number}
     * @memberof MTNCreateFiatWithdrawal
     */
    amount: number;
    /**
     * Currency Code of funding account in service provider system . Valid values - USD
     * @type {string}
     * @memberof MTNCreateFiatWithdrawal
     */
    fundingCurrency: string;
}

/**
 * Check if a given object implements the MTNCreateFiatWithdrawal interface.
 */
export function instanceOfMTNCreateFiatWithdrawal(value: object): boolean {
    if (!('amount' in value)) return false;
    if (!('fundingCurrency' in value)) return false;
    return true;
}

export function MTNCreateFiatWithdrawalFromJSON(json: any): MTNCreateFiatWithdrawal {
    return MTNCreateFiatWithdrawalFromJSONTyped(json, false);
}

export function MTNCreateFiatWithdrawalFromJSONTyped(json: any, ignoreDiscriminator: boolean): MTNCreateFiatWithdrawal {
    if (json == null) {
        return json;
    }
    return {
        
        'externalReference': json['externalReference'] == null ? undefined : json['externalReference'],
        'amount': json['amount'],
        'fundingCurrency': json['fundingCurrency'],
    };
}

export function MTNCreateFiatWithdrawalToJSON(value?: MTNCreateFiatWithdrawal | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'externalReference': value['externalReference'],
        'amount': value['amount'],
        'fundingCurrency': value['fundingCurrency'],
    };
}

