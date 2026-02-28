# Chapter 11 — Use Cases That Actually Work

## Reader Outcome
By the end of this chapter, you can evaluate and prioritize Cashu use cases based on technical fit, operational complexity, and user value.

## 11.1 What makes a use case “Cashu-native”

**Draft prompts**
- What characteristics make Cashu better than account balances or direct Lightning?
- Which constraints (custody/trust/ops) are acceptable in this use case?

## 11.2 Pay-per-request APIs and AI agents

**Draft prompts**
- Request-metered access patterns
- Handling retries and exact-once billing semantics

## 11.3 Content paywalls and creator micropayments

**Draft prompts**
- Unlock flow UX and refund/retry behavior
- Fraud/abuse controls for low-value, high-frequency payments

## 11.4 Community/event economies

**Draft prompts**
- Temporary mint strategy for bounded communities
- Redemption windows and shutdown playbooks

## 11.5 Machine-to-machine payments

**Draft prompts**
- Service-to-service token flow
- Secret management and replay protection

## 11.6 Local-first and intermittent connectivity apps

**Draft prompts**
- Offline transfer patterns
- Eventual reconciliation with mint state

## 11.7 Multi-mint routing by risk profile

**Draft prompts**
- Splitting balances by trust, privacy, and uptime
- Routing heuristics and user-visible tradeoffs

## 11.8 When NOT to use Cashu

**Draft prompts**
- Cases where direct Lightning or on-chain is better
- Compliance/operational constraints that disqualify Cashu

## 11.9 Case study template for your own product

**Draft prompts**
- Problem, constraints, architecture, failure modes, launch checklist

## 11.10 KPI framework for use-case validation

**Draft prompts**
- UX metrics, settlement metrics, support burden, privacy indicators

## 11.11 Common anti-patterns

**Draft prompts**
- Feature-first without failure handling
- Overpromising privacy guarantees

## 11.12 Use-case readiness checklist

**Draft prompts**
- Decision checklist before selecting Cashu for a feature

---

## Implementation notes (chapter-level)
- Inputs: target product concept + constraints
- Outputs: ranked use-case shortlist + go/no-go decision
- State transitions: pilot -> beta -> production
- Failure boundaries: operational risk thresholds and rollback criteria

## Minimal flow (pseudocode)
```text
for use_case in candidate_use_cases:
  score = evaluate(ux_gain, ops_cost, trust_fit, privacy_fit)
select(top_use_cases)
```

## Common failure modes
1. Choosing Cashu for ideological reasons instead of product fit
   - Symptom: high complexity, low user value
   - Root cause: no decision framework
   - Mitigation: enforce explicit go/no-go rubric

## Checklist
- [ ] At least 3 concrete use cases evaluated with the same rubric
- [ ] Explicit “do not use Cashu” section included
- [ ] One deep case study completed

## Open questions
- Which use case should be the flagship narrative for this book?
