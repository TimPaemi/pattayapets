/* PattayaPets — progressive enhancement only. The site works fully without JS. */
(function () {
  "use strict";

  /* Stylesheet preload fallback */
  var cssLink = document.querySelector('link[rel="preload"][href="/assets/css/site.css"]');
  if (cssLink) {
    function applyCss() {
      cssLink.rel = "stylesheet";
    }
    if (cssLink.onload !== undefined) cssLink.onload = applyCss;
    window.addEventListener("load", applyCss);
    setTimeout(applyCss, 3000);
  }

  /* Mobile navigation */
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("primary-nav");
  if (toggle && nav) {
    function setNav(open) {
      nav.classList.toggle("open", open);
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      document.body.classList.toggle("nav-open", open);
      if (open) {
        var first = nav.querySelector("a");
        if (first) first.focus();
      } else {
        toggle.focus();
      }
    }
    toggle.addEventListener("click", function () {
      setNav(!nav.classList.contains("open"));
    });
    nav.addEventListener("click", function (e) {
      if (e.target.tagName === "A" && nav.classList.contains("open")) setNav(false);
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && nav.classList.contains("open")) {
        setNav(false);
        toggle.focus();
      }
    });
    document.addEventListener("click", function (e) {
      if (!nav.classList.contains("open")) return;
      if (nav.contains(e.target) || toggle.contains(e.target)) return;
      setNav(false);
    });
  }

  /* Mark the current top-level nav item */
  try {
    var here = location.pathname.replace(/index\.html$/, "") || "/";
    document.querySelectorAll("#primary-nav a").forEach(function (a) {
      var href = a.getAttribute("href") || "";
      var base = href.replace(/index\.html$/, "");
      if (href === "/" && here === "/") {
        a.setAttribute("aria-current", "page");
      } else if (href !== "/" && base && here.indexOf(base) === 0) {
        a.setAttribute("aria-current", "page");
      }
    });
    if (here === "/directory.html") {
      document.querySelectorAll('#primary-nav a[href="/directory.html"]').forEach(function (a) {
        a.setAttribute("aria-current", "page");
      });
    }
    if (here === "/guides.html") {
      document.querySelectorAll('#primary-nav a[href="/guides.html"]').forEach(function (a) {
        a.setAttribute("aria-current", "page");
      });
    }
    if (here === "/search.html") {
      document.querySelectorAll('#primary-nav a[href="/search.html"]').forEach(function (a) {
        a.setAttribute("aria-current", "page");
      });
      document.querySelectorAll(".header-search-link").forEach(function (a) {
        a.setAttribute("aria-current", "page");
      });
    }
  } catch (e) {}

  /* Site search (#pp-q on /search.html) */
  var searchInput = document.getElementById("pp-q");
  var searchOut = document.getElementById("pp-results");
  var searchFilters = document.getElementById("pp-filters");
  if (searchInput && searchOut) {
    var idx = [];
    var filterKinds = [];
    var activeFilter = "";
    var debounceTimer;
    searchOut.setAttribute("aria-busy", "false");

    function esc(s) {
      return String(s).replace(/[&<>"]/g, function (c) {
        return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
      });
    }

    function syncUrl(q) {
      try {
        var url = new URL(location.href);
        if (q && q.length >= 2) url.searchParams.set("q", q);
        else url.searchParams.delete("q");
        history.replaceState(null, "", url.pathname + url.search);
      } catch (e) {}
    }

    function renderFilters(kinds) {
      if (!searchFilters) return;
      var chips = ['<button type="button" class="chip chip-link' +
        (activeFilter === "" ? " chip-active" : "") + '" data-filter="">All</button>'];
      kinds.forEach(function (k) {
        chips.push('<button type="button" class="chip chip-link' +
          (activeFilter === k ? " chip-active" : "") + '" data-filter="' + esc(k) + '">' +
          esc(k) + "</button>");
      });
      searchFilters.innerHTML = chips.join("");
      searchFilters.querySelectorAll("[data-filter]").forEach(function (btn) {
        btn.addEventListener("click", function () {
          activeFilter = btn.getAttribute("data-filter") || "";
          runSearch();
        });
      });
    }

    function runSearch() {
      var q = searchInput.value.trim().toLowerCase();
      syncUrl(q);
      if (q.length < 2) {
        searchOut.setAttribute("aria-busy", "false");
        searchOut.innerHTML = '<p class="notice">Type at least two letters to search every page.</p>';
        if (searchFilters) searchFilters.innerHTML = "";
        return;
      }
      searchOut.setAttribute("aria-busy", "true");
      if (searchFilters && filterKinds.length) renderFilters(filterKinds);
      var terms = q.split(/\s+/);
      var hits = idx.map(function (p) {
        if (activeFilter && p.k !== activeFilter) return null;
        var hay = (p.t + " " + p.d + " " + p.k).toLowerCase();
        if (!terms.every(function (t) { return hay.indexOf(t) > -1; })) return null;
        var s = 0;
        terms.forEach(function (t) {
          if (p.t.toLowerCase().indexOf(t) > -1) s += 3;
          if (p.k.toLowerCase().indexOf(t) > -1) s += 1;
        });
        return { p: p, s: s };
      }).filter(Boolean).sort(function (a, b) { return b.s - a.s; }).slice(0, 60);

      searchOut.setAttribute("aria-busy", "false");
      if (!hits.length) {
        searchOut.innerHTML = '<p class="notice" role="status">No pages matched &ldquo;' + esc(q) +
          '&rdquo;. Try fewer or different words.</p>';
        return;
      }
      searchOut.innerHTML = '<p class="search-results__count" role="status">' + hits.length +
        " result" + (hits.length > 1 ? "s" : "") + "</p>" +
        hits.map(function (x) {
          return '<a class="card search-result" href="' + x.p.u + '">' +
            '<span class="card-tag">' + esc(x.p.k) + "</span>" +
            "<h3>" + esc(x.p.t) + "</h3><p>" + esc(x.p.d) + '</p>' +
            '<span class="card-meta">Open page &rarr;</span></a>';
        }).join("");
    }

    searchOut.setAttribute("aria-busy", "true");
    searchOut.innerHTML = '<p class="notice">Loading search index&hellip;</p>';
    fetch("/search-index.json").then(function (r) { return r.json(); }).then(function (d) {
      idx = d;
      filterKinds = [];
      d.forEach(function (p) {
        if (filterKinds.indexOf(p.k) === -1) filterKinds.push(p.k);
      });
      filterKinds.sort();
      var u = new URLSearchParams(location.search).get("q");
      if (u) searchInput.value = u;
      runSearch();
      try { searchInput.focus(); } catch (e) {}
    }).catch(function () {
      searchOut.setAttribute("aria-busy", "false");
      searchOut.innerHTML = '<p class="notice">Search could not load. Browse the ' +
        '<a href="/directory.html">directory</a> or ' +
        '<a href="/sitemap.html">sitemap</a> instead.</p>';
    });

    searchInput.addEventListener("input", function () {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(runSearch, 180);
    });
  }

  /* Deferred analytics — after load + idle or first interaction (off Lighthouse critical path) */
  var gaId = document.documentElement.getAttribute("data-ga");
  if (gaId) {
    var gaLoaded = false;
    function loadGa() {
      if (gaLoaded) return;
      gaLoaded = true;
      window.dataLayer = window.dataLayer || [];
      window.gtag = function () { window.dataLayer.push(arguments); };
      window.gtag("js", new Date());
      window.gtag("config", gaId, { anonymize_ip: true });
      var s = document.createElement("script");
      s.src = "https://www.googletagmanager.com/gtag/js?id=" + encodeURIComponent(gaId);
      s.async = true;
      document.head.appendChild(s);
    }
    window.addEventListener("load", function () {
      setTimeout(loadGa, 4000);
    }, { once: true });
    ["scroll", "keydown", "pointerdown"].forEach(function (ev) {
      window.addEventListener(ev, loadGa, { once: true, passive: true });
    });
  }

  /* Register the service worker for offline support */
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", function () {
      navigator.serviceWorker.register("/sw.js").catch(function () {});
    });
  }
})();
