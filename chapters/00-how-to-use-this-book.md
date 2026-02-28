# Chapter 0 — How to Use This Book (Developer Path)

## Who this is for

This book is for developers building with Cashu: wallet authors, backend engineers, and product teams integrating ecash into real apps.

## What you should already know

- Basic Bitcoin and Lightning concepts (invoice, routing, settlement)
- API design and backend fundamentals
- Basic applied cryptography hygiene (keys, signatures, randomness)

## Fast path vs full path

### Fast path (ship quickly)

1. Chapter 1–3 (mental model)
2. Chapter 5 (Mint API)
3. Chapter 6 (Wallet architecture)
4. Chapter 7 (Lightning integration)
5. Chapter 8 + 9 checklists before production

### Full path (deep understanding)

Read in order, then implement the references and exercises.

## Book conventions

- “Mint” = custodial signer and settlement operator.
- “Proof” = spendable ecash token object in wallet state.
- “Pending” = in-flight state that must be recoverable.
- NUT references are treated as source-of-truth specs.

## Practical warning

Cashu is powerful, but it is not trustless magic. If you skip threat modeling, state reconciliation, and operational controls, you can still lose funds or privacy.

Build with clear assumptions, instrument everything, and test failure paths first.
