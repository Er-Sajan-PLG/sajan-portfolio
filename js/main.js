document.addEventListener("DOMContentLoaded", function () {
  var year = new Date().getFullYear();
  var el = document.getElementById("year");
  if (el) {
    el.textContent = year;
  }
});
