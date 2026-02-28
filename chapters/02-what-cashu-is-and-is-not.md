# Chapter 2 — What Cashu Is (and Is Not)

## Reader outcome

By the end of this chapter, you can describe Cashu precisely enough to set correct expectations with your team and users.

## 2.1 What Cashu is

Cashu is a protocol family for **custodial ecash** using blind signatures.

In practice, a mint issues signed value proofs to wallets. Wallets can transfer those proofs, and mints redeem them during settlement flows (typically over Lightning).

Core properties:

- bearer-style transfer of value objects
- blinded issuance that reduces token-level linkability
- practical API surface for wallet and app developers

## 2.2 What Cashu is not

Cashu is **not**:

- trustless like self-custodied Bitcoin on-chain
- a fully anonymous system by default
- a replacement for all payment rails
- immune to operational failure

You still need to trust mint operators and design around liquidity, uptime, abuse prevention, and client security.

## 2.3 Trust boundaries in one diagram (mental model)

Think in three layers:

1. **Mint trust layer**
   - Custody and issuance rules live here.
2. **Wallet correctness layer**
   - Selection, splitting, persistence, and recovery logic live here.
3. **Transport/metadata layer**
   - Network path, timing, and interaction patterns can leak context.

Blind signatures mainly improve layer 1 privacy characteristics (issuance visibility), but layers 2 and 3 still decide how much real-world privacy users get.

## 2.4 Why this model is still useful

Even with trust assumptions, Cashu unlocks things that account-ledger systems struggle with:

- portable value between apps/wallets
- better offline/async handoff patterns
- simpler micropayment product design

In other words: you trade absolute guarantees for product-level utility and implementation speed.

## 2.5 Language that avoids confusion

When writing docs, use these phrases consistently:

- “custodial ecash” (not “trustless cash”)
- “privacy-enhancing” (not “perfectly private”)
- “mint risk” (not “no counterparty risk”)

Your documentation tone is part of your security model. Misleading language creates operational and legal pain later.

---

## Implementation notes

- Put trust assumptions in README and user-facing settings screens.
- Expose mint status and risk indicators in-app.
- Provide explicit error copy for redemption failures and pending states.

## Checklist

- [ ] Team can explain Cashu in 30 seconds without hype.
- [ ] Docs include explicit mint trust assumptions.
- [ ] UX copy differentiates privacy from anonymity.
