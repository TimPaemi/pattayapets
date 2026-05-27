"use strict";
/* Site search — self-contained page. Fetches /search-index.json (built by build.js)
   and filters client-side. Degrades to directory/sitemap links without JS. */

const SCRIPT = `
(function(){
  var input=document.getElementById('pp-q');
  var out=document.getElementById('pp-results');
  if(!input||!out)return;
  var idx=[];
  function esc(s){return String(s).replace(/[&<>"]/g,function(c){
    return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c];});}
  function run(){
    var q=input.value.trim().toLowerCase();
    if(q.length<2){
      out.innerHTML='<p class="notice">Type at least two letters to search every page.</p>';
      return;
    }
    var terms=q.split(/\\s+/);
    var hits=idx.map(function(p){
      var hay=(p.t+' '+p.d+' '+p.k).toLowerCase();
      if(!terms.every(function(t){return hay.indexOf(t)>-1;}))return null;
      var s=0;
      terms.forEach(function(t){
        if(p.t.toLowerCase().indexOf(t)>-1)s+=3;
        if(p.k.toLowerCase().indexOf(t)>-1)s+=1;
      });
      return {p:p,s:s};
    }).filter(Boolean).sort(function(a,b){return b.s-a.s;}).slice(0,60);
    if(!hits.length){
      out.innerHTML='<p class="notice">No pages matched &ldquo;'+esc(q)+
        '&rdquo;. Try fewer or different words.</p>';
      return;
    }
    out.innerHTML='<h2 style="margin:0 0 1.1rem;font-size:.95rem;font-weight:600;color:var(--sage)">'+hits.length+
      ' result'+(hits.length>1?'s':'')+'</h2>'+
      hits.map(function(x){
        return '<a class="card" href="'+x.p.u+'" style="margin-bottom:14px">'+
          '<span class="card-tag">'+esc(x.p.k)+'</span>'+
          '<h3>'+esc(x.p.t)+'</h3><p>'+esc(x.p.d)+'</p>'+
          '<span class="card-meta">Open page &rarr;</span></a>';
      }).join('');
  }
  fetch('/search-index.json').then(function(r){return r.json();}).then(function(d){
    idx=d;
    var u=new URLSearchParams(location.search).get('q');
    if(u){input.value=u;}
    run();
    try{input.focus();}catch(e){}
  }).catch(function(){
    out.innerHTML='<p class="notice">Search could not load. Browse the '+
      '<a href="/directory.html">directory</a> or '+
      '<a href="/sitemap.html">sitemap</a> instead.</p>';
  });
  input.addEventListener('input',run);
})();
`;

module.exports = [{
  path: "/search.html",
  title: "Search PattayaPets — vets, guides & areas",
  description: "Search every page on PattayaPets — the Pattaya pet directory, " +
    "guides, areas and businesses.",
  crumb: "Search",
  breadcrumbs: [],
  noindex: true,
  updated: "2026-05-22",
  body:
    '<section class="section"><div class="container">' +
    '<p class="eyebrow">Search</p>' +
    "<h1>Search PattayaPets</h1>" +
    '<p class="lede">Find a vet, a guide, an area or a business &mdash; across ' +
    "every page on the site.</p>" +
    '<div class="field" style="max-width:600px;margin-top:1.6rem">' +
    '<label for="pp-q">What are you looking for?</label>' +
    '<input type="search" id="pp-q" autocomplete="off" ' +
    'placeholder="Try &ldquo;24 hour vet&rdquo;, &ldquo;Jomtien&rdquo;, &ldquo;bring dog from UK&rdquo;"></div>' +
    '<div id="pp-results" style="margin-top:1.8rem">' +
    '<noscript><p class="notice">Search needs JavaScript enabled. You can browse ' +
    'the <a href="/directory.html">business directory</a>, the ' +
    '<a href="/guides.html">guides</a>, or the <a href="/sitemap.html">full ' +
    "sitemap</a> instead.</p></noscript></div>" +
    "</div></section>" +
    "<script>" + SCRIPT + "</script>"
}];
