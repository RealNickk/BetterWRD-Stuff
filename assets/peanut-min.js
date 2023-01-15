// peanut-min.js
// An extension library for BetterWRD made by RealNickk.

// DEVELOPMENT MODE LOADING:
// File structure should be as follows:
// - assets
//   - peanut.js
//   - other crap
// Run a static server in the root at port 8080 on either loopback or public.
// npm install -g node-static (or whatever) then run static -p 8080 in the root.
// Set the __peanutDev variable to true.

// Use this to load the library in an asynchronous function:
/*
    // -- Peanut loader -- //
    const __peanutDev = false;
    if(window.peanutReady)await window.peanutReady;else if(typeof window.peanut==="undefined")await new Promise(r=>{window.peanutResolve=r;bwrd.includeLibrary(__peanutDev?"http://localhost:8080/lib/peanut.js":"https://realnickk.github.io/BetterWRD-Stuff/assets/peanut-min.js")});
    // -- Peanut loader -- //
*/
// You should be loading this BEFORE you use the peanut object.
// You can wrap it in an asynchronus lambda closure if you like synchronus.
// IMPORTANT: Production code and its repository is expected to change at any
//            time with no notice.

(async()=>{if(void 0!==window.peanut)return void window.peanutResolveInternal(window.peanut);bwrd.injectStyle(".peanut-prompt { padding: 12px; margin: auto; margin-bottom: 12px; max-width: 80vw; } .peanut-prompt > p { margin-top: 10px; } .peanut-prompt > .peanut-content { padding-top: 12px; margin: 10px 0; } .peanut-prompt > .peanut-content > span { padding: 0.5rem 2rem; margin-right: 0.5rem; border-radius: 10px; background-color: #9bb6ec; color: #000000; } .peanut-prompt > .peanut-content > span:hover { cursor: pointer; }");const e={},t={loadLibrary:async(e,t)=>new Promise((n=>{if(void 0!==window[t])return void n();bwrd.includeLibrary(e).addEventListener("load",(()=>{if(t){const e=setInterval((()=>{void 0!==window[t]&&(clearInterval(e),n())}),10)}else n()}))})),guid:()=>"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)})),injectFrame:e=>{const t=document.createElement("iframe");return t.src=e,t.style="display: none;",document.body.appendChild(t),t.contentWindow},getNotifications:async()=>{const e=[];return $($.parseHTML(await $.get("/"))).find(".navItem.navbell > .menu").find(".notification").each((async(t,n)=>{const a=$(n),r=a.find("img");let i=r.length>0?r.attr("src"):"https://i.imgur.com/frqpbRZ.png";i.startsWith("/")&&(i="/"===i.substring(0,1)?"https://forum.wearedevs.net"+i:"https://forum.wearedevs.net/"+i);const o=a.find("a"),p=o.text(),d=o.attr("href");let s="";s=void 0!==d?"/"===d.substring(0,1)?"https://forum.wearedevs.net"+d:"https://forum.wearedevs.net/"+d:"https://forum.wearedevs.net/";const c=a.attr("data-id");e.push({image:i,text:p,link:s,id:c})})),e},addPrompt:(n,a,r)=>{let i=$("#peanut-prompts");if(!i.length){let e=$("main");const t=e.find("> div:first-child");e.css("margin-left")&&("0px"!=e.css("margin-left")?e.css("margin-left")!=e.css("margin-right")&&(e=t):t.css("margin-left")==t.css("margin-right")&&(e=t)),i=$('<div id="peanut-prompts"></div>'),e.prepend(i)}const o=$('<div class="peanut-prompt border1 theme1 round"></div>');if(i.append(o),o.append(`<h3>${n}</h3>`),a&&o.append(`<p>${a}</p>`),r&&r.length){o.append('<div class="peanut-content">');const n=o.find(".peanut-content");r.forEach((a=>{a.clickId=t.guid(),e[a.clickId]=a.callback,n.append(`<span onclick="peanut.reportClick('${a.clickId}');">${a.title}</span>`)}))}return{remove:()=>{r.forEach((t=>delete e[t.clickId])),o.remove()}}},reportClick:t=>{const n=e[t];n&&n()},pageMatch:(e,t)=>new URL(window.location.href)[e].match(t),isForum:()=>null!==t.pageMatch("host",/^forum.wearedevs.net$/)};window.peanutReady=new Promise((async e=>{void 0===window.jQuery&&await t.loadLibrary("https://code.jquery.com/jquery-3.6.0.min.js","jQuery"),window.peanut=t,window.peanutResolve&&window.peanutResolve(t),e(t),window.peanutResolveInternal=e}))})();
