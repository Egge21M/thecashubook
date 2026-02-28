# Cashu Book Writing Pipeline (Start Tomorrow)

## Objective
Move from outline to shippable chapter drafts with a repeatable, low-friction process.

## Daily Cadence (90–120 min)
1. **Plan (10 min)**
   - Pick one chapter section block (2–4 subsections).
   - Define one concrete reader outcome.
2. **Draft (60–80 min)**
   - Write in Markdown using the chapter template.
   - Prioritize clarity + implementation detail over completeness.
3. **Harden (20 min)**
   - Add one code sketch / pseudocode block.
   - Add one failure mode + mitigation.
   - Add checklist items.
4. **Close (10 min)**
   - Log open questions in `workflows/open-questions.md`.
   - Commit.

## Weekly Cadence
- **Mon–Thu:** New drafting (1 section batch/day)
- **Fri:** Technical edit pass + consistency pass
- **Sat/Sun:** Optional catch-up + references/examples

## Definition of Done (per chapter)
A chapter is "draft-complete" when it has:
- Why this matters
- Core concepts explained in developer language
- Implementation notes with data/control flow
- Common failure modes
- At least one minimal code sketch
- Role-based checklist (wallet dev / mint operator / integrator when relevant)
- Glossary terms linked or defined

## File Layout
- `chapters/` → chapter drafts
- `templates/` → reusable writing templates
- `examples/` → runnable snippets (later)
- `reference/` → diagrams, protocol notes
- `recipes/` → focused mini-builds

## Priority Order
1. Part II chapters (4–10)
2. Part III chapters (11–14)
3. Part I chapters (1–3)

## Tomorrow's Start
- Draft Chapter 4 sections 4.1–4.4 first.
- Keep it practical and implementation-oriented.
