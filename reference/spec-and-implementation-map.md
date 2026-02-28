# Spec & Implementation Map (Cashu)

This page maps book chapters to Cashu protocol specs and implementation references.

## Core references

- Cashu main site: https://cashu.space/
- Docs: https://docs.cashu.space/
- NUT specs index: https://cashubtc.github.io/nuts/
- Nutshell reference implementation: https://github.com/cashubtc/nutshell

## Chapter mapping

- Chapter 4 (Protocol Primitives)
  - NUT-00 (core cryptographic model and terminology)
  - NUT-03 (swap mechanics)
- Chapter 5 (Mint API)
  - API/NUT endpoint behavior and capability declarations
- Chapter 6 (Wallet Architecture)
  - Keyset handling, proof lifecycle, restore flows
- Chapter 7 (Lightning Integration)
  - Mint/melt quote lifecycle and fee reserve handling
- Chapter 8 (Security)
  - Replay/race defenses, key management, abuse controls
- Chapter 9 (Privacy)
  - Metadata leakage controls, amount/timing correlation mitigations
- Chapter 10 (Interoperability)
  - NUT support matrix and graceful fallback behavior

## Usage rule for this book

When implementation detail in the prose conflicts with current NUT spec text, the NUT spec wins.
