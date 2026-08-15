# Sajan Portfolio

A personal portfolio site for Sajan — static HTML/CSS/JS, no build step, no dependencies.

## Run locally

```sh
python3 -m http.server 8088
```

Open <http://localhost:8088>.

> Port `8088` is reserved for this project. It does not collide with JARVIS
> (8000/8081/8082) or STEM-TUITION (8085).

## Structure

- `index.html` — page content (source of truth for site content)
- `css/styles.css` — styling
- `js/main.js` — small behavior (e.g. current year in footer)
- `docs/` — project governance (Project OS answers, source of truth for decisions)
- `.templates/` — composition manifest

## Governance

Read `docs/601-agents.md` (or `AGENTS.md`) before working here. In short: plain HTML/CSS/JS
only, no build tooling, no third-party runtime deps, no secrets, relative asset paths.
Do not deploy, initialize the Git repo, or change the stack without Sajan's approval.
