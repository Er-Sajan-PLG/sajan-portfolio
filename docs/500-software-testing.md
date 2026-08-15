# Testing Strategy

> Companion: `software-testing` v0.1.0 from ProjectTemplates 0.1.0
> Answers here are this project's source of truth.
> Re-generate or adopt a newer template only as a deliberate decision (`tpl update`).

---

**Purpose.** Define what correct means for this software and how it is verified.

## Draft — Personal Portfolio Site

- **Levels:** no automated test framework; static site verified manually. [FACT]
- **What is verified:** page loads without errors, internal links resolve, assets load, no console errors. [FACT]
- **How:** serve with `python3 -m http.server 8088` and open in a browser. [FACT]
- **Interpretation:** broken link / missing asset is a content or path bug; a wrong-looking section is a content decision for Sajan. [FACT]
