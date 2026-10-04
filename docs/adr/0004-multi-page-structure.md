# ADR 0004 — Multi-page structure

> Format follows `docs/301-decisions.md`: Context → Decision → Alternatives → Consequences → Status.

---

**Date:** 2026-10-04
**Decider:** Sajan (owner) — requested directly; agent implemented
**Trigger:** public-facing structural change to the site

## Context

The site began as one page carrying every section in sequence: About, Research, Projects, Skills,
Experience, Writing, Vision, Contact. After the Services section was added (ADR 0002), the single
page held nine sections and a nine-item nav, and the owner's verdict was direct: *"I don't like all
my content crammed in single page."*

He asked for **multiple pages with reasonable tabs/headings, where a page can contain multiple
related topics** — pages grouped by theme, not one topic per page.

`AGENTS.md` forbids a build step, so there is no templating layer available to share a layout across
pages. That constraint drives most of the consequences below.

## Decision

**Split the site into six pages, grouped by theme, with a six-item nav.**

| Page | File | Carries |
|---|---|---|
| **Home** | `index.html` | Hero, stat strip, three "what I do" cards linking inward, three featured projects, closing call to action |
| **About** | `about.html` | Who I am · Research interests · Vision · Writing |
| **Projects** | `projects.html` | All repositories · Engineering work summary |
| **Services** | `services.html` | What I do · How I work · Why me · Start a job |
| **Experience** | `experience.html` | Timeline · Skills & technologies · Certifications and education |
| **Contact** | `contact.html` | Reach me · What to send · Availability |

**Nav:** Home · About · Projects · Services · Experience · Contact — six items, down from nine.

**Grouping principle:** each page answers one question and carries the sub-topics that belong with
it. *About* holds identity, research direction and vision because "who I am" is incomplete without
"where I am going". *Experience* holds timeline, skills and certifications because they are the same
claim from three angles. Nothing was deleted to make the split work — the Writing placeholder moved
to About rather than losing its home.

**The home page is a router, not a summary.** It carries the hero and three cards that send a visitor
to whichever thread brought them: engineering services, software projects, or experience.

**Two shared behaviours were added to support it:**

- `#project-list` accepts `data-limit="3"`, so Home shows three featured repositories and Projects
  shows all nine, from the same `PROJECTS` array.
- `markCurrentNavItem()` highlights the current page and sets `aria-current="page"`. It is an
  enhancement only — without JS the nav works, just without the highlight.

## Alternatives considered

1. **Keep one page, hide sections behind tabs.** Would have satisfied "tabs" literally while changing
   nothing structurally — the whole document still downloads, and no section gets its own URL.
   Rejected: deep-linkable URLs are the main practical gain of splitting, and this forfeits it.
2. **Adopt a static site generator (Eleventy, Astro).** The correct engineering answer to shared
   layouts, and rejected outright — `AGENTS.md` forbids a build step and third-party runtime
   dependencies. Recorded here so the decision is not re-litigated later without cause.
3. **Two pages: a personal side and a commercial side.** Cleaner audience separation, but it would
   force the CV-style material and the services material into the same two documents. Rejected as
   too coarse.
4. **One topic per page (seven or eight pages).** Rejected by the owner's own instruction — he
   explicitly wanted related topics to share a page.

## Consequences

- **The nav is duplicated across six files.** With no build step there is no way around it. Adding a
  seventh page means editing seven files. **This is the main maintenance hazard introduced by this
  change**, and it is the strongest future argument for revisiting alternative 2.
- **Every `init*()` function in `js/main.js` must stay defensive.** A page without a `#skills-grid`
  or `#timeline` must not throw. Each already returns early when its target is absent; **that
  guard pattern is now load-bearing and must not be removed.**
- **The modal markup is duplicated** on the two pages that show projects (`index.html`,
  `projects.html`). A third page showing projects needs its own copy.
- **Deep links now exist.** `projects.html` and `services.html` can be sent to a client on their own,
  which was not possible before.
- **The home page got shorter**, which is the point — but it also means the CV-style material is one
  click deeper. For an admissions reader who wants everything at once, that is a small loss.
- **`docs/100-identity.md` was stale** — it still described a single `index.html` entry point. Updated.

## Status

**accepted (2026-10-04)** — owner requested, agent implemented. Reversible, but reverting means
re-merging six pages by hand.
