import{a as u,S as y,i as d}from"./assets/vendor-673f5103.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function n(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(t){if(t.ep)return;t.ep=!0;const s=n(t);fetch(t.href,s)}})();u.defaults.baseURL="https://api.unsplash.com";async function f(r,e){const n="LxvKVGJqiSe6NcEVZOaLXC-f2JIIWZaq_o0WrF8mwJc";return(await u.get("/search/photos",{params:{query:r,page:e,per_page:20,orientation:"portrait",client_id:n}})).data}const o={form:document.querySelector(".js-search-form"),galleryList:document.querySelector(".js-gallery"),target:document.querySelector(".js-backdrop"),loadBtn:document.querySelector(".js-load-more")};function p(r){return r.map(e=>`<li><img src="${e.urls.small}" alt="${e.alt_description}"></li>`).join("")}const L={lines:16,length:41,width:19,radius:29,scale:.85,corners:1,speed:1,rotate:15,animation:"spinner-line-fade-more",direction:1,color:"#3c45c3",fadeColor:"transparent",top:"52%",left:"50%",shadow:"0 0 1px transparent",zIndex:2e9,className:"spinner",position:"absolute"},m=new y(L);function g(){m.spin(o.target),o.target.classList.remove("is-hidden")}function h(){m.stop(),o.target.classList.add("is-hidden")}o.form.addEventListener("submit",S);o.loadBtn.addEventListener("click",b);let a=1,c=null;async function S(r){r.preventDefault(),o.galleryList.innerHTML="",g(),c=r.currentTarget.elements["user-search-query"].value.trim();try{const e=await f(c,a);if(e.results.length===0)return d.error({message:"Sorry, there are no images matching your search query. Please try again!"});o.galleryList.innerHTML=p(e.results),e.total>20&&o.loadBtn.classList.remove("is-hidden")}catch(e){console.log(e.message)}finally{h(),r.target.reset()}}async function b(){g(),a+=1;try{const r=await f(c,a);o.galleryList.insertAdjacentHTML("beforeend",p(r.results));const{height:e}=document.querySelector(".gallery").firstElementChild.getBoundingClientRect();if(window.scrollBy({top:e*2,behavior:"smooth"}),Math.ceil(r.total/20)===a)return o.loadBtn.classList.add("is-hidden"),d.info({message:"We're sorry, but you've reached the end of search results"})}catch(r){console.log(r.message)}finally{h()}}
//# sourceMappingURL=commonHelpers.js.map
