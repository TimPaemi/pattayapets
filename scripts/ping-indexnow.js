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
    req.write(data);
    req.end();
  });
}

(async () => {
  if (!urlList.length) {
    console.error('No URLs in dist/sitemap.xml — run npm run build first');
    process.exit(1);
  }
  const payloadBase = {
    host: HOST,
    key,
  };
  for (let i = 0; i < urlList.length; i += BATCH) {
    const batch = urlList.slice(i, i + BATCH);
    const label = `${i + 1}-${Math.min(i + BATCH, urlList.length)}`;
    for (const ep of endpoints) {
      const res = await post(ep, { ...payloadBase, urlList: batch });
      console.log(`${ep} batch ${label} → HTTP ${res.status}`);
    }
  }
  console.log(`IndexNow: submitted ${urlList.length} URLs`);
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
