import { EarmarksApi, GetBalancesRequest, GetTokenBalancesRequest, SubmitOperationRequest, TokenManagementApi, TokenizedDepositsManagementApi, UpdateEarmarkForDepositsRequest } from "./generated/apis";
import { MTNTokenBalance, MTNTokenOperation, MTNTokenizedDepositBalance } from "./generated/models";
import { Configuration } from "./generated/runtime";
import { getLogger, buildConfiguration, ConfigurationOptions, doWait, GetMTNOperationRequest } from "./util";

const logger = getLogger('TokenService');

export class TokenService {

  private configuration!: Configuration;
  private td!: TokenizedDepositsManagementApi;
  private tkn!: TokenManagementApi;
  private em!: EarmarksApi;

  /**
   * Constructor
   *
   * @class TokenService
   * @constructor
   */
  constructor(cfg: ConfigurationOptions) {
    this.configuration = buildConfiguration(cfg);
    this.td = new TokenizedDepositsManagementApi(this.configuration);
    this.tkn = new TokenManagementApi(this.configuration);
    this.em = new EarmarksApi(this.configuration);
  }

  /**
   * @deprecated
   */
  public async getBalance(req: GetBalancesRequest): Promise<MTNTokenBalance | undefined> {
    let ret = undefined;
    try {
      ret = await this.tkn.getBalances(req);
    } catch (error) {
      logger.error(error)
    }
    return ret;
  }

  public async getTokenBalances(req: GetTokenBalancesRequest): Promise<MTNTokenizedDepositBalance | undefined> {
    let ret = undefined;
    try {
      ret = await this.td.getTokenBalances(req);
    } catch (error) {
      logger.error(error)
    }
    return ret;
  }

  /**
   * @deprecated
   */
  public async submitOperation(req: SubmitOperationRequest): Promise<MTNTokenOperation | undefined> {
    let ret = undefined;
    try {
      ret = await this.tkn.submitOperation(req);
    } catch (error) {
      logger.error(error);
    }
    return ret;
  }

  public async depositIntoEarmark(req: UpdateEarmarkForDepositsRequest): Promise<boolean> {
    let ret = false;
    try {
      await this.em.updateEarmarkForDeposits(req);
      ret = true;
    } catch (error) {
      logger.error(error)
    }
    return ret;
  }

  /**
   * @deprecated
   */
  public async waitForTokenOperation(operationId: string, cfg: ConfigurationOptions, sleepTime = 1000, maxRetry = 15): Promise<boolean> {
    let ret = false;
    try {
      ret = await doWait(async () => {
        const resp = await this.tkn.getOperation(GetMTNOperationRequest(cfg.ica, operationId));
        return resp.status && (resp.status === 'RECEIVED'
          || resp.status === 'PENDING') ? undefined : resp.status;
      }, sleepTime, maxRetry);
    } catch (error) {
      logger.error(error);
    }
    return ret;
  }

}