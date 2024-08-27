import { Configuration, FetchParams, Middleware, RequestContext, ResponseContext } from './generated/runtime';
import { GetEarmarkRequest, GetTokenBalancesRequest, GetTokenOperationRequest, PostEarmarkRequest, SubmitBurnOperationRequest, SubmitMintOperationRequest, SubmitTransferOperationRequest, UpdateEarmarkForDepositsRequest, UpdateEarmarkForReleaseRequest } from './generated/apis';
import { MTNPayer, MTNRecipient, MTNTokenIdentifier } from './generated/models';
export declare const QUERY_DATE_FORMAT = "yyyy-MM-dd";
export declare const STR_DATE_FORMAT = "LLL dd yyyy";
export declare const getLogger: (name: string) => any;
export declare const readString: (filePath: string) => any;
export declare const pathOf: (filePath: string) => string;
export declare const uuid: () => string;
export declare const rndId: (prefix?: string, len?: number, from?: number, sep?: string) => string;
export declare const snooze: (ms?: number) => Promise<any>;
export declare const doWait: (callBack: () => Promise<any>, sleepTime?: number, maxRetry?: number) => Promise<any | undefined>;
export interface JWEMiddlewareConfig {
    consumerKey: string;
    signingKey: string;
    encryptionCertificate: string;
    privateKey: string;
}
export declare class JWEMiddleware implements Middleware {
    private cfg;
    private configEnc;
    private configDec;
    private jwe;
    private jwd;
    constructor(cfg: JWEMiddlewareConfig);
    pre(context: RequestContext): Promise<void | FetchParams>;
    post(context: ResponseContext): Promise<void | Response>;
}
export interface ConfigurationOptions {
    basePath: string;
    consumerKey: string;
    pkcs12KeyFile: string;
    encryptionCertificateFile: string;
    privateKeyFile: string;
    ica: string;
    currency?: string;
    tokenSymbol?: string;
    chainId: string;
    identifierType: string;
}
export declare const buildConfiguration: (cfg: ConfigurationOptions) => Configuration;
export declare const buildTokenConfigurationFromEnv: () => ConfigurationOptions;
export declare const buildEarmarkConfigurationFromEnv: () => ConfigurationOptions;
export declare const GetTokenIdentifier: (cfg: ConfigurationOptions) => MTNTokenIdentifier;
export declare const GetMTNTokenOperationRequest: (ica: string, operationId: string) => GetTokenOperationRequest;
export declare const GetTokenBalanceRequest: (accountAlias: string | undefined, cfg: ConfigurationOptions) => GetTokenBalancesRequest;
export declare const GetMintRequest: (requestId: string, to: string, amount: number, cfg: ConfigurationOptions) => SubmitMintOperationRequest;
export declare const GetTransferRequest: (requestId: string, from: string, to: string, amount: number, cfg: ConfigurationOptions) => SubmitTransferOperationRequest;
export declare const GetBurnRequest: (requestId: string, from: string, amount: number, cfg: ConfigurationOptions) => SubmitBurnOperationRequest;
export declare const GetEarmarkCreateRequest: (cfg: ConfigurationOptions, externalReference: string, payers: MTNPayer[], recipients: MTNRecipient[]) => PostEarmarkRequest;
export declare const GetEarmarkDetailsRequest: (cfg: ConfigurationOptions, earmarkId: string) => GetEarmarkRequest;
export declare const GetEarmarkDepositRequest: (cfg: ConfigurationOptions, earmarkId: string, payerAlias: string, amount: number) => UpdateEarmarkForDepositsRequest;
export declare const GetEarmarkReleaseRequest: (cfg: ConfigurationOptions, earmarkId: string, reasonCode?: string, description?: string) => UpdateEarmarkForReleaseRequest;
