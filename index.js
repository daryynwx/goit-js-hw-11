import{a as p,S as f,i as n}from"./assets/vendor-Db2TdIkw.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const m="49675233-bcad49a609535a7dfe89adf5b",y="https://pixabay.com/api/";async function g(a){const t={key:m,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0};return(await p.get(y,{params:t})).data}let h=new f(".gallery a",{captionsData:"alt",captionDelay:250});const c=document.querySelector(".gallery"),l=document.querySelector(".loader-wrapper");function b(a){const t=a.map(({webformatURL:o,largeImageURL:i,tags:e,likes:r,views:s,comments:u,downloads:d})=>`
    <li class="gallery-item">
      <a href="${i}">
        <img src="${o}" alt="${e}" />
      </a>
      <div class="info">
        <p><b>Likes:</b> ${r}</p>
        <p><b>Views:</b> ${s}</p>
        <p><b>Comments:</b> ${u}</p>
        <p><b>Downloads:</b> ${d}</p>
      </div>
    </li>
  `).join("");c.insertAdjacentHTML("beforeend",t),h.refresh()}function L(){c.innerHTML=""}function q(){l.classList.remove("hidden")}function w(){l.classList.add("hidden")}const S=document.querySelector(".form");document.querySelector(".gallery");document.querySelector(".loader");S.addEventListener("submit",async a=>{a.preventDefault();const t=a.target.elements["search-text"].value.trim();if(!t){n.warning({message:"Please enter a search query!",position:"topRight"});return}L(),q();try{const o=await g(t);if(o.hits.length===0){n.info({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}b(o.hits)}catch(o){n.error({message:"An error occurred while fetching images.",position:"topRight"}),console.error(o)}finally{w()}});document.querySelector(".loader-wrapper");
//# sourceMappingURL=index.js.map
