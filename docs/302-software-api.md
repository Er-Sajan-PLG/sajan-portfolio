# Interfaces & Contracts

> Companion: `software-api` v0.1.0 from ProjectTemplates 0.1.0
> Answers here are this project's source of truth.
> Re-generate or adopt a newer template only as a deliberate decision (`tpl update`).

---

**Purpose.** Define the interfaces this software exposes or consumes.

## Draft — Personal Portfolio Site

- **Interfaces:** none exposed (static content only). The only contract is the rendered HTML document and any linked assets (`css/styles.css`, `js/main.js`). [FACT]
- **Contract format:** paths are relative and must resolve when served from the project root. [FACT]
- **Consumers / providers:** browser (consumer) ← static files (provider). No external services. [FACT]
- **Failure modes:** missing asset → 404 in browser; internal links broken. Keep paths relative and verify at render. [FACT]
- **Evolution:** adding a framework or API later is a new decision; no stable external interface exists today. [FACT]
