import { GetBalancesRequest, SubmitOperationRequest, UpdateEarmarkForDepositsRequest } from "./generated/apis";
import { MTNTokenBalance, MTNTokenOperation } from "./generated/models";
import { ConfigurationOptions } from "./util";
export declare class TokenService {
    private configuration;
    private tkn;
    private em;
    /**
     * Constructor
     *
     * @class TokenService
     * @constructor
     */
    constructor(cfg: ConfigurationOptions);
    getBalance(req: GetBalancesRequest): Promise<MTNTokenBalance | undefined>;
    submitOperation(req: SubmitOperationRequest): Promise<MTNTokenOperation | undefined>;
    depositIntoEarmark(req: UpdateEarmarkForDepositsRequest): Promise<boolean>;
    waitForTokenOperation(operationId: string, cfg: ConfigurationOptions, sleepTime?: number, maxRetry?: number): Promise<boolean>;
}
