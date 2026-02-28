# Chapter 12 — Design Patterns

## Reader Outcome
By the end of this chapter, you can apply proven architectural patterns for Cashu-backed products and avoid common integration pitfalls.

## 12.1 Pattern language for Cashu systems

**Draft prompts**
- How to classify patterns (wallet-side, mint-side, app-side)

## 12.2 Mint adapter pattern

**Draft prompts**
- Capability probing and graceful fallback
- Isolating protocol/version drift behind stable interfaces

## 12.3 Proof lifecycle state machine pattern

**Draft prompts**
- `unspent`/`pending`/`spent` transitions
- Recovery-first operation design

## 12.4 Escrow-like flow pattern (application-level)

**Draft prompts**
- Hold/release semantics without misleading custody claims

## 12.5 Retry-safe operation pattern

**Draft prompts**
- Idempotency keys, dedupe stores, replay windows

## 12.6 Fragmentation-control pattern

**Draft prompts**
- Consolidation jobs and decomposition policies

## 12.7 Privacy-budget pattern

**Draft prompts**
- Rotating transport paths and minimizing deterministic fingerprints

## 12.8 Multi-mint failover pattern

**Draft prompts**
- Uptime routing, trust diversification, incident containment

## 12.9 Observability-first pattern

**Draft prompts**
- Metrics/events/traces for financial state transitions

## 12.10 App-plugin boundary pattern

**Draft prompts**
- Clean interfaces for LNURL/Nostr/API integrations

## 12.11 Anti-pattern catalog

**Draft prompts**
- Hidden mutable state
- Non-recoverable pending ops
- “Magic” retries without reconciliation

## 12.12 Pattern selection matrix

**Draft prompts**
- Which patterns are mandatory for MVP vs production

---

## Implementation notes (chapter-level)
- Inputs: product constraints + target reliability
- Outputs: chosen patterns + architecture decisions
- State transitions: design review -> implementation -> hardening
- Failure boundaries: pattern-level blast-radius constraints

## Minimal flow (pseudocode)
```text
patterns = select_patterns(product_stage, risk_profile)
apply(patterns)
validate_with_failure_tests()
```

## Common failure modes
1. Pattern cargo-culting
   - Symptom: complexity without reliability gains
   - Root cause: no context fit analysis
   - Mitigation: pattern selection matrix + explicit tradeoff notes

## Checklist
- [ ] At least 5 patterns chosen with rationale
- [ ] At least 3 anti-patterns checked against codebase
- [ ] Selection matrix added to appendix/references

## Open questions
- Which 2–3 patterns should be mandatory in every chapter example?
