if(!self.define){let e,i={};const n=(n,s)=>(n=new URL(n+".js",s).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(s,r)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(i[t])return;let d={};const o=e=>n(e,t),f={module:{uri:t},exports:d,require:o};i[t]=Promise.all(s.map((e=>f[e]||o(e)))).then((e=>(r(...e),d)))}}define(["./workbox-afb8f5db"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"favicon.ico",revision:"746db68de78df5d3feaeac6b6c757b2a"},{url:"index.html",revision:"843aa7d59cd2882fa2cbe71ec2d48a56"},{url:"install.bundle.js",revision:"0090281fd2c7383093de18d2339fb71a"},{url:"install.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"main.bundle.js",revision:"86d087f5b2b27035ab82ee719a160b96"},{url:"main.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"}],{})}));