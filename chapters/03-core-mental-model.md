# Chapter 3 — Core Mental Model

## Reader outcome

By the end of this chapter, you should be able to reason through Cashu flows end-to-end and design robust state handling for real apps.

## 3.1 The essential objects

You only need to internalize a small set of objects:

- **Mint**: issues and redeems value proofs
- **Wallet**: stores proofs, requests operations, enforces policy
- **Proof**: bearer value object signed by mint
- **Keyset**: mint signing key family/version context
- **Quote**: temporary contract for minting/melting over Lightning

Most implementation bugs come from confusing object lifecycle transitions, not from exotic crypto failures.

## 3.2 The three primary flows

### Mint (acquire ecash)

1. Ask mint for quote
2. Pay quote over Lightning
3. Submit blinded outputs
4. Receive promises, unblind, store proofs

### Swap (reshape proofs)

1. Submit existing proofs as inputs
2. Request new output denominations
3. Receive replacement proofs

This is your fragmentation/privacy/control mechanism.

### Melt (redeem ecash)

1. Ask mint for melt quote against invoice
2. Provide proofs
3. Mint pays invoice and settles result
4. Wallet reconciles reserve/fees/change

## 3.3 State transitions that matter

Treat proof state as first-class domain logic:

- `unspent`
- `pending` (in-flight operation)
- `spent`

Never let UI or API retries hide these transitions. Most “lost funds” incidents are actually state reconciliation bugs.

## 3.4 Failure-first engineering

Plan for failures before happy path polish:

- quote expired
- payment uncertain
- network interrupted after mint accepted inputs
- keyset rotated during operation

Design with idempotency and reconciliation jobs from day one.

## 3.5 Minimal architecture that scales

A clean starter architecture:

- wallet store (proofs + tx log)
- mint adapter (NUT/API client)
- operation engine (mint/swap/melt state machine)
- background reconciler (pending -> resolved)

You can add policy and privacy modules later, but if this core is weak, everything else crumbles.

## 3.6 Practical decision framework

Before shipping a feature, ask:

1. What objects are created/consumed?
2. What are the exact state transitions?
3. Which steps are idempotent?
4. What can be retried safely?
5. What does user-facing recovery look like?

If you cannot answer all five, the feature is not production-ready.

---

## Pseudocode flow sketch

```text
operation = createOperation(type=melt, inputs=proofs, quote=q)
setState(inputs, pending)
result = mintApi.execute(operation)
if result.success:
  setState(inputs, spent)
  store(result.changeProofs, unspent)
else:
  reconcile(operation)
```

## Checklist

- [ ] Proof lifecycle is explicit in code and DB schema.
- [ ] Pending operations are recoverable after app restart.
- [ ] Retries are bounded and idempotent where possible.
