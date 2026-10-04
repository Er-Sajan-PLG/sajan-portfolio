# ADR 0001 — Fork disclosure in the projects list

> First record in `docs/adr/`. Format follows `docs/301-decisions.md`:
> Context → Decision → Alternatives → Consequences → Status.
> Status ladder: proposed → accepted → superseded → rejected (date + decider).

---

**Date:** 2026-10-04
**Decider:** Sajan (owner) — recorded by agent, pending confirmation
**Trigger:** public-facing content change to the projects list

## Context

`js/main.js` listed eight GitHub repositories as "Selected work from my GitHub". Verification
against the GitHub API on 2026-10-04 showed that three of the eight are **forks**, not original
work:

| Listed as | Reality |
|---|---|
| `deepseek-harness` | fork of `deepseek-ai/deepseek-harness` |
| `open-notebook` | fork |
| `OpenJarvis` | fork |

They were presented with first-person descriptions that read as authorship — for example
"Model/harness evaluation framework — Cordis monorepo for testing AI models".

`AGENTS.md` carries a non-negotiable: *"Keep status honest: only show real, existing work."* A
portfolio that presents forked repositories as original work fails that rule, and for an audience
that includes admissions officers and prospective clients, the cost of being caught is far higher
than the cost of the disclosure.

Two further problems surfaced in the same check: all repository URLs pointed at the personal
account but had moved to the `STEMORG2026` organisation, and two had been renamed
(`LearningHubSTEM` → **STEMMA**, `STEM-TUITION` → **LearningHub**).

## Decision

**Keep the forks in the list, and label them as forks.**

- The word `— fork` is appended to the repository name in the projects list.
- The description states the upstream project and adds *"Forked and explored, not authored by me."*
- Original work is listed first; forks last.
- The section intro reads: *"Selected repositories from my GitHub — my own work first, forked
  projects labelled as forks."*

## Alternatives considered

1. **Delete the forks.** Cleanest presentation, but it discards real evidence — that he reads and
   evaluates other people's code is itself a signal, and the cost of deletion is zero information
   gained. Also: silently removing them would hide the fact that they were ever mislabelled.
2. **Label them in a tooltip or CSS badge only.** Rejected — a badge requires new CSS, and
   `AGENTS.md` forbids scope creep without approval. Text in the description is honest at zero
   structural cost.
3. **Leave them unlabelled.** Rejected outright: it is a misrepresentation, and the rule in
   `AGENTS.md` is explicit.

## Consequences

- The projects list is now longer (9 entries) but every entry is defensible under questioning.
- Forked repositories contribute less credibility than original work, so the list no longer reads
  as nine projects of equal weight. This is the intended effect.
- Any future addition to the projects list must state whether the repository is a fork.

## Status

**accepted (2026-10-04)** — agent, pending Sajan's confirmation. If he would rather remove the
forks entirely, supersede this record rather than editing it.
