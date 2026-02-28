# Chapter 0 — How to Use This Book (Developer Path)

## Who this is for

This book is for developers building with Cashu: wallet authors, backend engineers, and product teams integrating ecash into real apps.

## What you should already know

- Basic Bitcoin and Lightning concepts (invoice, routing, settlement)
- API design and backend fundamentals
- Basic applied cryptography hygiene (keys, signatures, randomness)

## Quick path vs full path

### Quick path (build-first, minimal reading)

Goal: ship a first working prototype safely with minimal theory detours.

Read in this order:

1. **Chapter 0** — How to use this book
2. **Chapter 2** — What Cashu is (and is not)
3. **Chapter 3** — Core mental model
4. **Chapter 5** — Mint API deep dive
5. **Chapter 6** — Wallet architecture
6. **Chapter 7** — Lightning integration
7. **Chapter 8 + 9 checklists** — Security + privacy gates before launch

Then backfill:

- **Chapter 1** for product framing
- **Chapter 4** for deeper primitives
- **Chapter 10+** for interoperability and production scale

### Full path (mastery, end-to-end)

Goal: build deep protocol understanding and long-term production judgment.

Read every chapter in order (0 → 14), then implement examples, failure drills, and deployment checklists.

## Book conventions

- “Mint” = custodial signer and settlement operator.
- “Proof” = spendable ecash token object in wallet state.
- “Pending” = in-flight state that must be recoverable.
- NUT references are treated as source-of-truth specs.

## Practical warning

Cashu is powerful, but it is not trustless magic. If you skip threat modeling, state reconciliation, and operational controls, you can still lose funds or privacy.

Build with clear assumptions, instrument everything, and test failure paths first.
