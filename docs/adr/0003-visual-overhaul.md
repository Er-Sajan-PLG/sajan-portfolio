# ADR 0003 — Visual overhaul: background canvas, popups, motion

> Format follows `docs/301-decisions.md`: Context → Decision → Alternatives → Consequences → Status.

---

**Date:** 2026-10-04
**Decider:** Sajan (owner) — requested directly; agent implemented
**Trigger:** public-facing structural change to the site

## Context

Sajan asked for the site to read as "techy, STEM, engineer" — background animation, popups, motion —
so that it signals competence rather than looking like a plain template.

Two constraints bound the answer:

1. **`AGENTS.md` non-negotiable:** *"Plain HTML/CSS/JS only — no build step, no frameworks, no
   third-party runtime dependencies."* That rules out Three.js, GSAP, AOS, particles.js and every
   other off-the-shelf animation library. Anything built here has to be hand-written.
2. **`AGENTS.md` non-negotiable:** *"Keep status honest: only show real, existing work."* Motion may
   be added freely; numbers may not. Every figure placed on the page had to be verifiable.

## Decision

**Add a hand-written visual layer in three files. No dependency, no build step.**

| Effect | Implementation |
|---|---|
| Blueprint grid + drifting node network | One `<canvas>`, fixed, `z-index: 0`, drawn with a single `requestAnimationFrame` loop |
| Scroll progress bar | Fixed 3px gradient bar, width from `scrollTop / scrollHeight` |
| Hero typing effect | Rotating role list, types and deletes, monospace with a blinking caret |
| Animated stat counters | Three numbers ease up from zero when scrolled into view |
| Section reveal | `IntersectionObserver` fades each `.section` in |
| Project detail popup | Modal `role="dialog"`, opened from a **Details** button or a card click |
| Card glow | Shared `--glow` token on hover |

**Four rules the implementation holds to:**

1. **Every effect is disabled under `prefers-reduced-motion`.** The canvas draws once and stops, the
   caret stops blinking, sections render immediately, the modal loses its transition.
2. **The canvas pauses when the tab is hidden** (`visibilitychange`), caps device pixel ratio at 2,
   and scales node count to viewport area — so it cannot burn battery in a background tab.
3. **The reveal class is added by JavaScript, not written into the markup.** If JS never runs, every
   section stays visible. A `no-JS` visitor sees a complete page, not a blank one.
4. **The modal is a real dialog, not decoration.** Escape closes it, the backdrop closes it, focus
   moves to the close button on open and returns to the trigger on close, and body scroll locks.

**Honesty constraint on the stat strip.** The three numbers — `2` ten-storey buildings supervised,
`6` own repositories, `3` languages (Python, C/C++, TypeScript) — are each verifiable: the two
Annapurna buildings from the owner's own statement, the repository count excluding the three
labelled forks, and the languages from the skills list he personally confirmed. **No number was
invented to fill the space.**

## Alternatives considered

1. **An animation library (GSAP / AOS / particles.js).** Fastest route to a polished result, and
   rejected outright: `AGENTS.md` forbids third-party runtime dependencies, and a portfolio that
   claims engineering rigour should not ship a 40 KB library to fade in four paragraphs.
2. **Three.js hero scene.** Visually the strongest option and the most misleading — it would showcase
   a library rather than his work, and it is the single biggest performance risk on mobile.
3. **Full-page parallax.** Cheap to add, causes jank on low-end Android, which is the likely device
   for a Pokhara contractor opening the link. Rejected.
4. **Leave the site plain.** Defensible — restraint reads as confidence to an academic reviewer. The
   owner asked for the opposite, so this is recorded as the road not taken rather than dismissed.

## Consequences

- **The site is now louder.** A more expressive portfolio can read as less serious to an admissions
  officer. The academic content is unchanged and still reads first from the top; only its
  presentation moved. If it starts working against the application, ADR 0003 is the single place to
  reverse.
- **All of it is reversible.** The visual layer is appended to the bottom of `css/styles.css`, the
  markup additions are three blocks, and the JS is seven self-contained functions behind seven
  `init*()` calls. Removing the calls removes the behaviour.
- **A `z-index` contract now exists.** The canvas is `0`; `main` and `.site-footer` are `1`; the
  header is `10`; the progress bar `20`; the modal `40`. Any new full-bleed element must respect it.
- **A skip link was added**, because a fixed background layer plus a nine-item nav makes keyboard
  navigation more expensive, not less.
- **Two accessibility checks are still manual and not yet done:** keyboard traversal of the whole
  page, and a screen-reader pass over the modal. `AGENTS.md` documents no automated tests, so these
  are the owner's to run.

## Status

**accepted (2026-10-04)** — owner requested, agent implemented. Reversible by removing the
`init*()` calls and the appended CSS block.

---

## Amendment 1 (2026-10-04) — the effects were tuned to invisibility

**What happened.** The owner reported seeing no animation at all. Two causes, both mine:

1. **Everything was too faint.** The grid was drawn at 7% opacity, the nodes were 1.6px at 50%
   alpha, and the links peaked at 22%. On a white page that is roughly 5% ink coverage — present,
   and invisible in practice.
2. **The hero hid the canvas where it mattered most.** `.hero` had an opaque gradient background,
   so the fixed canvas behind it was covered across the top third of every page.

**What was ruled out first, by measurement rather than assumption:**

- *"The OS is requesting reduced motion."* Disproven — `enable-animations` is `true`.
- *"The JavaScript is throwing."* Disproven — a headless browser load reported zero page errors,
  and the typing effect, counters, section reveal and nav highlight were all confirmed running.
- *"The browser is serving a stale copy."* Possible, and addressed separately by cache-busting the
  asset URLs to `?v=4`.

**What changed.** Grid raised to 10% / 22% (minor / major lines, the major lines being a new
addition); nodes to 2.2px at 85% with a soft 8px halo; link opacity to 0.5; node count and drift
speed increased; `.hero` and `.page-hero` made translucent so the grid reads through them. A
staggered hero entrance animation was added so the first impression is motion.

**Verified by measurement, not by looking:** canvas ink coverage rose from 18,375 to 32,093 sampled
pixels and max alpha from 147 to 243.

**The lesson, recorded because it is the second time this class of mistake has appeared:** an effect
that has not been *measured* has not been shown to work. Rendering something at 7% opacity is
indistinguishable from not rendering it, and `node --check` proves nothing about whether anything is
visible. **Load the page headlessly, sample the canvas, and look at the screenshot.**

## Amendment 2 (2026-10-04) — the skip link is removed

The skip link added by this ADR was flagged by the owner: on Tab it appeared over the header and
read as part of the heading. It was my addition, not a request.

**Removed**, with the cost stated plainly: the site is less usable for keyboard-only visitors. The
nav is six items and the pages are short, so the cost is small — but it is not zero, and it is a
deliberate trade rather than an oversight. If it is ever reinstated, position it as a floating pill
away from the header rather than at `top: 0`.

