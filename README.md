# MTN Typescript Wrapper API #

## Install
```bash
npm i https://github.com/perusworld/mtn-ts-wrapper.git
```

## Example Usage
Look at the following testcases for examples. A version of [env file](.env.example) needs to be configured prior to running the testcases.

[Token Test Case](./test/token.test.ts)

[Earmark Test Case](./test/earmark.test.ts)

### Token API Usage
```typescript
    import { GetBalanceRequest, GetEarmarkCreateRequest, GetEarmarkDepositRequest, GetEarmarkDetailsRequest, GetEarmarkReleaseRequest, GetMintRequest, GetTransferRequest, buildEarmarkConfigurationFromEnv, buildTokenConfigurationFromEnv, rndId, uuid } from "mtn-ts-wrapper/dist/util";
    import { EarmarkService, TokenService } from "mtn-ts-wrapper";

    const fromTestAlias = process.env.TEST_FROM_ALIAS || '';
    const toTestAlias = process.env.TEST_TO_ALIAS || '';
    const amt = 1;
    const cfg = buildTokenConfigurationFromEnv();
    const tkn = new TokenService(cfg);

    const balanceBefore = await tkn.getBalance(GetBalanceRequest(toTestAlias, cfg))
    const mintResp = await tkn.submitOperation(GetMintRequest(uuid(), fromTestAlias, amt, cfg));
    await tkn.waitForTokenOperation(mintResp?.operationId || '', cfg)
    const transferResp = await tkn.submitOperation(GetTransferRequest(uuid(), fromTestAlias, toTestAlias, amt, cfg));
    await tkn.waitForTokenOperation(transferResp?.operationId || '', cfg)
    const balanceAfter = await tkn.getBalance(GetBalanceRequest(toTestAlias, cfg))

```

### Earmark API Usage
```typescript
    import { GetBalanceRequest, GetEarmarkCreateRequest, GetEarmarkDepositRequest, GetEarmarkDetailsRequest, GetEarmarkReleaseRequest, GetMintRequest, GetTransferRequest, buildEarmarkConfigurationFromEnv, buildTokenConfigurationFromEnv, rndId, uuid } from "mtn-ts-wrapper/dist/util";
    import { EarmarkService, TokenService } from "mtn-ts-wrapper";

    const payerTestAlias = process.env.TEST_EARMARK_PAYER_ALIAS || '';
    const recipientTestAlias = process.env.TEST_EARMARK_RECIPIENT_ALIAS || '';
    const amt = 1;
    const tknCfg = buildTokenConfigurationFromEnv();
    const tkn = new TokenService(tknCfg);
  
    const emCfg = buildEarmarkConfigurationFromEnv();
    const em = new EarmarkService(emCfg);
      
    const externalReference = rndId();
    const created = await em.createEarmark(GetEarmarkCreateRequest(emCfg, externalReference, [{
      accountAlias: payerTestAlias, amount: amt
    }], [{
      accountAlias: recipientTestAlias, amount: amt
    }]));

    const mintResp = await tkn.submitOperation(GetMintRequest(uuid(), payerTestAlias, amt, tknCfg));
    await tkn.waitForTokenOperation(mintResp?.operationId || '', tknCfg);

    const deposited = await tkn.depositIntoEarmark(GetEarmarkDepositRequest(tknCfg, created?.earmarkId || '', payerTestAlias, amt));

    const ready = await em.waitForEarmarkStatus("READY_FOR_RELEASE", GetEarmarkDetailsRequest(emCfg, created?.earmarkId || ''));

    const released = await em.releaseEarmark(GetEarmarkReleaseRequest(emCfg, created?.earmarkId || ''));

    const executed = await em.waitForEarmarkStatus("EXECUTED", GetEarmarkDetailsRequest(emCfg, created?.earmarkId || ''));

    const details = await em.getEarmarkDetails(GetEarmarkDetailsRequest(emCfg, created?.earmarkId || ''));


```
