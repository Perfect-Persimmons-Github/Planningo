if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let r=Promise.resolve();return s[e]||(r=new Promise((async r=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=r}else importScripts(e),r()}))),r.then((()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]}))},r=(r,s)=>{Promise.all(r.map(e)).then((e=>s(1===e.length?e[0]:e)))},s={require:Promise.resolve(r)};self.define=(r,i,o)=>{s[r]||(s[r]=Promise.resolve().then((()=>{let s={};const c={uri:location.origin+r.slice(1)};return Promise.all(i.map((r=>{switch(r){case"exports":return s;case"module":return c;default:return e(r)}}))).then((e=>{const r=o(...e);return s.default||(s.default=r),s}))})))}}define("./service-worker.js",["./workbox-316ad618"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"0.bundle.js",revision:"91971bcd8759df71e5f54ab4bfc0018d"},{url:"bundle.js",revision:"9b6ab365c1976cbff33b80745cb0ab96"},{url:"favicon.ico",revision:"c92b85a5b907c70211f4ec25e29a8c4a"},{url:"index.html",revision:"865d43eda9a2da480576107d98ec3eb2"},{url:"logo192.png",revision:"33dbdd0177549353eeeb785d02c294af"},{url:"logo512.png",revision:"917515db74ea8d1aee6a246cfbcc0b45"},{url:"manifest.json",revision:"d9d975cebe2ec20b6c652e1e4c12ccf0"},{url:"robots.txt",revision:"fa1ded1ed7c11438a9b0385b1e112850"},{url:"style.css",revision:"275ad671348e044ff503e7bd03f84727"}],{})}));
//# sourceMappingURL=service-worker.js.map
