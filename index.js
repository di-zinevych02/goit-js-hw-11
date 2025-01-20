import{i as n,S as u}from"./assets/vendor-5ObWk2rO.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const p=t=>{const a=new URLSearchParams({key:"48264002-554f1b79d0a5e107f7aa1f349",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`https://pixabay.com/api/?${a}`).then(s=>{if(!s.ok)throw new Error(s.status);return s.json()})},d=t=>`
    <li class="gallery-card">
    <a class="gallery-link" href="${t.webformatURL}">
    <img class="gallery-img"
    src="${t.largeImageURL}" 
    alt="${t.tags}" 
    loading="lazy" />
    <div class="info">
  <div class="info-list">
    <span class="info-item">Likes</span>
    <span class="info-item-value">${t.likes}</span>
  </div>
  <div class="info-list">
    <span class="info-item">Views</span>
    <span class="info-item-value">${t.views}</span>
  </div>
  <div class="info-list">
    <span class="info-item">Comments</span>
    <span class="info-item-value">${t.comments}</span>
  </div>
  <div class="info-list">
    <span class="info-item">Downloads</span>
    <span class="info-item-value">${t.downloads}</span>
  </div>
</div>
    </a>
    </li>`,m=document.querySelector(".js-search-form");document.querySelector(".search-btn");const c=document.querySelector(".js-gallery"),l=document.querySelector(".loader"),f=t=>{l.style.display="block",t.preventDefault();const a=t.currentTarget.elements.user_query.value.trim();if(a===""){l.style.display="none",n.warning({message:"Please enter a search term.",position:"topRight"});return}p(a).then(s=>{if(s.hits.length===0){n.info({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),c.innerHTML="",searchFormEl.reset();return}const o=s.hits.map(r=>d(r)).join("");c.innerHTML=o,new u(".gallery a",{captionsData:"alt",captionDelay:300}).refresh()}).catch(s=>{n.error({title:"Error",message:"Something went wrong, please try again later.",position:"topRight"}),console.error("Error fetching data:",error)}).finally(()=>{l.style.display="none"})};m.addEventListener("submit",f);
//# sourceMappingURL=index.js.map
