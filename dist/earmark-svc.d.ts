import { EarmarkSearchRequest, GetEarmarkRequest, PostEarmarkRequest, UpdateEarmarkForReleaseRequest } from "./generated/apis";
import { MTNEarmark, MTNEarmarks } from "./generated/models";
import { ConfigurationOptions } from "./util";
export declare class EarmarkService {
    private configuration;
    private em;
    /**
     * Constructor
     *
     * @class EarmarkService
     * @constructor
     */
    constructor(cfg: ConfigurationOptions);
    getEarmarkDetails(req: GetEarmarkRequest): Promise<MTNEarmark | undefined>;
    searchEarmarks(req: EarmarkSearchRequest): Promise<MTNEarmarks | undefined>;
    createEarmark(req: PostEarmarkRequest): Promise<MTNEarmark | undefined>;
    releaseEarmark(req: UpdateEarmarkForReleaseRequest): Promise<boolean>;
    waitForEarmarkStatus(status: string, req: GetEarmarkRequest, sleepTime?: number, maxRetry?: number): Promise<boolean>;
}
