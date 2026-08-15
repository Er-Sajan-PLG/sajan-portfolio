# AGENTS.md — Sajan Portfolio

Brief operating instructions for humans and AI agents working in this repository.
The authoritative, detailed version lives in `docs/601-agents.md` (Project OS Agent Guide)
and the answers in `docs/` are this project's source of truth.

## Read first (in order)

1. `docs/100-identity.md`
2. `docs/101-context.md`
3. `docs/200-goals.md`
4. `docs/201-constraints.md`
5. `docs/202-principles.md`

## Non-negotiables

- Plain HTML/CSS/JS only — no build step, no frameworks, no third-party runtime dependencies.
- No secrets in code or docs.
- Asset paths are relative to the project root.
- Keep status honest: only show real, existing work.
- `docs/` answers are the source of truth; derived artifacts are regenerable.

## Verification

- No automated tests; verify manually:
  - `python3 -m http.server 8088` from the project root, then open in a browser (port `8088` is reserved for this project).
  - No console errors; internal links and assets resolve.
- Docs/manifest sync vs the template library: `python3 /home/sajan/Projects/ProjectTemplates/kernel/tpl.py check .`

## Do NOT do without Sajan's approval

- Deploy or publish the site.
- Initialize the Git repository.
- Rename public things or change the tech stack.
- Expand scope silently — classify NOW / SEAM / LATER / OUT OF SCOPE and ask.

## Leave a trail

- Record decisions in `docs/301-decisions.md` (or `docs/adr/`).
- Log changes in `docs/600-changelog.md`.
- Reference both in commits.
