# Chapter 1 — The Problem Space

## Reader outcome

By the end of this chapter, you should be able to explain why Cashu exists from a product-and-systems perspective, not just a protocol perspective.

## 1.1 Bitcoin is excellent money, but app UX is still hard

Bitcoin gives us hard money and global settlement, but building smooth, everyday payment experiences on top is still messy.

For many apps, on-chain transactions are too slow and too expensive for frequent, low-value interactions. Lightning fixes a lot of this, but Lightning-native UX still creates friction for many users and developers:

- inbound/outbound liquidity constraints
- routing failures at the worst time
- invoice expiries and retry complexity
- operational burden on service operators

The result: teams spend a disproportionate amount of time engineering around payment edge cases instead of shipping user value.

## 1.2 Accounts are easy, bearer value is hard

Most products solve this with custodial balances in a database. It works, but it has costs:

- users cannot freely transfer balances outside your app without your API online
- privacy is weak by default (full transaction visibility by operator)
- portability and interoperability are poor

Cashu sits in the middle: still custodial, but with **bearer-style digital cash** semantics. Users can hold and transfer signed value objects (proofs) wallet-to-wallet.

That shift is subtle but huge: you stop treating value as only a row in one backend and start treating it as a transferable cryptographic object.

## 1.3 The internet needs lightweight value objects

Developers have great primitives for identity (OAuth keys/tokens), content (URLs), and messaging (pub/sub), but value transfer remains too tied to heavy rails or centralized ledgers.

A useful value primitive for internet apps should be:

- cheap for small amounts
- fast for interactive flows
- programmable in standard backend/frontend stacks
- private enough for everyday use, not just enterprise reporting

Cashu gives a practical answer today, with explicit trust tradeoffs.

## 1.4 Where Cashu helps in real products

Cashu shines in products where payments are frequent, small, and UX-sensitive:

- pay-per-request APIs
- creator tips and paywalls
- micro-marketplaces
- machine-to-machine payments
- temporary event/community economies

In these settings, perfect trustlessness is often less important than predictable UX, low fees, and implementation speed.

## 1.5 The honest constraints (no fairy tales)

Cashu is not a magic privacy cloak and not a trustless system.

You trust mints for custody and solvency. You rely on wallet implementation quality. You still need good operational security around metadata leakage (timing, IP, amount patterns).

This book treats those constraints as engineering inputs, not deal-breakers.

## 1.6 What this means for builders

The right question is not: “Is this perfect money?”

The right question is: “For this product, does Cashu create a better reliability/privacy/speed tradeoff than my alternatives?”

If yes, you can build with it today.

---

## Common failure modes in product planning

1. **Protocol-first, user-last**
   - Teams design around cryptographic elegance while ignoring checkout friction and failure recovery.
2. **Underestimating operations**
   - Lightning and mint operations are treated as “set and forget.” They are not.
3. **Privacy theater**
   - Blind signatures are used as a marketing shield while metadata hygiene is ignored.

## Checklist

- [ ] You can explain why app balances are not the same as bearer ecash.
- [ ] You can state Cashu trust assumptions in one paragraph.
- [ ] You can name one product where Cashu improves UX today.
