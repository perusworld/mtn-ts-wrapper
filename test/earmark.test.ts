import { EarmarkService, TokenService } from "../src/index";
import {
  GetEarmarkCreateRequest, GetEarmarkDepositRequest, GetEarmarkDetailsRequest, GetEarmarkReleaseRequest, GetMintRequest,
  buildEarmarkConfigurationFromEnv, buildTokenConfigurationFromEnv, rndId, uuid
} from "../src/util";
import * as dotenv from 'dotenv';
dotenv.config();

const payerTestAlias = process.env.TEST_EARMARK_PAYER_ALIAS || '';
const recipientTestAlias = process.env.TEST_EARMARK_RECIPIENT_ALIAS || '';
const amt = 1;
const WAIT_TIME = 30 * 1000;

describe('Check earmark operations', () => {
  const tknCfg = buildTokenConfigurationFromEnv();
  const tkn = new TokenService(tknCfg);

  const emCfg = buildEarmarkConfigurationFromEnv();
  const em = new EarmarkService(emCfg);

  it('should create earmark', async () => {

    const externalReference = rndId();
    const resp = await em.createEarmark(GetEarmarkCreateRequest(emCfg, externalReference, [{
      accountAlias: payerTestAlias, amount: amt
    }], [{
      accountAlias: recipientTestAlias, amount: amt
    }]));

    expect(resp).toBeDefined();
    expect(resp?.earmarkId).toBeDefined();
    expect(resp?.status).toBeDefined();
    expect(resp?.status).toBe('RECEIVED');

  });

  it('should get earmark details', async () => {

    const externalReference = rndId();
    const resp = await em.createEarmark(GetEarmarkCreateRequest(emCfg, externalReference, [{
      accountAlias: payerTestAlias, amount: amt
    }], [{
      accountAlias: recipientTestAlias, amount: amt
    }]));

    const details = await em.getEarmarkDetails(GetEarmarkDetailsRequest(emCfg, resp?.earmarkId || ''));
    expect(details).toBeDefined();
    expect(resp?.earmarkId).toBeDefined();
    expect(details?.earmarkId).toBe(resp?.earmarkId || '');
    expect(details?.status).toBeDefined();
    expect(details?.status).toBe('RECEIVED');

  });

  it('should release earmark', async () => {

    const externalReference = rndId();
    const created = await em.createEarmark(GetEarmarkCreateRequest(emCfg, externalReference, [{
      accountAlias: payerTestAlias, amount: amt
    }], [{
      accountAlias: recipientTestAlias, amount: amt
    }]));

    const mintResp = await tkn.submitOperation(GetMintRequest(uuid(), payerTestAlias, amt, tknCfg));
    await tkn.waitForTokenOperation(mintResp?.operationId || '', tknCfg);

    const deposited = await tkn.depositIntoEarmark(GetEarmarkDepositRequest(tknCfg, created?.earmarkId || '', payerTestAlias, amt));
    expect(deposited).toBeTruthy();

    const ready = await em.waitForEarmarkStatus("READY_FOR_RELEASE", GetEarmarkDetailsRequest(emCfg, created?.earmarkId || ''));
    expect(ready).toBeTruthy();

    const released = await em.releaseEarmark(GetEarmarkReleaseRequest(emCfg, created?.earmarkId || ''));
    expect(released).toBeTruthy();

    const executed = await em.waitForEarmarkStatus("EXECUTED", GetEarmarkDetailsRequest(emCfg, created?.earmarkId || ''));
    expect(executed).toBeTruthy();

  }, WAIT_TIME);

});