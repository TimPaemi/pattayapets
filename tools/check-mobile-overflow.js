"use strict";
/* True mobile-emulation overflow check (real Chrome, 360/390/412px).
   Catches viewport bugs Lighthouse no longer scores (content-width).
   Requires: npm run build && npx serve dist -l 8787
   Usage: npm run audit:mobile  (or: node tools/check-mobile-overflow.js [base-url]) */
const puppeteer = require("puppeteer-core");

const CHROME = process.env.PP_CHROME || "C:/Program Files/Google/Chrome/Application/chrome.exe";
const BASE = process.argv[2] || "http://127.0.0.1:8787";
const WIDTHS = [360, 390, 412];
const PAGES = ["/", "/vets/", "/bring-pet-to-thailand/", "/vets/thonglor-pet-hospital-pattaya.html", "/directory.html"];

(async () => {
  const browser = await puppeteer.launch({ executablePath: CHROME, headless: "new", args: ["--no-sandbox"] });
  const page = await browser.newPage();
  let issues = 0;

  for (const w of WIDTHS) {
    await page.setViewport({ width: w, height: 844, deviceScaleFactor: 2, isMobile: true, hasTouch: true });
    for (const p of PAGES) {
      await page.goto(BASE + p, { waitUntil: "networkidle0", timeout: 30000 });
      const r = await page.evaluate((vw) => {
        const doc = document.documentElement;
        const over = [];
        document.querySelectorAll("body *").forEach((el) => {
          const b = el.getBoundingClientRect();
          if (b.right > vw + 1 && b.width > 8 && getComputedStyle(el).display !== "none") {
            over.push(el.tagName + "." + String(el.className && el.className.baseVal !== undefined ? el.className.baseVal : el.className).split(" ")[0] + " right=" + Math.round(b.right));
          }
        });
        const menu = document.querySelector(".nav-toggle");
        const mb = menu ? menu.getBoundingClientRect() : null;
        return {
          innerWidth: window.innerWidth,
          vvWidth: window.visualViewport ? window.visualViewport.width : null,
          scrollW: doc.scrollWidth,
          menuVisible: mb ? mb.right <= window.innerWidth + 1 && mb.width > 0 : null,
          menuRight: mb ? Math.round(mb.right) : null,
          over: over.slice(0, 6)
        };
      }, w);
      const bad = r.scrollW > r.innerWidth + 1 || r.menuVisible === false;
      if (bad) issues++;
      console.log((bad ? "FAIL" : "OK  ") + " req=" + w + " inner=" + r.innerWidth + " vv=" + Math.round(r.vvWidth || 0) + " " + p +
        "  scrollW=" + r.scrollW + " menuRight=" + r.menuRight +
        (r.over.length ? "  overflow: " + r.over.slice(0, 3).join(" | ") : ""));
    }
  }

  await browser.close();
  console.log(issues ? "\nFAIL — " + issues + " page/width combos overflow" : "\nPASS — no horizontal overflow, menu reachable at all widths");
  process.exit(issues ? 1 : 0);
})();
