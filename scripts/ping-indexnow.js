#!/usr/bin/env node
'use strict';
/** Ping IndexNow after build. Key live at https://pattayapets.com/{key}.txt (IndexNow option 1). */
const fs = require('fs');
const https = require('https');
const path = require('path');

const HOST = 'pattayapets.com';
const KEY_SOURCE = 'pp-indexnow-key.txt';
const root = path.join(__dirname, '..');
const dist = path.join(root, 'dist');
const key = fs.readFileSync(path.join(root, 'src', 'static', KEY_SOURCE), 'utf8').trim();
const sitemap = fs.readFileSync(path.join(dist, 'sitemap.xml'), 'utf8');
const urlList = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
const BATCH = 100;
const endpoints = ['https://api.indexnow.org/indexnow', 'https://www.bing.com/indexnow'];
const CONFIRM = '--confirm=' + HOST;

if (!process.argv.includes(CONFIRM)) {
  console.error('IndexNow not sent. Explicit confirmation is required: npm run indexnow -- ' + CONFIRM);
  process.exit(1);
}
if (!/^[A-Za-z0-9_-]{8,128}$/.test(key)) {
  console.error('IndexNow key file is malformed.');
  process.exit(1);
}
if (!urlList.length || urlList.some((value) => {
  try { return new URL(value).origin !== 'https://' + HOST; } catch (error) { return true; }
})) {
  console.error('Sitemap is empty or contains a non-pattayapets URL; nothing sent.');
  process.exit(1);
}

function post(endpoint, body) {
  return new Promise((resolve, reject) => {
    const data = JSON.stringify(body);
    const u = new URL(endpoint);
    const req = https.request({
      hostname: u.hostname,
      path: u.pathname,
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8', 'Content-Length': Buffer.byteLength(data) },
    }, (res) => {
      let chunks = '';
      res.on('data', (c) => { chunks += c; });
      res.on('end', () => resolve({ status: res.statusCode, body: chunks }));
    });
    req.on('error', reject);
    req.setTimeout(15000, () => req.destroy(new Error('IndexNow request timed out')));
    req.write(data);
    req.end();
  });
}

(async () => {
  if (!urlList.length) {
    console.error('No URLs in dist/sitemap.xml — run npm run build first');
    process.exit(1);
  }
  /* keyLocation is part of the IndexNow spec and tells the endpoint exactly where
     to verify the key, instead of leaving it to guess. */
  const payloadBase = {
    host: HOST,
    key,
    keyLocation: `https://${HOST}/${key}.txt`,
  };
  let accepted = 0;
  let rejected = 0;
  const reasons = new Set();

  for (let i = 0; i < urlList.length; i += BATCH) {
    const batch = urlList.slice(i, i + BATCH);
    const label = `${i + 1}-${Math.min(i + BATCH, urlList.length)}`;
    for (const ep of endpoints) {
      const res = await post(ep, { ...payloadBase, urlList: batch });
      const ok = res.status === 200 || res.status === 202;
      const detail = res.status >= 400 && res.body ? " " + res.body.trim().slice(0, 120) : "";
      console.log(`${ok ? "ok  " : "FAIL"} ${ep} batch ${label} → HTTP ${res.status}${detail}`);
      if (ok) accepted++;
      else { rejected++; if (res.body) reasons.add(res.body.trim().slice(0, 160)); }
    }
  }

  /* A 4xx is a refusal, not a submission. Reporting "submitted" regardless is how
     a silent indexing outage hides for weeks. */
  if (rejected && !accepted) {
    console.error(`\nIndexNow: NOTHING was submitted. All ${rejected} request(s) were refused.`);
    reasons.forEach((r) => console.error("  reason: " + r));
    console.error(`\n  Your deploy already succeeded - this is the search-ping step only.`);
    console.error(`  Check ${payloadBase.keyLocation} is live and returns exactly the key,`);
    console.error(`  and that ${HOST} is verified in Bing Webmaster Tools. Then re-run: npm run indexnow`);
    process.exit(1);
  }
  if (rejected) {
    console.error(`\nIndexNow: PARTIAL - ${accepted} request(s) accepted, ${rejected} refused.`);
    reasons.forEach((r) => console.error("  reason: " + r));
    process.exit(1);
  }
  console.log(`\nIndexNow: ${urlList.length} URLs accepted across ${accepted} request(s).`);
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
