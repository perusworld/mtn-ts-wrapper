import {
  EarmarksApi, GetTokenBalancesRequest, SubmitBurnOperationRequest, SubmitMintOperationRequest, SubmitTransferOperationRequest,
  TokenizedDepositsManagementApi, UpdateEarmarkForDepositsRequest
} from "./generated/apis";
import {
  MTNTokenizedBurnOperationInformation, MTNTokenizedDepositBalance, MTNTokenizedMintOperationInformation,
  MTNTokenizedTransferOperationInformation
} from "./generated/models";
import { Configuration } from "./generated/runtime";
import { getLogger, buildConfiguration, ConfigurationOptions, doWait, GetMTNTokenOperationRequest } from "./util";

const logger = getLogger('TokenService');

export class TokenService {

  private configuration!: Configuration;
  private td!: TokenizedDepositsManagementApi;
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
    this.em = new EarmarksApi(this.configuration);
  }

  public async getBalance(req: GetTokenBalancesRequest): Promise<MTNTokenizedDepositBalance | undefined> {
    let ret = undefined;
    try {
      ret = await this.td.getTokenBalances(req);
    } catch (error) {
      logger.error(error)
    }
    return ret;
  }

  public async mint(req: SubmitMintOperationRequest): Promise<MTNTokenizedMintOperationInformation | undefined> {
    let ret = undefined;
    try {
      ret = await this.td.submitMintOperation(req);
    } catch (error) {
      logger.error(error)
    }
    return ret;
  }

  public async transfer(req: SubmitTransferOperationRequest): Promise<MTNTokenizedTransferOperationInformation | undefined> {
    let ret = undefined;
    try {
      ret = await this.td.submitTransferOperation(req);
    } catch (error) {
      logger.error(error)
    }
    return ret;
  }

  public async burn(req: SubmitBurnOperationRequest): Promise<MTNTokenizedBurnOperationInformation | undefined> {
    let ret = undefined;
    try {
      ret = await this.td.submitBurnOperation(req);
    } catch (error) {
      logger.error(error)
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

  public async waitForTokenOperation(operationId: string, cfg: ConfigurationOptions, sleepTime = 1000, maxRetry = 15): Promise<boolean> {
    let ret = false;
    try {
      ret = await doWait(async () => {
        const resp = await this.td.getTokenOperation(GetMTNTokenOperationRequest(cfg.ica, operationId));
        return resp.status && (resp.status === 'RECEIVED'
          || resp.status === 'PENDING') ? undefined : resp.status;
      }, sleepTime, maxRetry);
    } catch (error) {
      logger.error(error);
    }
    return ret;
  }
}