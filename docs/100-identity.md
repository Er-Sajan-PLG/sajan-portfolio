# Identity

> Companion: `identity` v0.1.0 from ProjectTemplates 0.1.0
> Answers here are this project's source of truth.
> Re-generate or adopt a newer template only as a deliberate decision (`tpl update`).

---

**Purpose.** Fix the project's name, kind, status, and location so every other document and agent refers to the same thing.

## Draft — Personal Portfolio Site

**Tag legend.** Every claim below is tagged so truth and authority never blur:
`[FACT]` verified · `[RESEARCH]` sourced from external findings (cited) · `[ASSUMPTION]` believed, unverified · `[RECOMMEND]` Agent 0 proposes · `[DECISION-PENDING]` needs human approval · `[OPEN]` unresolved.

- **Name:** Sajan Portfolio.
- **One-line description:** "A personal portfolio site for Sajan."
- **Kind:** product (software, static web site). [RECOMMEND] No research/business/client/education type applies.
- **Repository location:** `/home/sajan/Projects/sajan-portfolio` — an **independent Git repo**, remote `git@github.com:Er-Sajan-PLG/sajan-portfolio.git`, default branch `main`. Approved and initialized. Workspace gitignore excludes it so it can never be tracked by the workspace repo.
- **Entry point:** `index.html` — static site, no build step; preview via `python3 -m http.server 8088` (port reserved for this project). **Six pages as of 2026-10-04** — `index.html`, `about.html`, `projects.html`, `services.html`, `experience.html`, `contact.html`. The nav is duplicated in each file because no build step is permitted; see `docs/adr/0004-multi-page-structure.md`.
- **Status:** seed. [RECOMMEND]
- **Owner(s):** Sajan (sole owner; authority to make decisions). [FACT]
- **Version / phase:** initialized for Phase 0 (bare-minimum skeleton), ProjectTemplates 0.1.0. [FACT]
