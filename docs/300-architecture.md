# Architecture

> Companion: `architecture` v0.1.0 from ProjectTemplates 0.1.0
> Answers here are this project's source of truth.
> Re-generate or adopt a newer template only as a deliberate decision (`tpl update`).

---

**Purpose.** Describe the structure without prescribing implementation details.

## Draft — Personal Portfolio Site

- **Decomposition:** three static parts — `index.html` (structure/content), `css/styles.css` (presentation), `js/main.js` (optional small behavior). [FACT]
- **Boundaries / interfaces:** the browser serves as the only consumer; no server-side logic, no API. [FACT]
- **Data / control flows:** static document loaded by browser; optional JS enhances (e.g. current year in footer). [FACT]
- **Stable vs varying:** content (about/projects) varies with edits; the no-build, no-dependency structure is expected to stay stable. [FACT]
- **Key structural decision:** static-first (constraint: no build, no deps → plain files). [FACT]
