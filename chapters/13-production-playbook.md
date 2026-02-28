# Chapter 13 — Production Playbook

## Reader Outcome
By the end of this chapter, you can launch and operate a Cashu-integrated product with explicit runbooks, SLOs, and incident response practices.

## 13.1 Production readiness criteria

**Draft prompts**
- Definition of done for launch
- Security/privacy/reliability minimums

## 13.2 Environment strategy (dev/staging/prod)

**Draft prompts**
- Data isolation and test mint strategy
- Seed/key handling across environments

## 13.3 SLOs and error budgets

**Draft prompts**
- Wallet operation success rate
- Melt settlement latency
- Reconciliation completion windows

## 13.4 Monitoring and alerting blueprint

**Draft prompts**
- Critical signals and alert thresholds
- False-positive reduction strategy

## 13.5 Reconciliation and ledger integrity jobs

**Draft prompts**
- Scheduled audits for pending/spent consistency
- Drift detection and correction workflow

## 13.6 Key rotation and secret management runbook

**Draft prompts**
- Rotation cadence and emergency procedures
- Blast-radius reduction controls

## 13.7 Abuse and DoS defense runbook

**Draft prompts**
- Rate limiting, quotas, challenge mechanisms
- Degraded mode behavior

## 13.8 Incident response for payment uncertainty

**Draft prompts**
- Unknown settlement outcomes
- User communication templates

## 13.9 Backup and disaster recovery

**Draft prompts**
- RPO/RTO targets
- Restore drills and verification

## 13.10 Compliance and policy guardrails

**Draft prompts**
- Honest user-facing claims
- Data retention and legal boundaries

## 13.11 Cost model and scaling levers

**Draft prompts**
- Infra cost drivers
- Operational staffing assumptions

## 13.12 Launch + post-launch checklist

**Draft prompts**
- Final gate checklist
- 30/60/90-day hardening plan

---

## Implementation notes (chapter-level)
- Inputs: architecture + operating constraints
- Outputs: playbook docs + launch checklists
- State transitions: pre-launch -> launch -> steady-state ops
- Failure boundaries: defined rollback and degraded modes

## Minimal flow (pseudocode)
```text
if readiness_checks_pass and drills_pass:
  launch()
else:
  block_launch_and_fix_gaps()
```

## Common failure modes
1. Shipping without recovery drills
   - Symptom: incidents become guesswork
   - Root cause: no operational rehearsal
   - Mitigation: mandatory game days before launch

## Checklist
- [ ] SLOs defined and instrumented
- [ ] Incident runbooks tested
- [ ] Backup/restore drill passed
- [ ] Launch gate signed off

## Open questions
- Which runbooks should be open-sourced with the companion repo?
