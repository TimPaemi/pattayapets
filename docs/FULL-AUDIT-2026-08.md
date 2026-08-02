# PattayaPets full audit — 1 August 2026

Scope: C:\Projects\pattayapets and the live site at https://pattayapets.com/.  
Audit phase: 1 of 3, read-only investigation.  
Reopen date for every external source and live check in this report: 2026-08-01 unless a different date is stated.

## 1. Verdict

The generated site is fast, internally well linked, and mechanically clean, but it is not safe to treat as healthy.  
The single biggest problem is regulated accuracy: several import/export and emergency instructions contradict current primary sources or present unsupported rules as mandatory.  
Technical SEO is also exposed because 188 sitemap URLs and 192 canonicals point to .html URLs that permanently redirect to clean URLs.  
Trust and governance controls are not truthful enough: unverified or out-of-market businesses are labelled verified, schema invents Pattaya locations, publisher and network rules fail, and analytics loads without a recorded choice.  
Phase 2 should first freeze affected claims and obtain Tim’s gated decisions, then correct reader-harm claims, then repair identity and claim provenance before business or index implementation.

## 2. Scoreboard

| Dimension | Rating | Reason |
|---|---|---|
| A — Inventory and architecture | Amber | 209 pages form a shallow, connected graph with no indexable orphan, but the public URL model is split between .html sources and clean live destinations. |
| B — Technical SEO | Red | 188 sitemap URLs and 192 canonicals permanently redirect; three legacy redirects chain; service-worker and IndexNow verification remain unresolved. |
| C — On-page SEO | Amber | Uniqueness and heading checks are strong, but three titles are syntactically broken and one relocation hub/listing pair competes for the same title intent without query data. |
| D — Structured data | Red | JSON parses, but listing FAQ is hidden or fabricated, business locality is hardcoded, and the publisher/author graph violates the required entity model on every page. |
| E — Content quality and E-E-A-T | Red | False “verified” claims, 109 visible-date mismatches, unsupported money/time anecdotes, and unsafe heatstroke guidance outweigh otherwise substantial content. |
| F — Regulated accuracy | Red | Current primary sources contradict Thailand sequencing/timing, DLD export, Australia, and Malaysia instructions; Korea’s official sources conflict and the page omits a stated validity window. |
| G — Business integrity | Red | Three non-open dossiers are published as verified, remote businesses are rendered as Pattaya/nationwide, and eight open vet dossiers are stranded outside publication. |
| H — Code quality | Amber | The custom renderer is understandable, but duplicated registries and source fragments, fail-open validators, dead network code, and unsafe output deletion make changes risky. |
| I — Performance | Green | Five live templates scored 96–99 mobile and 100 desktop performance with good LCP/TBT/CLS; repeated inline payload is a maintenance opportunity, not a current speed defect. |
| J — Accessibility | Amber | Landmarks, labels, alt text, mobile layout, and Lighthouse are strong; the focus colour misses 3:1 and dynamic filters/search do not expose state cleanly. |
| K — Security and privacy | Red | GA loads without a consent state, CSP permits inline script/style, sharp has one high advisory, and the build accepts an uncontained recursive-delete target. |
| L — Network rules | Red | Forbidden network wording is present in 47 generated pages and the mandated publisher entity graph is absent, despite the one TimPaemi credit passing on all pages. |
| M — Build, deploy, repo hygiene | Amber | The project guard is correctly hardcoded and dry-run passes, but two headline audits are stale, CI is advisory/incomplete, audit commands mutate files, and git-authorized checks were prohibited. |
| N — Strategy and coverage | Amber | The inventory is broad; accuracy, provenance, local-business truth, and first-hand evidence must be repaired before adding more near-duplicate guides. |

Scoreboard line: A Amber · B Red · C Amber · D Red · E Red · F Red · G Red · H Amber · I Green · J Amber · K Red · L Red · M Amber · N Amber.

## 3. The numbers

### 3.1 Required machinery — actual first-run results

| Command | Exit | Captured output |
|---|---:|---|
| npm run build | 0 | “Generated 21 PNG assets”; “FAQ schema: 35 listing pages”; “Pages: 209 rendered”; “Schema: 209 JSON-LD blocks valid”; “Search: 205 pages indexed”; “Sitemap: 205 indexable URLs”; “Service worker: 79 URLs precached (e94e2ccfdc5a)”; “Output … 11716 KB”; “Done in 4537 ms”. |
| npm run check | 0 | “17,612 internal links”; “Broken: 0”. |
| npm run audit:invariants | 0 | 9 assertions passed, including three contactless listings disclosed/non-emergency and one-author/no-sister-link. The text-scope assertion is false; finding S1 below explains why. |
| npm run audit:seo | 0 | 209 pages; clean. |
| npm run audit:comprehensive | 0 | 209 pages; 0 missing/long/short/duplicate title, description, canonical, OG, or H1; keyword-path checks passed. |
| npm run audit:directory | 0 | 35 listings, 7 categories, 8 areas; warned on 4 missing addresses, 3 missing contact channels, and 10 empty areas, then printed “OK — contact audit passed”. |
| npm run audit:country-pairs | 0 | 26/26 import/export country pairs passed. |
| npm run audit:orphans | 0 | 0 orphan pages. |
| npm run audit:linking | 0 | Passed. |
| npm run audit:content | 0 | 131 guides; every guide reported at least 3 sections and 3 FAQs. |
| npm run audit:content:richness | 0 | 0 pages below its 1,400-word / 5-FAQ / 5-section thresholds. |
| npm run audit:official | 0 | 124 unique external URLs: OK 123, WARN 1, FAIL 0. Six HTTP 403 responses were counted as OK; the Incheon 302 was WARN. |
| npm run audit:full | 1 | Failed only its stale static-artifact expectations for assets/css/site.css and assets/js/site.js; subordinate audits printed pass. |
| npm run audit:live | 1 | All 205 sitemap URLs returned 200 after redirects; failed because the same obsolete unversioned CSS/JS URLs returned 404. |
| npm run audit:mobile | 1 | First required run failed ECONNREFUSED at 127.0.0.1:8787. With a local server subsequently started, all 15 page/viewport combinations at 360, 390, and 412 px passed; one LI/SPAN protrusion was logged on Thonglor while document scrollWidth still equalled the viewport. |
| npm run audit:lighthouse | 1 | First required run hit Chrome’s local-page interstitial/no server. Diagnostic rerun with the local server: home 98 performance, 100 accessibility, 100 best practices, 100 SEO. |
| npm run audit:lighthouse:all | 1 | 30 of 33 pages completed after the server became available; Home, Directory, and Guides exhausted retries before that. Completed pages were generally 97–99 performance and 100/100/100; Search was 94/100/100/69 because it is deliberately noindex. |
| npm run loop:queue | 0 | Wrote research/loop/queue.md; “0 tasks” and “0 open tasks across 134 pages”. This command is mutating despite being prescribed in the read-only suite. |
| node tools\deploy.mjs --dry-run | 0 | 209 HTML, correct title/canonical/domain/project, no retired school/authority output under the guard’s narrow checks, sitemap 205, and dist newer than source; nothing uploaded. |

The first-run failures above are retained rather than rewritten as passes. C0 is the exact temporary-server command used only for the successful mobile/home diagnostic reruns; the server was stopped at the end of the audit.

### 3.2 Corpus and architecture measurements

| Measure | Result | Reproduction |
|---|---:|---|
| Generated HTML | 209 | C1. |
| Sitemap URLs | 205 | C1. |
| Noindex/excluded pages | 4 | C1: 404.html, offline.html, search.html, and take-pet-out-of-thailand/to-new-zealand.html. |
| Sitemap entries that are .html | 188 | C1. |
| Canonicals that are .html | 192 of 209 | C1; the other 17 use clean hub/root URLs. |
| Live .html signal redirects | 188/188 sitemap URLs and 192/192 canonical URLs returned 308 | C4a; every response supplied a clean-path Location and all destinations were unique within each set. |
| Live sample | 30 URLs checked | C4b: exact URL/status ledger, 30/30 matched. |
| Internal links | 17,612; 0 broken | npm run check. |
| Main-content internal links | 7,962 | C1, excluding shared header/footer and resolving local anchors/fragments. |
| Reachability from home | all 207 linked pages within depth 2 | C1. Full graph: depth 0 = 1, depth 1 = 91, depth 2 = 115; 404/offline are intentional unreachable noindex fallbacks. Main-content graph: depth 1 = 82, depth 2 = 124. |
| Exact content duplicates | 0 | C1. |
| Largest HTML | 67,631 bytes | C1; well below Googlebot’s documented 15 MB initial-response limit: https://developers.google.com/search/blog/2022/06/googlebot-15mb. |
| HTML corpus | 10,551,523 bytes; 50,486 average | C1. |
| Titles/descriptions/canonicals/H1 | 0 missing; 0 duplicates | `npm run audit:comprehensive` plus C1. |
| Broken title punctuation | 3 pages | C1. |
| Anchors with “click here”, “read more”, “learn more”, or a bare URL | 0 of 18,605 anchors | C1. |
| Heading skips | 0 static pages | C1. |
| Images | 209 image elements; all nonempty alt; one unique src | C1; every page uses /assets/img/timpaemi.jpg and no page-specific editorial image. |
| Pages under 300 main-content words | 7 | C5: 404 146; offline 166; masthead 219; terms 223; contact 249; accessibility 258; privacy 259. |
| 41-word map-import stubs | 0 | C5; no page is below 50 words. |
| Word distribution | 47 below 500; 76 below 750; 132 below 1,000; 175 below 1,500; 207 below 2,000 | C5. |
| Regulated URLs | 71 | C1: 40 import and 31 export pages. Four have no external source link: both checklists plus bring-a-dog and bring-a-cat. |
| Preserved human editorial sample | 26 exact page URLs | C9 verifies the preserved 26-URL ledger/cardinality; each was manually source-read across structural, directory/business, adoption, dog-friendly, ownership/law, emergency, health, and species content. Regulated pages are evidenced individually in findings rather than folded into an unreconstructable sample total. |

The exact 26-page preserved ledger is expanded in C9; no abbreviated or reconstructed regulated URL stands in for a counted entry.

### 3.3 Structured data, business, security, and performance measurements

| Measure | Result | Reproduction |
|---|---:|---|
| JSON-LD parse | 209/209 valid; 1,066,094 bytes total | C2. |
| Review/AggregateRating | 0 / 0 | C2. |
| FAQ | 170 pages; 1,127 Question nodes; 337,742 bytes | C2. Synthetic business FAQ accounts for 35 pages and 31,246 bytes. |
| Business schema | 35 nodes | C2: 19 LocalBusiness, 11 VeterinaryCare, 5 PetStore. |
| Publisher corpus | 418 Organization; 836 Person objects; 0 Person @id; 0 ownershipFundingInfo | C2. |
| TimPaemi followed credit | 209/209 exact | C2: exactly one https://timpaemi.com/ link per page, all rel="author noopener". |
| Forbidden network wording | 70 matching nondependency files; 47 generated HTML pages; 38 generated HTML pages say “sister sites” | C3. Forty-nine generated files match when the two auxiliary artifacts are included; full inventory is in finding S1. |
| Business inventory | 35 live, 43 dossiers, 7 categories, 8 areas | C3. |
| Business current-surface sample | 11 checked; 7 live records matched core facts, 3 had stale Pattaya scope, 1 current open business was omitted | C8 proves the exact 11-URL reachability ledger; 7/3/1 is the manual field comparison documented below, not an HTTP-derived classification. |
| Dossier state | 3 live records not open; 8 dossier-only records open | C3. |
| Visible date mismatch | 109 of 152 pages with a visible “Last updated” label | C3: 208 page objects, 152 labelled, 109 label/date mismatches. |
| Credential scan | 645 files, 106,754,553 bytes, 0 high-confidence secret hits | C3, excluding .git, node_modules, and this report, which did not yet exist. |
| Dependency audit | 1 high, 0 critical | npm audit --json: sharp 0.34.5 affected below 0.35.0; fix 0.35.3. |
| Inline CSP surface | 209 inline event handlers, 310 style attributes, 627 style blocks | C2. |
| Third-party embeds | 0 iframe/embed/object | C2 generated plus C7 source scan. C7 also extracts one Cloudflare edge beacon from the saved browser artifact. |
| Live hashed assets | CSS 200, JS 200; unversioned CSS 404, JS 404 | C7. |
| Service-worker live cache header | Cache-Control: max-age=14400 | C7; source `_headers` says no-cache. |
| Live root response/security headers | 200 HTML; CSP; HSTS `max-age=63072000; includeSubDomains; preload`; COOP `same-origin`; Permissions-Policy; Referrer-Policy; nosniff; X-Frame-Options `DENY`; X-Permitted-Cross-Domain-Policies `none`; no Set-Cookie | C7 root header dump. Cloudflare also returns NEL/Report-To and `Access-Control-Allow-Origin: *`; no private credentialed endpoint exists in this static repository, while the CSP inline exemptions remain finding S2. |
| Static assets | 1,271,784 bytes | C2. Largest authored images are 54–61 KB; avatar is 46 KB; CSS 29,770 B; JS 14,789 B; fonts 13–22 KB. |
| Repeated inline critical CSS | 19,669 bytes × 209 = 4,110,821 bytes | C2; footer CSS adds 2,509 bytes per page. |
| Indexing-mutation/gate scripts | 1 filename match in scripts/tools; no retired `index-gate.mjs` name-equivalent | C11; the only match is `scripts/ping-indexnow.js`, which was inspected and not run. |
| `build:all` order | prebuild/make-images → build → check/links → SEO → comprehensive → directory → country pairs → orphans → richness → linking → invariants; short-circuits on failure | `node -p "require('./package.json').scripts['prebuild']"; node -p "require('./package.json').scripts['build:all']"`. It omits content/depth, official, full, live, mobile, and both Lighthouse audits. |

Business current-surface sample ledger:

| Business | Reopened official surface | Result against published/dossier core facts |
|---|---|---|
| Thonglor Pattaya | https://thonglorpet.com/branch/pethospital-thonglorpet-pattaya | 24-hour status, 02-079-9942, and branch address matched. |
| Muang Ake Pattaya | https://en.muangakepethospital.com/17045029/our-branch | Accident/Emergency and Community branch addresses, 24-hour status, and mobiles matched; non-emergency landlines remain withheld. |
| Animal Army | https://animalarmy.org/pages/contact | 08:00–17:00 daily, appointment-only qualifier, address, phone, and email matched. |
| K9 Coach | https://k9-coach.co.th/ | 08:00–18:00, 080-905-3216, email, and near-Pattaya facility matched. |
| Elite Dog Resort | https://elitedogresort.com/contact-us/ | Pratumnak address and services matched; non-emergency landline remains withheld. |
| Vetazoo | https://vetazoo.com/ | Sukhumvit address, 082-662-7999, and email matched. |
| United Pet Express | https://www.unitedpetexpress.com/contact | Bangkok address, weekday hours, and urgent mobile matched. |
| Better Pets Hospital | https://betterpetshospital.com/en/contact-us/ | Current contact and daily hours supported an open business, but no live facts page exists. |
| Pet Passions | https://petpassionsth.com/eng/ | Published scope is Hua Hin/Cha-am/Pranburi; Pattaya/nationwide rendering is stale. |
| Pluto Pet Hotel | https://www.plutopethotel.com/ | Published business address is Bangkok; Pattaya rendering is stale. |
| Zoeta Dogsoul | https://zoeta-dogsoul.com/dog-training-pattaya/ | Former Pattaya route returned 410; current in-person Pattaya service was not established. |

Business conformance that passed (C10): zero duplicate slugs or names within either the live corpus or dossier corpus; zero duplicate normalized live phones, `tel` values, or addresses; zero invalid category/area keys; phone/`tel`, WhatsApp, and LINE formats conform; Thonglor’s verified 24-hour number is the only published landline; Elite’s non-emergency landline is withheld; Mor Ja’s queued mobile has zero generated hits; and the only repeated website is the expected Muang Ake group site.

Named `npm run audit:directory` gaps: missing address—Furpet, Relo4Paws, Pawspective, Doggie Star; missing public contact—Pattaya Animal Hospital, Siam Country Pet Hospital, Mor Ja; empty area—Furpet, Zoeta, Pet Relocation Thailand, Relo4Paws, United Pet Express, Asia Relocation, Pawspective, Pet Passions, Pluto, Doggie Star.

Live Lighthouse, fresh cache, Chrome mobile and desktop emulation (C6):

| Template | Mobile P/A/BP/SEO | Mobile FCP / LCP / TBT / CLS | Desktop P/A/BP/SEO | Desktop LCP |
|---|---|---|---|---|
| Home | 96/100/100/100 | 2.0 s / 2.0 s / 0 ms / .082 | 100/100/100/100 | .5 s |
| Vets hub | 98/100/100/100 | 1.7 s / 2.1 s / 0 ms / 0 | 100/100/96/100 | .6 s |
| Thonglor listing | 97/100/100/100 | 1.9 s / 2.2 s / 30 ms / 0 | 100/100/100/100 | .6 s |
| Hot-climate guide | 99/100/100/100 | 1.1 s / 2.0 s / 40 ms / 0 | 100/100/100/100 | .6 s |
| Import hub | 98/100/100/100 | 1.9 s / 2.2 s / 0 ms / 0 | 100/100/100/100 | .6 s |

All five LCP elements were text. Mobile transfer was 132–136 KiB and desktop 47–134 KiB in these C6 runs; only the desktop home run was 47 KiB. The one desktop best-practices 96 was a transient font 502 in Lighthouse; the same font returned 200 when reopened.

### 3.4 Exact command register

All commands below were run from `C:\Projects\pattayapets`. The C-label in each measurement row points to the exact command that produced it. A command can reproduce a count or transport result; manual source reading and field-by-field factual classification are identified separately and are not misrepresented as machine output.

**C0 — successful local diagnostic reruns after the retained first-run failures in §3.1:**

```powershell
$server=Start-Process python -ArgumentList @('-m','http.server','8787','--directory','dist') -WindowStyle Hidden -PassThru
try { npm run audit:mobile -- http://127.0.0.1:8787; npm run audit:lighthouse } finally { Stop-Process -Id $server.Id }
```

**C1 — generated corpus, metadata, graph, anchors, images, and regulated-route scan:**

```powershell
@'
const fs=require('fs'),path=require('path'),crypto=require('crypto');
function walk(d){return fs.readdirSync(d,{withFileTypes:true}).flatMap(e=>e.isDirectory()?walk(path.join(d,e.name)):[path.join(d,e.name)]);}
const root=path.resolve('dist'),files=walk(root).filter(f=>f.endsWith('.html')).sort(),route=f=>{let r='/'+path.relative(root,f).replace(/\\/g,'/');return r==='/index.html'?'/':r.endsWith('/index.html')?r.slice(0,-10):r},text=s=>String(s||'').replace(/<script\b[\s\S]*?<\/script>|<style\b[\s\S]*?<\/style>|<!--[^]*?-->|<[^>]+>/gi,' ').replace(/&(?:#\d+|#x[0-9a-f]+|[a-z0-9]+);/gi,' ').replace(/\s+/g,' ').trim(),main=h=>(h.match(/<main\b[^>]*>([\s\S]*?)<\/main>/i)||['',''])[1];
const rows=files.map(f=>{const h=fs.readFileSync(f,'utf8');return{f,r:route(f),h,m:main(h),title:(h.match(/<title>([\s\S]*?)<\/title>/i)||['',''])[1],desc:(h.match(/<meta content="([^"]*)" name="description">/i)||['',''])[1],canon:(h.match(/<link href="([^"]*)" rel="canonical">/i)||['',''])[1],h1:[...h.matchAll(/<h1\b[^>]*>([\s\S]*?)<\/h1>/gi)].map(x=>text(x[1]))}}),routes=new Set(rows.map(x=>x.r));
function target(u,from){if(!u)return null;if(u[0]==='#')return from;if(u[0]!=='/')return null;let p=u.split(/[?#]/)[0];return routes.has(p)?p:routes.has(p+'/')?p+'/':p.endsWith('/')&&routes.has(p.slice(0,-1))?p.slice(0,-1):null}
function links(h,from){return[...h.matchAll(/<a\b[^>]*href="([^"]+)"[^>]*>/gi)].map(x=>target(x[1],from)).filter(Boolean)}
function depth(useMain){const g=new Map(rows.map(x=>[x.r,links(useMain?x.m:x.h,x.r)])),d=new Map([['/',0]]),q=['/'];while(q.length){const u=q.shift();for(const v of g.get(u)||[])if(!d.has(v)){d.set(v,d.get(u)+1);q.push(v)}}return{counts:Object.fromEntries([...d.values()].reduce((m,n)=>m.set(n,(m.get(n)||0)+1),new Map)),unreachable:[...routes].filter(x=>!d.has(x))}}
const sitemap=[...fs.readFileSync('dist/sitemap.xml','utf8').matchAll(/<loc>([^<]+)<\/loc>/g)].map(x=>x[1]),sizes=files.map(f=>[path.relative(root,f),fs.statSync(f).size]).sort((a,b)=>b[1]-a[1]),dup=key=>[...rows.reduce((m,x)=>{const v=x[key];if(v)(m.get(v)||m.set(v,[]).get(v)).push(x.r);return m},new Map).values()].filter(x=>x.length>1),hashes=new Map;
for(const x of rows){const h=crypto.createHash('sha256').update(text(x.m).toLowerCase()).digest('hex');(hashes.get(h)||hashes.set(h,[]).get(h)).push(x.r)}
let anchors=0,badAnchors=0,images=0,alt=0,skips=0;const srcs=new Set;
for(const x of rows){for(const a of x.h.matchAll(/<a\b[^>]*>([\s\S]*?)<\/a>/gi)){anchors++;const t=text(a[1]).toLowerCase();if(/^(click here|read more|learn more)$/.test(t)||/^https?:\/\/\S+$/.test(t))badAnchors++}for(const im of x.h.matchAll(/<img\b[^>]*>/gi)){images++;const a=im[0].match(/\balt="([^"]*)"/i),s=im[0].match(/\bsrc="([^"]*)"/i);if(a&&a[1].trim())alt++;if(s)srcs.add(s[1])}let prev=0;for(const h of x.h.matchAll(/<h([1-6])\b/gi)){const n=+h[1];if(prev&&n>prev+1)skips++;prev=n}}
const regulated=rows.filter(x=>x.r.startsWith('/bring-pet-to-thailand/')||x.r.startsWith('/take-pet-out-of-thailand/'));
console.log(JSON.stringify({html:rows.length,sitemap:sitemap.length,noindex:rows.filter(x=>/content="[^"]*noindex/i.test(x.h)).map(x=>x.r),sitemapHtml:sitemap.filter(x=>new URL(x).pathname.endsWith('.html')).length,canonicalHtml:rows.filter(x=>new URL(x.canon).pathname.endsWith('.html')).length,bytes:sizes.reduce((n,x)=>n+x[1],0),average:Math.round(sizes.reduce((n,x)=>n+x[1],0)/rows.length),largest:sizes[0],missing:{title:rows.filter(x=>!x.title).length,description:rows.filter(x=>!x.desc).length,canonical:rows.filter(x=>!x.canon).length,h1:rows.filter(x=>x.h1.length!==1).length},duplicates:{title:dup('title'),description:dup('desc'),canonical:dup('canon'),main:[...hashes.values()].filter(x=>x.length>1)},brokenTitles:rows.filter(x=>(x.title.match(/\(/g)||[]).length!==(x.title.match(/\)/g)||[]).length).map(x=>[x.r,x.title]),anchors,badAnchors,mainLinks:rows.reduce((n,x)=>n+links(x.m,x.r).length,0),depth:{full:depth(false),main:depth(true)},headingSkips:skips,images,nonemptyAlt:alt,srcs:[...srcs],regulated:{total:regulated.length,import:regulated.filter(x=>x.r.startsWith('/bring-')).length,export:regulated.filter(x=>x.r.startsWith('/take-')).length,unsourced:regulated.filter(x=>!/<a\b[^>]*href="https?:\/\//i.test(x.m)).map(x=>x.r)}},null,2));
'@ | node -
```

**C6 — ten live Lighthouse 12.8.2 runs and metric extraction:**

```powershell
$lhDir=Join-Path $env:TEMP 'pattayapets-audit-lh-20260801-132748'; New-Item -ItemType Directory -Force -Path $lhDir | Out-Null
$targets=[ordered]@{home='/';hub='/vets/';listing='/vets/thonglor-pet-hospital-pattaya.html';guide='/owning-a-pet-in-pattaya/hot-climate-pet-care.html';regulated='/bring-pet-to-thailand/'}
foreach($name in $targets.Keys){
  $u='https://pattayapets.com'+$targets[$name]+'?audit_lh=20260801'
  $mobile=Join-Path $lhDir ($name+'-mobile.json');$desktop=Join-Path $lhDir ($name+'-desktop.json')
  npx --yes lighthouse@12.8.2 $u --only-categories=performance,accessibility,best-practices,seo --form-factor=mobile --output=json --output-path $mobile --chrome-flags='--headless --incognito' --quiet
  npx --yes lighthouse@12.8.2 $u --only-categories=performance,accessibility,best-practices,seo --preset=desktop --output=json --output-path $desktop --chrome-flags='--headless --incognito' --quiet
}
Get-ChildItem $lhDir -Filter *.json | Sort-Object Name | ForEach-Object {
  $j=Get-Content $_.FullName -Raw|ConvertFrom-Json;$req=@($j.audits.'network-requests'.details.items)
  [pscustomobject]@{File=$_.BaseName;Version=$j.lighthouseVersion;P=[math]::Round(100*$j.categories.performance.score);A=[math]::Round(100*$j.categories.accessibility.score);BP=[math]::Round(100*$j.categories.'best-practices'.score);SEO=[math]::Round(100*$j.categories.seo.score);FCP=$j.audits.'first-contentful-paint'.displayValue;LCP=$j.audits.'largest-contentful-paint'.displayValue;TBT=$j.audits.'total-blocking-time'.displayValue;CLS=$j.audits.'cumulative-layout-shift'.displayValue;TransferKiB=[math]::Round($j.audits.'total-byte-weight'.numericValue/1024);LcpElement=$j.audits.'largest-contentful-paint-element'.details.items[0].items[0].node.nodeLabel;BadStatus=@($req|Where-Object statusCode -GE 400|ForEach-Object{"$($_.statusCode) $($_.url)"}) -join '; '}
} | Format-Table -Wrap
```

**C7 — dependency, live asset/header, source embed, and edge-beacon checks:**

```powershell
npm audit --json
@'
const fs=require('fs');const h=fs.readFileSync('dist/index.html','utf8'),paths=[(h.match(/href="(\/assets\/css\/site\.[^"]+\.css)"/)||[])[1],(h.match(/src="(\/assets\/js\/site\.[^"]+\.js)"/)||[])[1],'/assets/css/site.css','/assets/js/site.js'];
void(async()=>{for(const p of paths){const r=await fetch('https://pattayapets.com'+p,{redirect:'manual'});console.log(r.status,p)}})();
'@ | node -
curl.exe -sS -D - -o NUL https://pattayapets.com/sw.js
curl.exe -sS -D - -o NUL https://pattayapets.com/
( rg -o -i '<(iframe|embed|object)\b' src dist 2>$null | Measure-Object ).Count
$j=Get-Content -LiteralPath (Join-Path $env:TEMP 'pattayapets-audit-lh-20260801-132748\home-mobile.json') -Raw | ConvertFrom-Json
@($j.audits.'network-requests'.details.items | Where-Object url -Like 'https://static.cloudflareinsights.com/beacon.min.js*').Count
```

**C4a — every live `.html` sitemap/canonical signal, redirects not followed:**

```powershell
@'
const fs=require('fs'),path=require('path');function walk(d){return fs.readdirSync(d,{withFileTypes:true}).flatMap(e=>e.isDirectory()?walk(path.join(d,e.name)):[path.join(d,e.name)]);}
const site=[...fs.readFileSync('dist/sitemap.xml','utf8').matchAll(/<loc>([^<]+)<\/loc>/g)].map(x=>x[1]).filter(u=>new URL(u).pathname.endsWith('.html')),canon=walk('dist').filter(f=>f.endsWith('.html')).map(f=>(fs.readFileSync(f,'utf8').match(/<link href="([^"]+)" rel="canonical">/i)||[])[1]).filter(Boolean).filter(u=>new URL(u).pathname.endsWith('.html'));
async function scan(name,urls){const out=[];for(let i=0;i<urls.length;i+=16)out.push(...await Promise.all(urls.slice(i,i+16).map(async u=>{const r=await fetch(u,{redirect:'manual'}),location=r.headers.get('location'),target=location&&new URL(location,u);return{u,status:r.status,location,clean:target&&!target.pathname.endsWith('.html')}})));console.log(name,{urls:urls.length,status308:out.filter(x=>x.status===308).length,cleanLocations:out.filter(x=>x.clean).length,uniqueTargets:new Set(out.map(x=>x.location)).size,failures:out.filter(x=>x.status!==308||!x.clean)})}
void(async()=>{await scan('sitemap',site);await scan('canonicals',canon)})().catch(e=>{console.error(e);process.exitCode=1});
'@ | node -
```

**C4b — exact 30-URL live ledger, redirects not followed:**

```powershell
@'
const base='https://pattayapets.com',rows=[['/',200],['/vets/',200],['/directory',200],['/guides',200],['/bring-pet-to-thailand/',200],['/take-pet-out-of-thailand/',200],['/vets/thonglor-pet-hospital-pattaya',200],['/owning-a-pet-in-pattaya/hot-climate-pet-care',200],['/search',200],['/take-pet-out-of-thailand/to-new-zealand',200],['/offline',200],['/directory.html',308],['/guides.html',308],['/vets/thonglor-pet-hospital-pattaya.html',308],['/owning-a-pet-in-pattaya/hot-climate-pet-care.html',308],['/search.html',308],['/take-pet-out-of-thailand/to-new-zealand.html',308],['/vets/th-animal-hospital-pattaya.html',301],['/trainers/canine-point-academy.html',301],['/pet-shops/pet-lovers-centre-pattaya.html',301],['/trainers/personal-dog-trainer-max.html',301],['/robots.txt',200],['/sitemap.xml',200],['/manifest.webmanifest',200],['/sw.js',200],['/a8f3c91e2b7046d59e1a0c4f8b2d7e63.txt',200],['/assets/css/site.a0a8ffb6fb.css',200],['/assets/js/site.df474c428f.js',200],['/assets/img/timpaemi.jpg',200],['/__audit_nonexistent_20260801__',404]];
void(async()=>{const out=[];for(const [path,want] of rows){const r=await fetch(base+path,{redirect:'manual'});out.push({path,want,got:r.status,location:r.headers.get('location')})}console.table(out);console.log({checked:out.length,matched:out.filter(x=>x.got===x.want).length});if(out.some(x=>x.got!==x.want))process.exitCode=1})().catch(e=>{console.error(e);process.exitCode=1});
'@ | node -
```

**C5 — decoded `<main>` Unicode word counts:**

```powershell
$OutputEncoding=[Text.UTF8Encoding]::new($false)
@'
const fs=require('fs'),path=require('path');
function walk(d){return fs.readdirSync(d,{withFileTypes:true}).flatMap(e=>e.isDirectory()?walk(path.join(d,e.name)):[path.join(d,e.name)]);}
const dec=s=>s.replace(/&nbsp;|&#160;/gi,' ').replace(/&amp;/gi,'&').replace(/&lt;/gi,'<').replace(/&gt;/gi,'>').replace(/&quot;/gi,'"').replace(/&#39;|&apos;/gi,"'").replace(/&mdash;/gi,'—').replace(/&ndash;/gi,'–').replace(/&hellip;/gi,'…').replace(/&rarr;/gi,'→').replace(/&#x([0-9a-f]+);/gi,(_,n)=>String.fromCodePoint(parseInt(n,16))).replace(/&#(\d+);/g,(_,n)=>String.fromCodePoint(+n)).replace(/&[a-z0-9]+;/gi,' ');
const text=s=>dec(s.replace(/<script\b[\s\S]*?<\/script>/gi,' ').replace(/<style\b[\s\S]*?<\/style>/gi,' ').replace(/<!--[^]*?-->/g,' ').replace(/<[^>]+>/g,' ')).replace(/\s+/g,' ').trim();
const root=path.resolve('dist'),rows=walk(root).filter(f=>f.endsWith('.html')).map(f=>{const h=fs.readFileSync(f,'utf8'),m=(h.match(/<main\b[^>]*>([\s\S]*?)<\/main>/i)||['',''])[1],words=(text(m).match(/[\p{L}\p{N}]+(?:['’\-][\p{L}\p{N}]+)*/gu)||[]).length;return{path:'/'+path.relative(root,f).replace(/\\/g,'/'),words}});
console.log({under300:rows.filter(x=>x.words<300).sort((a,b)=>a.path.localeCompare(b.path)),distribution:Object.fromEntries([500,750,1000,1500,2000].map(n=>['under'+n,rows.filter(x=>x.words<n).length])),under50:rows.filter(x=>x.words<50)});
'@ | node -
```

**C2 — JSON-LD, credit, inline-code, embed, asset, and repeated-style scan:**

```powershell
@'
const fs=require('fs'),path=require('path');
function walk(d){return fs.readdirSync(d,{withFileTypes:true}).flatMap(e=>e.isDirectory()?walk(path.join(d,e.name)):[path.join(d,e.name)]);}
const files=walk('dist').filter(f=>f.endsWith('.html'));let blocks=0,valid=0,bytes=0,faqPages=0,questions=0,faqBytes=0,bizFaqPages=0,bizFaqBytes=0,review=0,agg=0,org=0,person=0,personId=0,own=0,handlers=0,styleAttrs=0,styleBlocks=0,embeds=0,timExact=0;const types={},styleLengths={};
function visit(o){if(!o||typeof o!=='object')return;if(Array.isArray(o))return o.forEach(visit);for(const t of [].concat(o['@type']||[])){types[t]=(types[t]||0)+1;if(t==='Question')questions++;if(t==='Review')review++;if(t==='AggregateRating')agg++;if(t==='Organization')org++;if(t==='Person'){person++;if(o['@id'])personId++}}if(Object.hasOwn(o,'ownershipFundingInfo'))own++;Object.values(o).forEach(visit)}
for(const f of files){const h=fs.readFileSync(f,'utf8');let hasFaq=false,biz=false;for(const sm of h.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi)){blocks++;bytes+=Buffer.byteLength(sm[1]);const j=JSON.parse(sm[1]);valid++;visit(j);const faqs=[];!function find(o){if(!o||typeof o!=='object')return;if(Array.isArray(o))return o.forEach(find);if(o['@type']==='FAQPage')faqs.push(o);if(['LocalBusiness','VeterinaryCare','PetStore'].includes(o['@type']))biz=true;Object.values(o).forEach(find)}(j);if(faqs.length){hasFaq=true;for(const q of faqs)faqBytes+=Buffer.byteLength(JSON.stringify(q));if(biz){bizFaqPages++;for(const q of faqs)bizFaqBytes+=Buffer.byteLength(JSON.stringify(q))}}}if(hasFaq)faqPages++;handlers+=(h.match(/\son[a-z]+=/gi)||[]).length;styleAttrs+=(h.match(/\sstyle=/gi)||[]).length;styleBlocks+=(h.match(/<style\b/gi)||[]).length;embeds+=(h.match(/<(?:iframe|embed|object)\b/gi)||[]).length;if((h.match(/<a\b[^>]*href="https:\/\/timpaemi\.com\/"[^>]*rel="author noopener"[^>]*>/gi)||[]).length===1)timExact++;for(const m of h.matchAll(/<style\b[^>]*>([\s\S]*?)<\/style>/gi)){const n=Buffer.byteLength(m[1]);styleLengths[n]=(styleLengths[n]||0)+1}}
const assets=walk('dist/assets'),assetRows=assets.map(f=>[path.relative('dist',f).replace(/\\/g,'/'),fs.statSync(f).size]).sort((a,b)=>b[1]-a[1]);
console.log(JSON.stringify({blocks,valid,bytes,faqPages,questions,faqBytes,bizFaqPages,bizFaqBytes,review,agg,business:{LocalBusiness:types.LocalBusiness,VeterinaryCare:types.VeterinaryCare,PetStore:types.PetStore},org,person,personId,own,timExact,handlers,styleAttrs,styleBlocks,embeds,styleLengths,assets:{files:assets.length,bytes:assetRows.reduce((n,x)=>n+x[1],0),largest:assetRows.slice(0,25)}},null,2));
'@ | node -
```

**C3 — source objects, dossier join, visible dates, network inventory, and pre-report credential scan:**

```powershell
@'
const fs=require('fs'),path=require('path'),root=process.cwd();
function walk(d,skip=new Set){return fs.readdirSync(d,{withFileTypes:true}).flatMap(e=>skip.has(e.name)?[]:e.isDirectory()?walk(path.join(d,e.name),skip):[path.join(d,e.name)]);}
let pages=[];for(const f of fs.readdirSync('src/pages').filter(x=>x.endsWith('.js')).sort()){const m=require('./src/pages/'+f);pages.push(...(Array.isArray(m)?m:(m.pages||[])))}
const labelled=pages.flatMap(p=>{const m=(p.body||'').match(/Last updated\s+([^<]+)/i);return m?[{path:p.path,updated:p.updated,label:m[1].trim()}]:[]}),iso=s=>{const d=new Date(s+' UTC');return Number.isNaN(+d)?null:d.toISOString().slice(0,10)},mismatch=labelled.filter(x=>iso(x.label)!==x.updated);
const data=require('./src/data/businesses.js'),dossiers=fs.readdirSync('research/businesses').filter(x=>x.endsWith('.json')).map(f=>JSON.parse(fs.readFileSync(path.join('research/businesses',f),'utf8').replace(/^\uFEFF/,''))),live=new Set(data.BUSINESSES.map(x=>x.slug)),by=new Map(dossiers.map(x=>[x.slug,x]));
const all=walk(root,new Set(['.git','node_modules'])).filter(f=>path.relative(root,f).replace(/\\/g,'/')!=='docs/FULL-AUDIT-2026-08.md'),network=/(?:pattaya[- ]authority|sister sites?|sister publications?|TimPaemi network|pattaya[- ]restaurant[- ]guide|pattaya(?:[- ]?visa[- ]?help)|pattaya[- ]gym|pattaya[- ]after(?:[- ]?dark)|pattaya[- ]school[- ]guide|pattaya[- ]coffee|pattaya(?:stream|[- ]?villa[- ]?stream)|pattaya[- ]medical|pattaya[- ]vehicle[- ]rentals)/i,nf=all.filter(f=>network.test(fs.readFileSync(f,'utf8'))),gen=nf.filter(f=>path.relative(root,f).replace(/\\/g,'/').startsWith('dist/')),html=gen.filter(f=>f.endsWith('.html')),sis=html.filter(f=>/sister sites/i.test(fs.readFileSync(f,'utf8')));
const pats={privateKey:/-----BEGIN (?:RSA |EC |OPENSSH |DSA |PGP )?PRIVATE KEY-----/g,aws:/(?:AKIA|ASIA)[A-Z0-9]{16}/g,github:/(?:gh[pousr]_[A-Za-z0-9]{36,255}|github_pat_[A-Za-z0-9_]{50,255})/g,slack:/xox[baprs]-[A-Za-z0-9-]{20,}/g,openai:/(?<![A-Za-z0-9])sk-(?:proj-)?[A-Za-z0-9_-]{20,}/g,google:/AIza[0-9A-Za-z_-]{35}/g,jwt:/eyJ[A-Za-z0-9_-]{8,}\.[A-Za-z0-9_-]{8,}\.[A-Za-z0-9_-]{8,}/g,assignment:/(?:api[_-]?key|access[_-]?token|client[_-]?secret|password|secret|token)\s*[:=]\s*["'][A-Za-z0-9_+\/.=-]{16,}["']/gi},hits=[];
for(const f of all){const s=fs.readFileSync(f,'utf8');for(const [kind,re] of Object.entries(pats)){re.lastIndex=0;if(re.test(s))hits.push([path.relative(root,f),kind])}}
console.log(JSON.stringify({pages:{objects:pages.length,labelled:labelled.length,dateMismatches:mismatch.length},business:{live:data.BUSINESSES.length,dossiers:dossiers.length,categories:Object.keys(data.CATEGORIES).length,areas:Object.keys(data.AREAS).length,liveNotOpen:data.BUSINESSES.filter(x=>by.get(x.slug)?.status!=='open').map(x=>[x.slug,by.get(x.slug)?.status]),openNotLive:dossiers.filter(x=>x.status==='open'&&!live.has(x.slug)).map(x=>x.slug)},network:{files:nf.length,generatedFiles:gen.length,generatedHtml:html.length,sisterHtml:sis.length,nonHtmlGenerated:gen.filter(f=>!f.endsWith('.html')).map(f=>path.relative(root,f))},credentials:{files:all.length,bytes:all.reduce((n,f)=>n+fs.statSync(f).size,0),hits}},null,2));
'@ | node -
```

**C8 — exact 11-business current-source reachability ledger:**

```powershell
@'
const urls=['https://thonglorpet.com/branch/pethospital-thonglorpet-pattaya','https://en.muangakepethospital.com/17045029/our-branch','https://animalarmy.org/pages/contact','https://k9-coach.co.th/','https://elitedogresort.com/contact-us/','https://vetazoo.com/','https://www.unitedpetexpress.com/contact','https://betterpetshospital.com/en/contact-us/','https://petpassionsth.com/eng/','https://www.plutopethotel.com/','https://zoeta-dogsoul.com/dog-training-pattaya/'];
void(async()=>{const out=[];for(const url of urls){try{const r=await fetch(url,{redirect:'follow',headers:{'user-agent':'Mozilla/5.0 PattayaPets audit 2026-08-01'}});out.push({url,status:r.status,final:r.url})}catch(e){out.push({url,error:e.message})}}console.table(out);console.log({count:out.length,statuses:Object.fromEntries([...new Set(out.map(x=>x.status||'ERR'))].map(s=>[s,out.filter(x=>(x.status||'ERR')===s).length]))})})();
'@ | node -
```

This returned 11 rows: ten HTTP 200 and Zoeta HTTP 410. The 7 matched / 3 stale-scope / 1 omitted classification came from manual field-by-field comparison of those surfaces with the public records/dossiers in the ledger above; HTTP status did not produce that semantic judgment.

**C9 — exact preserved manual editorial-sample URL ledger and local-existence/cardinality check:**

```powershell
$editorialSample=@('/','/guides.html','/directory.html','/about.html','/standards.html','/corrections.html','/vets/','/vets/thonglor-pet-hospital-pattaya.html','/pet-insurance-thailand.html','/dog-friendly-pattaya/beaches.html','/adopt-a-pet-pattaya/','/adopt-a-pet-pattaya/hope-for-strays.html','/owning-a-pet-in-pattaya/','/owning-a-pet-in-pattaya/hot-climate-pet-care.html','/owning-a-pet-in-pattaya/dog-registration-thailand.html','/pet-emergency/','/pet-emergency/pet-first-aid.html','/pet-emergency/heatstroke.html','/pet-emergency/poisoning.html','/pet-emergency/choking.html','/pet-health-pattaya/heartworm.html','/pet-health-pattaya/tick-borne-disease.html','/pet-health-pattaya/parvovirus.html','/pet-health-pattaya/spaying-and-neutering.html','/cats/cat-vaccinations-thailand.html','/dogs/dog-vaccinations-thailand.html')
$root=(Resolve-Path dist).Path
$missing=foreach($p in $editorialSample){$r=if($p -eq '/'){'index.html'}elseif($p.EndsWith('/')){$p.TrimStart('/')+'index.html'}else{$p.TrimStart('/')};if(-not(Test-Path -LiteralPath (Join-Path $root $r))){$p}}
[pscustomobject]@{Count=$editorialSample.Count;Unique=($editorialSample|Sort-Object -Unique).Count;Missing=@($missing).Count}
```

This returned 26 / 26 / 0. The command verifies the preserved ledger and local files; “source-read” records the manual audit action, not a machine assertion.

**C10 — detailed dossier/contact counts and business conformance predicates:**

```powershell
@'
const fs=require('fs'),path=require('path'),{CATEGORIES,AREAS,BUSINESSES}=require('./src/data/businesses.js');
const files=fs.readdirSync('research/businesses').filter(f=>f.endsWith('.json')).sort(),raw=files.map(f=>[f,fs.readFileSync(path.join('research/businesses',f))]),d=raw.map(([f,b])=>[f,JSON.parse(b.toString('utf8').replace(/^\uFEFF/,''))]),by=new Map(d.map(([,x])=>[x.slug,x])),s=fs.readFileSync('dist/search-index.json','utf8'),phones=[...s.matchAll(/\b0\d{1,2}[ -]?\d{3}[ -]?\d{4}\b/g)].map(x=>x[0]),norm=x=>String(x||'').toLowerCase().replace(/\D/g,''),dups=a=>[...a.reduce((m,x)=>(m.set(x,(m.get(x)||0)+1),m),new Map)].filter(([,n])=>n>1);
console.log(JSON.stringify({factsUpdated:(fs.readFileSync('src/pages/30-directory.js','utf8').match(/FACTS_UPDATED\s*=\s*"([^"]+)"/)||[])[1],live:BUSINESSES.length,dossiers:d.length,matching:BUSINESSES.filter(x=>by.has(x.slug)).length,matchingCheckedAt:BUSINESSES.filter(x=>by.get(x.slug)?.checkedAt==='2026-08-01').length,dossierFields:{status:d.filter(([,x])=>Object.hasOwn(x,'status')).length,confidence:d.filter(([,x])=>Object.hasOwn(x,'confidence')).length,sources:d.filter(([,x])=>Array.isArray(x.sources)).length,unverified:d.filter(([,x])=>Object.hasOwn(x,'unverified')).length,checkedAt:d.filter(([,x])=>Object.hasOwn(x,'checkedAt')).length,missingCheckedAt:d.filter(([,x])=>!Object.hasOwn(x,'checkedAt')).map(([f])=>f)},contacts:{phoneOccurrences:phones.length,uniquePhones:new Set(phones.map(norm)).size,uniqueMobilePhones:new Set(phones.filter(x=>!/^02\b/.test(x)).map(norm)).size,uniqueEmails:new Set(BUSINESSES.map(x=>x.email).filter(Boolean).map(x=>x.toLowerCase())).size,lineIds:new Set(BUSINESSES.map(x=>x.line).filter(Boolean).map(x=>x.toLowerCase())).size},schema:{keySignatures:new Set(d.map(([,x])=>Object.keys(x).sort().join('|'))).size,bomDossiers:raw.filter(([,b])=>b[0]===0xef&&b[1]===0xbb&&b[2]===0xbf).map(([f])=>f)},duplicatesWithin:{liveSlugs:dups(BUSINESSES.map(x=>x.slug)),liveNames:dups(BUSINESSES.map(x=>x.name.toLowerCase())),dossierSlugs:dups(d.map(([,x])=>x.slug)),dossierNames:dups(d.map(([,x])=>x.name.toLowerCase()))},categories:Object.keys(CATEGORIES).length,areas:Object.keys(AREAS).length},null,2));
'@ | node -
@'
const fs=require('fs'),path=require('path'),d=require('./src/data/businesses.js'),B=d.BUSINESSES,D=fs.readdirSync('research/businesses').filter(f=>f.endsWith('.json')).map(f=>JSON.parse(fs.readFileSync(path.join('research/businesses',f),'utf8').replace(/^\uFEFF/,''))),norm=s=>String(s||'').toLowerCase().replace(/[^a-z0-9]+/g,''),dup=(a,k,n=x=>String(x||'').trim().toLowerCase())=>[...a.reduce((m,x)=>{const v=n(x[k]);if(v)(m.get(v)||m.set(v,[]).get(v)).push(x.slug);return m},new Map).entries()].filter(x=>x[1].length>1),phoneMismatch=B.filter(b=>b.phone&&b.tel&&('+66'+b.phone.replace(/\D/g,'').slice(1))!==b.tel),badWhats=B.filter(b=>b.whatsapp&&!/^\d{10,15}$/.test(b.whatsapp)),badLine=B.filter(b=>b.line&&!/^[A-Za-z0-9._-]{4,20}$/.test(b.line)),invalidCategories=B.filter(b=>!d.CATEGORIES[b.category]).map(b=>b.slug),invalidAreas=B.flatMap(b=>(b.areas||[]).filter(a=>!d.AREAS[a]).map(a=>[b.slug,a])),sites=dup(B,'website',s=>{try{const u=new URL(s);return u.hostname.replace(/^www\./,'')+u.pathname.replace(/\/$/,'')}catch{return s}}),generatedText=fs.readdirSync('dist',{recursive:true,withFileTypes:true}).filter(e=>e.isFile()&&(/\.(?:html|json|xml|txt|js|css|webmanifest)$/i.test(e.name)||/^_(?:headers|redirects)$/.test(e.name))).map(e=>fs.readFileSync(path.join(e.parentPath,e.name),'utf8')).join('\n');
console.log({duplicates:{liveSlug:dup(B,'slug'),liveName:dup(B,'name',norm),dossierSlug:dup(D,'slug'),dossierName:dup(D,'name',norm),phones:dup(B,'phone',norm),tel:dup(B,'tel',norm),address:dup(B,'address',norm)},invalid:{categories:invalidCategories,areas:invalidAreas,phoneTelMismatch:phoneMismatch.map(x=>x.slug),whatsapp:badWhats.map(x=>x.slug),line:badLine.map(x=>x.slug)},landlines:B.filter(b=>/^0[2-5]\b/.test(b.phone||'')).map(b=>[b.slug,b.phone]),elitePublished:[B.find(b=>b.slug==='elite-dog-resort')?.phone,B.find(b=>b.slug==='elite-dog-resort')?.tel],morJaGenerated:(generatedText.replace(/\D/g,'').match(/0832329898|66832329898/g)||[]).length,repeatedWebsites:sites});
'@ | node -
```

**C11 — indexing-mutation/name-equivalent gate inventory:**

```powershell
$hits=Get-ChildItem -LiteralPath scripts,tools -Recurse -File | Where-Object Name -Match '(?i)(index|gate)'
$hits | ForEach-Object { $_.FullName.Substring((Get-Location).Path.Length+1) }
"count=$($hits.Count)"
```

This returned one filename match, `scripts\ping-indexnow.js`; no `index-gate.mjs` or name-equivalent filename was found in scripts/tools. The script was inspected and was not run.

Maintainability conclusion: the source pattern for another page of an existing kind is straightforward, but the requested “under one hour” onboarding claim was not timed and therefore is not asserted. A genuinely new page type is not safely localised because page-kind, route/category, search, recency, link, queue, and audit logic are separately hardcoded; that registry duplication is a finding below.

## 4. Findings

Severity totals: S1 14 · S2 28 · S3 9 · S4 1 · total 52.

### S1 — act now

### [S1] Remove the unsupported Thailand microchip sequence rule
DIMENSION   F
WHERE       src/pages/40-bring-pet.js:153-181,189-208,734-739; src/pages/58-import-seo-countries.js:45-50; https://pattayapets.com/bring-pet-to-thailand/microchip-requirements
EVIDENCE    The page says “Thailand requires an ISO 11784/11785 15-digit microchip”, that the chip “must” precede rabies, and that an earlier rabies dose “does not count, and would have to be repeated.” The current Royal Thai Consulate guide (updated 2026-02-02) requires a microchip implantation certificate and matching chip numbers in records but does not impose ISO 11784/11785, chip-before-rabies, or automatic revaccination: https://thaiconsulatela.thaiembassy.org/en/publicservice/bringing-pets-to-thailand. The linked DLD/MFA requirements likewise require identification/matching numbers, not that universal sequence: https://image.mfa.go.th/mfa/0/SRBviAC5gs/Requirements_for_importation_of_Animals.pdf. Both reopened 2026-08-01.
IMPACT      An owner may repeat a vaccine unnecessarily, spending money and delaying travel while exposing the animal to an avoidable medical intervention.
FIX         Delete the Thailand-specific ISO/sequence/redo sentences and every propagated FAQ/meta version. State only the verified Thai identifier/certificate requirement. Put ISO/chip-first advice in a separately labelled return-destination or airline note with a source for that jurisdiction.
EFFORT      3–5 hours
RISK        Removing the sequence globally could erase a rule that is valid for an onward destination; keep destination-specific wording and citations.
OWNER       TIM

### [S1] Rebuild the Thailand vaccine and permit timeline
DIMENSION   F
WHERE       src/pages/40-bring-pet.js:236-257,392-402; src/pages/53-import-topics.js:229-329; src/pages/47-import-extra.js:1-322; src/pages/50-import-countries.js:1-1320; src/pages/57-seo-keywords.js:1-404; src/pages/58-import-seo-countries.js:1-248
EVIDENCE    The site repeatedly says primary vaccines are due “at least 21 days before arrival” or presents a “21-day wait after primary rabies.” The current Thai guide says all primary vaccines must be followed by 21 days before starting the import-permit application; boosters are exempt with prior records, and permit processing then needs 5–7 Thai business days: https://thaiconsulatela.thaiembassy.org/en/publicservice/bringing-pets-to-thailand, lines 184–190, reopened 2026-08-01. A generated scan found 21-day wording on 25 regulated pages and unsupported three-day-arrival-confirmation wording on 57.
IMPACT      An owner can apply too early or schedule travel for day 21 without processing time, risking permit rejection or denied boarding.
FIX         Put one canonical timeline in regulated data: complete every primary vaccine → wait 21 days → apply R1/1 → allow 5–7 Thai business days. State the documented booster exception. Remove the universal “confirm arrival three days ahead” instruction unless the named arrival AQS confirms it in a current primary source.
EFFORT      1 day
RISK        Origin-country health-certificate windows differ; do not replace them with one Thai-side date.
OWNER       TIM

### [S1] Restore the mandatory DLD export examination
DIMENSION   F
WHERE       src/pages/41-export.js:223-232,271-287,316-326,337-343,369-370; src/pages/52-export-countries.js:89-165
EVIDENCE    The site says the import “three-day confirmation rule” also applies on export, schedules inspection 7–10 days out, and says an officer “may examine” the animal. DLD Region 9’s current process, published 2025-10-17, is application R1/1 → health examination no more than 2–3 days before travel → station issues R9 and Health Certificate: https://region9.dld.go.th/index.php/th/news-head/phey-phaer-khwam-ru-dan-psusatw/khan-txn-kar-sng-satw-leiyng-sunakh-maew-nk-l-xxk-nxk-rach-xanacakr, reopened 2026-08-01. The page gives no universal email-confirmation or 15-day rule; 26 generated export pages state “at least 15 days” without a current claim-level DLD source.
IMPACT      A DIY exporter may email instead of presenting the animal and arrive without the required R9/health certificate.
FIX         Replace every Thai export timeline with the current mandatory examination at the responsible AQS no more than 2–3 days before travel. Describe application/e-Movement separately. Publish any lead time or email rule only for a named station with a current source.
EFFORT      1 day
RISK        Station practice can vary; a Bangkok-specific instruction must not be inferred from Region 9 without direct confirmation.
OWNER       TIM

### [S1] Put approved-country residence before Australia preparation
DIMENSION   F
WHERE       src/pages/41-export.js:810-847; src/pages/40-bring-pet.js:258-270; src/pages/53-import-topics.js:271-272
EVIDENCE    The site orders “rabies titer” and “veterinary prep” before qualifying-country residence. Australia’s DAFF says a pet leaving a non-approved country must first reside continuously in an approved Group 1/2/3 country for at least 180 days; it does not accept a rabies vaccination from the non-approved country and qualifying tests/vaccinations occur in the approved country: https://www.agriculture.gov.au/biosecurity-trade/cats-dogs/frequently-asked-questions, reopened 2026-08-01.
IMPACT      Owners can pay for invalid Thailand preparation, then repeat vaccination/testing and lose months.
FIX         Make relocation to an approved country the first qualifying step; then approved-country vaccination/testing, 180-day continuous residence, permit, and quarantine. Remove generic “do the Australia titer in Thailand anyway” advice; document returning-Australian exceptions separately.
EFFORT      3–5 hours
RISK        Returning Australian animals can have different evidence pathways; do not collapse them into the standard non-approved-country route.
OWNER       TIM

### [S1] Resolve South Korea’s quantity conflict and titre validity window
DIMENSION   F
WHERE       src/pages/59-export-seo-countries.js:185-240; src/pages/58-import-seo-countries.js:227-232
EVIDENCE    The page says advance permission applies to “more than 10” animals and gives only ≥0.5 IU/ml. Korea’s current government AIP also says “more than 10”: https://aim.koca.go.kr/eaipPub/Package/2024-10-17/html/eAIP/KR-GEN-1.4-en-GB.html, §2.1.5(1)(2). A Korean MOFA embassy page dated 2023-12-11 instead says “ten or more” and says the test must be done within 24 months before boarding: https://overseas.mofa.go.kr/no-en/brd/m_25180/view.do?seq=9. The site omits that validity window and does not disclose the official conflict at exactly ten; its cited QIA FAQ returns a temporary-error page. Sources reopened 2026-08-01.
IMPACT      A mover with exactly ten animals receives no safe answer on prior approval, and a titre outside the stated 24-month window can cause extended quarantine or rework.
FIX         Ask APQA for written current clarification and record which instrument controls the ten-animal boundary; until resolved, tell a party with exactly ten to obtain prior approval rather than silently choosing one source. Add the sourced 24-month maximum, the published exemptions, and a review date; replace the broken FAQ and add semantic/link-health assertions.
EFFORT      2–3 hours
RISK        Commercial consignments or species outside dogs/cats may follow different rules; scope the page precisely.
OWNER       TIM

### [S1] Remove cabin travel from the Malaysia pathway
DIMENSION   F
WHERE       src/pages/59-export-seo-countries.js:151-154
EVIDENCE    The page says “Cabin travel may be possible for small pets.” Malaysia DVS says pets may be imported only as consignment cargo and declared to the Animal Quarantine Officer: https://www.dvs.gov.my/index.php/pages/view/804?mid=53. The 2026-02-05 DVS notice suspends replacement documents, not that FAQ: https://www.dvs.gov.my/index.php/announcements/view/207. Both reopened 2026-08-01.
IMPACT      A traveller can face refused carriage/entry and an emergency cargo rebooking.
FIX         State cargo consignment as the current DVS route. Mention cabin or checked baggage only if DVS and the operating airline give written current confirmation for that exact route.
EFFORT      30–60 minutes
RISK        Airline carriage and government entry mode are separate; the replacement must not imply every cargo booking is accepted.
OWNER       TIM

### [S1] Replace the heatstroke algorithm after veterinary review
DIMENSION   E
WHERE       src/pages/43-emergency.js:375-410,435-449; src/pages/43-emergency.js:272-365; src/pages/51-emergency-extra.js:38-111; src/guidekit.js:17-22
EVIDENCE    The page says “Start cooling while you travel”, use “lukewarm water”, and warns ice-cold immersion slows cooling. Current Royal Veterinary College guidance says cool first, transport second; cold-water immersion for young, healthy, conscious dogs; cooler-than-dog water plus airflow for older/unwell animals, and identifies tepid-only advice as outdated: https://www.rvc.ac.uk/vetcompass/news/the-rvc-urges-owners-of-hot-dogs-to-cool-first-transport-second and https://www.rvc.ac.uk/Media/Default/VetCompass/HOW%20TO%20COOL%20HOT%20DOGS%20%281%29.pdf, reopened 2026-08-01. Other veterinary guidance differs by condition, making one universal rule unsafe.
IMPACT      Delayed or ineffective cooling can worsen heat injury; a generic disclaimer does not neutralize direct treatment instructions.
FIX         Have a named qualified veterinarian review every emergency page. Publish a species/condition algorithm covering dog/cat, conscious/unconscious, young/healthy versus older/comorbid, cite each instruction, record clinical-review date, and foreground immediate emergency contact.
EFFORT      1–2 days plus reviewer time
RISK        Overgeneralizing one evidence source to cats, unconscious animals, or comorbid pets can create new harm.
OWNER       TIM

### [S1] Choose one canonical URL shape and align every signal
DIMENSION   B
WHERE       build.js:314-360; dist/sitemap.xml:1; dist/directory.html:1; https://pattayapets.com/directory.html; https://pattayapets.com/directory
EVIDENCE    Read-only parse: 188 of 205 sitemap locations and 192 of 209 canonicals end in .html. Live checks return 308 Permanent Redirect from those .html URLs to clean paths, then 200; for example /directory.html → /directory. Google calls redirects and rel=canonical strong canonical signals and sitemap inclusion a weak signal, and advises consistent canonicals/internal links: https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls and https://developers.google.com/search/docs/crawling-indexing/301-redirects, reopened 2026-08-01.
IMPACT      Search engines receive contradictory strong signals at nearly the whole site, spend crawl requests on avoidable redirects, and may select URLs differently from the sitemap/reporting baseline.
FIX         TIM must choose. Recommended: adopt the clean URL already served 200 by Cloudflare, first on the eight area pages as a Search Console canary; then change page.path/canonical/OG, every internal link, sitemap, SearchAction, manifest, precache, and redirects together, wait the RULES.md two-week structural window, and migrate the remainder only if indexing is stable.
EFFORT      2–4 days plus observation window
RISK        A mass URL migration can temporarily split reporting or clicks; partial migration makes the conflict worse.
OWNER       TIM

### [S1] Replace source-block decoration with a regulated claim ledger
DIMENSION   F
WHERE       src/pages/40-bring-pet.js:20-27; src/pages/50-import-countries.js:19-26,1018-1052; src/pages/52-export-countries.js:20-50; src/pages/53-import-topics.js:229-329; src/pages/56-export-topics.js:27-118; src/pages/57-seo-keywords.js:60-190; src/pages/59-export-seo-countries.js:185-190
EVIDENCE    One generic Thai consulate/DLD block is copied through five modules and a large generic destination block is appended to export pages. Four regulated pages have zero external sources: /bring-pet-to-thailand/checklist.html, /take-pet-out-of-thailand/checklist.html, /bring-pet-to-thailand/bring-a-dog-to-thailand.html, and /bring-pet-to-thailand/bring-a-cat-to-thailand.html. U-Tapao and Korea paragraphs name precise facts but render generic blocks; findings above survived the “official” audit. Google/link reachability cannot prove semantic support.
IMPACT      A reachable authority homepage creates the appearance of proof while thresholds, windows, ports, fees, and medical instructions drift unseen across 71 high-risk pages.
FIX         Create a regulated-claim manifest with claim ID, jurisdiction, exact primary URL, checkedAt, short evidence excerpt/hash, and pages consuming it. Render a citation beside each number/window/port/cost; fail build when a regulated assertion lacks a current claim record. Temporarily label or hold any claim not re-proven.
EFFORT      3–5 days
RISK        Automated reuse can homogenize prose or apply a jurisdictional rule too broadly; the ledger should centralize facts, not page wording.
OWNER       SOL

### [S1] Make every regulated and emergency correction invalidate offline caches
DIMENSION   M
WHERE       build.js:629-676; src/sw.js:2-20,30-54; src/static/_headers:26-27; https://pattayapets.com/sw.js
EVIDENCE    The service-worker version hashes only minified CSS, JS, and critical CSS, while its 79-entry precache contains regulated/emergency HTML, search data, images, and fonts. HTML-only corrections therefore do not change sw.js or the cache name. Live sw.js also returns Cache-Control: max-age=14400 although source requests no-cache.
IMPACT      A corrected border or first-aid page can deploy while an existing user’s offline copy remains wrong; a four-hour browser cache delays even service-worker update checks.
FIX         Generate precache from the route/asset registry and hash the URL list plus every response byte. Make live /sw.js no-cache/must-revalidate through the actual Cloudflare Cache Rule, and test that changing only an emergency HTML file changes the cache name and offline response.
EFFORT      3–5 hours
RISK        A missing manifest entry can break service-worker installation; excessive content hashing can churn caches.
OWNER       SOL

### [S1] Purge forbidden network content and replace the href-only gate
DIMENSION   L
WHERE       RULES.md:13,33-34; src/layout.js:4-12,28; src/pages/10-structural.js:309-313,382,493,530,550,593,631; src/static/.well-known/security.txt:1; docs/visit-delegate-kit/README.md:16; docs/visit-delegate-kit/tier-1-briefs.md:101; docs/visit-delegate-kit/post-visit-template.md:3; docs/launch-and-maintenance.md:172; docs/distribution/social-kit.md:8; src/linking.js:2,10-65,187-205,258-270,342,385-397,456-469; tools/audit-invariants.js:143-153; scripts/network-gate.js (missing); scripts/ping-indexnow.js:1-82
EVIDENCE    src/linking.js:342 emits “Related guides on PattayaPets and sister sites in the TimPaemi network”; line 397 emits “Sister publications in the TimPaemi network”. RULES requires the site’s own contact `info@pattayapets.com`, while public layout/structural content, `security.txt`, and the named operator/editorial documents independently use `hello@pattayapets.com` without a recorded exception. RULES also says Rules 1/2/3/5/6 are enforced by `scripts/network-gate.js`, but that file does not exist; `scripts/` contains only `ping-indexnow.js`. The available invariant checks only forbidden href values, so it passes while 47 generated HTML pages carry forbidden wording and 38 say “sister sites”; `dist/llms.txt:17` and `dist/search-index.json:1` also repeat “TimPaemi network”. The complete scan found 70 matching nondependency files.
IMPACT      This directly regresses the scope rule associated in RULES.md with the prior penalty and places network association in 47 generated release pages.
FIX         Delete NETWORK_SITES, NETWORK_BY_TOPIC, and unreachable renderers; replace active brand/network prose with PattayaPets-only guidance. TIM first verifies/provisions `info@pattayapets.com` or explicitly approves a RULES exception; SOL then moves public, security, and operator/editorial contact references to one generated configuration without dropping correction mail. Create the missing all-file brand/domain/text gate with a narrow explicit allowlist for the rule file, this audit evidence, historical records, and defensive blocklists.
EFFORT      4–8 hours
RISK        Removing fragments can leave broken sentences or empty panels; render and link-check all 209 pages.
OWNER       SOL

Complete pre-report inventory:

Active/source references:

    src/layout.js:28
    src/linking.js:2,22-63,187-205,258-270,342,385-397,456-469
    src/pages/00-home.js:158,164,218-221
    src/pages/10-structural.js:114,116,166,188,347,357
    src/pages/40-bring-pet.js:73,580
    src/pages/42-dog-friendly.js:39,213,243,285,312
    src/pages/43-emergency.js:76,670
    src/pages/44-owning.js:37,39,293,381
    src/pages/49-owning-extra.js:493
    src/pages/90-utility.js:91
    src/pages/95-search.js:74,77-78
    docs/launch-and-maintenance.md:236
    docs/content-recovery-plan.md:88,156,158

Generated violations, each on minified line 1:

    dist/about.html
    dist/accessibility.html
    dist/adopt-a-pet-pattaya/index.html
    dist/area/bang-saray.html
    dist/area/banglamung.html
    dist/area/central-pattaya.html
    dist/area/jomtien.html
    dist/area/naklua.html
    dist/area/pratumnak.html
    dist/area/sattahip.html
    dist/area/wongamat.html
    dist/boarding/index.html
    dist/bring-pet-to-thailand/arrival-suvarnabhumi-airport.html
    dist/bring-pet-to-thailand/index.html
    dist/cats/index.html
    dist/contact.html
    dist/corrections.html
    dist/directory.html
    dist/dog-friendly-pattaya/cafes.html
    dist/dog-friendly-pattaya/index.html
    dist/dog-friendly-pattaya/restaurants.html
    dist/dogs/index.html
    dist/groomers/index.html
    dist/guides.html
    dist/index.html
    dist/masthead.html
    dist/mobile-vets/index.html
    dist/offline.html
    dist/owning-a-pet-in-pattaya/getting-to-the-vet.html
    dist/owning-a-pet-in-pattaya/index.html
    dist/owning-a-pet-in-pattaya/pet-friendly-housing.html
    dist/owning-a-pet-in-pattaya/where-to-walk-your-dog.html
    dist/pet-emergency/index.html
    dist/pet-emergency/street-dog-encounters.html
    dist/pet-health-pattaya/index.html
    dist/pet-relocation/index.html
    dist/pet-shops/index.html
    dist/press.html
    dist/privacy.html
    dist/search.html
    dist/sitemap.html
    dist/standards.html
    dist/start-here.html
    dist/take-pet-out-of-thailand/index.html
    dist/terms.html
    dist/trainers/index.html
    dist/vets/index.html

Generated auxiliary violations:

    dist/llms.txt:17
    dist/search-index.json:1

Other evidence/policy/defensive matches:

    tools/audit-invariants.js:149
    tools/deploy.mjs:28-29
    research/loop/proposals/2026-07-29-audit-follow-through.md:22
    docs/AUDIT-2026-07.md:163,221,223,225,611,780,891,926,1011,1050,1053
    docs/FULL-AUDIT-BRIEF.md:181
    RULES.md:20,24,57
    lighthouse-home.json:1893-1894,2031-2032,2420-2421,2515-2516,2696-2697,3119-3120,3257-3258,3636-3637,3731-3732
    lighthouse-live.json:1832-1833,1970-1971,2359-2360,2454-2455,2635-2636,3058-3059,3196-3197,3575-3576,3670-3671

The report itself necessarily repeats the evidence and was excluded from the measurement.

### [S1] Implement the required publisher and author entity graph
DIMENSION   D
WHERE       RULES.md:38-55; src/layout.js:8,240-315,393; src/guidekit.js:70-81
EVIDENCE    RULES requires Person IDs https://timpaemi.com/#tim and #paemi, publisher https://timpaemi.com/#timpaemi, exact legalName “TIMPAEMI CO., LTD.”, local Person URLs, and ownershipFundingInfo. Current personGraph() returns an Organization with anonymous founder Persons; WebSite publishes through https://pattayapets.com/#org. Corpus scan found 0 Person @id and 0 ownershipFundingInfo; all 133 Articles author the Organization and all 209 WebSites publish through the site Organization. The repeated global graph is 444,334 bytes.
IMPACT      Author/publisher semantics are wrong on every page, conflict with the mandated network model, and weaken ownership/E-E-A-T interpretation.
FIX         After Tim’s explicit approval, emit compact Tim, Paemi, and TimPaemi nodes on every page and full nodes only on home. Give Persons mandated IDs and local author-page URLs; point Article authors to the actual Person nodes and Article/WebSite publisher to #timpaemi; add all four policy properties and exact legal-name capitalization. Add corpus assertions for values and compact/full scope.
EFFORT      4–8 hours
RISK        Search engines may reassociate the entity graph; author pages and real policy fragments must exist before deployment.
OWNER       TIM

### [S1] Decide analytics consent behavior before GA loads
DIMENSION   K
WHERE       src/assets/js/site.js:277-299; src/layout.js:4-13,399-401; src/pages/10-structural.js:462-493; https://pattayapets.com/
EVIDENCE    GA loads on scroll, keydown, pointerdown, or automatically four seconds after load, then calls gtag("config"). There is no consent default, user choice, persistence, or withdrawal control. Live HTML also contains Cloudflare’s injected static.cloudflareinsights.com beacon. Google’s current guidance says basic mode blocks tags before user choice or advanced mode sets denied defaults before tag commands: https://support.google.com/analytics/answer/14009635, reopened 2026-08-01.
IMPACT      Users cannot exercise a choice before measurement data leaves the page, creating Google-policy and jurisdiction-dependent privacy exposure; repository text cannot prove dashboard handling.
FIX         Tim must choose: remove GA, or implement an accessible affirmative analytics choice with Consent Mode v2 default-denied before config, persisted choice, and permanent preferences/withdrawal control. Update privacy text with actual operator, purposes, categories, legal basis, processors, retention, transfers, and rights; verify GA and Cloudflare dashboard settings.
EFFORT      1–2 days
RISK        Analytics continuity, historical comparability, banner accessibility, and page performance can regress.
OWNER       TIM

### [S1] Contain and atomically publish build output
DIMENSION   H
WHERE       build.js:16,50-68,265-270,314-318
EVIDENCE    PP_DIST accepts any resolved filesystem path. rmrf() recursively deletes it with force, then catches every deletion error and continues building in place. `pathToFile()` strips only one leading slash, and `write()` joins every source-controlled page path to DIST without checking the resolved result; traversal segments using either separator can escape the target, while absolute-drive/UNC forms are unvalidated and can fail or produce unexpected nested paths. Current route strings do not contain those forms.
IMPACT      A mistaken environment value can delete a broad directory; a malformed future route can write outside output; a failed cleanup can mix stale/current output; and a later error leaves a partial directory that still looks deployable.
FIX         Reject filesystem, profile, repository, and unexpected roots; permit only an explicit child/sibling output. Resolve and containment-check every write path under a unique sibling staging directory, reject traversal/backslash/drive/UNC forms, fail closed on removal/copy errors, validate an exact manifest, then atomically swap.
EFFORT      4–8 hours
RISK        Windows/OneDrive locks can break atomic rename; retain the last valid output and clean temporary directories only after containment checks.
OWNER       SOL

### S2 — fix next

### [S2] Publish a jurisdiction-specific titre matrix
DIMENSION   F
WHERE       src/pages/41-export.js:529-540,749-756; src/pages/40-bring-pet.js:258-270
EVIDENCE    The UK checklist says only “rabies blood test” and the EU page only “adequate antibody level.” GOV.UK requires ≥0.5 IU/ml, sample at least 30 days after vaccination, then a three-month wait: https://www.gov.uk/bring-pet-to-great-britain/rabies-blood-tests. The European Commission requires ≥0.5 IU/ml, sample at least 30 days after the primary/current series and no less than 90 days before certification, with an approved lab and continuity exception: https://food.ec.europa.eu/animals/live-animal-movements/dogs-cats-and-ferrets/bringing-pet-eu-non-eu-country_en. Reopened 2026-08-01.
IMPACT      A high-stakes checklist does not let a reader determine whether a result qualifies; the generic titre page encourages rule bleed between countries.
FIX         Create a claim-backed matrix for EU, GB, Korea, Australia, US, Japan, and Singapore: threshold, sample timing, wait, approved-lab authority, validity/retest rule, and exceptions. Render the exact relevant row on each destination page.
EFFORT      1 day
RISK        Similar thresholds can hide different wait/continuity rules; never use one “titer country” template as authority.
OWNER       TIM

### [S2] Replace the abbreviated IATA crate and cabin claims
DIMENSION   F
WHERE       src/pages/40-bring-pet.js:479-496,523-528
EVIDENCE    The guide says cabin weight is “often around 7–8 kg” and reduces IATA CR1 to rigidity, ventilation, security, and stand/turn/lie. Current IATA CR1 Edition 52 (January 2026) also specifies ventilation distribution/percentage, welded mesh, metal bolts, nose/paw-proof openings, spacers, bedding, water container, labels, and 10% larger dimensions for snub-nosed animals; IATA does not approve crate brands: https://www.iata.org/contentassets/b0016da92c86449f850fe9560827bbea/pet-container-requirements.pdf and https://www.iata.org/en/programs/cargo/live-animals/pets/, reopened 2026-08-01.
IMPACT      An owner can buy a non-acceptable crate or rely on a non-universal cabin limit, causing airport rejection or unsafe transport.
FIX         Link and date the current CR1; add its core acceptance checklist and operator-variation warning; remove 7–8 kg unless sourced per airline/route; state that airlines accept/reject and IATA does not certify brands.
EFFORT      3–5 hours
RISK        Turning a condensed checklist into a guarantee would be worse; retain the operating-airline confirmation requirement.
OWNER       TIM

### [S2] Delete unsourced money, time, outcome, and agent claims
DIMENSION   E
WHERE       src/pages/40-bring-pet.js:569-574,592-599,643-659; src/pages/41-export.js:820-821,868-882; src/pages/43-emergency.js:230-231
EVIDENCE    “Commonly report” low-to-mid four figures has no sample/method/date; agents “remove most of the risk” and “usually” buy peace of mind; detention “30 days or more”, clearance “often under an hour”, Australia “six months to a year”, “several thousand US dollars or more”, and emergency consultations “often” starting in the low thousands of baht lack claim-level sources. The same codebase shows that primary-source itemized fees are possible at src/pages/41-export.js:389-436.
IMPACT      Readers budget and choose paid intermediaries from fabricated-looking anecdotes; commercial advocacy conflicts with no-paid-placement trust positioning.
FIX         Delete every anecdotal range/outcome unless a dated disclosed methodology supports it. Replace with current primary-source cost components and processing minima; label agents optional and disclose that none has been independently reviewed.
EFFORT      3–5 hours
RISK        Removing all ranges can reduce planning value; do not invent replacement totals by adding incomparable route components.
OWNER       TIM

### [S2] Stop publishing non-open businesses as verified
DIMENSION   G
WHERE       research/businesses/doggie-star-grooming-pattaya.json:6,21-39; research/businesses/furpet-grooming-and-hotel.json:59,74-89; research/businesses/pattaya-city-pet-shop-grooming.json:65-71,77-97; src/pages/30-directory.js:471-477,869-875
EVIDENCE    Of 35 live records, Doggie Star and Furpet dossiers are status unverified and Pattaya City is current-operation-unverified. Furpet says “No readable current official post or business profile”; Pattaya City has no recent dated activity. Every category nevertheless says “Every listing is a verified facts page.” The corrections page separately says no completed anonymous-visit records are published yet.
IMPACT      Readers can make a wasted trip/contact attempt and search engines receive stronger entity claims than the evidence supports.
FIX         Add required publishState. Only open records meeting a current-source threshold receive verified copy, category-card inclusion, FAQ, or business schema. Retained leads must say unverified and lose business schema; removal/noindex needs Tim’s decision.
EFFORT      4–6 hours
RISK        A hard-to-verify but live business could lose discovery; preserve the dossier and a reversible hold state.
OWNER       LOOP

### [S2] Replace empty-area inference with explicit geography
DIMENSION   G
WHERE       src/pages/30-directory.js:668-686,703-721,735-746,825-836; src/data/businesses.js:299-310,455-470,644-699; https://petpassionsth.com/eng/; https://www.plutopethotel.com/; https://zoeta-dogsoul.com/dog-training-pattaya/
EVIDENCE    Ten records have areas: []; five are not relocation agents. Code renders empty as “serves all Thailand” and hardcodes addressLocality/areaServed Pattaya for all 35. Pet Passions publishes only Hua Hin–Cha-am–Pranburi; Pluto publishes a Bangkok address; Zoeta’s Pattaya route returned 410. Six records with explicit Chiang Mai, Bangkok, or Hua Hin addresses still get Pattaya schema. Official surfaces reopened 2026-08-01.
IMPACT      Local results and visible pages misrepresent remote/out-of-market businesses and can send readers to unusable services.
FIX         Add serviceScope local/nationwide/remote-only/unverified plus addressLocality, addressRegion, and serviceAreas. Empty means unknown. Generate titles, visible area, category inclusion, and schema only from verified values; reclassify/remove Pet Passions, Pluto, and Zoeta from Pattaya-local discovery after Tim’s approval.
EFFORT      4–8 hours
RISK        Reclassification changes three indexed/local-intent URLs and internal links.
OWNER       LOOP

### [S2] Remove hidden and fabricated listing FAQ schema
DIMENSION   D
WHERE       build.js:215-263; src/pages/30-directory.js:703-837; src/data/businesses.js:299-310,688-699
EVIDENCE    The build appends FAQPage to all 35 listing schemas, but listing HTML renders no matching FAQ. Missing address/area defaults to “Pattaya” and claims “The full address and map are on this page”; Furpet and Doggie Star have null address. Google requires marked-up content to be visible and true: https://developers.google.com/search/docs/appearance/structured-data/sd-policies, lines 152–165, updated 2026-07-10 and reopened 2026-08-01. Google removed FAQ rich results in June 2026: https://developers.google.com/search/updates#removing-faq-rich-result.
IMPACT      The markup is misleading, risks structured-data action, and now has no Google FAQ-result upside.
FIX         Delete injectFaqSchema() and its call for listings. If visible business Q&A is later useful, render it from verified fields first and generate identical JSON from that DOM/data; never default location.
EFFORT      30–60 minutes
RISK        JSON node-count tests must assert correctness, not preserve a fixed count.
OWNER       LOOP

### [S2] Make visible freshness match the actual page date
DIMENSION   E
WHERE       src/guidekit.js:133-138,204-210; src/pages/41-export.js:730-736; src/pages/59-export-seo-countries.js:176-190; src/pages/50-import-countries.js:992-1003
EVIDENCE    The renderer uses updatedLabel or a global 30 May label while metadata uses updated. Exact read-only command over 208 page objects found 152 visible labels and 109 label/date mismatches; 31 July Korea/U-Tapao changes still display 30 May.
IMPACT      Readers see a false review date and structured/user freshness signals conflict, especially on changing regulated rules.
FIX         Derive the visible label from page.updated. Permit an override only if it parses to the same ISO day. Fail build on any mismatch and require a claim-review date for regulated updates.
EFFORT      1–2 hours
RISK        Automatically changing a label from a metadata edit can falsely imply substantive re-review; distinguish content modified from facts rechecked.
OWNER       LOOP

### [S2] Cite the operative dog law or state the gap
DIMENSION   E
WHERE       src/pages/44-owning.js:449-476,513-528
EVIDENCE    The guide categorically says Thai law requires dogs/cats vaccinated and “kept current”, then mentions evolving local registration without an Act, section, instrument, Pattaya ordinance, or municipal URL. DLD’s primary legal hub/PDF is https://legal.dld.go.th/index.php/th/phra-rach-bayyati-rokh-phis-sunakh-ba-ph-s-2535 and https://legal.dld.go.th/images/Pho%20Roh%20Bor/Rok-Phit-SuNak-Ba/5%20Rok-Phit-SuNak-Ba/1.pdf, reopened 2026-08-01. No current official Pattaya registration ordinance was located.
IMPACT      Readers cannot separate national statutory duty, controlled-animal rules, municipal registration, and condo policy.
FIX         Cite the Act and exact operative sections; separate species/age/booster duties from municipal/condo rules. If no current Pattaya instrument can be obtained, say that precisely and give a named official contact route.
EFFORT      3–5 hours
RISK        An unofficial translation can change legal meaning; have Thai legal text reviewed.
OWNER       TIM

### [S2] Carry dossier state, provenance, and restricted contacts into one approved model
DIMENSION   G / K
WHERE       src/data/businesses.js:2-9,603-622; src/pages/30-directory.js:727,806-807; research/businesses/animal-army-hospital.json:1-20; research/businesses/pet-buddy-animal-clinic.json:1-20; research/businesses/sri-sara-animal-hospital.json:1-20; research/businesses/vet-pro-veterinary-clinic-sattahip.json:1-20; research/TIM-FOLLOW-UPS-2026-07-31.md:6-23
EVIDENCE    C10 found that all 35 business pages use `FACTS_UPDATED = "2026-05-31"`; their 35 matching dossiers have `checkedAt: "2026-08-01"`. Across all 43 dossiers, status, confidence, sources, and unverified state exist in 43, while checkedAt exists in 40. No tool consumes them. `dist/search-index.json` contains 13 phone-pattern occurrences representing 12 unique numbers—11 mobiles plus Thonglor’s verified emergency landline. The published business model contains 10 unique emails and 7 LINE IDs that flow into generated business output; approval/provenance is not structured per field. Research stores business contact values and free-text notes but has no per-field public-business/private-person classification, reviewed publication basis, or opt-out record; no customer/visitor identity field was found, but the repository cannot prove every raw contact is safe to publish.
IMPACT      Public facts are not traceable; a future sync can promote HUMAN QUEUE values or attach the latest dossier date to facts that were not rechecked; contact approval and opt-out cannot be demonstrated per field.
FIX         TIM first approves the contact-publication policy. SOL then classifies each contact, records its source and reviewed publication basis, and resolves uncertain/potentially personal values. LOOP enforces the approved classification, opt-out state, and sanitized source while generating the public export with operatingStatus, publishState, verifiedAt, and explicit scope; HUMAN QUEUE values remain outside it.
EFFORT      1–2 days
RISK        Copying the latest dossier date to every fact creates false freshness; raw notes/contacts must not leak.
OWNER       SOL

### [S2] Complete the Mor Ja HUMAN QUEUE or downgrade the listing
DIMENSION   G
WHERE       src/data/businesses.js:603-622; research/businesses/mor-ja-pet-clinic-pattaya.json:10,67-85; research/TIM-FOLLOW-UPS-2026-07-31.md:6-23
EVIDENCE    The safeguard currently works: the unverified `083 232 9898` has zero generated-output hits and the public phone remains null. The dossier nevertheless says `"status": "open"` from directory-dependent evidence, no current first-party operation/hours source was found, and the facts page still receives the global verified label.
IMPACT      A future sync can expose another party’s or an obsolete number, while the current page overstates confidence in an emergency-adjacent clinic.
FIX         TIM makes the prepared call and confirms identity, mobile, operating hours, home-visit coverage, and fee. If confirmed, record `confirmed by phone`, date, caller, and approved public fields; if not, set operatingStatus/publishState to unverified/hold and suppress verified/schema treatment.
EFFORT      15-minute call plus 15 minutes data work
RISK        A mistaken call identity could publish another party’s number or an unsafe emergency contact.
OWNER       TIM

### [S2] Add a dossier-aware business integrity gate
DIMENSION   G
WHERE       tools/audit-directory.js:5-21,34-50; AUTOPILOT.md:125-144
EVIDENCE    The audit prints four missing addresses, three missing contacts, ten empty areas, then “OK — contact audit passed”; empty areas are labelled “nationwide OK”. No script reads dossiers or tests publication eligibility, locality/schema consistency, source dates, HUMAN QUEUE suppression, or dossier-only backlog.
IMPACT      Every material business defect in this report can ship under a green directory result.
FIX         Validate JSON Schema/BOM, one dossier per live record, allowed publication state, explicit geography, current provenance, contact policy, schema parity, HUMAN QUEUE absence, and disposition of dossier-only records. Require an explicit waiver for a deliberately retained lead.
EFFORT      4–6 hours
RISK        Enforcing before adding explicit nationwide scope will wrongly block legitimate relocation agents.
OWNER       LOOP

### [S2] Make audit results truth-bearing
DIMENSION   H
WHERE       tools/audit-official-links.js:98-120; tools/audit-full.js:116-127; tools/audit-content-depth.js:94-112; tools/audit-content-richness.js:60-74; tools/audit-comprehensive.js:188-191; tools/check-links.js:22-48; tools/audit-lighthouse.js:31-50; tools/audit-invariants.js:44-69,143-153,164-228
EVIDENCE    Official links classifies 403 as OK and exits 0 with transport warnings; full audit discards content-depth child status; depth initializes ok=true and never changes it; richness never sets an exit; comprehensive can print FAIL/WARN yet return 0; links skip relative links/fragments; Lighthouse gates performance only; scope checks hrefs only; ItemList “visibility” can be satisfied inside JSON-LD itself.
IMPACT      CI and the full suite can say PASS while required, safety-critical, or user-visible properties are false.
FIX         Define gate/advisory/inconclusive outcomes; propagate child exits; validate relative links/fragments/assets/manifest/SW; isolate visible DOM for schema parity; test regulated facts from fixtures; add deliberately broken fixtures proving every validator fails.
EFFORT      1–2 days
RISK        External transport gates can become flaky; keep reachability separate from semantic/source validity.
OWNER       LOOP

### [S2] Reject duplicate object keys and remove unreachable page logic
DIMENSION   H
WHERE       src/pages/10-structural.js:296-301,336-341,368-373,497-501; src/pages/43-emergency.js:125-139,237-244; src/pages/49-owning-extra.js:25-30; src/linking.js:258-270,385-393,456-469; src/critical.css:239-254; src/assets/css/site.css:254-265,295-296,440-466; src/assets/js/site.js:430-444
EVIDENCE    Six duplicate object keys silently discard earlier values: four structural `desc` pairs, the Songkran `desc` pair, and two `related` arrays on the 24-hour-vets page. The second emergency array overwrites the first three links. Three network-rendering blocks in `src/linking.js` are unreachable but retain forbidden behavior. A class-attribute scan over 209 generated HTML files found zero uses of the obsolete `footer-panel`, `footer-disclaimer`, `footer-main`, `footer-brand`, `footer-links`, `network`, `network-label`, `network-links`, `network-strapline`, `footer-legal`, or `see-also-network` selectors; those selectors remain in authored and repeatedly inlined CSS, and the footer-panel JavaScript is now a no-op. The active `.site-footer` rules at `src/critical.css:237-238` and `src/assets/css/site.css:438-439` are not dead.
IMPACT      Intended links/content disappear without a build error, and editors can modify dead logic believing it is live.
FIX         Keep one reviewed description per object, merge the two emergency related arrays, delete unreachable network renderers and the named unused selectors while retaining active `.site-footer`, and add advisory unused-selector reporting. Add a parser/linter gate for duplicate keys, normalized route collisions, unreachable exports, and unknown page-object fields.
EFFORT      2–4 hours
RISK        Removing the wrong duplicate can change snippets; merging related links can exceed intended card limits, so render the affected pages.
OWNER       LOOP

### [S2] Make asset audits truthful and immutable font URLs content-addressed
DIMENSION   B / M
WHERE       tools/audit-full.js:92-101; tools/audit-live.js:13-27; src/static/_headers:14-15; src/critical.css:1-10; src/layout.js:433-437; build.js:299-311,322-331; https://pattayapets.com/assets/fonts/hanken-400.woff2
EVIDENCE    Both headline audits require assets/css/site.css and assets/js/site.js. Current files are site.a0a8ffb6fb.css and site.df474c428f.js; live unversioned URLs return 404 and hashed URLs 200, so both audits fail a healthy build. CSS and JS are hashed, but fonts are copied under stable names while `_headers` gives them a one-year immutable lifetime. On 2026-08-01 the exact font URL above returned 200 with `Cache-Control: public, max-age=31536000, immutable`.
IMPACT      Guaranteed audit noise obscures real failures, and a changed font at a stable immutable URL can remain stale for a year in a compliant cache.
FIX         Parse CSS/JS references from generated/live HTML, require and validate their content hashes, then hash font bytes and rewrite `@font-face`, preload, service-worker, and header references. If font hashing is deferred, remove `immutable` and shorten its TTL. Assert that every immutable URL is content-addressed.
EFFORT      2–4 hours
RISK        Attribute-order regex can break after minification; use tolerant parsing. A missed preload or font-face rewrite can cause fallback text or extra fetches.
OWNER       LOOP

### [S2] Repair the three syntactically broken titles
DIMENSION   C
WHERE       src/layout.js:359-379; dist/bring-pet-to-thailand/from-eu.html:1; dist/take-pet-out-of-thailand/to-usa.html:1; dist/trainers/k9-pattaya-dog-training-school.html:1
EVIDENCE    clampMetaTitle() cuts at a word but does not balance punctuation. Generated titles are “Bring Pet to Thailand from the EU (DLD Import | PattayaPets”, “Export Pet from Thailand to the USA (CDC | PattayaPets”, and “Dogs Training International Institute (K9 | PattayaPets”. All length/uniqueness audits pass.
IMPACT      Search snippets look broken and lose the intended qualifier/brand clarity.
FIX         Write shorter explicit source titles without parentheses, then add balanced (), [], and quote assertions after title clamping; fail rather than silently damaging syntax.
EFFORT      30–60 minutes
RISK        A generic auto-balancer can delete meaningful characters; explicit titles are safer.
OWNER       LOOP

### [S2] Collapse the known two-hop redirects after the canonical decision
DIMENSION   A
WHERE       src/static/_redirects:3-5; src/static/manifest.webmanifest:16-37; https://pattayapets.com/vets/th-animal-hospital-pattaya.html; https://pattayapets.com/trainers/canine-point-academy.html; https://pattayapets.com/pet-shops/pet-lovers-centre-pattaya.html
EVIDENCE    Three legacy rules target .html paths, and Cloudflare then 308s those targets to clean paths: old vet, trainer, and pet-shop URLs each require 301 → 308 → 200. Manifest shortcuts for emergency, search, and directory also use redirecting .html URLs.
IMPACT      Users/bots pay extra round trips and installed shortcuts encode the losing URL form.
FIX         After Tim selects the canonical shape, point redirects and manifest shortcuts directly at the final canonical 200 URL. Add a no-chain live assertion over _redirects targets and manifest shortcuts.
EFFORT      30–60 minutes
RISK        Changing targets before the sitewide canonical decision creates another mixed signal.
OWNER       LOOP

### [S2] Give keyboard focus a 3:1 adjacent contrast
DIMENSION   J
WHERE       src/critical.css:57
EVIDENCE    Global focus is 3px marigold (#E7A23B). Measured contrast is 2.18:1 on white and 2.01:1 on sand, below the 3:1 adjacent-colour criterion. W3C’s Focus Appearance understanding links the indicator to non-text contrast: https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance.html, reopened 2026-08-01.
IMPACT      Low-vision keyboard users can lose the focus position despite Lighthouse 100.
FIX         Use a two-colour focus indicator, for example a 2px white inner ring plus 3px dark banyan/forest outer outline, and test every component/background at 3:1 plus zoom/high contrast.
EFFORT      1–2 hours
RISK        Outline clipping inside overflow-hidden controls can hide the new ring.
OWNER       LOOP

### [S2] Expose dynamic search and filter state to assistive technology
DIMENSION   J
WHERE       src/pages/95-search.js:82; src/assets/js/site.js:185-200,240-247,514-516,570-572,610-612
EVIDENCE    Search results use aria-live=polite plus aria-atomic=true around count and up to 57 cards; injected headings jump H1→H3. Search/directory/guide/area filter buttons only toggle CSS classes, not aria-pressed/current. Puppeteer accessibility-tree checks found no unnamed controls, but these state/announcement defects remain.
IMPACT      A screen reader can re-announce the whole result set on every keystroke and cannot determine the selected filter.
FIX         Put only the result count in a small non-atomic live region; add a visible/hidden H2 for results; set and synchronize aria-pressed on button filters (or aria-current on links); focus/scroll only on explicit submit/filter action, not every input.
EFFORT      3–5 hours
RISK        Overmanaging focus can disrupt keyboard typing and browser history.
OWNER       LOOP

### [S2] Remove the inline-code CSP exemptions
DIMENSION   K
WHERE       src/static/_headers:1-9; src/layout.js:109-141,225,438-443; dist/index.html:1; dist/search.html:1
EVIDENCE    Live CSP contains style-src and script-src 'unsafe-inline'. Every page has an inline onload handler; corpus has 310 style attributes and 627 style blocks.
IMPACT      CSP cannot provide its intended protection against injected inline script/style, even though no public exploit was found.
FIX         Move footer/critical/noscript/per-element styles into classes or a hashed external stylesheet; remove the stylesheet onload handler; then remove both exemptions and add script-src-attr 'none' and style-src-attr 'none'.
EFFORT      1–2 days
RISK        FOUC/LCP, noscript presentation, analytics, or Cloudflare injection can break; benchmark each template.
OWNER       SOL

### [S2] Contain or retire the traversal-prone screenshot server
DIMENSION   K / H
WHERE       tools/shoot.js:3-17,40-49; package.json:37-44
EVIDENCE    The dev server decodes the request path, joins it to configurable `ROOT`, and streams the resolved file without a containment check; `../` segments resolve outside the root. `server.listen(8099)` supplies no host, so it can bind beyond loopback. Puppeteer is launched with `--no-sandbox --disable-setuid-sandbox`. The helper currently fails because it requires missing `puppeteer`, making the exposure dormant rather than safe.
IMPACT      If the dependency is restored and the helper is run on a shared network, a crafted request can read arbitrary process-readable files outside the screenshot directory.
FIX         Prefer deleting the obsolete helper. If retained, resolve the requested path against an absolute root, reject decoding/traversal/NUL errors, require the result to remain under that root, bind `127.0.0.1`, disable directory/symlink escape, use `puppeteer-core`, remove the Chromium sandbox-disabling flags unless execution is genuinely isolated and documented, and add traversal fixtures.
EFFORT      1–2 hours
RISK        Symlink and Windows drive/case behavior can defeat a naïve prefix check; use relative-path containment and realpath checks.
OWNER       LOOP

### [S2] Upgrade the vulnerable sharp dependency
DIMENSION   K
WHERE       package.json:43; package-lock.json:960-962; tools/make-images.js:13-29
EVIDENCE    npm audit reports one high advisory: installed sharp 0.34.5, affected below 0.35.0, fix 0.35.3; GHSA-f88m-g3jw-g9cj, checked 2026-08-01.
IMPACT      Exposure is currently limited because only trusted repository SVGs are processed, but the build carries a known high-severity libvips inheritance.
FIX         Upgrade and lock sharp 0.35.3 or newer; regenerate all 21 PNGs; compare hashes, dimensions, and rendered pixels before accepting.
EFFORT      1–2 hours
RISK        Native ABI/Node compatibility and raster changes.
OWNER       LOOP

### [S2] Validate an exact build manifest before and after deployment
DIMENSION   M
WHERE       tools/deploy.mjs:23-29,88-143,159-169
EVIDENCE    PROJECT='pattayapets' and refusal of overrides are correct. MIN_PAGES=200 still allows nine current pages to disappear; only home identity/canonical is checked; sitemap host uses substring matching; only two foreign tokens are scanned; no post-upload representative check or recorded rollback ID exists.
IMPACT      A partial/internally inconsistent 200-page build can pass and deployment success would not prove the intended live content.
FIX         Keep the project hardcoded. Generate an exact route/hash/site/project/runtime/lock/source-revision manifest; validate all canonicals, sitemap, headers, and network rules before upload; after upload check representative URLs and record deployment/rollback IDs.
EFFORT      1 day
RISK        Exact manifests must change intentionally with routes; live checks need bounded retry.
OWNER       SOL

### [S2] Make CI enforce thresholds with pinned, least-privilege actions
DIMENSION   M / K
WHERE       package.json:8,25; tools/make-images.js:12-30; .github/workflows/ci.yml:9-24; .github/workflows/lighthouse.yml:8-22; .github/lighthouserc.json:2-16
EVIDENCE    `build:all` starts with npm’s `prebuild` lifecycle (`tools/make-images.js`), then orders build → check/links → SEO → comprehensive → directory → country pairs → orphans → richness → linking → invariants and short-circuits, but omits content/depth, official, full, live, mobile, and both Lighthouse audits. CI then repeats directory/invariant gates already inside it. Every Lighthouse category is `"warn"`, so no score can fail the job; Lighthouse runs once on desktop only. The Lighthouse workflow does not check out the repository before passing `./.github/lighthouserc.json`, so that config is unavailable in a normal fresh job. Workflows use mutable action tags (`actions/checkout@v4`, `actions/setup-node@v4`, `treosh/lighthouse-ci-action@v12`), floating `ubuntu-latest`/Node 22, no permissions or timeouts, public temporary artifact storage, and no dependency/secret, official-source, mobile, live/full, or regulated-fixture security gate.
IMPACT      A red quality result remains green, action code can move without repository review, and audit artifacts are sent to public temporary storage without a recorded decision.
FIX         Define one ordered audit manifest so local `build:all`, CI, and the release gate consume the same required stages without duplicate calls; keep live/browser stages in a separately provisioned job if needed. Add checkout before any repository-relative config; pin each action to a reviewed commit SHA and runtime image/version; set `permissions: contents: read`, job timeouts, concurrency, and bounded private artifact retention; run representative mobile and desktop samples with reviewed error thresholds and retry/median handling. Add lockfile dependency and secret gates plus current official/regulated fixtures, with an explicit reviewed exception process.
EFFORT      4–8 hours
RISK        Hard failure thresholds can create flaky CI and block urgent safety fixes; establish measured baselines and a documented override path.
OWNER       SOL

### [S2] Verify Bing ownership before another IndexNow submission
DIMENSION   B
WHERE       package.json:31-34; scripts/ping-indexnow.js:3-82; https://pattayapets.com/a8f3c91e2b7046d59e1a0c4f8b2d7e63.txt; docs/AUDIT-2026-07.md:1077-1101; research/TIM-FOLLOW-UPS-2026-07-31.md:50-62
EVIDENCE    The public key file returns 200 and exact key content; payload code includes the matching keyLocation and now fails closed. The last recorded submission refused all six batches with 403 UserForbiddedToAccessSite. Bing Webmaster ownership was not accessible in this audit.
IMPACT      IndexNow discovery remains unavailable and another deploy can end in a known receiving-side refusal.
FIX         Remove `npm run indexnow` from `deploy`/`ship` so release cannot submit implicitly. TIM verifies pattayapets.com in Bing Webmaster Tools and confirms the property/host. Only then run the standalone IndexNow command in a separate authorized phase and retain accepted response evidence.
EFFORT      15–30 minutes plus external propagation
RISK        Re-running before verification repeats false work; changing the public key can invalidate existing verification.
OWNER       TIM

### [S2] Establish a demand baseline before expanding or pruning
DIMENSION   N
WHERE       docs/launch-and-maintenance.md:182-195; research/loop/proposals/2026-07-31-coverage-candidates.md:7-24; research/loop/candidates.json:1; research/loop/queue.md:1
EVIDENCE    The guide says add only searched-for questions, but the latest coverage review considered only mobile grooming and hotel rules; candidates is empty and queue says 0 tasks. No GSC query/page/country/device export or authenticated GA report was available.
IMPACT      Cannibalisation, real gaps, NZ indexing upside, and pruning downside cannot be quantified; plausible ideas can become duplicate URLs.
FIX         Tim provides read-only GSC/GA access or dated exports. Save raw periods under research/strategy, map queries to existing URLs/gaps/overlaps, and feed only reviewed opportunities into the queue.
EFFORT      1 hour access/export plus 2–4 hours analysis
RISK        Short/seasonal data creates false priorities; preserve periods and do not infer demand from new pages with zero impressions.
OWNER       TIM

### [S2] Publish the researched airline and lead-time decisions
DIMENSION   N
WHERE       src/pages/40-bring-pet.js:465-528; research/findings/airline-pet-policies.json:1; research/findings/lead-time-matrix.json:1; build.js:1-691
EVIDENCE    The live answer says only “confirm directly” and gives no carrier comparison. Existing research contains 17 airlines, 240 route records, and 28 destination lead-time records; no build/source/tool imports them. Evidence is dated 2026-07-20 and the lead-time file stores calendar dates that are now stale.
IMPACT      The repository’s most decision-useful work creates no reader/search value while the site cannot answer which exact itinerary/breed/weight/crate/mode is accepted.
FIX         Reopen every included airline/authority primary source; move an approved subset into a public data module; render source-dated filters on existing airline/export hubs; calculate dates from minimumLeadTimeDays at render time; suppress stale/null rows and retain flight-specific confirmation.
EFFORT      2–3 days
RISK        Airline, aircraft, breed, price, and route rules change independently; never turn a row into a booking guarantee.
OWNER       SOL

### [S2] Disposition the eight open clinic dossiers that have no public facts page
DIMENSION   G / N
WHERE       research/businesses/better-pets-hospital.json:4,39-46,74-91; research/businesses/chaiyapornwithi-vet-clinic.json:4,66-74; research/businesses/nana-pet-clinic.json:4,66-74; research/businesses/nern-plub-wan-animal-hospital.json:4,66-75; research/businesses/pakana-animal-hospital.json:4,77-86; research/businesses/pet-buddy-animal-clinic.json:65-74; research/businesses/sri-sara-animal-hospital.json:73-83; research/businesses/vet-pro-veterinary-clinic-sattahip.json:65-73; src/data/businesses.js:66-700; https://betterpetshospital.com/en/contact-us/
EVIDENCE    A slug join found 43 dossiers and 35 public `BUSINESSES` records, with exactly eight dossier-only clinics; every one says `"status": "open"`. Better Pets’ current official contact surface publishes its address, mobile, and daily hours, yet https://pattayapets.com/vets/better-pets-hospital.html returned HTTP 404 on 2026-08-01. The other seven have no recorded publish/hold/reject decision.
IMPACT      Current local-vet research is stranded while weaker unverified leads remain public, and omission cannot be distinguished from editorial rejection.
FIX         TIM approves a publish/hold/reject decision per URL. LOOP adds publishState, decision date/reason, and surfaces dossier-only open records in the queue; SOL reopens field-specific sources and writes only approved records. Resolve Better Pets’ price-source contradiction before it can publish.
EFFORT      2–4 hours review; 1–2 days if all eight are approved and written
RISK        Publishing from operating status alone can promote directory-dependent evidence; rejecting without a reason loses future work.
OWNER       TIM

### [S2] Scope the U-Tapao evidence to what the reopened sources prove
DIMENSION   F
WHERE       src/pages/50-import-countries.js:1018-1031; research/loop/proposals/REGULATED-u-tapao-2026-08-01.md:26-88; https://aqi-new.dld.go.th/index.php/th/news-head/mapaqithai; https://image.mfa.go.th/mfa/0/91fPdh6NtO/About-Thailand/Bringing_Pets_to_Thailand/All_Airports_-_Instructions_for_Bringing_Dog-Cat-Rabbit_into_Thailand_from_the_USA_%28Revised_30Jan2025%29.pdf
EVIDENCE    The core conclusion is supported: DLD’s map is titled “Map of 59 Animal Quarantine Stations”, dated 8 October 2025, and does not list U-Tapao; the reviewed six-location embassy instructions also omit it. The page additionally says that map was “re-published February 2026”, which the reopened DLD source/research ledger does not substantiate, and presents the six airports generally although that instruction is scoped to dogs, cats, and rabbits arriving from the USA.
IMPACT      The no-U-Tapao conclusion is sound, but invented freshness and widened source scope can make readers apply a route list to a species/origin it did not cover.
FIX         Delete “re-published February 2026”. Keep the DLD-map conclusion and publication date; qualify the six-location list to the instruction’s exact species/origin scope or replace it with a current DLD source that explicitly applies generally.
EFFORT      30–60 minutes
RISK        Narrowing the citation must not weaken the separately supported statement that no reviewed official source lists a U-Tapao AQS.
OWNER       SOL

### S3 — clean-up and strategic debt

### [S3] Normalize the business-dossier schema and repository encoding
DIMENSION   G / H / M
WHERE       AGENTS.md:1,5,33,37; research/loop/proposals/REGULATED-u-tapao-2026-07-29.md:3; research/businesses/baan-mor-raksasat-animal-hospital-pattaya.json:1; research/businesses/better-pets-hospital.json:39-46,74-91; research/businesses/pet-buddy-animal-clinic.json:1; research/businesses/sri-sara-animal-hospital.json:1; research/businesses/vet-pro-veterinary-clinic-sattahip.json:1
EVIDENCE    Within the 43-dossier corpus, 42 parse directly; Baan Mor alone begins with UTF-8 BOM bytes `EF BB BF`, fails naïve `JSON.parse`, and parses after BOM removal. A repository-wide nondependency/source scan found one other BOM in AGENTS.md, which also contains `Â·` and `â€”` mojibake; the named U-Tapao proposal contains `Â§13.4`. Seven dossier key signatures exist: 13 mixed-category legacy `verified`-object dossiers lack top-level category/area fields, and Pet Buddy, Sri Sara, and Vet Pro lack `checkedAt`. Better Pets populates vaccination prices, attaches a single price URL to a pet-hotel page, later says a health-check page supports vaccine prices, and simultaneously records those prices as not reliably published.
IMPACT      Consumers must guess which fields exist, and apparently valid records can bypass freshness, contact, or provenance checks.
FIX         Define and version one JSON Schema with category-specific optional sections; require UTF-8 without BOM; distinguish operatingStatus from publishState; require checkedAt, sources, confidence, locality, and contact-policy state; give every price/fact its own source reference. Migrate all 43 and resolve Better Pets before build/audit consumption. Because AGENTS.md is generated, inspect and fix the external `deploy.ps1 -SyncRules` encoding path, regenerate it from clean CLAUDE.md, re-encode the U-Tapao proposal, and add repository-wide BOM/mojibake rejection with an explicit binary allowlist.
EFFORT      1–2 days
RISK        A mechanical migration can erase useful free-text evidence; preserve original notes and source objects.
OWNER       LOOP

### [S3] Measure query cannibalisation before merging or adding country pages
DIMENSION   C / N
WHERE       src/pages/40-bring-pet.js:38-1197; src/pages/41-export.js:64-741; src/pages/47-import-extra.js:1-322; src/pages/50-import-countries.js:1-1320; src/pages/52-export-countries.js:1-1570; src/pages/57-seo-keywords.js:1-404; src/pages/58-import-seo-countries.js:1-248; src/pages/59-export-seo-countries.js:1-220
EVIDENCE    The build contains 40 import and 31 export route-prefix pages (30 export pages indexable because New Zealand is held), plus 26 reciprocal country-pair entries. Template families repeat the same DLD source blocks and generic arrival/export steps, but `audit-content-richness` only reports threshold counts and the repository contains no query-to-URL evidence; `research/loop/candidates.json` is `[]`.
IMPACT      Two technically distinct URLs can compete for the same intent, while merging on text similarity alone can destroy a page that already earns clicks.
FIX         Export GSC query/page data for at least 16 weeks; cluster by user task and country direction; flag queries receiving impressions on multiple URLs; then choose keep/merge/rewrite/noindex per cluster. Add a lexical-similarity report as a lead, never as the decision.
EFFORT      1 day after access
RISK        Seasonal or low-volume data can misclassify pages; retain redirects and annotations for every merge.
OWNER       LOOP

### [S3] Make update and sitemap dates deterministic and editorially meaningful
DIMENSION   B / E / M
WHERE       build.js:97-125,350-358; src/guidekit.js:71-77,138,209,333,404; src/pages/10-structural.js:163-164; src/pages/53-import-topics.js:237-238
EVIDENCE    The generated HTML sitemap assigns `updated: new Date().toISOString().slice(0, 10)` on every build. Pages can also carry divergent pairs such as `updated: "2026-05-29"` with visible `updatedLabel: "27 May 2026"`, and `updated: "2026-05-31"` with visible `"30 May 2026"`.
IMPACT      Rebuilding changes a public freshness signal without an editorial change, while inconsistent visible, meta, JSON-LD, and XML dates weaken trust and recrawl prioritisation.
FIX         Store one reviewed date per page in source; derive every visible and machine-readable representation from it. Give the HTML sitemap the newest included editorial date or omit its lastmod; add a test that a lastmod change requires a source-content or reviewed-date change.
EFFORT      4–6 hours
RISK        Correcting dates can make much of the corpus visibly old; that is useful backlog truth, not a reason to fabricate freshness.
OWNER       LOOP

### [S3] Consolidate route classification and page-scope logic
DIMENSION   A / H
WHERE       build.js:23-27,129-157,276-291,550-560; src/linking.js:207-239; tools/audit-comprehensive.js:80-165; tools/audit-content-depth.js:8-19; tools/loop-queue.js:44-67
EVIDENCE    Category names, recent-page exclusions, search boosts, topic mapping, guide detection, and public-path normalization are separately hard-coded. The quoted comment in `audit-content-depth.js` is `"Indexable guide paths"`, but its regex is independent of the build’s route inventory.
IMPACT      A new route can render and enter the sitemap while being silently absent from a content, linking, queue, or recency audit.
FIX         Export a single page manifest from the source registry with path, kind, category, indexability, locale, canonical shape, and audit scopes; make build and tools consume it. Reject duplicate paths and unknown kinds at load time.
EFFORT      1–2 days
RISK        Centralisation can turn an optional classifier into a build blocker; migrate with parity snapshots.
OWNER       LOOP

### [S3] Make the prescribed audit suite reproducible and non-mutating
DIMENSION   H / M
WHERE       package.json:5-44; tools/make-images.js:12-30; build.js:265-270; tools/loop-queue.js:37-41,171-174; research/loop/queue.md:1; tools/check-mobile-overflow.js:1-20; tools/audit-lighthouse.js:1-27; tools/audit-lighthouse-all.js:1-31,60-71; tools/deploy.mjs:159-169
EVIDENCE    Section 2 required mutating commands: `npm run build` regenerated 21 source PNGs and the entire `dist` tree; Lighthouse wrote `lighthouse-audit.json` plus 30 JSON files under `lighthouse-reports`; `npm run loop:queue` rewrote `research/loop/queue.md` and reported `0 open tasks across 134 pages`. Runtime resolution found sharp 0.34.5 and puppeteer-core 25.1.0 installed, but lighthouse, wrangler, and puppeteer absent; the audit and deploy tools call runtime `npx`. The first mobile/Lighthouse runs failed on `ECONNREFUSED`/a local interstitial until a server was started, and the downloaded tool/browser versions are not recorded with results.
IMPACT      Audit execution changes evidence, and the same command list can fail or measure a different surface depending on unstated local state.
FIX         Pin Lighthouse, Wrangler, and the selected browser driver in the lockfile and invoke local binaries without downloads. Add `--check`/stdout modes and reserve writes for explicit update commands; make one harness start/stop its own server, pin ports/runtime/browser, capture stdout/stderr/versions/exits, and fail if anything outside an allowed staging/artifact directory changes.
EFFORT      1 day
RISK        Pinning browser/runtime versions increases maintenance; unpinned audits are not comparable evidence.
OWNER       LOOP

### [S3] Restore the required structural log and correct the operator runbook
DIMENSION   M / L
WHERE       RULES.md:63-67; CLAUDE.md:33-35; AGENTS.md:35-37; .gitignore:11-24; docs/launch-and-maintenance.md:14,23,144-161,229,235-236
EVIDENCE    Policy requires same-day entries in `CHANGELOG-STRUCTURAL.md`, but the file is absent and explicitly ignored. `.gitignore` also names CLAUDE.md, AGENTS.md, and RULES.md; because Git inspection was prohibited, whether any are already tracked is unknown. The runbook still says 190 pages, 32 businesses, and a healthy 190-page build, describes network cross-link clusters, and repeats the retired Pattaya Authority network. `.wrangler/` is not ignored.
IMPACT      Structural changes have no required audit trail, stale instructions can reintroduce prohibited branding, and local CLI state can enter repository hygiene checks. If the ignored rulebooks are not tracked, a fresh clone loses governance unless the external `C:\Projects\deploy.ps1 -SyncRules` path succeeds.
FIX         In phase 2 create the required structural log and stop ignoring it if policy intends repository retention; explicitly decide which governance files belong in-repository, then test a clean-clone `-SyncRules` bootstrap without assuming tracked state. Derive runbook counts from the build manifest, remove retired network instructions, add `.wrangler/` to local-state ignores, and add a documentation freshness/scope gate.
EFFORT      1–2 hours
RISK        Do not publish operator-only material or retroactively invent change history; start with a dated “history before this point unavailable” entry.
OWNER       LOOP

### [S3] Make the AI-crawler and robots policy an explicit publishing decision
DIMENSION   B / K / N
WHERE       src/static/robots.txt:1-32; src/static/_headers:11-27; https://pattayapets.com/robots.txt
EVIDENCE    The file says `# AI crawlers — explicitly allowed` and separately allows GPTBot, OAI-SearchBot, ChatGPT-User, ClaudeBot, Claude-User, PerplexityBot, Google-Extended, CCBot, and Applebot-Extended even though `User-agent: * / Allow: /` already permits them. No repository policy explains training versus search/user fetch, and no `_headers` rule gives robots.txt an intentional cache lifetime.
IMPACT      The publication is making a broad content-reuse choice accidentally, and an obsolete cached rule can delay any later decision.
FIX         TIM decides search retrieval, user-triggered fetch, and model-training policy separately; SOL reduces robots.txt to the chosen rules and adds a short explicit cache header; add syntax, live-content, cache, and sitemap-line assertions.
EFFORT      30–60 minutes after decision
RISK        Blocking training bots does not guarantee non-use; blocking search/user agents can reduce discovery or answer citations.
OWNER       TIM

### [S3] Stop describing completed anonymous visits until records exist
DIMENSION   E / G
WHERE       src/pages/10-structural.js:187-202,217-263,338-359,411-417,554-619; src/data/businesses.js:1-17
EVIDENCE    The standards page says `"Our reviewers visit each business anonymously"` and `"pay every bill in full"`; the press page says businesses `"are visited anonymously"`. The corrections log on the same source states `"No completed anonymous-visit records are published yet"`, and all current business entries omit `verdict` and `reviewed`.
IMPACT      A strong first-hand E-E-A-T claim is internally contradicted and cannot be traced to a visit record, receipt, date, or reviewer.
FIX         Until a visit ledger exists, describe the method prospectively and label every page `facts page — visit pending`. When visits occur, store private proof, public review date/byline/scope, conflicts, and a facts-versus-experience split; publish a verdict only from that workflow.
EFFORT      2–3 hours now; ongoing field work
RISK        More candid wording is less promotional but avoids a materially misleading trust claim.
OWNER       TIM

### [S3] Define the regulated-coverage boundary before filling more long-tail gaps
DIMENSION   F / N
WHERE       src/pages/40-bring-pet.js:65-455; src/pages/41-export.js:65-366; src/pages/48-species.js:1-590; src/pages/59-export-seo-countries.js:130-170; research/loop/proposals/2026-07-31-coverage-candidates.md:7-24
EVIDENCE    The main import/export pathways are framed around dogs and cats and air arrival at Suvarnabhumi; one Malaysia page mentions a land border and exotic species appear mainly in ownership/vet content. There is no declared rule for when rabbits, birds, reptiles, commercial quantities, assistance animals, or overland movements are in scope, while the latest gap proposal only names mobile grooming and hotel rules.
IMPACT      A user can mistake silence for applicability, and editorial effort can expand generic keywords before high-consequence edge cases are either covered or clearly excluded.
FIX         Publish a scope matrix by species, movement type, port mode, and destination; add explicit exclusions/authority links on every regulated hub; use GSC and support questions to prioritise any new guide, with government-export-vet selection and non-air routes reviewed before more country-template variants.
EFFORT      1 day policy; several days per approved pathway
RISK        Broadening scope without specialist review multiplies regulated-error exposure; narrowing it may give up some long-tail clicks.
OWNER       SOL

### S4 — monitor, do not optimise blindly

### [S4] Put budgets around repeated inline payloads before refactoring them
DIMENSION   I
WHERE       src/layout.js:109-225; src/critical.css:1-294; build.js:314-320; dist/index.html:1
EVIDENCE    Corpus measurement found 4,110,821 bytes of repeated inline critical CSS and 2,509 bytes of footer CSS per page. Despite that source repetition, the successful local Lighthouse sample scored performance 97–99 on content pages and 98 on home; no measured LCP regression was attributable to this duplication.
IMPACT      Repository/build size and cache efficiency are worse than necessary, but an eager extraction could trade a small byte win for render blocking or flash of unstyled content.
FIX         Record per-template HTML, critical CSS, total transfer, LCP, and render-blocking budgets. Extract only shared non-critical content after a before/after mobile trace proves equal or better LCP/CLS; keep truly above-the-fold CSS inline if it wins.
EFFORT      2–4 hours measurement; 1 day only if the budget fails
RISK        Treating aggregate generated bytes as per-navigation cost can produce a performance regression disguised as cleanup.
OWNER       LOOP

### Provisional traffic-impact/effort priorities

No GSC/GA traffic evidence was available, so this is a decision-proximity hypothesis, not a claim about current clicks.

1. **Publish refreshed airline and lead-time decisions on existing hubs.** Research contains 17 airlines, 240 route records, and 28 destination lead-time records (`research/findings/airline-pet-policies.json:1`; `research/findings/lead-time-matrix.json:1`). Reopen volatile sources first; effort 2–3 days; principal risk is a route/aircraft/breed/fee rule changing independently.
2. **Add a verified Pattaya export-preparation vet comparison after Dimension G cleanup.** The five vet-category records at `src/data/businesses.js:68-251` have at least one microchip/titre/certificate/relocation capability, but no vet title in `dist/search-index.json:1` targets that decision. Effort 4–8 hours after direct service verification; principal risk is implying DLD accreditation or complete route competence from one capability.
3. **Add named, dated written-policy evidence to the existing condo guide—or state that no verified inventory exists.** The current guide names neighbourhood/building types but no currently confirmed building (`src/pages/42-dog-friendly.js:431-513`). Effort 2–5 days of human outreach; principal risk is publishing a unit-owner statement that does not override juristic-office rules.

### July 2026 audit disposition

This is the requested status check against `AUDIT-2026-07.md` §§7, 8, 9, 13.4, and 14. “Done” means the narrow July item is present, not that the wider dimension is now safe.

| July item | Status on 2026-08-01 | Source evidence / remaining gap |
|---|---|---|
| §7 guarded deploy as normal route | **Done, narrow** | `package.json:31-34`; `docs/launch-and-maintenance.md:37-69`; `tools/deploy.mjs:23-29`. Dry run passed. Exact route/hash manifest, post-deploy corpus checks, atomic output, and rollback record remain open. |
| §8.1 canonical canary | **Open; premise is stale** | The July report called 192 `.html` signals consistent. Current audit finds 192 generated `.html` canonicals and all 192 return 308 to clean paths, while sitemap/internal targets remain `.html`. No canary or GSC baseline exists. |
| §8.2 New Zealand index decision | **Open** | `/take-pet-out-of-thailand/to-new-zealand.html` remains `noindex` and out of the sitemap. MPI reachability is not a semantic re-review. |
| §8.3 robots policy | **Open** | `src/static/robots.txt:1-32` still explicitly allows a mixture of training, search, and user-fetch agents without a recorded policy. |
| §8.4 robots/sitemap caching | **Open / dashboard blocked** | `_headers` has no explicit robots/sitemap rule; authenticated Cloudflare cache behavior was unavailable. |
| §9.1 DLD station fixture | **Partial and insufficient** | `tools/audit-invariants.js:45-68` rejects U-Tapao wording but has no dated DLD station fixture and cannot validate the page’s “59” stations / “six airports” claim at `src/pages/50-import-countries.js:1023-1029`. |
| §9.2 Korea exception invariant | **Partial; source conflict unguarded** | The invariant requires `0.5 IU/ml` and avoids the old routine-licence error. It does not test the 24-month maximum or force review when the current Korean AIP says “more than 10” but a Korean MOFA embassy page says “ten or more”. |
| §9.3 emergency contact invariant | **Done, narrow** | The nine invariants pass and Mor Ja is not routed from emergency pages. It does not prove directory contacts/hours against a first-party source. |
| §9.4 corrections-state invariant | **Done** | `src/pages/10-structural.js:378-418` carries dated corrections and the invariant rejects an empty log. |
| §9.5 single-author/single-domain lock | **Stale** | The href-based invariant passes, yet source/generated/history/defensive files still contain forbidden sister-network material and 70 nondependency files match the blocklist; it does not inspect text or non-anchor URLs. |
| §9.6 freshness assertion | **Open** | No assertion binds substantive claim changes, source review, visible date, metadata, JSON-LD, and sitemap lastmod. |
| §9.7 deploy identity | **Done, narrow** | The guarded project name is fixed and raw deploy teaching is blocked. Exact manifest, target-account evidence, representative post-deploy checks, and rollback proof remain open. |
| §9.8 immutable asset assertion | **Partial: CSS/JS done; fonts open** | Hashed CSS/JS pass, but stable font filenames receive a one-year immutable response. The gate does not prove that every immutable URL is content-addressed and does not test stale orphan assets, live cache parity, HTML/image mutation, or service-worker invalidation. |
| §9.9 directory ItemList | **Done mechanically; semantics open** | Seven category counts pass and no Review/AggregateRating is emitted. The gate does not prove that every listed business is open/local/verified or that FAQ text is visible and factual. |
| §9.10 official-link truthfulness | **Open** | `audit-official-links` still calls six HTTP 403 responses OK and calls sister publications “official”; 123 OK / 1 warning is not semantic support. |
| §13.4 Korea exception | **Published, still incomplete** | “More than 10” matches the current Korean AIP, but conflicts with a Korean MOFA embassy page at exactly ten; the page also omits MOFA’s 24-month maximum. APQA clarification is open. |
| §13.4 U-Tapao 59/six claim | **Done for the core conclusion; wording caveats open** | The current DLD 59-station map, DLD Group 11 jurisdiction page, six-location Thai embassy import instructions, and U-Tapao operator notice were reopened on 2026-08-01; they support no listed U-Tapao AQS. “Re-published February 2026” is unsupported, and the six-location instruction has a dog/cat/rabbit-from-USA scope; the invariant still lacks a dated fixture. |
| §13.4 deferred freshness/CSP/sharp/photos | **Open except CSS/JS fingerprinting** | CSS/JS fingerprinting is done; font fingerprinting, the freshness gate, CSP refactor, sharp upgrade, and genuine photo/visit corpus are not. |
| §13.4 “Verified facts pages” | **Open** | `src/pages/30-directory.js:471-477,869-875` still uses the claim with no completed visit record and mixed dossier provenance. |
| §14 publisher purge / entity choice | **Purge done; entity graph open** | `pattaya-authority` is absent from the build, but author/publisher nodes still do not match the required exact graph and source files retain forbidden network content. |
| §14 changefreq removal | **Done** | Current sitemap has no `changefreq`. |
| §14 asset fingerprinting/cache split | **Partial** | Current CSS/JS filenames are hashed and `_headers` distinguishes asset classes, but stable font filenames receive a one-year immutable response. Live old asset URLs still return 404 and SW content invalidation remains open. |
| §14 safe headers | **Done, narrow** | COOP, HSTS, nosniff, referrer and permissions policies are present; CSP still needs unsafe-inline exemptions and no live violation trace was possible. |
| §14 heading and Thai annotations | **Done for the encoded cases** | Static audits report one H1, zero heading skips and the known Thai snippets marked; dynamic injected H1→H3 and filter-state accessibility remain open. |
| §14 meta scanners | **Partial** | Entity decoding is fixed, but three source title strings are syntactically malformed and the headline audit does not discover hashed assets. |
| §14 invariant guard | **Exists; overclaims safety** | Nine checks pass, while current regulated, publisher, business, network, and cache defects pass beside them. |
| §14 hreflang | **Correctly not started** | One English locale remains the declared strategy. No evidence supports a locale rebuild; keep gated behind demand and canonical stability. |
| §14 deploy-doc contradiction | **Resolved in repository; live setting blocked** | `docs/launch-and-maintenance.md:37-69` now teaches the guarded route. Cloudflare’s authenticated build/deploy settings were not accessible. |
| §14 Mor Ja contact | **Open** | `research/TIM-FOLLOW-UPS-2026-07-31.md:9-24` still requires a human call/verification note. |
| §14 IndexNow | **Code fixed; receiver still blocked** | Script now fails closed, but the last recorded six batches received HTTP 403 `UserForbiddedToAccessSite`; Bing ownership remains unverified. |

## 5. Needs Tim’s explicit yes

Every row below is a separate decision. “Yes” on one row does not authorise another, and no decision was executed in this audit.

| Explicit question for Tim | Click trade-off |
|---|---|
| **Canonical:** Do you approve a clean-path canonical migration beginning with only the eight `/area/` URLs, after a fresh GSC baseline, with redirects/sitemap/internal links changed together and a two-week observation window? | Every existing click to the eight canary URLs may temporarily disappear while signals are reprocessed; retaining the split can continue wasting crawl and dividing URL signals. Current click counts were unavailable. |
| **New Zealand indexing:** After a complete MPI source review, do you approve removing `noindex` from `/take-pet-out-of-thailand/to-new-zealand.html` and adding its chosen canonical to the sitemap? | Keeping the hold forgoes every potential New Zealand-guide click; indexing an unsafe/stale route can lose user trust and clicks beyond that page. |
| **Robots and AI use:** Do you approve a written policy that distinguishes search retrieval, user-triggered fetch, and model training, followed by the corresponding robots.txt and cache rules? | Search/user-agent blocking can remove discovery and cited-answer clicks; training blocks should not directly remove conventional clicks but cannot be guaranteed effective. |
| **Business pruning:** Do you approve removing or holding Doggie Star, Furpet, Pattaya City Pet Shop, Pet Passions, Pluto, and Zoeta from local verified surfaces until status/locality is proven? | Removal gives up every current click to those listing URLs and their long-tail names; retention risks sending clicks to a closed, unverified, or non-local option. Exact page clicks were unavailable. |
| **Better Pets URL:** After the new gate and price-source contradiction are resolved, do you approve publishing `/vets/better-pets-hospital.html`, or explicitly hold/reject it? | Publishing can earn currently missed local-vet/name clicks; publishing unresolved price provenance can turn those clicks into a trust failure. |
| **Chaiyapornwithi URL:** After the new gate, do you approve publishing `/vets/chaiyapornwithi-vet-clinic.html`, or explicitly hold/reject it? | Holding forgoes every click the researched name could earn; premature indexing creates a durable URL for evidence Tim has not approved. |
| **Nana URL:** After the new gate, do you approve publishing `/vets/nana-pet-clinic.html`, or explicitly hold/reject it? | Holding forgoes every click the researched name could earn; premature indexing creates a durable URL for evidence Tim has not approved. |
| **Nern Plub Wan URL:** After the new gate, do you approve publishing `/vets/nern-plub-wan-animal-hospital.html`, or explicitly hold/reject it? | Holding forgoes every click the researched name could earn; premature indexing creates a durable URL for evidence Tim has not approved. |
| **Pakana URL:** After the new gate, do you approve publishing `/vets/pakana-animal-hospital.html`, or explicitly hold/reject it? | Holding forgoes every click the researched name could earn; premature indexing creates a durable URL for evidence Tim has not approved. |
| **Pet Buddy URL:** After the new gate and missing `checkedAt` are resolved, do you approve publishing `/vets/pet-buddy-animal-clinic.html`, or explicitly hold/reject it? | Holding forgoes every click the researched name could earn; indexing an undated record can create false freshness and trust loss. |
| **Sri Sara URL:** After the new gate and missing `checkedAt` are resolved, do you approve publishing `/vets/sri-sara-animal-hospital.html`, or explicitly hold/reject it? | Holding forgoes every click the researched name could earn; indexing an undated record can create false freshness and trust loss. |
| **Vet Pro URL:** After the new gate and missing `checkedAt` are resolved, do you approve publishing `/vets/vet-pro-veterinary-clinic-sattahip.html`, or explicitly hold/reject it? | Holding forgoes every click the researched name could earn; indexing an undated record can create false freshness and trust loss. |
| **Publisher identity:** Do you approve the exact public entity model—`TIMPAEMI CO., LTD.` as publisher, Tim and Paemi as named authors/editors only where true, and one consistent `@id`/sameAs graph? | A graph transition can temporarily change entity association for existing result clicks; leaving contradictory identities weakens trust and may prevent those clicks from accruing to one publisher. |
| **Site contact:** Is `info@pattayapets.com` provisioned and approved as the site contact required by RULES, or do you explicitly approve retaining `hello@pattayapets.com` as a documented exception? | Switching before provisioning can lose reader corrections and leads; retaining an unexplained exception keeps the network gate noncompliant and can fragment contact attribution. |
| **Business-contact publication policy:** Do you approve a policy that permits a contact only after SOL records a reviewed publication basis from a current first-party business surface, holds directory-only or potentially personal values, sets retention/recheck rules, and supports correction/opt-out? | A strict hold can remove contact actions and the clicks/conversions they create; publishing a personal, stale, or unapproved channel can misdirect readers and create privacy/trust loss. |
| **Anonymous-visit claim:** Do you approve changing all visit language to prospective `facts page — visit pending` until a private proof ledger and public review dates exist? | Candid labels may reduce persuasive clicks or conversions on listings; unsupported first-hand claims risk a larger trust loss when readers find the contradiction. |
| **Analytics/privacy:** Do you approve either removing GA4 entirely or withholding it until explicit consent with withdrawal, while retaining privacy-preserving Cloudflare measurement only if its dashboard settings match the notice? | Removing/withholding GA does not remove search clicks but loses attribution for them; a consent prompt can reduce measured clicks/sessions even when real visits are unchanged. |
| **Money and time claims:** Do you approve deleting every unsupported price, duration, “few hours”, outcome, and agent-saving claim until a dated primary/first-party source is attached? | Deletion may lose clicks from price/time queries and reduce on-page persuasion; keeping invented precision can turn those clicks into failed moves and reputational loss. |
| **Regulated/medical hold:** Do you approve temporarily flagging or holding the affected Thailand, Australia, Korea, Malaysia, crate, and heatstroke passages until SOL’s source rewrite and a qualified veterinary review are complete? | A hold can forgo clicks and conversions on the affected answers; leaving them live can harm an animal or strand a family and then cost much more search trust. |
| **Pruning/merging country pages:** After query-to-URL evidence exists, do you approve per-cluster merges/noindex decisions rather than adding more template variants? | A merge can temporarily lose all clicks attached to the retired URL; no action may keep competing URLs splitting the same query’s clicks. |
| **Bing/IndexNow:** Do you approve re-running IndexNow only after you verify the exact `pattayapets.com` Bing Webmaster property and preserve an accepted response? | Waiting delays Bing discovery clicks; resubmitting before ownership is fixed creates no clicks and repeats a known refusal. |
| **Deploy identity:** Do you approve making the exact route/hash/project/runtime manifest, post-deploy representative checks, deployment ID, and rollback ID mandatory for every production release? | A stricter gate may delay clicks to new pages when it blocks a release; it protects all existing clicks from a wrong-project or partial deployment. |

## 6. What the automation should own

These are the LOOP-owned findings expressed as queueable tasks; any prerequisite Tim decision remains a hard stop.

1. Compare every published business with its dossier; fail on non-open/unverified state, divergent public values, or any contact lacking a human-approved public-business/private-person classification, reviewed publication basis, opt-out state, source, and date. Enforce `phone`↔`tel` normalization, reject landlines except verified 24-hour emergency records, and assert zero HUMAN QUEUE values across HTML, JSON-LD, search, and auxiliary generated files.
2. Require an explicit primary area and locality evidence; reject empty-area fallback and prevent out-of-scope businesses entering Pattaya area/category surfaces.
3. Generate listing FAQ only from approved visible question/answer fields; assert byte-equivalent visible text and JSON-LD and reject placeholder answers.
4. Derive visible, meta, OpenGraph, JSON-LD, search, and sitemap dates from one reviewed date; reject label/value divergence and build-time freshness.
5. Validate all 43 dossiers against one versioned, BOM-free JSON Schema and emit a human queue for unresolved publication/contact/provenance states.
6. Make each audit fail truthfully: a 403/429/timeout is unverified, a 2xx is reachability only, and no suite may print PASS when a required class was not checked.
7. Discover current hashed CSS/JS from generated HTML or a manifest; audit every referenced asset, require every immutable URL to be content-addressed, and identify stale live/local remnants without assuming unhashed names.
8. Parse every source title and rendered title; fail unmatched quotes/entities and report the source file/line for the three current defects.
9. After Tim’s canonical choice, flatten every redirect to one hop and assert redirect target = canonical = sitemap URL = internal-link target for the full corpus.
10. Replace the focus ring with a tested two-colour token and run contrast checks on every component/background state.
11. Add dynamic accessibility tests for result heading order, small count-only live regions, filter `aria-pressed`/`aria-current`, focus behavior, and Thai language changes.
12. Upgrade sharp in isolation; regenerate 21 PNGs and block acceptance unless dimensions, alpha, hashes, and visual diffs are reviewed.
13. Export a read-only GSC query/page input format and generate cannibalisation candidates; never auto-merge, prune, or noindex.
14. Export one authoritative route manifest and migrate build, linking, sitemap, search, recency, queue, and audits to its `kind`/category/indexability fields.
15. Wrap the whole audit suite in a self-starting/self-stopping harness that pins tool versions, captures outputs/exit codes, and proves no repository files changed.
16. Record per-template HTML/critical CSS/transfer/LCP budgets and queue inline-payload extraction only when a measured budget fails.
17. Parse every page module with a real parser; reject duplicate object keys, normalized/alias-equivalent route collisions, unreachable exports, and unknown page-object fields, with broken fixtures proving the gate fails.
18. Delete the obsolete screenshot server or contain decoded paths under a realpath-checked root, bind it to loopback, restore Chromium sandboxing, pin the existing browser driver, and test traversal/symlink/Windows-drive fixtures.
19. Restore the structural-change log without inventing history; decide and test clean-clone governance-file bootstrap, remove stale counts/network prose from the runbook, add `.wrangler/` to local-state ignores, and reject source BOM/mojibake.
20. Surface every dossier-only `open` record in the queue; require a dated publish/hold/reject decision and block all generated/search/schema output until the record is approved.

## 7. What no script currently tests

The current tools prove their own narrow predicates. The following assertions do not exist and should.

| Dimension | Missing assertion that should exist |
|---|---|
| A / B — routes and index control | For every indexable source page, the emitted canonical must be an absolute live 200 non-redirect; canonical, sitemap, hreflang-if-any, search index, internal links, and final redirect target must use the same URL shape. Enumerate every redirect rule to reject loops, chains, shadowing, foreign hosts, and missing targets. Reject sitemap URLs that are noindex, noncanonical, redirected, missing, or given a lastmod without a meaningful reviewed/content change. Parse and live-check robots syntax, groups, sitemap line, chosen policy, and cache headers. |
| B / I — live release and caching | Check status, content type, security/cache headers, referenced assets, canonical, noindex, JSON-LD, and a bounded HTML byte budget on all 205 live URLs—not a 30-page sample. Assert the live service-worker version changes whenever HTML, search, emergency/regulated content, offline behavior, or its precache changes; prove old hashed assets and old SW-controlled HTML update safely. Record Bing verification and require an accepted IndexNow response rather than a local POST attempt. |
| C — on-page intent | Test source and rendered titles for balanced punctuation and semantic truncation, not just character counts. Apply page-kind-aware thin-content assertions—the independent corpus scan found 47 pages below 500 words, while the current richness tool reports zero failures because it measures a narrower guide set/threshold. Inspect dynamic heading order and rendered anchor text. Accept query cannibalisation only from dated GSC query/page evidence; lexical similarity alone is not intent evidence. |
| D — structured data | Resolve the entire `@id` graph and assert exact publisher/author/site/page identities, allowed `sameAs`, one followed credit, and compact/full entity parity. Require every FAQ answer to be visibly equivalent and source-approved, every LocalBusiness field to match the approved dossier, every ItemList to mirror visible cards/order, and zero Review/AggregateRating until a real review record exists. |
| E / F — editorial and regulated truth | Bind each consequential number, threshold, sequence, permit, certificate, port, cost, duration, and exception to a claim ID, primary-source URL, quoted support, jurisdiction/species/movement scope, reviewer, review date, and expiry/recheck date. Reject four-source generic decoration and assertions unsupported by the cited paragraph. Require qualified clinical review for treatment/triage algorithms, make visible dates equal review dates, and fail any phone/hour/fee/credential with no approved source. |
| G / K — business integrity and contact privacy | Enforce dossier schema/encoding; category/area enums; uniqueness within each corpus for slug, normalized name, phone, `tel`, and address; `phone`↔`tel` normalization; one-to-one publication decision; current operating/locality state; source freshness; and field-level dossier→page equality. Require human-approved public-business/private-person classification, reviewed publication basis and opt-out state per contact; permit a landline only for a verified 24-hour emergency record; allow `areas: []` only for approved nationwide scope; require zero HTML/JSON-LD/search/auxiliary hits for HUMAN QUEUE values; suppress verified copy, FAQ, schema, cards and emergency links for held records; and require publish/hold/reject disposition for every dossier-only record. |
| H — code quality | The build already rejects exact duplicate path strings; additionally reject normalized, case/encoding, `.html`/clean/index alias collisions, duplicate object keys, unknown page kinds, and unreachable exports. Run validators against deliberately broken fixtures—single-quoted/multiline attributes, relative paths, fragments, CSS URLs, JS navigation, manifest/SW entries, redirect loops, forbidden domains in text and encoded/non-anchor URLs—to prove they fail. |
| H / M — build and CI | Constrain every write and local HTTP path to a realpath-checked project/staging root, bind helpers to loopback, preserve browser sandboxing, test traversal/symlink/Windows-drive cases and an interrupted build, then atomically replace output. Run two clean builds with fixed inputs and compare manifests for determinism. Pin Node/npm/npx/browser/tool versions; assert CI checkout, action SHAs, least permissions, timeouts, private artifact retention, dependency/secret gates, and no audit command mutates research/source. Require every immutable asset URL to be content-addressed, exact pre/post-deploy manifests, recorded rollback IDs, governance bootstrap, and BOM/mojibake rejection. |
| I — performance | Measure all templates with a controlled cold mobile profile and record LCP element/phases, CLS sources, INP/TBT, render blockers, dependency chains, compression, transfer, cache hit/miss, and service-worker state. Enforce budgets by page kind; do not infer navigation cost from total generated corpus size. |
| J — accessibility | Test focus indicator contrast/clipping on every background, keyboard order and modal/menu escape, filter selected state, result live-region behavior, injected heading hierarchy, zoom/reflow, reduced motion, tap targets, labels/errors, Thai language mutation, and representative browser accessibility-tree snapshots. Lighthouse 100 and unnamed-control scans do not establish WCAG 2.2 AA. |
| K — security/privacy | Compare live CSP/headers to source and collect CSP violations with inline exemptions removed in a test build. Assert analytics does not load before the chosen consent state and that withdrawal works; reconcile actual GA/Cloudflare dashboard retention and cookies with the notice. Add secret/history/dependency scanning, security.txt mailbox/expiry checks, form/mail abuse review, and explicit third-party beacon inventory. |
| L — network rules | Scan every tracked/source/generated text value and URL—including comments, docs, JSON notes, plain text, encoded text, and non-anchor attributes—for the complete forbidden-domain set. Assert zero sister-project names/links outside an explicit policy/history/defensive allowlist, plus exactly one followed `timpaemi.com` credit in the approved placement on every page. |
| N — strategy | Ingest dated GSC/GA data to report query demand, pages sharing queries, zero-impression pages, click loss candidates, device/country differences, and content gaps. Tie expansion/pruning proposals to that evidence, editorial scope, primary-source capacity, and a named outcome; the current empty queue does not prove there is no work. |

## 8. Could not check

1. **Repository state/history:** Git was prohibited, so working-tree status, tracked/ignored state, branch, commit, historic diffs, release-to-commit identity, and secrets in history were not inspected.
2. **Authenticated search/analytics:** no GSC, GA4, Bing Webmaster, or Cloudflare Analytics access/export was available; clicks, impressions, index coverage, CWV field data, consent/retention settings, and IndexNow property ownership are unknown.
3. **Authenticated Cloudflare state:** project account, build settings, deployment history, active deployment ID, rollback ID, Pages redirects/transforms, cache rules, purge history, and service-worker/cache behavior at the dashboard/edge layer were unavailable.
4. **Chrome DevTools protocol audit:** the required Chrome DevTools MCP capability was unavailable in this environment. Lighthouse and Puppeteer covered controlled local samples, but network dependency/phase traces, CSP violations, live cache detail, and browser accessibility-tree inspection under the performance workflow remain blocked.
5. **Business field verification:** no calls, messages, map-owner access, visits, bills, photographs, licence checks, or owner consent were authorised. Facebook/Instagram/LINE/Maps surfaces were throttled or non-readable for several records; no business was declared closed solely from that failure. Named gaps are Doggie Star and Furpet current operation/contact; Pattaya City current operation; Mor Ja current operation, mobile identity, hours, home-visit coverage, and fee; Pattaya Animal Hospital, which has no readable current first-party operation/contact surface; Siam Country Pet Hospital, whose former mobile could not be reconfirmed from a current first-party contact; North Pattaya Animal Hospital, whose current sources conflict on closing time; Pattaya Dog Stay, whose sources conflict on daily versus weekday-only hours; and Zoeta, whose current in-person Pattaya sessions remain unproved.
6. **Clinical review:** no licensed veterinarian reviewed the heatstroke, toxicology, first-aid, medication, or emergency-triage language. Source comparison identifies the defect but cannot approve replacement medical instructions.
7. **Complete legal/regulatory guarantee:** all 71 import/export guides were mechanically scanned and the high-consequence regulated pages named in findings were source-read, but the audit did not preserve a complete regulated-page sample ledger and every sentence in every destination pathway was not independently reverified. Generic shared source blocks prevent claim-level proof. Commercial movements, assistance animals, exotic species, land borders, and airline acceptance remain incomplete named scopes.
8. **Some primary-source surfaces:** the Korean QIA web FAQ was temporarily unavailable; the current Korean AIP and a Korean MOFA embassy page disagree at exactly ten animals, and no direct APQA clarification was available. The QIA booklet downloaded but was image-only for available text extraction, so no claim in this report relies on unread extracted text from it. The DLD Thai-language page was browser-translated, not certified-translated. Any replacement wording still needs a bilingual/legal fact check where ambiguity matters.
9. **Airline and route acceptance:** 17-airline/240-route research exists, but current aircraft, route, breed, crate, embargo, cargo/cabin, and price acceptance was not re-opened carrier by carrier. Government entry permission never proves carriage.
10. **Security contact delivery:** `security.txt` syntax/content was read, but no mailbox message was sent and receipt/escalation was not tested.
11. **Full live release equality:** the live homepage, after stripping Cloudflare’s injected beacon, matched local output; the other 204 sitemap pages were checked for status, not byte equality to one immutable release manifest.
12. **Clean-build determinism:** the prescribed build was run once. A second destructive clean build was not run because builds mutate `dist`; deterministic output and interrupted-build recovery remain unproven.
13. **Historical CI/deploy artifacts and settings:** prior logs, retained artifacts, account actor, and whether every past deploy used the current guard were not accessible. GitHub branch protection/required checks, Actions default token permissions, repository/environment secrets, and deployment approvals were also unavailable, so workflow YAML cannot prove CI is mandatory or least-privilege in repository settings.
14. **Private editorial evidence:** visit receipts, reviewer notes, conflict declarations, source approval logs, clinical/legal sign-off, and correction intake records were not present in the audited repository.
15. **Raw-contact privacy classification:** research contains mobiles, email, LINE/WhatsApp values and free-text notes, but no per-field public-business/private-person classification, reviewed publication basis, or opt-out record. A pattern/key scan found no customer/visitor identity field; without contacting each channel owner or seeing a private approval ledger, the audit cannot certify that every raw contact is non-personal and publishable.
16. **Cross-site wording duplication:** RULES rule 4 bans duplicate wording across owned publications, but no sister-repository corpus or approved comparison export was in scope. Brand/link scanning was complete for this tree; sentence-level duplication against other sites could not be tested.
17. **External deploy wrapper:** CLAUDE.md:17-20 and AGENTS.md:19-23 make `C:\Projects\deploy.ps1 -Only pets` / `-SyncRules` the normal release and rule-generation path, but that file is outside the declared repository scope. Its project guard, target/account selection, sync encoding, IndexNow coupling, and failure behavior were not inspected or executed.
18. **Timed developer onboarding:** no isolated new developer was asked to add a conventional page or a new page type under controlled timing, so the brief’s under-one-hour threshold is not asserted. Source inspection shows an existing-kind page object is straightforward, but a genuinely new type crosses separately hardcoded route, kind, category, search, recency, linking, queue, and audit registries.

## 9. The fix plan

Phase 2 should execute in this dependency order; no deployment or IndexNow submission belongs inside an editing step.

1. **Freeze the harm surface and obtain decisions.** Tim answers the regulated/medical hold, money, publisher, visit-label, analytics, canonical, robots, business-pruning, all eight per-URL dossier-only decisions, business-contact publication policy, site-contact exception, New Zealand, and deploy-identity questions separately. Capture a GSC baseline before any index/canonical/pruning change.
2. **Correct reader-harm claims first.** SOL builds the claim ledger and rewrites Thailand microchip/vaccine/permit/export-exam guidance, Australia, Korea, Malaysia, titre/IATA pathways, and all unsupported money/time/outcome statements from quoted primary support. A qualified veterinarian reviews heatstroke and other clinical algorithms before publication.
3. **Repair trust identity and regulated provenance.** Implement the approved publisher/author graph; replace visit claims with the approved state; make visible dates truthful; attach claim IDs, scope, reviewer, expiry, and source excerpts. Do not combine this release with a canonical migration.
4. **Build the business gate, then reconcile truth.** After Tim approves the contact-publication policy, implement and run the publication/contact/locality/privacy gate while normalizing the 43 dossiers; SOL classifies uncertain contacts, hold or relabel unverified/non-local records, resolve Mor Ja by human verification, execute Tim’s eight per-URL dossier-only decisions, and regenerate visible listing/FAQ/schema data from one approved model.
5. **Eliminate cross-project and privacy leakage.** Purge the full forbidden-domain inventory from source/research/docs/tooling; replace the network validator; implement Tim’s analytics choice and reconcile the public notice with actual behavior.
6. **Fix offline, asset, and build correctness.** Make SW versions content-derived, remove mutable HTML/search from unsafe precache behavior, content-address immutable fonts, add update tests, contain all writes under a validated staging directory, and atomically replace output. Upgrade sharp separately with image visual comparison.
7. **Repair the remaining gates before trusting green output.** Add claim/canonical/redirect/date/publisher/network/SW assertions, broken fixtures, truthful external-status handling, immutable-asset discovery, dynamic accessibility checks, and a non-mutating pinned audit harness. CI consumes the exact build manifest and enforces dependency/secret checks.
8. **Apply technical/on-page/accessibility cleanup.** Fix the three titles, redirect chains after the canonical decision, focus contrast, filter/live-region semantics, CSP inline dependencies, and honest sitemap dates. Measure before changing repeated inline payload.
9. **Run index changes one at a time.** If approved, execute only the eight-area canonical canary with all signals aligned, then wait at least two weeks and evaluate clicks/coverage before another batch. Review/index New Zealand and change robots/cache policy in separate windows.
10. **Use evidence for implementation strategy.** Analyse GSC/GA query-to-URL demand, resolve cannibal clusters, then publish only approved high-value airline/lead-time/export-vet/scope work. Do not add country-template variants because the queue is empty.
11. **Release in a separate authorised operation.** From a clean, approved source state, run the complete build/audit suite, compare the exact manifest, deploy through the hardcoded project guard, verify representative live pages/headers/SW, and record deployment/rollback IDs. Submit IndexNow only after Bing ownership is proven and only as its own authorised command.
