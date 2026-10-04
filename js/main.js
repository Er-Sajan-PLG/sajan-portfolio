var PROJECTS = [
  {
    name: "STEMMA",
    description: "Open STEM knowledge foundation — a versioned knowledge graph with JSON/YAML schemas, a Python validation pipeline, and deterministic exports.",
    language: "Python",
    url: "https://github.com/STEMORG2026/STEMMA"
  },
  {
    name: "PROFESSOR-J",
    description: "AI/agent layer for the ecosystem — multi-provider LLM routing, hybrid retrieval, asynchronous human-in-the-loop execution, and tiered safety gates, with LangGraph for workflow state.",
    language: "Python",
    url: "https://github.com/STEMORG2026/PROFESSOR-J"
  },
  {
    name: "JARVIS",
    description: "Personal AI platform — the origin project: memory, tooling, and a local-first assistant core.",
    language: "Python",
    url: "https://github.com/Er-Sajan-PLG/JARVIS"
  },
  {
    name: "LearningHub",
    description: "STEM learning platform — a TypeScript monorepo of small, focused packages: quiz engine, simulation core, content pipeline, auth, payments, video.",
    language: "TypeScript",
    url: "https://github.com/STEMORG2026/LearningHub"
  },
  {
    name: "universal-software-auditor",
    description: "Agent-driven software auditing, mapped to SLSA supply-chain requirements and OWASP security controls.",
    language: "TypeScript",
    url: "https://github.com/STEMORG2026/universal-software-auditor"
  },
  {
    name: "3D-Ludo",
    description: "3D Ludo game with a C# core and Unity/Flutter clients.",
    language: "C#",
    url: "https://github.com/Er-Sajan-PLG/3D-Ludo"
  },
  {
    name: "deepseek-harness — fork",
    description: "Fork of deepseek-ai/deepseek-harness, a plugin-based model/harness evaluation framework. Forked and explored, not authored by me.",
    language: "TypeScript",
    url: "https://github.com/STEMORG2026/deepseek-harness"
  },
  {
    name: "open-notebook — fork",
    description: "Fork of an open-source NotebookLM alternative. Forked and explored, not authored by me.",
    language: "TypeScript",
    url: "https://github.com/Er-Sajan-PLG/open-notebook"
  },
  {
    name: "OpenJarvis — fork",
    description: "Fork of a local-first personal AI assistant. Forked and explored, not authored by me.",
    language: "TypeScript",
    url: "https://github.com/Er-Sajan-PLG/OpenJarvis"
  }
];

var SERVICES = [
  {
    title: "Quantity takeoff",
    description: "A measured, itemised takeoff from your drawings — concrete, formwork, reinforcement, masonry and finishes — delivered as an editable Excel workbook plus a PDF summary.",
    color: "#2563eb"
  },
  {
    title: "Bill of quantities & rate analysis",
    description: "A priced BOQ you can actually bid on: quantities linked to a rate schedule, with the analysis shown so every rate can be defended.",
    color: "#059669"
  },
  {
    title: "AutoCAD drafting & as-builts",
    description: "Plans, sections, elevations, details and as-built drawings. Marked-up PDF back to clean DWG, layers named properly, ready to plot.",
    color: "#d97706"
  },
  {
    title: "QA/QC & inspection documentation",
    description: "Inspection checklists, cube and slump test registers, material registers and progress reports — the paperwork a live site actually runs on.",
    color: "#7c3aed"
  },
  {
    title: "Estimating workflow automation",
    description: "If you produce the same takeoff or BOQ by hand every month, I will build you a Python/Excel tool that does it from your input sheet — with the rate table as a config file you can edit yourself, no code.",
    color: "#0891b2"
  }
];

var SKILLS = [
  {
    category: "Engineering & STEM",
    categoryColor: "#059669",
    tags: [
      "Civil Engineering",
      "Structural Engineering",
      "Site Supervision",
      "Quantity Takeoff & BOQ",
      "Rate Analysis & Cost Estimation",
      "QA/QC & Material Testing",
      "ETABS",
      "AutoCAD 2D/3D",
      "Revit (BIM)",
      "SketchUp",
      "Total Station & Surveying",
      "Materials Science",
      "Physics & Mathematics",
      "Chemistry",
      "Computational Materials Science",
      "Energy Materials & Battery Technology"
    ]
  },
  {
    category: "Programming & Software",
    categoryColor: "#2563eb",
    tags: [
      "Python",
      "C / C++",
      "TypeScript / JavaScript",
      "React / Next.js",
      "FastAPI",
      "Node.js",
      "Git & GitHub",
      "Linux",
      "REST APIs"
    ]
  },
  {
    category: "AI & Intelligent Systems",
    categoryColor: "#7c3aed",
    tags: [
      "Machine Learning & AI",
      "Large Language Models (LLMs)",
      "AI Agents & Multi-Agent Systems",
      "AI Orchestration",
      "RAG & Knowledge Systems",
      "LangGraph",
      "Local / Open-Source AI",
      "Model APIs & AI Infrastructure",
      "Agent-assisted development (own JARVIS / PROFESSOR-J)"
    ]
  },
  {
    category: "Scientific Computing & Tools",
    categoryColor: "#0891b2",
    tags: [
      "NumPy",
      "SciPy",
      "Matplotlib",
      "Jupyter",
      "Computational Modeling & Simulation"
    ]
  },
  {
    category: "Education & Building",
    categoryColor: "#db2777",
    tags: [
      "STEM Education",
      "Technical Teaching & Mentoring",
      "Educational Technology",
      "Open-Source Development",
      "Systems Architecture",
      "Research & Technical Writing"
    ]
  }
];

var EXPERIENCE = [
  {
    role: "Site Engineer / Manager",
    org: "Roadshow Construction Pvt. Ltd.",
    date: "Aug 2024 – Nov 2025",
    description: "Supervised structural, finishing and MEP works on two ten-storey apartment buildings (Annapurna Sedi and Masbar), each with a ground floor and parking basement, plus the Panchamukhi Ganesh Murti sculpture and its surrounding works. Responsible for BOQ estimation, quantity takeoff, vendor negotiation, material procurement, QA/QC and progress reporting."
  },
  {
    role: "Civil Engineer",
    org: "Ruchi Developer Pvt. Ltd. — sister company of Roadshow",
    date: "Aug 2025 – Nov 2025",
    description: "Land planning and plotting layout, road levelling and longitudinal survey, road BOQ and cost estimation, and site supervision — held concurrently with the closing phase of the Roadshow role above."
  },
  {
    role: "Independent Technical Work",
    org: "Self-directed / open source",
    date: "2023 – Present",
    description: "Building software and AI systems alongside engineering work — the STEMMA knowledge foundation, the JARVIS and PROFESSOR-J AI platforms, and a software auditor. Python, TypeScript, Linux, Git, CI/CD, retrieval systems and knowledge modelling."
  },
  {
    role: "STEM Educator & Mentor",
    org: "Independent",
    date: "Ongoing",
    description: "Teaching and mentoring students in STEM subjects, with a focus on making mathematics, physics, chemistry and scientific concepts understandable through practical explanation and problem-solving."
  },
  {
    role: "Materials Science — Research Transition",
    org: "Independent Study / Prospective Master's Research",
    date: "2026 – Present",
    description: "Transitioning from Civil Engineering toward Materials Science, with research interests in energy materials, batteries, and computational materials science. Strengthening foundations and exploring potential Master's thesis directions at the intersection of materials, physics, chemistry and computation."
  }
];

var BLOG_POSTS = [];

function createProjectElement(project, index) {
  var li = document.createElement("li");
  li.className = "project-item animate-in";
  if (index >= 6) li.classList.add("delay-" + ((index - 6) % 6 + 1));

  var h3 = document.createElement("h3");
  var a = document.createElement("a");
  a.href = project.url;
  a.target = "_blank";
  a.rel = "noopener";
  a.textContent = project.name;
  a.addEventListener("click", function (ev) {
    ev.stopPropagation();
  });
  h3.appendChild(a);

  var p = document.createElement("p");
  p.textContent = project.description;

  var footer = document.createElement("div");
  footer.className = "project-footer";

  var span = document.createElement("span");
  span.className = "project-language";
  span.textContent = project.language;
  footer.appendChild(span);

  var more = document.createElement("button");
  more.type = "button";
  more.className = "project-more";
  more.textContent = "Details";
  more.addEventListener("click", function (ev) {
    ev.stopPropagation();
    openProjectModal(project);
  });
  footer.appendChild(more);

  li.appendChild(h3);
  li.appendChild(p);
  li.appendChild(footer);

  li.addEventListener("click", function () {
    openProjectModal(project);
  });

  return li;
}

function createSkillCategoryElement(category, index) {
  var div = document.createElement("div");
  div.className = "skill-category animate-in delay-" + ((index % 6) + 1);
  if (category.categoryColor) {
    div.style.setProperty("--category-color", category.categoryColor);
  }

  var h3 = document.createElement("h3");
  h3.textContent = category.category;
  div.appendChild(h3);

  var ul = document.createElement("ul");
  ul.className = "skill-tags";
  category.tags.forEach(function (tag) {
    var li = document.createElement("li");
    var span = document.createElement("span");
    span.className = "skill-tag";
    span.textContent = tag;
    li.appendChild(span);
    ul.appendChild(li);
  });
  div.appendChild(ul);
  return div;
}

function createExperienceElement(exp, index) {
  var div = document.createElement("div");
  div.className = "timeline-item animate-in delay-" + ((index % 6) + 1);

  var dot = document.createElement("div");
  dot.className = "timeline-dot";
  div.appendChild(dot);

  var content = document.createElement("div");
  content.className = "timeline-content";

  var header = document.createElement("div");
  header.className = "timeline-header";

  var role = document.createElement("span");
  role.className = "timeline-role";
  role.textContent = exp.role;
  header.appendChild(role);

  var org = document.createElement("span");
  org.className = "timeline-org";
  org.textContent = exp.org;
  header.appendChild(org);

  var date = document.createElement("span");
  date.className = "timeline-date";
  date.textContent = exp.date;
  header.appendChild(date);

  content.appendChild(header);

  var p = document.createElement("p");
  p.textContent = exp.description;
  content.appendChild(p);

  div.appendChild(content);
  return div;
}

function createBlogElement(post, index) {
  var li = document.createElement("li");
  li.className = "blog-item animate-in delay-" + ((index % 6) + 1);

  var h3 = document.createElement("h3");
  var a = document.createElement("a");
  a.href = post.url;
  a.target = "_blank";
  a.rel = "noopener";
  a.textContent = post.title;
  h3.appendChild(a);

  var p = document.createElement("p");
  p.textContent = post.description;

  var meta = document.createElement("p");
  meta.className = "blog-meta";
  meta.textContent = post.date;

  li.appendChild(h3);
  li.appendChild(p);
  li.appendChild(meta);
  return li;
}

function createServiceElement(service, index) {
  var div = document.createElement("div");
  div.className = "service-card animate-in delay-" + ((index % 6) + 1);
  if (service.color) {
    div.style.setProperty("--service-color", service.color);
  }

  var h3 = document.createElement("h3");
  h3.textContent = service.title;
  div.appendChild(h3);

  var p = document.createElement("p");
  p.textContent = service.description;
  div.appendChild(p);

  return div;
}

function initScrollAnimations() {
  var prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReducedMotion) {
    document.querySelectorAll(".animate-in").forEach(function (el) {
      el.style.opacity = "1";
      el.style.animation = "none";
    });
    return;
  }

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.style.animationPlayState = "running";
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

  document.querySelectorAll(".animate-in").forEach(function (el) {
    el.style.animationPlayState = "paused";
    observer.observe(el);
  });
}

/* ------------------------------------------------------------------
   Tech / STEM visual layer — added 2026-10-04
   Decision: docs/adr/0003-visual-overhaul.md
   Canvas only, no libraries. Every effect is disabled under
   prefers-reduced-motion, and the tab is paused when hidden.
   ------------------------------------------------------------------ */

var prefersReducedMotion = function () {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
};

/* Blueprint grid + drifting node network behind the page. */
function initBackground() {
  var canvas = document.getElementById("bg-canvas");
  if (!canvas || !canvas.getContext) return;

  var ctx = canvas.getContext("2d");
  var dpr = Math.min(window.devicePixelRatio || 1, 2);
  var w = 0;
  var h = 0;
  var nodes = [];
  var rafId = null;
  var running = false;

  var GRID = 32;
  var MAJOR = 160;
  var LINK_DIST = 170;
  var MAX_NODES = 80;
  var SPEED = 0.34;

  function seed() {
    var count = Math.min(MAX_NODES, Math.max(26, Math.floor((w * h) / 15000)));
    nodes = [];
    for (var i = 0; i < count; i++) {
      nodes.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * SPEED,
        vy: (Math.random() - 0.5) * SPEED
      });
    }
  }

  function resize() {
    w = canvas.clientWidth;
    h = canvas.clientHeight;
    canvas.width = Math.floor(w * dpr);
    canvas.height = Math.floor(h * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    seed();
  }

  /* Canvas colours follow the theme. Recomputed only when data-theme changes. */
  var cachedTheme = null;
  var cachedPalette = null;

  function palette() {
    var t = document.documentElement.getAttribute("data-theme");
    if (t !== cachedTheme || !cachedPalette) {
      cachedTheme = t;
      cachedPalette = t === "dark" ? {
        gridMinor: "rgba(96, 165, 250, 0.13)",
        gridMajor: "rgba(96, 165, 250, 0.28)",
        link: "52, 211, 153",
        linkAlpha: 0.45,
        halo: "rgba(147, 197, 253, 0.16)",
        node: "rgba(147, 197, 253, 0.9)"
      } : {
        gridMinor: "rgba(37, 99, 235, 0.10)",
        gridMajor: "rgba(37, 99, 235, 0.22)",
        link: "5, 150, 105",
        linkAlpha: 0.5,
        halo: "rgba(37, 99, 235, 0.13)",
        node: "rgba(37, 99, 235, 0.85)"
      };
    }
    return cachedPalette;
  }

  function drawGrid() {
    var x;
    var y;
    var p = palette();

    ctx.lineWidth = 1;
    ctx.strokeStyle = p.gridMinor;
    ctx.beginPath();
    for (x = 0; x <= w; x += GRID) {
      ctx.moveTo(x + 0.5, 0);
      ctx.lineTo(x + 0.5, h);
    }
    for (y = 0; y <= h; y += GRID) {
      ctx.moveTo(0, y + 0.5);
      ctx.lineTo(w, y + 0.5);
    }
    ctx.stroke();

    ctx.strokeStyle = p.gridMajor;
    ctx.beginPath();
    for (x = 0; x <= w; x += MAJOR) {
      ctx.moveTo(x + 0.5, 0);
      ctx.lineTo(x + 0.5, h);
    }
    for (y = 0; y <= h; y += MAJOR) {
      ctx.moveTo(0, y + 0.5);
      ctx.lineTo(w, y + 0.5);
    }
    ctx.stroke();
  }

  function frame() {
    ctx.clearRect(0, 0, w, h);
    drawGrid();

    var p = palette();
    var i;
    var j;
    var dx;
    var dy;
    var d;

    ctx.lineWidth = 1.2;
    for (i = 0; i < nodes.length; i++) {
      for (j = i + 1; j < nodes.length; j++) {
        dx = nodes[i].x - nodes[j].x;
        dy = nodes[i].y - nodes[j].y;
        d = Math.sqrt(dx * dx + dy * dy);
        if (d < LINK_DIST) {
          ctx.strokeStyle = "rgba(" + p.link + ", " + (p.linkAlpha * (1 - d / LINK_DIST)).toFixed(3) + ")";
          ctx.beginPath();
          ctx.moveTo(nodes[i].x, nodes[i].y);
          ctx.lineTo(nodes[j].x, nodes[j].y);
          ctx.stroke();
        }
      }
    }

    for (i = 0; i < nodes.length; i++) {
      ctx.fillStyle = p.halo;
      ctx.beginPath();
      ctx.arc(nodes[i].x, nodes[i].y, 8, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = p.node;
      ctx.beginPath();
      ctx.arc(nodes[i].x, nodes[i].y, 2.2, 0, Math.PI * 2);
      ctx.fill();

      nodes[i].x += nodes[i].vx;
      nodes[i].y += nodes[i].vy;

      if (nodes[i].x < -20) nodes[i].x = w + 20;
      else if (nodes[i].x > w + 20) nodes[i].x = -20;
      if (nodes[i].y < -20) nodes[i].y = h + 20;
      else if (nodes[i].y > h + 20) nodes[i].y = -20;
    }
  }

  function loop() {
    if (!running) return;
    frame();
    rafId = requestAnimationFrame(loop);
  }

  function start() {
    if (running) return;
    running = true;
    rafId = requestAnimationFrame(loop);
  }

  function stop() {
    running = false;
    if (rafId) cancelAnimationFrame(rafId);
    rafId = null;
  }

  resize();
  window.addEventListener("resize", resize);

  if (prefersReducedMotion()) {
    frame();
    return;
  }

  start();
  document.addEventListener("visibilitychange", function () {
    if (document.hidden) stop();
    else start();
  });
}

/* Hero: types and deletes a rotating list of roles. */
function initTyping() {
  var el = document.getElementById("typed-text");
  if (!el) return;

  var phrases = [
    "civil engineer — two ten-storey buildings",
    "quantity takeoff · BOQ · rate analysis",
    "AutoCAD drafting & as-built drawings",
    "Python developer — building my own AI agents",
    "STEM educator & mentor"
  ];

  if (prefersReducedMotion()) {
    el.textContent = phrases[0];
    return;
  }

  var p = 0;
  var c = 0;
  var deleting = false;

  function tick() {
    var text = phrases[p];
    c += deleting ? -1 : 1;
    el.textContent = text.slice(0, c);

    var wait = deleting ? 22 : 42;
    if (!deleting && c === text.length) {
      deleting = true;
      wait = 1800;
    } else if (deleting && c === 0) {
      deleting = false;
      p = (p + 1) % phrases.length;
      wait = 320;
    }
    setTimeout(tick, wait);
  }

  tick();
}

/* Thin progress bar across the top of the viewport. */
function initScrollProgress() {
  var bar = document.getElementById("scroll-progress");
  if (!bar) return;

  function update() {
    var doc = document.documentElement;
    var max = doc.scrollHeight - doc.clientHeight;
    bar.style.width = (max > 0 ? (doc.scrollTop / max) * 100 : 0) + "%";
  }

  window.addEventListener("scroll", update, { passive: true });
  window.addEventListener("resize", update);
  update();
}

/* Counts the hero numbers up when they scroll into view. */
function initStatCounters() {
  var nums = document.querySelectorAll(".stat-num[data-count]");
  if (!nums.length) return;

  function settle(el) {
    el.textContent = el.getAttribute("data-count");
  }

  if (prefersReducedMotion() || !("IntersectionObserver" in window)) {
    nums.forEach(settle);
    return;
  }

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      observer.unobserve(entry.target);

      var target = parseInt(entry.target.getAttribute("data-count"), 10);
      var el = entry.target;

      requestAnimationFrame(function step(now) {
        if (!el._started) {
          el._started = now;
        }
        var t = Math.min((now - el._started) / 900, 1);
        el.textContent = Math.round(target * (1 - Math.pow(1 - t, 3)));
        if (t < 1) requestAnimationFrame(step);
        else settle(el);
      });
    });
  }, { threshold: 0.4 });

  nums.forEach(function (n) {
    observer.observe(n);
  });
}

/* Fades sections in on scroll. The class is added here, not in the
   markup, so the content stays visible if JS never runs. */
function initSectionReveal() {
  var sections = document.querySelectorAll(".section");
  if (!sections.length || prefersReducedMotion() || !("IntersectionObserver" in window)) return;

  sections.forEach(function (s) {
    s.classList.add("reveal");
  });

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: "0px 0px -40px 0px" });

  sections.forEach(function (s) {
    observer.observe(s);
  });
}

/* Project detail popup. */
var lastFocusedElement = null;

function openProjectModal(project) {
  var modal = document.getElementById("project-modal");
  if (!modal) return;

  lastFocusedElement = document.activeElement;

  var kicker = document.getElementById("modal-kicker");
  var title = document.getElementById("modal-title");
  var body = document.getElementById("modal-body");
  var link = document.getElementById("modal-link");

  if (kicker) kicker.textContent = project.language;
  if (title) title.textContent = project.name;
  if (body) body.textContent = project.description;
  if (link) link.href = project.url;

  modal.hidden = false;
  document.body.classList.add("modal-open");

  var closeBtn = modal.querySelector(".modal-close");
  if (closeBtn) closeBtn.focus();
}

function closeProjectModal() {
  var modal = document.getElementById("project-modal");
  if (!modal || modal.hidden) return;

  modal.hidden = true;
  document.body.classList.remove("modal-open");

  if (lastFocusedElement && lastFocusedElement.focus) {
    lastFocusedElement.focus();
  }
  lastFocusedElement = null;
}

function initProjectModal() {
  var modal = document.getElementById("project-modal");
  if (!modal) return;

  modal.querySelectorAll("[data-modal-close]").forEach(function (el) {
    el.addEventListener("click", closeProjectModal);
  });

  document.addEventListener("keydown", function (ev) {
    if (ev.key === "Escape") closeProjectModal();
  });
}

/* Dark / light toggle. The initial theme is applied by a blocking inline
   script in <head> so there is no flash of the wrong theme; this only
   handles switching and remembering the choice. */
function initThemeToggle() {
  var btn = document.getElementById("theme-toggle");
  if (!btn) return;

  function isDark() {
    return document.documentElement.getAttribute("data-theme") === "dark";
  }

  function sync() {
    var dark = isDark();
    btn.setAttribute("aria-pressed", dark ? "true" : "false");
    btn.setAttribute("aria-label", dark ? "Switch to light theme" : "Switch to dark theme");
  }

  btn.addEventListener("click", function () {
    var next = isDark() ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch (e) {
      /* storage blocked — the theme still switches for this page view */
    }
    sync();
  });

  sync();
}

/* Marks the nav link for the page you are currently on. Purely an
   enhancement — without it the nav still works, just without the highlight. */
function markCurrentNavItem() {
  var here = window.location.pathname.split("/").pop();
  if (!here) here = "index.html";

  document.querySelectorAll(".nav-links a").forEach(function (a) {
    if (a.getAttribute("href") === here) {
      a.classList.add("is-current");
      a.setAttribute("aria-current", "page");
    }
  });
}

document.addEventListener("DOMContentLoaded", function () {
  var year = new Date().getFullYear();
  var yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = year;
  }

  var projectList = document.getElementById("project-list");
  if (projectList) {
    var limit = parseInt(projectList.getAttribute("data-limit"), 10);
    var shown = limit > 0 ? PROJECTS.slice(0, limit) : PROJECTS;
    shown.forEach(function (project, index) {
      projectList.appendChild(createProjectElement(project, index));
    });
  }

  var servicesGrid = document.getElementById("services-grid");
  if (servicesGrid) {
    SERVICES.forEach(function (service, index) {
      servicesGrid.appendChild(createServiceElement(service, index));
    });
  }

  var skillsGrid = document.getElementById("skills-grid");
  if (skillsGrid) {
    SKILLS.forEach(function (category, index) {
      skillsGrid.appendChild(createSkillCategoryElement(category, index));
    });
  }

  var timeline = document.getElementById("timeline");
  if (timeline) {
    EXPERIENCE.forEach(function (exp, index) {
      timeline.appendChild(createExperienceElement(exp, index));
    });
  }

  var blogList = document.getElementById("blog-list");
  var blogPlaceholder = document.querySelector(".blog-placeholder");
  if (blogList) {
    if (BLOG_POSTS.length === 0) {
      if (blogPlaceholder) blogPlaceholder.style.display = "block";
    } else {
      if (blogPlaceholder) blogPlaceholder.style.display = "none";
      BLOG_POSTS.forEach(function (post, index) {
        blogList.appendChild(createBlogElement(post, index));
      });
    }
  }

  var linkedin = document.getElementById("linkedin-link");
  if (linkedin) {
    linkedin.href = "https://www.linkedin.com/in/sajan-gurung-786705285";
  }

  initScrollAnimations();
  initBackground();
  initTyping();
  initScrollProgress();
  initStatCounters();
  initSectionReveal();
  initProjectModal();
  markCurrentNavItem();
  initThemeToggle();
});