import { GetTokenBalancesRequest, SubmitBurnOperationRequest, SubmitMintOperationRequest, SubmitTransferOperationRequest, UpdateEarmarkForDepositsRequest } from "./generated/apis";
import { MTNTokenizedBurnOperationInformation, MTNTokenizedDepositBalance, MTNTokenizedMintOperationInformation, MTNTokenizedTransferOperationInformation } from "./generated/models";
import { ConfigurationOptions } from "./util";
export declare class TokenService {
    private configuration;
    private td;
    private em;
    /**
     * Constructor
     *
     * @class TokenService
     * @constructor
     */
    constructor(cfg: ConfigurationOptions);
    getBalance(req: GetTokenBalancesRequest): Promise<MTNTokenizedDepositBalance | undefined>;
    mint(req: SubmitMintOperationRequest): Promise<MTNTokenizedMintOperationInformation | undefined>;
    transfer(req: SubmitTransferOperationRequest): Promise<MTNTokenizedTransferOperationInformation | undefined>;
    burn(req: SubmitBurnOperationRequest): Promise<MTNTokenizedBurnOperationInformation | undefined>;
    depositIntoEarmark(req: UpdateEarmarkForDepositsRequest): Promise<boolean>;
    waitForTokenOperation(operationId: string, cfg: ConfigurationOptions, sleepTime?: number, maxRetry?: number): Promise<string>;
}
