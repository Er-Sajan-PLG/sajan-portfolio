var PROJECTS = [
  {
    name: "open-notebook",
    description: "An open-source implementation of Notebook LM with more flexibility and features.",
    language: "TypeScript",
    url: "https://github.com/Er-Sajan-PLG/open-notebook"
  },
  {
    name: "OpenJarvis",
    description: "Personal AI, on personal devices.",
    language: "Python",
    url: "https://github.com/Er-Sajan-PLG/OpenJarvis"
  },
  {
    name: "STEM-TUITION",
    description: "Website for STEM tuition.",
    language: "JavaScript",
    url: "https://github.com/Er-Sajan-PLG/STEM-TUTION"
  },
  {
    name: "JARVIS",
    description: "A personal AI platform.",
    language: "Python",
    url: "https://github.com/Er-Sajan-PLG/JARVIS"
  },
  {
    name: "3D-Ludo",
    description: "A 3D Ludo game.",
    language: "Python",
    url: "https://github.com/Er-Sajan-PLG/3D-Ludo"
  }
];

document.addEventListener("DOMContentLoaded", function () {
  var year = new Date().getFullYear();
  var yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = year;
  }

  var list = document.getElementById("project-list");
  if (list) {
    PROJECTS.forEach(function (project) {
      var li = document.createElement("li");
      li.className = "project-item";

      var h3 = document.createElement("h3");
      var a = document.createElement("a");
      a.href = project.url;
      a.target = "_blank";
      a.rel = "noopener";
      a.textContent = project.name;
      h3.appendChild(a);

      var p = document.createElement("p");
      p.textContent = project.description;

      var span = document.createElement("span");
      span.className = "project-language";
      span.textContent = project.language;

      li.appendChild(h3);
      li.appendChild(p);
      li.appendChild(span);
      list.appendChild(li);
    });
  }

  var linkedin = document.getElementById("linkedin-link");
  if (linkedin) {
    linkedin.href = "https://www.linkedin.com/in/"; // placeholder
  }
});
