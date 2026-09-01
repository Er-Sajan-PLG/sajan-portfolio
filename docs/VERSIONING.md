# Sajan Portfolio Versioning

**Version:** 1.0.0
**Status:** Active
**Owner:** Governance
**Applies To:** sajan-portfolio (plain HTML/CSS/JS static site)
**Related:** `README.md`, `docs/600-changelog.md`, workspace `docs/WORKSPACE-VERSIONING.md`

---

## 1. Purpose

Tracks a single repository semantic version (`VERSION`) as the release source of truth,
kept in sync with the workspace versioning system so doc markers stay fresh. Aligns with
the Project OS (ProjectTemplates) governance for this repo.

## 2. Source of truth

- **Repository version:** root `VERSION` (semver, e.g. `1.0.0`).
- **Changelog:** `docs/600-changelog.md`.

## 3. Bumping rules

Semver `X.Y.Z`:
- **MAJOR** — breaking redesign / site contract change.
- **MINOR** — new section, feature, or visible capability.
- **PATCH** — small correction / fix.

Bump + sync with the workspace tool:

```bash
python3 ../scripts/version_bump.py bump minor --scope sajan-portfolio
python3 ../scripts/version_bump.py check --scope sajan-portfolio   # must exit 0
```

Record version changes in `docs/600-changelog.md` and follow Conventional Commits.

## 4. Enforcement

- Workspace pre-commit `check-doc-versions` / CI verifies `**Version:**` doc markers match
  `VERSION` before merge.
- Running the site (`python3 -m http.server 8088`) is the manual verification gate; this
  repo has no automated tests.

---

*Derived from workspace `docs/WORKSPACE-VERSIONING.md`.*