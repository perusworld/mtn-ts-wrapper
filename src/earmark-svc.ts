import { EarmarkSearchRequest, EarmarksApi, GetEarmarkRequest, PostEarmarkRequest, UpdateEarmarkForReleaseRequest } from "./generated/apis";
import { MTNEarmark, MTNEarmarks } from "./generated/models";
import { Configuration } from "./generated/runtime";
import { getLogger, buildConfiguration, ConfigurationOptions, doWait } from "./util";

const logger = getLogger('EarmarkService');

export class EarmarkService {

  private configuration!: Configuration;
  private em!: EarmarksApi;

  /**
   * Constructor
   *
   * @class EarmarkService
   * @constructor
   */
  constructor(cfg: ConfigurationOptions) {
    this.configuration = buildConfiguration(cfg);
    this.em = new EarmarksApi(this.configuration);
  }

  public async getEarmarkDetails(req: GetEarmarkRequest): Promise<MTNEarmark | undefined> {
    let ret = undefined;
    try {
      ret = await this.em.getEarmark(req);
    } catch (error) {
      logger.error(error);
    }
    return ret;
  }

  public async searchEarmarks(req: EarmarkSearchRequest): Promise<MTNEarmarks | undefined> {
    let ret = undefined;
    try {
      ret = await this.em.earmarkSearch(req);
    } catch (error) {
      logger.error(error);
    }
    return ret;
  }


  public async createEarmark(req: PostEarmarkRequest): Promise<MTNEarmark | undefined> {
    let ret: MTNEarmark | undefined = undefined;
    try {
      ret = await this.em.postEarmark(req);
    } catch (error) {
      logger.error(error)
    }
    return ret;
  }

  public async releaseEarmark(req: UpdateEarmarkForReleaseRequest): Promise<boolean> {
    let ret = false;
    try {
      await this.em.updateEarmarkForRelease(req);
      ret = true;
    } catch (error) {
      logger.error(error)
    }
    return ret;
  }

  public async waitForEarmarkStatus(status: string, req: GetEarmarkRequest, sleepTime = 1000, maxRetry = 15): Promise<boolean> {
    let ret = false;
    try {
      ret = await doWait(async () => {
        const em = await this.getEarmarkDetails(req);
        return em && em.status && (em.status === status) ? em.status : undefined;
      }, sleepTime, maxRetry);
    } catch (error) {
      logger.error(error);
    }
    return ret;
  }


}