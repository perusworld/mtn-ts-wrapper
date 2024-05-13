import {
  TokenService, GetBalanceRequest, GetBurnRequest, GetMintRequest, GetTransferRequest,
  buildTokenConfigurationFromEnv, uuid
} from "../src/index";
import * as dotenv from 'dotenv';
dotenv.config();

const fromTestAlias = process.env.TEST_FROM_ALIAS || '';
const toTestAlias = process.env.TEST_TO_ALIAS || '';
const amt = 1;
const WAIT_TIME = 30 * 1000;

describe('Check token operations', () => {
  const cfg = buildTokenConfigurationFromEnv();
  const tkn = new TokenService(cfg);

  it('should check balance', async () => {
    const balance = await tkn.getBalance(GetBalanceRequest(fromTestAlias, cfg))
    expect(balance).toBeDefined();
    expect(balance?.balance).toBeDefined();
    expect(balance?.balance).toBeGreaterThanOrEqual(0);
  });

  it('should mint', async () => {
    const balanceBefore = await tkn.getBalance(GetBalanceRequest(fromTestAlias, cfg))
    const mintReqId = uuid();
    const mintResp = await tkn.submitOperation(GetMintRequest(mintReqId, fromTestAlias, amt, cfg));
    expect(mintResp).toBeDefined();
    expect(mintResp?.operationId).toBeDefined();
    let done = await tkn.waitForTokenOperation(mintResp?.operationId || '', cfg)
    expect(done).toBeTruthy();
    const balanceAfter = await tkn.getBalance(GetBalanceRequest(fromTestAlias, cfg))
    expect(balanceAfter?.balance).toBe((balanceBefore?.balance || 0) + amt);
  }, WAIT_TIME);


  it('should transfer', async () => {
    const balanceBefore = await tkn.getBalance(GetBalanceRequest(toTestAlias, cfg))
    const mintResp = await tkn.submitOperation(GetMintRequest(uuid(), fromTestAlias, amt, cfg));
    await tkn.waitForTokenOperation(mintResp?.operationId || '', cfg)

    const transferResp = await tkn.submitOperation(GetTransferRequest(uuid(), fromTestAlias, toTestAlias, amt, cfg));
    expect(transferResp).toBeDefined();
    expect(transferResp?.operationId).toBeDefined();
    await tkn.waitForTokenOperation(transferResp?.operationId || '', cfg)

    const balanceAfter = await tkn.getBalance(GetBalanceRequest(toTestAlias, cfg))
    expect(balanceAfter?.balance).toBe((balanceBefore?.balance || 0) + amt);

  }, WAIT_TIME);

  it('should burn', async () => {
    const balanceBefore = await tkn.getBalance(GetBalanceRequest(fromTestAlias, cfg))
    const mintResp = await tkn.submitOperation(GetMintRequest(uuid(), fromTestAlias, amt, cfg));
    let done = await tkn.waitForTokenOperation(mintResp?.operationId || '', cfg)
    expect(done).toBeTruthy();

    const burnResp = await tkn.submitOperation(GetBurnRequest(uuid(), fromTestAlias, amt, cfg));
    expect(burnResp).toBeDefined();
    expect(burnResp?.operationId).toBeDefined();
    await tkn.waitForTokenOperation(burnResp?.operationId || '', cfg)

    const balanceAfter = await tkn.getBalance(GetBalanceRequest(toTestAlias, cfg))
    expect(balanceAfter?.balance).toBe((balanceBefore?.balance || 0));

  }, WAIT_TIME);



});