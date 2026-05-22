/* PattayaPets — progressive enhancement only. The site works fully without JS. */
(function () {
  "use strict";

  /* Mobile navigation toggle */
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("primary-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    nav.addEventListener("click", function (e) {
      if (e.target.tagName === "A" && nav.classList.contains("open")) {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && nav.classList.contains("open")) {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.focus();
      }
    });
  }

  /* Mark the current top-level nav item */
  try {
    var here = location.pathname.replace(/index\.html$/, "") || "/";
    document.querySelectorAll("#primary-nav a").forEach(function (a) {
      var href = a.getAttribute("href") || "";
      if (href !== "/" && here.indexOf(href.replace(/index\.html$/, "")) === 0) {
        a.setAttribute("aria-current", "page");
      } else if (href === "/" && here === "/") {
        a.setAttribute("aria-current", "page");
      }
    });
  } catch (e) {}

  /* Register the service worker for offline support */
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", function () {
      navigator.serviceWorker.register("/sw.js").catch(function () {});
    });
  }
})();
