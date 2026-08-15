# Decision Records

> Companion: `decisions` v0.1.0 from ProjectTemplates 0.1.0
> Answers here are this project's source of truth.
> Re-generate or adopt a newer template only as a deliberate decision (`tpl update`).

---

**Purpose.** Keep every significant decision recorded, dated, and reversible.

## Draft — Personal Portfolio Site

- **ADR format:** Context → Decision → Alternatives → Consequences → Status. [FACT]
- **Status ladder:** proposed → accepted → superseded → rejected (date + decider). [FACT]
- **Records live at:** `docs/adr/` (created when the first decision is recorded). [RECOMMEND]
- **What triggers a record:** any structural or public-facing change (framework choice, deployment target, site structure) — not cosmetic edits. [FACT]

**First decision (pending human approval):**

- **Context:** Sajan wants a bare-minimum portfolio site.
- **Decision:** static HTML/CSS/JS, no framework, no build step, no dependencies. [RECOMMEND]
- **Alternatives considered:** Astro; Next.js — heavier than needed for a static portfolio. [FACT]
- **Consequences:** fast to ship, trivially deployable (e.g. GitHub Pages later); adding a framework later is a larger refactor. [FACT]
- **Status:** proposed (2026-08-15, Sajan to confirm). [FACT]
