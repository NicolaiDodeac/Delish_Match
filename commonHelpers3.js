import{S as w,N as L,a as D,K as S,A as q}from"./assets/vendor-3f890e17.js";(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))c(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function r(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(s){if(s.ep)return;s.ep=!0;const o=r(s);fetch(s.href,o)}})();const a={header:document.querySelector(".header"),openMenuBtn:document.querySelector(".open-menu-btn"),closeMenuBtn:document.querySelector(".close-menu-btn"),menu:document.querySelector(".header-menu"),links:document.querySelectorAll(".header-nav-link"),navItems:document.querySelectorAll(".header-nav-item")};let d=0;const E=()=>{a.menu.classList.add("header-menu-open"),document.body.classList.add("menu-open"),document.addEventListener("click",k),document.addEventListener("keydown",v)},n=()=>{a.menu.classList.remove("header-menu-open"),document.body.classList.remove("menu-open"),document.removeEventListener("click",k),document.removeEventListener("keydown",v)},k=e=>{a.menu.contains(e.target)||a.openMenuBtn.contains(e.target)||n()},v=e=>{e.key==="Escape"&&n()};a.openMenuBtn.addEventListener("click",E);a.closeMenuBtn.addEventListener("click",n);a.links.forEach(e=>{e.addEventListener("click",n)});function M(){let e=window.scrollY;a.navItems.forEach(l=>{const r=document.querySelector(l.querySelector("a").getAttribute("href"));r.offsetTop<=e&&r.offsetTop+r.offsetHeight>e?l.classList.add("header-nav-item-active"):l.classList.remove("header-nav-item-active")})}window.addEventListener("scroll",()=>{M();const e=window.scrollY;e>d?a.header.classList.add("header-hidden"):a.header.classList.remove("header-hidden"),d=e});M();const u="/Delish_Match/assets/gallery_1_desc_@1x-4e580faf.webp",g="/Delish_Match/assets/gallery_1_desc_@2x-37e2b0f3.webp",m="/Delish_Match/assets/gallery_2_desc_@1x-17a86d4c.webp",y="/Delish_Match/assets/gallery_2_desc_@2x-ab2b666c.webp",p="/Delish_Match/assets/gallery_3_desc_@1x-93fdb272.webp",_="/Delish_Match/assets/gallery_3_desc_@2x-ec0d5410.webp",b="/Delish_Match/assets/gallery_4_desc_@1x-90976cd5.webp",h="/Delish_Match/assets/gallery_4_desc_@2x-e0c04e38.webp",f="/Delish_Match/assets/gallery_5_desc_@1x-9865c85b.webp",x="/Delish_Match/assets/gallery_5_desc_@2x-0eadfa0a.webp",t={gallery1_mob1x:u,gallery1_mob2x:g,gallery1_desk1x:u,gallery1_desk2x:g,gallery2_mob1x:m,gallery2_mob2x:y,gallery2_desk1x:m,gallery2_desk2x:y,gallery3_mob1x:p,gallery3_mob2x:_,gallery3_desk1x:p,gallery3_desk2x:_,gallery4_mob1x:b,gallery4_mob2x:h,gallery4_desk1x:b,gallery4_desk2x:h,gallery5_mob1x:f,gallery5_mob2x:x,gallery5_desk1x:f,gallery5_desk2x:x},I=document.querySelector(".gallery-list");document.querySelector(".gallery-icon-prev");document.querySelector(".gallery-icon-next");async function A(){const e=[{imgMob1:t.gallery1_mob1x,imgMob2:t.gallery1_mob2x,imgDesk1:t.gallery1_desk1x,imgDesk2:t.gallery1_desk2x},{imgMob1:t.gallery2_mob1x,imgMob2:t.gallery2_mob2x,imgDesk1:t.gallery2_desk1x,imgDesk2:t.gallery2_desk2x},{imgMob1:t.gallery3_mob1x,imgMob2:t.gallery3_mob2x,imgDesk1:t.gallery3_desk1x,imgDesk2:t.gallery3_desk2x},{imgMob1:t.gallery4_mob1x,imgMob2:t.gallery4_mob2x,imgDesk1:t.gallery4_desk1x,imgDesk2:t.gallery4_desk2x},{imgMob1:t.gallery5_mob1x,imgMob2:t.gallery5_mob2x,imgDesk1:t.gallery5_desk1x,imgDesk2:t.gallery5_desk2x}];P(e)}function P(e){const l=e.map(r=>`<li class="gallery-item swiper-slide">
      <picture >
        <source
          media="(min-width: 1200px)"
          srcset="${r.imgDesk1} 1x,${r.imgDesk2} 2x"
          type="image/png"
        />

        <source
          media="(max-width: 1199px)"
           srcset="${r.imgMob1} 1x,${r.imgMob2} 2x"
          type="image/png"
        />
        <img
          src="${r.imgMob1} "
          alt="img_${r.imgMob1}"
          class="galleryImg"
          loading="lazy"
        />
      </picture>
      </li>`).join("");I.insertAdjacentHTML("beforeend",l)}document.addEventListener("DOMContentLoaded",()=>{A(),new w(".gallery-swiper",{modules:[L,D,S],speed:600,loop:!0,navigation:{nextEl:".gallery-swiper-button-next",prevEl:".gallery-swiper-button-prev"},keyboard:{enabled:!0,onlyInViewport:!0},slidesPerView:1,spaceBetween:16,breakpoints:{1199.98:{slidesPerView:2,spaceBetween:24}}})});const $={listEl:document.querySelector(".faq-list")},O=[{title:"Can I play Delish Match : Match3 & Design offline?",text:"Yes, the game can be played offline, but some features may require an internet connection."},{title:"Is the game suitable for children?",text:"Yes, it’s designed to be family-friendly, but please check the age rating for specific guidance."},{title:"Are there in-app purchases?",text:"Yes, the game offers optional in-app purchases to enhance the gameplay experience."},{title:"How do I get more lives or moves?",text:"Lives usually regenerate over time, and extra moves can be purchased or earned by completing special tasks."},{title:"Can I sync the game across devices?",text:"Yes, if you’re connected to a Google Play or Facebook account, your progress can be synced across multiple devices."},{title:"How often are new levels added?",text:"New levels and content are added regularly through updates."},{title:"What do I do if I encounter a problem or bug?",text:"You can report issues through the in-game support feature or via the app’s page on the Google Play Store."}];function B({title:e,text:l}){return`  <li class="ac" id="list-question">
        <h3 class="ac-header">
          <button type="button" class="ac-trigger">
            ${e}
          </button>
        </h3>
        <div class="ac-panel">
          <p class="ac-text">${l}</p>
        </div>
      </li>
      `}function Y(e){return e.map(B).join("")}function C(e){const l=Y(e);$.listEl.innerHTML=l}C(O);new q(".accordion-container",{});
//# sourceMappingURL=commonHelpers3.js.map
