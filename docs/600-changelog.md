# Changelog

> Companion: `changelog` v0.1.0 from ProjectTemplates 0.1.0
> Answers here are this project's source of truth.
> Re-generate or adopt a newer template only as a deliberate decision (`tpl update`).

---

**Purpose.** Make every user-visible or structural change traceable.

## Draft — Personal Portfolio Site

## [Unreleased]

- **Added** (2026-08-15): Project OS bootstrap — 15 documents composed via `tpl compose --type software`. [FACT]
- **Added** (2026-08-15): bare-minimum static site — `index.html`, `css/styles.css`, `js/main.js`, `AGENTS.md`, `README.md`. [FACT]
- **Changed** (2026-08-15): local preview server port set to `8088` (reserved for this project; avoids collision with JARVIS 8000/8081/8082 and STEM-TUITION 8085). [FACT]
- **Fixed** (2026-10-04): contact email corrected to `gurungsaajan588@gmail.com` — the address on the CV source of record (REV 7.0) and the NEC profile. The previously published address was a second, personal account. [FACT]
- **Fixed** (2026-10-04): every project URL in `js/main.js` repointed. All repositories had moved from the personal account to the `STEMORG2026` organisation, and two had been renamed — `LearningHubSTEM` is now **STEMMA**, and `STEM-TUITION` is now **LearningHub**. Verified against the GitHub API, not assumed. [FACT]
- **Changed** (2026-10-04): three entries in the projects list are forks (`deepseek-harness`, `open-notebook`, `OpenJarvis`) and are now **labelled as forks** in the name and description. See `docs/adr/0001-fork-disclosure.md`. [FACT]
- **Added** (2026-10-04): **STEMMA** and **universal-software-auditor** added to the projects list — both were public but missing from the site. [FACT]
- **Fixed** (2026-10-04): experience timeline replaced with the real roles, employers and dates — Site Engineer / Manager at Roadshow Construction (Aug 2024 – Nov 2025) and Civil Engineer at Ruchi Developer (Aug 2025 – Nov 2025, a sister company of Roadshow). The previous entries carried a vague "2023 – Present" and no employer names. [FACT]
- **Changed** (2026-10-04): "Engineering & STEM" skills expanded to include the actual professional toolset — ETABS, AutoCAD, Revit, SketchUp, quantity takeoff and BOQ, rate analysis, QA/QC, Total Station surveying. The category previously named no engineering tool at all. [FACT]
- **Added** (2026-10-04): **Services section** — five services rendered from a `SERVICES` array, placed after Projects, so the site also works as a shopfront for the freelance offer. See `docs/adr/0002-services-section.md`. [FACT]
- **Changed** (2026-10-04): mobile nav now wraps (`flex-wrap` on `.nav` and `.nav-links`). The nav reached nine items with the Services link and would otherwise overflow on narrow screens. [FACT]
- **Changed** (2026-10-04): skills list corrected against Sajan's own account of what he can defend. **Removed** MATLAB, Blender, C#, Unity, Docker and SQL — all either planned or not yet learned. **Added** `C / C++`, which he does know; he clarified he has *not* learned C#. The **Game Development** category was removed entirely — with Unity, C# and Blender gone, nothing defensible remained in it. **Added** `Agent-assisted development (own JARVIS / PROFESSOR-J)` — he builds his own agent stack and works with it, which is true and distinctive. [FACT]
- **Added** (2026-10-04): **visual overhaul** — hand-written, no dependency, no build step. Blueprint grid + drifting node network on a fixed `<canvas>`; scroll progress bar; hero typing effect; animated stat counters; section reveal on scroll; project detail modal; shared card glow. See `docs/adr/0003-visual-overhaul.md`. [FACT]
- **Added** (2026-10-04): hero stat strip — `2` ten-storey buildings supervised, `6` own repositories, `3` languages (Python, C/C++, TypeScript). Every figure is verifiable; none was invented to fill the space. [FACT]
- **Added** (2026-10-04): skip link, because the fixed background layer and the nine-item nav make keyboard navigation more expensive. [FACT]
- **Note** (2026-10-04): all new motion is disabled under `prefers-reduced-motion`; the canvas pauses when the tab is hidden and caps device pixel ratio at 2; the section-reveal class is applied by JS so the page stays readable with JS off. [FACT]
- **Changed** (2026-10-04): **split the single page into six** — `index.html` (home), `about.html`, `projects.html`, `services.html`, `experience.html`, `contact.html`. Nav went from nine items to six. See `docs/adr/0004-multi-page-structure.md`. [FACT]
- **Added** (2026-10-04): `#project-list` now honours `data-limit`, so Home shows three featured repositories and Projects shows all nine from the same `PROJECTS` array. [FACT]
- **Added** (2026-10-04): `markCurrentNavItem()` highlights the current page in the nav and sets `aria-current="page"`. Enhancement only — the nav works without JS. [FACT]
- **Added** (2026-10-04): new `experience.html` content — certifications (NEC Reg. No. 80631, Nepal Engineering Association, municipal map making, property valuation, Hilti) and the degree, which were on the CV but had no home on the site. [FACT]
- **Changed** (2026-10-04): the Writing placeholder moved from the nav to the bottom of `about.html`. It had no content, and an empty nav item is worse than an empty section. [FACT]
- **Fixed** (2026-10-04): `experience.html` briefly carried `id="timeline"` twice — once on the section, once on the JS render target. Caught by a duplicate-id check across all six pages before it shipped. [FACT]
- **Fixed** (2026-10-04): **the visual layer was tuned so low it was effectively invisible.** The grid sat at 7% opacity, the nodes were 1.6px at 50% alpha, and the hero's opaque gradient hid the canvas in the most important area of the page. Grid raised to 10% / 22% (minor / major), nodes to 2.2px at 85% with a soft halo, link opacity 0.22 → 0.5, node count and drift speed increased, and the hero and page headers made translucent so the grid reads through them. **Measured, not guessed:** canvas ink coverage 18,375 → 32,093 sampled pixels, max alpha 147 → 243. [FACT]
- **Added** (2026-10-04): staggered hero entrance animation, so the first thing a visitor sees is unmistakably motion. [FACT]
- **Removed** (2026-10-04): **the skip link.** It was introduced in ADR 0003 and the owner flagged it as intrusive — on Tab it appeared over the header. The nav is six items, so the accessibility cost of removing it is small. See the amendment in `docs/adr/0003-visual-overhaul.md`. [FACT]
- **Added** (2026-10-04): `favicon.svg`. The browser was logging a 404 for `/favicon.ico` on every page load, which was the only console error on the site. [FACT]
- **Changed** (2026-10-04): asset URLs cache-busted to `?v=4`, so a stale cached stylesheet or script cannot be served after a change. [FACT]
- **Changed** (2026-10-04): under `prefers-reduced-motion` the canvas now renders a single static frame instead of being hidden. The blueprint grid is part of the design, not decoration, so it should not vanish. [FACT]
- **Added** (2026-10-04): **dark mode**, default on, with a toggle in the nav. `data-theme` is set on `<html>` by a blocking inline script in `<head>` before first paint, so there is no flash of the wrong theme; the choice persists in `localStorage`. Applied to all six pages. See `docs/adr/0005-dark-theme.md`. [FACT]
- **Changed** (2026-10-04): **five hardcoded light values were tokenised** so the theme could actually switch — the `.site-header` background, the `.project-item` and `.blog-item` card backgrounds, and the modal panel and close button. A token swap alone would have left those five light in dark mode. [FACT]
- **Changed** (2026-10-04): the background canvas now takes its colours from the active theme and recolours on switch, recomputing only when `data-theme` changes rather than every frame. [FACT]
- **Fixed** (2026-10-04): in dark mode `.btn` text is near-black. The accent colours are light there, so the previous white label would have had almost no contrast. [FACT]
- **Changed** (2026-10-04): asset URLs cache-busted to `?v=5`. [FACT]
