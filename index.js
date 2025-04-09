import{a as f,S as p,i as n}from"./assets/vendor-Db2TdIkw.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const m="49675233-bcad49a609535a7dfe89adf5b",y="https://pixabay.com/api/";async function g(s){const r={key:m,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0};return(await f.get(y,{params:r})).data}let h=new p(".gallery a",{captionsData:"alt",captionDelay:250});const c=document.querySelector(".gallery"),l=document.querySelector(".loader");function b(s){const r=s.map(({webformatURL:o,largeImageURL:i,tags:e,likes:t,views:a,comments:u,downloads:d})=>`
      <li class="gallery-item">
        <a href="${i}">
          <img src="${o}" alt="${e}" />
        </a>
        <div class="info">
          <p><b>Likes:</b> ${t}</p>
          <p><b>Views:</b> ${a}</p>
          <p><b>Comments:</b> ${u}</p>
          <p><b>Downloads:</b> ${d}</p>
        </div>
      </li>
    `).join("");c.insertAdjacentHTML("beforeend",r),h.refresh()}function L(){c.innerHTML=""}function q(){l.classList.remove("hidden")}function S(){l.classList.add("hidden")}const w=document.querySelector(".form");document.querySelector(".gallery");document.querySelector(".loader");w.addEventListener("submit",async s=>{s.preventDefault();const r=s.target.elements["search-text"].value.trim();if(!r){n.warning({message:"Please enter a search query!",position:"topRight"});return}L(),q();try{const o=await g(r);if(o.hits.length===0){n.info({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}b(o.hits)}catch(o){n.error({message:"An error occurred while fetching images.",position:"topRight"}),console.error(o)}finally{S()}});
//# sourceMappingURL=index.js.map
