(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();(()=>{const c=document.querySelector(".js-menu-container"),o=document.querySelector(".js-open-menu"),s=document.querySelector(".js-close-menu"),r=()=>{const e=c.querySelectorAll('a[href*="#"]');console.log("click");const t=o.getAttribute("aria-expanded")==="true"||!1;o.setAttribute("aria-expanded",!t),c.classList.toggle("is-open");const n=t?"enableBodyScroll":"disableBodyScroll";if(bodyScrollLock[n](document.body),e.length!==0){if(!t){e.forEach(i=>{i.addEventListener("click",r)});return}e.forEach(i=>{i.removeEventListener("click",r)})}};o.addEventListener("click",r),s.addEventListener("click",r),window.matchMedia("(min-width: 1279px)").addEventListener("change",e=>{e.matches&&(c.classList.remove("is-open"),o.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))})})();
//# sourceMappingURL=commonHelpers.js.map
