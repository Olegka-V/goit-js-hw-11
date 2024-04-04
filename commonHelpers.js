import{s as p,i as c}from"./assets/vendor-5c957d73.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();document.querySelector(".image-large");const m=document.querySelector(".list-width-item");function u({largeImageURL:r,likes:s,views:a,downloads:i,comments:e,webformatURL:t}){return`<li class="item">
        <a class="image-large" href="${r}">
            <img
            class="img"
            src="${t}"
            alt=""
            />
        </a>
        
        <ul class="list-width-img">
          <li class="item-params">
            <p class="name-params">Likes</p>
            <p class="params">${s}</p>
          </li>
          <li class="item-params">
            <p class="name-params">Views</p>
            <p class="params">${a}</p>
          </li>
          <li class="item-params">
            <p class="name-params">Comments</p>
            <p class="params">${e}</p>
          </li>
          <li class="item-params">
            <p class="name-params">Downloads</p>
            <p class="params">${i}</p>
          </li>
        </ul>
      </li>`}function f({hits:r}){m.innerHTML="";const s=r.map(u).join("");m.insertAdjacentHTML("beforeend",s),new p(".list-width-item .image-large").refresh()}function d(r){const s="https://pixabay.com/",a="api/",i="43200126-fe47e1a89238cebb9641f8f5f",e=new URLSearchParams({key:i,q:r,image_type:"photo",orientation:"horizontal",safesearch:"true"}),t=`${s}${a}?${e}`;return fetch(t).then(o=>o.json())}const g=document.querySelector(".form"),n=document.querySelector(".list-width-item"),l=document.querySelector("#loading");l.classList.remove("loader");g.addEventListener("submit",r=>{r.preventDefault();const s=r.target.elements.query.value,a=s.trim();l.classList.add("loader"),d(s).then(i=>{const e=f(i);a?e.length?n.innerHTML=e:(c.warning({title:"Caution",message:"Not correct data",position:"topLeft"}),n.innerHTML=""):(c.error({title:"Error",message:"You don`t put value",position:"topRight"}),n.innerHTML="")}).finally(()=>l.classList.remove("loader")),r.target.reset()});
//# sourceMappingURL=commonHelpers.js.map
