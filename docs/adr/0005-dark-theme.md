# ADR 0005 — Dark mode

> Format follows `docs/301-decisions.md`: Context → Decision → Alternatives → Consequences → Status.

---

**Date:** 2026-10-04
**Decider:** Sajan (owner) — requested directly; agent implemented
**Trigger:** public-facing structural change to the site

## Context

The owner asked for dark mode. The site was built light-only, and dark mode is not a simple token
swap here for three reasons:

1. **The stylesheet carried hardcoded light values** that no token override could reach —
   `.site-header` (`rgba(255,255,255,0.95)`), `.project-item` and `.blog-item` (`#fafafa`), and the
   modal panel and close button (`#ffffff`).
2. **The background canvas draws with hardcoded colours in JavaScript**, so it would have stayed
   light-blue on a dark page.
3. **`AGENTS.md` forbids a build step and third-party dependencies**, so there is no framework
   theme provider available.

## Decision

**Dark is the default. A toggle in the nav switches to light and remembers the choice.**

| Concern | How it is handled |
|---|---|
| Flash of wrong theme | A **blocking inline script in `<head>`**, before the stylesheet, sets `data-theme` on `<html>` |
| Theme selection | `:root[data-theme="dark"]` overrides the token set. One source of truth, no duplicated dark block |
| Persistence | `localStorage`, wrapped in `try/catch` so blocked storage degrades to a per-view switch |
| Canvas colours | `palette()` inside `initBackground` reads `data-theme`, cached and recomputed only when the attribute changes |
| Native UI | `color-scheme: dark` so scrollbars and form controls match |
| Accessibility | A real `<button>` inside the nav list, with `aria-pressed` and a label that names the *destination* ("Switch to light theme") |

**Default is dark, not `prefers-color-scheme`.** The owner asked for dark twice; making it the
default honours that directly. This is a one-line change in the inline script if it should follow
the OS instead — and because the script reads `localStorage` first, anyone who has used the toggle
keeps their choice either way.

**Five hardcoded light values were tokenised first** — `--color-card`, `--color-panel`,
`--color-header-bg` — because without that the dark theme would have had light cards, a light modal
and a light sticky header, and it would have looked like a half-finished job rather than a theme.

## Alternatives considered

1. **`@media (prefers-color-scheme: dark)` only, no toggle.** Zero JavaScript, respects the OS — and
   rejected because it gives the owner no control and no way to show a visitor the light version.
2. **CSS `light-dark()` function.** The elegant modern answer: one token block, no attribute
   plumbing. Rejected on support risk — it needs `color-scheme` support across the board, and a
   portfolio is the wrong place to find out a visitor's browser is too old. Revisited when support
   is universal.
3. **Duplicate the dark tokens inside a `@media (prefers-color-scheme: dark)` block** as a no-JS
   fallback. Rejected: two copies of twenty tokens will drift, and the site already needs JavaScript
   for its projects, skills and experience sections, so a no-JS visitor sees a near-empty page
   regardless. **The honest cost: with JavaScript disabled the site is light-only.**
4. **A `<select>` or checkbox instead of a button.** A button with `aria-pressed` is the correct
   control for a binary state, and it is what screen readers announce properly.

## Consequences

- **The inline script is duplicated across all six pages**, like the nav — the same cost of the
  no-build-step rule. A seventh page needs its own copy.
- **A `z-index` and now a *theme* contract exist.** Any new colour must be a token, not a literal.
  A literal light value in `css/styles.css` is invisible in light mode and wrong in dark mode — the
  exact failure mode that made this change larger than expected.
- **The canvas palette lives in JavaScript, not CSS.** Adding a third theme would mean editing both
  the CSS tokens and the `palette()` function. Acceptable for two themes; a reason to revisit
  `light-dark()` at three.
- **Verified headlessly, not by eye:** dark is applied on first load (`data-theme="dark"`,
  `color-scheme: dark`, body background `rgb(11,17,32)`), the toggle switches to light, the choice
  survives a reload, and the canvas keeps drawing in both (`ink` 41,921 dark / 41,201 light).

## Status

**accepted (2026-10-04)** — owner requested, agent implemented.
