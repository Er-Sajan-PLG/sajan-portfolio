# Agent Guide

> Companion: `agents` v0.1.0 from ProjectTemplates 0.1.0
> Answers here are this project's source of truth.
> Re-generate or adopt a newer template only as a deliberate decision (`tpl update`).

---

**Purpose.** Tell any AI agent (or future contributor) how to work correctly in this project.

- **Documents to read first, in order:** `docs/100-identity.md` → `docs/101-context.md` → `docs/200-goals.md` → `docs/201-constraints.md` → `docs/202-principles.md`. [FACT]
- **Verification commands:** none for build; serve with `python3 -m http.server 8088` from the project root and verify in a browser (no console errors, links resolve). `tpl check .` verifies docs/manifest sync against the template library. [FACT]
- **Conventions that must not be violated:** plain HTML/CSS/JS only, no build step, no third-party runtime deps, no secrets, relative asset paths. See `docs/201-constraints.md` and `docs/202-principles.md`. [FACT]
- **Do not do without Sajan's permission:** deploy/publish, initialize the Git repo, rename public things, change the tech stack, add a framework. [FACT]
- **Leave a trail:** record decisions in `docs/301-decisions.md`/`docs/adr/`, log changes in `docs/600-changelog.md`, reference both in commits. [FACT]
- **Derived artifacts are regenerable; answers in `docs/` are the source of truth.** [FACT]
