# Data Model

> Companion: `software-data-model` v0.1.0 from ProjectTemplates 0.1.0
> Answers here are this project's source of truth.
> Re-generate or adopt a newer template only as a deliberate decision (`tpl update`).

---

**Purpose.** Make the data the software stores explicit and governed.

## Draft — Personal Portfolio Site

- **Core entities:** none persisted. Site content lives directly in `index.html` (canonical). [FACT]
- **Integrity / ownership:** content owned by Sajan; single source of truth is the HTML file. [FACT]
- **Storage:** no database; data resides only as static files. Nothing external is stored. [FACT]
- **Migration / evolution:** content edits are in-place HTML edits; if a data model is ever needed, that is a new decision. [FACT]
- **Retention / privacy:** no user data collected; no personal data beyond what Sajan publishes. [FACT]
