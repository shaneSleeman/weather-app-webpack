(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>u});var r=t(81),i=t.n(r),a=t(645),o=t.n(a),c=t(667),s=t.n(c),d=new URL(t(535),t.b),l=o()(i()),p=s()(d);l.push([e.id,"@font-face {\n    font-family: 'Roboto';\n    src: url("+p+');\n}\n\nbody {\n    margin: 0;\n    font-family: \'Roboto\';\n    display: grid;\n    width: 100vw;\n    height: 100vh;\n    grid-template-columns: 1fr 3fr 1fr;\n    grid-template-rows: 2fr 3fr 2fr;\n    grid-template-areas: ". . ." ". content ." ". . .";\n}\n\n.searchbar {\n    display: flex;\n    gap: 10px;\n    align-items: center;\n}\n\n.content {\n    grid-area: content;\n    background-color: aliceblue;\n    border-radius: 30px;\n    box-shadow: 5px 5px 20px lightblue;\n\n    display: flex;\n    flex-direction: column;\n    /*align-items: center;*/\n    justify-content: space-around;\n}\n\n.temps {\n    display: flex;\n    gap: 20px;\n}\n\n.temp {\n    font-size: 2rem;\n}\n\n.minmax {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\ninput {\n    background-color: aliceblue;\n    border-radius: 10px;\n    font-size: 1.5rem;\n}\n\nbutton {\n    background-color: lightblue;\n    border-radius: 10px;\n    font-size: 1.5rem;\n}\n\n.topbar {\n    display: flex;\n    align-items: center;\n}\n\n.searchbar, .topbar, .humidityline {\n    justify-content: space-between;\n    padding-left: 80px;\n    padding-right: 80px;\n}\n\n.citytext {\n    display: flex;\n    flex-direction: column;\n    gap: 0px;\n}\n\n.humidityline {\n    display: flex;\n}',""]);const u=l},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,i,a){"string"==typeof e&&(e=[[null,e,void 0]]);var o={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(o[s]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);r&&o[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),i&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=i):l[4]="".concat(i)),n.push(l))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},o=[],c=0;c<e.length;c++){var s=e[c],d=r.base?s[0]+r.base:s[0],l=a[d]||0,p="".concat(d," ").concat(l);a[d]=l+1;var u=t(p),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)n[u].references++,n[u].updater(m);else{var f=i(m,r);r.byIndex=c,n.splice(c,0,{identifier:p,updater:f,references:1})}o.push(p)}return o}function i(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,i){var a=r(e=e||[],i=i||{});return function(e){e=e||[];for(var o=0;o<a.length;o++){var c=t(a[o]);n[c].references--}for(var s=r(e,i),d=0;d<a.length;d++){var l=t(a[d]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}a=s}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var i=void 0!==t.layer;i&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,i&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},471:(e,n,t)=>{t.d(n,{Z:()=>r});const r=e=>({name:e.name,country:e.sys.country,temp:e.main.temp,max:e.main.temp_max,min:e.main.temp_min,condition:e.weather[0].description,humidity:e.main.humidity,wind:e.wind.speed})},535:(e,n,t)=>{e.exports=t.p+"fc2b5060f7accec5cf74.ttf"}},n={};function t(r){var i=n[r];if(void 0!==i)return i.exports;var a=n[r]={id:r,exports:{}};return e[r](a,a.exports,t),a.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var e=t(379),n=t.n(e),r=t(795),i=t.n(r),a=t(569),o=t.n(a),c=t(565),s=t.n(c),d=t(216),l=t.n(d),p=t(589),u=t.n(p),m=t(426),f={};f.styleTagTransform=u(),f.setAttributes=s(),f.insert=o().bind(null,"head"),f.domAPI=i(),f.insertStyleElement=l(),n()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;var h=t(471);document.querySelector("body");const y=document.querySelector(".content");async function v(e){try{const n=await fetch("http://api.openweathermap.org/data/2.5/weather?q="+e+"&APPID=1392939c8de4d48505175baaadda2965",{mode:"cors"}),t=await n.json();console.log(t),g((0,h.Z)(t))}catch(e){g("error")}}function g(e){y.innerHTML="";const n=document.createElement("div");n.classList.toggle("searchbar");const t=document.createElement("input");t.setAttribute("placeholder","Sydney");const r=document.createElement("button");r.innerText="Search",r.addEventListener("click",(()=>{v(t.value)})),t.addEventListener("keypress",(e=>{13==e.keyCode&&v(t.value)})),n.appendChild(t),n.appendChild(r),y.appendChild(n);const i=document.createElement("div");if(i.style.fontSize="1.5rem",i.style.fontWeight="600","error"===e)i.innerText="Invalid location!",i.style.textAlign="center",y.appendChild(i);else{const n=document.createElement("div");i.innerText=`${e.name}, ${e.country}`;const t=document.createElement("div");t.innerText=e.condition,t.style.textTransform="capitalize";const r=document.createElement("div");r.classList.add("citytext"),r.appendChild(i),r.appendChild(t),n.appendChild(r);const a=document.createElement("div");a.classList.add("temps");const o=document.createElement("div");o.classList.toggle("temp"),o.innerText=`${Math.round(e.temp-273)}°C`;const c=document.createElement("div");c.classList.add("minmax");const s=document.createElement("div");s.innerText=`Max: ${Math.round(e.max-273)}°C`;const d=document.createElement("div");d.innerText=`Min: ${Math.round(e.min-273)}°C`,c.appendChild(s),c.appendChild(d),a.appendChild(o),a.appendChild(c),n.appendChild(a),n.classList.toggle("topbar"),y.appendChild(n);const l=document.createElement("div");l.classList.add("humidityline");const p=document.createElement("div");p.innerText="Humidity:",p.style.fontSize="1.5rem",p.style.fontWeight="600";const u=document.createElement("div");u.innerText=`${e.humidity}%`,u.style.fontSize="1.5rem",l.appendChild(p),l.appendChild(u),y.appendChild(l);const m=document.createElement("div");m.classList.add("humidityline");const f=document.createElement("div");f.innerText="Wind Speed:",f.style.fontSize="1.5rem",f.style.fontWeight="600";const h=document.createElement("div");h.innerText=Math.round(3.6*e.wind*10)/10+"kph",h.style.fontSize="1.5rem",m.appendChild(f),m.appendChild(h),y.appendChild(m)}}v("sydney")})()})();