/* PattayaPets — progressive enhancement only. The site works fully without JS. */
(function () {
  "use strict";

  function filterQueryGet(key) {
    try {
      return new URLSearchParams(location.search).get(key) || "";
    } catch (e) {
      return "";
    }
  }

  function filterQuerySet(key, value) {
    try {
      var url = new URL(location.href);
      if (!value || value === "all") url.searchParams.delete(key);
      else url.searchParams.set(key, value);
      history.replaceState(null, "", url.pathname + url.search + url.hash);
    } catch (e) {}
  }

  function filterPick(buttons, attr, raw) {
    if (!raw || raw === "all") return "";
    var ok = false;
    buttons.forEach(function (btn) {
      if ((btn.getAttribute(attr) || "") === raw) ok = true;
    });
    return ok ? raw : "";
  }

  function filterResultStatus(status, shown, total, emptyText, unit) {
    if (!status) return;
    if (shown === 0) {
      status.hidden = false;
      status.textContent = emptyText;
    } else if (shown < total) {
      status.hidden = false;
      status.textContent = "Showing " + shown + " of " + total + " " + unit + ".";
    } else {
      status.hidden = true;
      status.textContent = "";
    }
  }

  function collapseFilterPanel(el) {
    if (!el) return;
    var panel = el.closest(".filter-panel");
    if (!panel) return;
    try {
      if (window.matchMedia("(max-width: 900px)").matches) panel.removeAttribute("open");
    } catch (e) {}
  }

  function scrollToEl(el) {
    if (!el) return;
    try {
      var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      el.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
    } catch (e) {
      el.scrollIntoView(true);
    }
  }

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
  var searchDrawers = document.querySelectorAll(".header-search-drawer");
  function closeSearchDrawers() {
    searchDrawers.forEach(function (d) { d.removeAttribute("open"); });
  }
  if (toggle && nav) {
    function setNav(open) {
      nav.classList.toggle("open", open);
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
      document.body.classList.toggle("nav-open", open);
      if (open) {
        var first = nav.querySelector("a");
        if (first) first.focus();
      } else {
        toggle.focus();
      }
    }
    toggle.addEventListener("click", function () {
      var opening = !nav.classList.contains("open");
      if (opening) closeSearchDrawers();
      setNav(opening);
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
      document.querySelectorAll('#primary-nav a[href="/directory.html"], .header-nav-quick[href="/directory.html"]').forEach(function (a) {
        a.setAttribute("aria-current", "page");
      });
    }
    if (here.indexOf("/pet-emergency") === 0) {
      document.querySelectorAll('#primary-nav a[href="/pet-emergency/"], .header-nav-quick[href="/pet-emergency/"]').forEach(function (a) {
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
      document.querySelectorAll(".header-search-drawer summary.header-search-link").forEach(function (a) {
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
      if (q.length >= 2 && hits.length) scrollToEl(searchOut);
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

  /* Mobile header search drawer */
  searchDrawers.forEach(function (drawer) {
    drawer.addEventListener("toggle", function () {
      if (drawer.open) {
        if (nav && nav.classList.contains("open")) {
          nav.classList.remove("open");
          if (toggle) {
            toggle.setAttribute("aria-expanded", "false");
            toggle.setAttribute("aria-label", "Open menu");
          }
          document.body.classList.remove("nav-open");
        }
        var inp = drawer.querySelector("#header-q-mobile");
        if (inp) {
          try { inp.focus(); } catch (err) {}
        }
      }
    });
  });
  document.addEventListener("keydown", function (e) {
    if (e.key !== "Escape") return;
    var openDrawer = document.querySelector(".header-search-drawer[open]");
    if (!openDrawer) return;
    closeSearchDrawers();
    var summary = openDrawer.querySelector("summary");
    if (summary) summary.focus();
  });
  document.addEventListener("click", function (e) {
    searchDrawers.forEach(function (drawer) {
      if (!drawer.open) return;
      if (drawer.contains(e.target)) return;
      drawer.removeAttribute("open");
    });
  });

  /* Copy phone number on listing and emergency clinic pages */
  document.querySelectorAll(".contact-actions").forEach(function (row) {
    var tel = row.querySelector('a[href^="tel:"]');
    if (!tel) return;
    var btn = document.createElement("button");
    btn.type = "button";
    btn.className = "btn btn-ghost copy-phone-btn";
    btn.textContent = "Copy number";
    btn.addEventListener("click", function () {
      var num = (tel.textContent || "").trim() || tel.getAttribute("href").replace(/^tel:/i, "");
      function done(ok) {
        btn.textContent = ok ? "Copied" : "Copy number";
        if (ok) setTimeout(function () { btn.textContent = "Copy number"; }, 2000);
      }
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(num).then(function () { done(true); }, function () { done(false); });
      } else {
        done(false);
      }
    });
    row.appendChild(btn);
  });

  /* Keyboard shortcut: / focuses search (when not typing in a field) */
  document.addEventListener("keydown", function (e) {
    if (e.key !== "/" || e.ctrlKey || e.metaKey || e.altKey) return;
    var t = e.target;
    var tag = t && t.tagName;
    if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT" || (t && t.isContentEditable)) return;
    e.preventDefault();
    var q = document.getElementById("pp-q") || document.getElementById("header-q") ||
      document.getElementById("header-q-mobile");
    if (q) {
      q.focus();
      var drawer = q.closest(".header-search-drawer");
      if (drawer && !drawer.open) drawer.setAttribute("open", "");
      return;
    }
    location.href = "/search.html";
  });

  /* Back to top — long guide and directory pages */
  (function () {
    var btn = document.createElement("button");
    btn.type = "button";
    btn.className = "back-to-top";
    btn.hidden = true;
    btn.setAttribute("aria-label", "Back to top");
    btn.innerHTML = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' +
      'stroke-width="2.4" stroke-linecap="round" aria-hidden="true"><path d="M12 19V5M5 12l7-7 7 7"/></svg>';
    document.body.appendChild(btn);
    var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.addEventListener("scroll", function () {
      btn.hidden = window.scrollY < 480;
    }, { passive: true });
    btn.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
    });
  })();

  /* Horizontal table scroll hint */
  document.querySelectorAll(".table-wrap").forEach(function (wrap) {
    function mark() {
      var scrollable = wrap.scrollWidth > wrap.clientWidth + 2;
      wrap.classList.toggle("table-wrap--scroll", scrollable);
      if (scrollable) {
        wrap.setAttribute("aria-label", "Table scrolls sideways for more columns");
      } else {
        wrap.removeAttribute("aria-label");
      }
    }
    mark();
    window.addEventListener("resize", mark, { passive: true });
    wrap.addEventListener("scroll", function () {
      wrap.classList.toggle("table-wrap--scrolled", wrap.scrollLeft > 8);
    }, { passive: true });
  });

  /* Print checklist button */
  document.querySelectorAll(".print-page-btn").forEach(function (btn) {
    btn.addEventListener("click", function () { window.print(); });
  });

  /* Footer panels: collapsed by default on narrow screens */
  (function () {
    var panels = document.querySelectorAll(".footer-panel");
    if (!panels.length) return;
    var mq = window.matchMedia("(max-width: 760px)");
    function sync() {
      panels.forEach(function (p) {
        if (!mq.matches) p.setAttribute("open", "");
        else p.removeAttribute("open");
      });
    }
    sync();
    if (mq.addEventListener) mq.addEventListener("change", sync);
    else mq.addListener(sync);
  })();

  /* Guide TOC: collapsible on narrow screens, always open on desktop sidebar */
  (function () {
    var panels = document.querySelectorAll(".toc-panel");
    if (!panels.length) return;
    var mq = window.matchMedia("(max-width: 900px)");
    function sync() {
      panels.forEach(function (p) {
        if (!mq.matches) p.setAttribute("open", "");
        else p.removeAttribute("open");
      });
    }
    sync();
    if (mq.addEventListener) mq.addEventListener("change", sync);
    else mq.addListener(sync);
  })();

  /* Directory hub listing filters */
  (function () {
    var list = document.getElementById("dir-listings");
    if (!list) return;
    var cards = list.querySelectorAll(".biz-card[data-dir-tags]");
    var status = document.getElementById("dir-filter-status");
    var filters = document.querySelectorAll(".dir-filter[data-dir-filter]");
    if (!filters.length || !cards.length) return;
    function apply(filter) {
      if (!filter) filter = "all";
      var shown = 0;
      cards.forEach(function (card) {
        var tags = card.getAttribute("data-dir-tags") || "";
        var tagList = tags.split(/\s+/);
        var ok = filter === "all" ||
          (filter === "24h" && tagList.indexOf("24h") !== -1) ||
          (filter.indexOf("area:") === 0 && tagList.indexOf(filter) !== -1);
        card.hidden = !ok;
        if (ok) shown += 1;
      });
      filters.forEach(function (btn) {
        btn.classList.toggle("is-active", btn.getAttribute("data-dir-filter") === filter);
      });
      filterResultStatus(status, shown, cards.length,
        "No listings match this filter. Try another area or view all.", "listings");
      filterQuerySet("filter", filter);
      if (filter !== "all") scrollToEl(list);
    }
    filters.forEach(function (btn) {
      btn.addEventListener("click", function (e) {
        e.preventDefault();
        apply(btn.getAttribute("data-dir-filter") || "all");
        collapseFilterPanel(btn);
      });
    });
    var dirInit = filterPick(filters, "data-dir-filter", filterQueryGet("filter"));
    if (dirInit) apply(dirInit);
  })();

  /* Guides hub: filter cards by topic */
  (function () {
    var list = document.getElementById("guide-listings");
    if (!list) return;
    var cards = list.querySelectorAll(".guide-card[data-guide-cat]");
    var status = document.getElementById("guide-filter-status");
    var container = list.closest(".container");
    var filters = container
      ? container.querySelectorAll(".guide-filter[data-guide-filter]")
      : [];
    if (!filters.length || !cards.length) return;
    var guideLabels = {};
    filters.forEach(function (btn) {
      var t = btn.getAttribute("data-guide-filter");
      guideLabels[t] = btn.textContent.replace(/\s*\(\d+\)\s*$/, "").trim();
    });
    var guideCounts = { all: cards.length };
    cards.forEach(function (card) {
      var cat = card.getAttribute("data-guide-cat") || "other";
      guideCounts[cat] = (guideCounts[cat] || 0) + 1;
    });
    filters.forEach(function (btn) {
      var t = btn.getAttribute("data-guide-filter");
      var base = guideLabels[t] || btn.textContent;
      var n = t === "all" ? guideCounts.all : guideCounts[t];
      if (n) btn.textContent = base + " (" + n + ")";
    });
    function apply(filter) {
      if (!filter) filter = "all";
      var shown = 0;
      cards.forEach(function (card) {
        var cat = card.getAttribute("data-guide-cat") || "";
        var ok = filter === "all" || cat === filter;
        card.hidden = !ok;
        if (ok) shown += 1;
      });
      filters.forEach(function (btn) {
        btn.classList.toggle("is-active", btn.getAttribute("data-guide-filter") === filter);
      });
      filterResultStatus(status, shown, cards.length,
        "No guides match this filter. View all to reset.", "guides");
      filterQuerySet("topic", filter);
      if (filter !== "all") scrollToEl(list);
    }
    filters.forEach(function (btn) {
      btn.addEventListener("click", function (e) {
        e.preventDefault();
        apply(btn.getAttribute("data-guide-filter") || "all");
        collapseFilterPanel(btn);
      });
    });
    var guideInit = filterPick(filters, "data-guide-filter", filterQueryGet("topic"));
    if (guideInit) apply(guideInit);
  })();

  /* Area hub: filter listing blocks by category */
  (function () {
    var list = document.getElementById("area-listings");
    if (!list) return;
    var blocks = list.querySelectorAll(".dir-cat-block[data-dir-cat]");
    var status = document.getElementById("area-filter-status");
    var container = list.closest(".container");
    var filters = container
      ? container.querySelectorAll(".dir-filter[data-dir-filter]")
      : [];
    if (!filters.length || !blocks.length) return;
    function apply(filter) {
      if (!filter) filter = "all";
      var shown = 0;
      blocks.forEach(function (block) {
        var cat = block.getAttribute("data-dir-cat") || "";
        var ok = filter === "all" || cat === filter;
        block.hidden = !ok;
        if (ok) shown += 1;
      });
      filters.forEach(function (btn) {
        btn.classList.toggle("is-active", btn.getAttribute("data-dir-filter") === filter);
      });
      filterResultStatus(status, shown, blocks.length,
        "No categories match this filter. View all to reset.", "categories");
      filterQuerySet("cat", filter);
      if (filter !== "all") scrollToEl(list);
    }
    filters.forEach(function (btn) {
      btn.addEventListener("click", function (e) {
        e.preventDefault();
        apply(btn.getAttribute("data-dir-filter") || "all");
        collapseFilterPanel(btn);
      });
    });
    var areaInit = filterPick(filters, "data-dir-filter", filterQueryGet("cat"));
    if (areaInit) apply(areaInit);
  })();

  /* On-this-page TOC: highlight current section while scrolling */
  (function () {
    var tocLinks = document.querySelectorAll(".sidebar .toc a[href^='#']");
    if (!tocLinks.length) return;
    var headings = [];
    tocLinks.forEach(function (a) {
      var id = a.getAttribute("href").slice(1);
      var el = document.getElementById(id);
      if (el) headings.push({ el: el, link: a });
    });
    if (!headings.length) return;
    var active = null;
    function setActive(link) {
      if (active === link) return;
      if (active) active.removeAttribute("aria-current");
      active = link;
      if (active) active.setAttribute("aria-current", "location");
    }
    function pickByScroll() {
      var y = window.scrollY + 110;
      var current = headings[0];
      headings.forEach(function (h) {
        if (h.el.offsetTop <= y) current = h;
      });
      setActive(current.link);
    }
    var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!reduceMotion && "IntersectionObserver" in window) {
      var obs = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          var hit = headings.find(function (h) { return h.el === entry.target; });
          if (hit) setActive(hit.link);
        });
      }, { rootMargin: "-20% 0px -65% 0px", threshold: 0 });
      headings.forEach(function (h) { obs.observe(h.el); });
    } else {
      window.addEventListener("scroll", pickByScroll, { passive: true });
      pickByScroll();
    }
  })();
})();
