# ADR 0002 — Services section on the portfolio

> Format follows `docs/301-decisions.md`: Context → Decision → Alternatives → Consequences → Status.

---

**Date:** 2026-10-04
**Decider:** Sajan (owner) — agent proposed, owner approved
**Trigger:** public-facing structural change to the site

## Context

`docs/100-identity.md` defines this project as *"A personal portfolio site for Sajan."* The site
currently carries an academic narrative — About, Research, Projects, Skills, Experience, Writing,
Vision — aimed at demonstrating capability to an admissions audience.

Separately, `Projects/FREELANCE/` defines a three-track freelance offer: civil drafting and
estimating now, engineering workflow automation now, and software/AI gated at roughly month six.
That offer had no shopfront. A prospective client landing on the site would find no statement of
what he does commercially and no route to hire him.

`AGENTS.md` requires that scope be classified NOW / SEAM / LATER / OUT OF SCOPE and approved rather
than expanded silently. A Services section is a **SEAM** — it adds a section without changing the
tech stack, and it is the smallest change that makes the site earn.

## Decision

**Add a Services section, rendered from a `SERVICES` array in `js/main.js`, placed directly after
Projects.**

- Five services, matching the offer in `FREELANCE/OFFER.md` exactly — no service is listed that the
  offer does not already commit to:
  1. Quantity takeoff
  2. Bill of quantities & rate analysis
  3. AutoCAD drafting & as-builts
  4. QA/QC & inspection documentation
  5. Estimating workflow automation
- Rendered through the existing card pattern (a coloured left edge, a title, a description), reusing
  the `--color-skills-*` tokens so no new visual language is introduced.
- Placement after Projects is deliberate: the projects list is the proof, the services list is the
  conversion point immediately after it. The academic sections (Skills, Experience, Research,
  Vision) are unchanged and remain on the page.
- One added clause: *"I'll tell you what it takes — including if it's outside my scope."* This is the
  honest-positioning line from `OFFER.md` and it belongs on the page, not only in the proposal
  templates.

**Deliberately excluded from the offer:** Track 3 (software/AI work). `OFFER.md` gates it at
approximately month six, after he has shipped something he wrote himself. Listing it now would
promise work he cannot yet maintain unaided.

## Alternatives considered

1. **A separate freelance site.** Cleaner separation of academic and commercial audiences, but it
   doubles the maintenance surface and splits what little traffic he has. Rejected for now; revisit
   if the Services section starts competing with the academic narrative.
2. **A one-line "available for freelance work" banner.** Cheapest, but tells a client nothing about
   what to hire him for. Rejected as too thin to convert.
3. **Put Services at the very top, above About.** Maximum commercial visibility, but it reframes a
   personal portfolio as a services site and would read oddly to an admissions officer. Rejected;
   the section order is a one-line change if he later disagrees.

## Consequences

- The site now serves two audiences. They are separated by scroll position, not by structure, so the
  academic reading order is still intact from the top.
- **Nav grew to nine items**, which overflows on narrow screens. `css/styles.css` now wraps the nav
  on mobile (`flex-wrap` on `.nav` and `.nav-links`). This is a necessary consequence of the
  addition, not an unrelated fix.
- Every service listed must remain true. If he stops offering one, it comes off the page — the same
  rule that governs the projects list.
- Adds one more place to keep in sync with `FREELANCE/OFFER.md`.

## Status

**accepted (2026-10-04)** — owner approved, agent implemented. If the placement or the service list
is wrong, supersede this record rather than editing it.
