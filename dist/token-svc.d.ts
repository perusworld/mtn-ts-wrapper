import { GetBalancesRequest, GetTokenBalancesRequest, SubmitOperationRequest, UpdateEarmarkForDepositsRequest } from "./generated/apis";
import { MTNTokenBalance, MTNTokenOperation, MTNTokenizedDepositBalance } from "./generated/models";
import { ConfigurationOptions } from "./util";
export declare class TokenService {
    private configuration;
    private td;
    private tkn;
    private em;
    /**
     * Constructor
     *
     * @class TokenService
     * @constructor
     */
    constructor(cfg: ConfigurationOptions);
    /**
     * @deprecated
     */
    getBalance(req: GetBalancesRequest): Promise<MTNTokenBalance | undefined>;
    getTokenBalances(req: GetTokenBalancesRequest): Promise<MTNTokenizedDepositBalance | undefined>;
    /**
     * @deprecated
     */
    submitOperation(req: SubmitOperationRequest): Promise<MTNTokenOperation | undefined>;
    depositIntoEarmark(req: UpdateEarmarkForDepositsRequest): Promise<boolean>;
    /**
     * @deprecated
     */
    waitForTokenOperation(operationId: string, cfg: ConfigurationOptions, sleepTime?: number, maxRetry?: number): Promise<boolean>;
}
