import{u as V,r as h,o as d,c as _,a as e,b as c,w as l,d as u,t as v,p as g,e as $,T as P,F as y,f as w,g as T,S as j,N as M,P as z,A as B,h as G,i as O,j as F,k as U,l as q,m as D}from"./vendor.1a597ed1.js";const W=function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const m of a.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&n(m)}).observe(document,{childList:!0,subtree:!0});function s(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerpolicy&&(a.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?a.credentials="include":o.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(o){if(o.ep)return;o.ep=!0;const a=s(o);fetch(o.href,a)}};W();var Y="/assets/logo.328b57d6.png";var p=(t,i)=>{const s=t.__vccOpts||t;for(const[n,o]of i)s[n]=o;return s};const x=t=>(g("data-v-0c1e7fcf"),t=t(),$(),t),J={id:"frame"},K={id:"label"},X={id:"menu"},Z=["placeholder"],Q=x(()=>e("span",{id:"menu_icon",class:"icon"},[e("svg",{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",role:"img",viewBox:"0 0 448 512",class:"icon"},[e("path",{fill:"currentColor",d:"M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z"})])],-1)),ee=x(()=>e("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#000000"},[e("path",{d:"M0 0h24v24H0V0z",fill:"none"}),e("path",{d:"M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z"})],-1)),te=[ee],oe=x(()=>e("div",{class:"menu-mask"},null,-1)),se={setup(t){const{locale:i}=V();function s(){localStorage.getItem("lang")=="en-US"?(localStorage.setItem("lang","zh-CN"),i.value="zh-CN"):(localStorage.setItem("lang","en-US"),i.value="en-US")}return(n,o)=>{const a=h("router-link");return d(),_("div",J,[e("span",K,[e("img",{id:"logo",src:Y,alt:"",onClick:o[0]||(o[0]=m=>n.$router.push({name:"Index"}))})]),e("span",X,[c(a,{id:"home_tab",class:"tab",to:"/"},{default:l(()=>[u(v(n.$t("header.home")),1)]),_:1}),c(a,{id:"about_tab",class:"tab",to:"/about"},{default:l(()=>[u(v(n.$t("header.about")),1)]),_:1}),c(a,{id:"news_tab",class:"tab",to:"/news"},{default:l(()=>[u(v(n.$t("header.news")),1)]),_:1}),c(a,{id:"gallery_tab",class:"tab",to:"/gallery"},{default:l(()=>[u(v(n.$t("header.gallery")),1)]),_:1}),e("input",{id:"search_bar",placeholder:n.$t("common.search")},null,8,Z),Q,e("span",{id:"translate_icon",class:"icon",onClick:s},te)]),oe])}}};var f=p(se,[["__scopeId","data-v-0c1e7fcf"]]);const ae={props:["ICP","copyright","address","contact"]},ne={style:{border:"none"}},ie={style:{border:"none"}};function ce(t,i,s,n,o,a){return d(),_("footer",null,[e("div",null,[e("span",null,v(s.ICP),1),e("span",ne,v(s.copyright),1)]),e("div",null,[e("span",null,v(s.address),1),e("span",ie,v(s.contact),1)])])}var b=p(ae,[["render",ce],["__scopeId","data-v-6e7cec10"]]);const re={setup(t){var i=window.navigator.userLanguage||window.navigator.language;return localStorage.setItem("lang",i),(s,n)=>{const o=h("router-view");return d(),_(y,null,[c(f),c(P,{name:"fade"},{default:l(()=>[c(o)]),_:1}),c(b,{ICP:"\u4EACICP\u590713051651\u53F7 - 1",copyright:"\u5317\u4EAC\u4E2D\u5B66\u7248\u6743\u6240\u6709 \xA9 2014 BJZX All Rights Reserved.",address:"\u5730\u5740\uFF1A\u5317\u4EAC\u5E02\u671D\u9633\u533A\u897F\u575D\u6CB3\u4E1C\u91CC1\u53F7",contact:"\u8054\u7CFB\u7535\u8BDD\uFF1A 010-50981098\uFF08\u897F\u575D\u6CB3\u6821\u533A\uFF09 010-50951290\uFF08\u4E1C\u575D\u5357\u6821\u533A\uFF09"})],64)}}};var de="/assets/Rocket.5301b9b4.mp4",S="/assets/cherry.cf22968d.png";const _e={},r=t=>(g("data-v-4405eae7"),t=t(),$(),t),le={id:"bg"},ue={id:"bg_cover"},pe={id:"container",class:"main"},ve=r(()=>e("div",{id:"video"},[e("video",{controls:""},[e("source",{src:de,type:"video/mp4"}),u("Your browser does not support the video tag. ")])],-1)),me={id:"information"},he=r(()=>e("div",{id:"about_title"},"\u8FD9\u91CC\u662F\u5317\u4EAC\u4E2D\u5B66\u56FD\u9645\u90E8",-1)),fe=r(()=>e("div",{class:"about_text"},"\u5317\u4EAC\u4E2D\u5B66\uFF0C\u4E0E\u9996\u90FD\u540C\u540D\u30022013\u5E74\uFF0C\u7ECF\u5317\u4EAC\u5E02\u653F\u5E9C\u6279\u51C6\u3001\u7531\u671D\u9633\u533A\u653F\u5E9C\u4E3B\u529E\u7684\u5317\u4EAC\u4E2D\u5B66\u6B63\u5F0F\u5EFA\u6821\uFF0C\u5907\u53D7\u793E\u4F1A\u5404\u754C\u5173\u6CE8\u3002",-1)),ge=r(()=>e("div",{class:"about_text"},"2017\u5E74\uFF0C\u4E3A\u4E86\u6EE1\u8DB3\u90E8\u5206\u5B66\u751F\u548C\u5BB6\u957F\u7684\u591A\u5143\u5316\u5347\u5B66\u9700\u6C42\uFF0C\u642D\u5EFA\u6210\u957F\u7684\u7ACB\u4EA4\u6865\uFF0C\u5317\u4EAC\u4E2D\u5B66\u7EC4\u5EFA\u56FD\u9645\u65B9\u5411\u73ED\u7EA7\u3002\u5B66\u6821\u575A\u6301\u4E2D\u56FD\u7ACB\u573A\u3001\u5F00\u653E\u591A\u5143\u3001\u878D\u5408\u521B\u65B0\uFF0C\u57FA\u4E8E\u8BFE\u7A0B\u6539\u9769\u7279\u8272\u5B9E\u8DF5\uFF0C\u548C\u7F8E\u56FD\u683C\u4F26\u7F57\u514B\u9AD8\u4E2D\u5171\u540C\u5F00\u53D1\u4E86\u56FD\u9645\u6559\u80B2\u4F53\u7CFB\u8BFE\u7A0B\u3001\u5305\u62EC\u9AD8\u4E2D\u57FA\u7840\u8BFE\u7A0B\u3001AP\u8BFE\u7A0B\u3001\u7279\u8272\u9009\u4FEE\u8BFE\u7A0B\uFF0C\u6EE1\u8DB3\u5B66\u751F\u4E2A\u6027\u5316\u53D1\u5C55\u9700\u6C42\u3002",-1)),$e=w('<div id="principle" class="main" data-v-4405eae7><div id="principle_speech" data-v-4405eae7><div id="left" data-v-4405eae7>\u201C</div><div id="text" data-v-4405eae7>STH FROM OUR DEAR CHERRY</div><div id="right" data-v-4405eae7>\u201D</div><div id="principle_info" data-v-4405eae7>\u2014\u2014\u5468\u6167 \u5317\u4EAC\u4E2D\u5B66\u56FD\u9645\u90E8\u6821\u957F</div></div><img class="pic" src="'+S+'" alt="Cherry" data-v-4405eae7></div>',1),be={id:"school_info_container"},ye=r(()=>e("div",{id:"school_info_title",class:"main"},"\u4E86\u89E3\u5317\u4EAC\u4E2D\u5B66\u56FD\u9645\u90E8",-1)),we={id:"school_info",class:"main"},xe={id:"idea",class:"info"},Ie={class:"cover"},Se={class:"info_container"},He=r(()=>e("div",{class:"info_title"},"\u7406\u5FF5",-1)),Ee={class:"info_text"},Ne=u(" 2017\u5E74\uFF0C\u4E3A\u4E86\u6EE1\u8DB3\u90E8\u5206\u5B66\u751F\u548C\u5BB6\u957F\u7684\u591A\u5143\u5316\u5347\u5B66\u9700\u6C42\uFF0C\u642D\u5EFA\u6210\u957F\u7684\u7ACB\u4EA4\u6865\uFF0C\u5317\u4EAC\u4E2D\u5B66\u7EC4\u5EFA\u56FD\u9645\u65B9\u5411\u73ED\u7EA7\u3002\u5B66\u6821\u575A\u6301\u4E2D\u56FD\u7ACB\u573A\u3001\u5F00\u653E\u591A\u5143\u3001\u878D\u5408\u521B\u65B0\u3002 "),Ae=r(()=>e("br",null,null,-1)),Le=r(()=>e("br",null,null,-1)),ke=u("\u4E86\u89E3\u66F4\u591A"),Re={id:"environment",class:"info"},Ce={class:"cover"},Ve={class:"info_container"},Pe=r(()=>e("div",{class:"info_title"},"\u73AF\u5883",-1)),Te={class:"info_text"},je=u(" 2017\u5E74\uFF0C\u4E3A\u4E86\u6EE1\u8DB3\u90E8\u5206\u5B66\u751F\u548C\u5BB6\u957F\u7684\u591A\u5143\u5316\u5347\u5B66\u9700\u6C42\uFF0C\u642D\u5EFA\u6210\u957F\u7684\u7ACB\u4EA4\u6865\uFF0C\u5317\u4EAC\u4E2D\u5B66\u7EC4\u5EFA\u56FD\u9645\u65B9\u5411\u73ED\u7EA7\u3002\u5B66\u6821\u575A\u6301\u4E2D\u56FD\u7ACB\u573A\u3001\u5F00\u653E\u591A\u5143\u3001\u878D\u5408\u521B\u65B0\u3002 "),Me=r(()=>e("br",null,null,-1)),ze=r(()=>e("br",null,null,-1)),Be=u("\u4E86\u89E3\u66F4\u591A"),Ge={id:"faculty",class:"info"},Oe={class:"cover"},Fe={class:"info_container"},Ue=r(()=>e("div",{class:"info_title"},"\u5E08\u8D44",-1)),qe={class:"info_text"},De=u(" 2017\u5E74\uFF0C\u4E3A\u4E86\u6EE1\u8DB3\u90E8\u5206\u5B66\u751F\u548C\u5BB6\u957F\u7684\u591A\u5143\u5316\u5347\u5B66\u9700\u6C42\uFF0C\u642D\u5EFA\u6210\u957F\u7684\u7ACB\u4EA4\u6865\uFF0C\u5317\u4EAC\u4E2D\u5B66\u7EC4\u5EFA\u56FD\u9645\u65B9\u5411\u73ED\u7EA7\u3002\u5B66\u6821\u575A\u6301\u4E2D\u56FD\u7ACB\u573A\u3001\u5F00\u653E\u591A\u5143\u3001\u878D\u5408\u521B\u65B0\u3002 "),We=r(()=>e("br",null,null,-1)),Ye=r(()=>e("br",null,null,-1)),Je=u("\u4E86\u89E3\u66F4\u591A");function Ke(t,i){const s=h("router-link");return d(),_(y,null,[e("div",le,[e("div",ue,[e("div",pe,[ve,e("div",me,[he,fe,ge,c(s,{class:"link",to:"/about"},{default:l(()=>[u(v(t.$t("common.readMore")),1)]),_:1})])])])]),$e,e("div",be,[ye,e("div",we,[e("div",xe,[e("div",Ie,[e("div",Se,[He,e("div",Ee,[Ne,Ae,Le,c(s,{class:"link",to:"/about"},{default:l(()=>[ke]),_:1})])])])]),e("div",Re,[e("div",Ce,[e("div",Ve,[Pe,e("div",Te,[je,Me,ze,c(s,{class:"link",to:"/about"},{default:l(()=>[Be]),_:1})])])])]),e("div",Ge,[e("div",Oe,[e("div",Fe,[Ue,e("div",qe,[De,We,Ye,c(s,{class:"link",to:"/about"},{default:l(()=>[Je]),_:1})])])])])])])],64)}var H=p(_e,[["render",Ke],["__scopeId","data-v-4405eae7"]]),E="/assets/main.085d8efb.jpg";const Xe={class:"main"},Ze=w('<h1 class="title" data-v-aeff2fdc>N<span style="color:brown;" data-v-aeff2fdc>E</span>WS</h1><div class="box" data-v-aeff2fdc><img alt="" src="'+E+'" data-v-aeff2fdc><div class="content" data-v-aeff2fdc><h2 class="n-title" data-v-aeff2fdc>TITLE</h2><p class="n-note" data-v-aeff2fdc> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p></div></div>',2),Qe=[Ze],et={setup(t){return(i,s)=>(d(),_("div",Xe,Qe))}};var tt=p(et,[["__scopeId","data-v-aeff2fdc"]]);const ot=t=>(g("data-v-8d7dfea2"),t=t(),$(),t),st={class:"bg"},at={class:"main"},nt=ot(()=>e("h1",{class:"title"},"GALLERY",-1)),it={class:"grid"},ct=["src"],rt={props:{images:Array},setup(t){return(i,s)=>(d(),_("div",st,[e("div",at,[nt,e("div",it,[(d(!0),_(y,null,T(t.images,n=>(d(),_("img",{src:n,alt:"",class:"item"},null,8,ct))),256))])])]))}};var N=p(rt,[["__scopeId","data-v-8d7dfea2"]]);var dt="/assets/main2.968903f7.jpg",_t="/assets/main3.9d63d882.jpg";j.use([M,z,B]);const lt={components:{HeaderVue:f,HomeAboutVue:H,HomeNewsVue:tt,HomeGalleryVue:N,HomeAbout:H,HomeGallery:N,Swiper:G,SwiperSlide:O},data(){return{title:"\u6B22\u8FCE\u6765\u5230\u5317\u4EAC\u4E2D\u5B66\u56FD\u9645\u90E8"}}},I=t=>(g("data-v-ceac7982"),t=t(),$(),t),ut={id:"head"},pt=I(()=>e("img",{src:E,alt:"main1"},null,-1)),vt=I(()=>e("img",{src:dt,alt:"main2"},null,-1)),mt=I(()=>e("img",{src:_t,alt:"main3"},null,-1));function ht(t,i,s,n,o,a){const m=h("swiper-slide"),L=h("swiper"),k=h("HomeAbout"),R=h("HomeNewsVue"),C=h("HomeGallery");return d(),_("div",null,[e("div",ut,[c(L,{navigation:!0,pagination:{clickable:!0},loop:!0,autoplay:{delay:4e3},class:"mySwiper"},{default:l(()=>[c(m,null,{default:l(()=>[pt]),_:1}),c(m,null,{default:l(()=>[vt]),_:1}),c(m,null,{default:l(()=>[mt]),_:1})]),_:1})]),e("div",null,[c(k),c(R),c(C,{images:["/src/assets/1.jpg","/src/assets/2.jpg","/src/assets/3.jpg","/src/assets/4.jpg","/src/assets/5.jpg","/src/assets/2.jpg"]},null,8,["images"])])])}var ft=p(lt,[["render",ht],["__scopeId","data-v-ceac7982"]]);const gt={components:{HeaderVue:f,FooterVue:b}};function $t(t,i,s,n,o,a){return d(),_("h1",null,"NEWS")}var bt=p(gt,[["render",$t]]);const yt={components:{HeaderVue:f,FooterVue:b}},wt=w('<div id="Background" data-v-1c407ece><div id="UpperPart" data-v-1c407ece><h1 id="AboveTitle" data-v-1c407ece>\u5173<span style="color:#b63f34;" data-v-1c407ece>\u4E8E</span>\u6211\u4EEC</h1></div></div><div id="BodyPart" data-v-1c407ece><div id="LeftPart" data-v-1c407ece><div id="Text" data-v-1c407ece><p data-v-1c407ece>\u6D4B\u8BD5\u6587\u672C\u6D4B\u8BD5\u6587\u672C</p><br data-v-1c407ece><p data-v-1c407ece>\u6D4B\u8BD5\u6587\u672C\u6D4B\u8BD5\u6587\u672C</p><br data-v-1c407ece></div><div id="Slogan" data-v-1c407ece><p style="color:#b63f34;margin:2px;" data-v-1c407ece>BETTER</p><p style="color:#b63f34;margin:2px;" data-v-1c407ece>ME</p><p style="color:#2464a4;margin:2px;" data-v-1c407ece>BETTER</p><p style="color:#2464a4;margin:2px;" data-v-1c407ece>WORLD</p></div></div><div id="RightPart" data-v-1c407ece><img src="'+S+'" data-v-1c407ece></div></div>',2);function xt(t,i,s,n,o,a){return wt}var It=p(yt,[["render",xt],["__scopeId","data-v-1c407ece"]]);const St={name:"Err404"};function Ht(t,i,s,n,o,a){return d(),_("h1",null,"404 Not Found!")}var Et=p(St,[["render",Ht]]);const Nt={name:"Err5xx"};function At(t,i,s,n,o,a){return d(),_("h1",null,"5xx Error!")}var Lt=p(Nt,[["render",At]]);const kt={components:{HeaderVue:f,FooterVue:b}};function Rt(t,i,s,n,o,a){return d(),_("h1",null,"GALLERY")}var Ct=p(kt,[["render",Rt]]);const Vt=F({history:U(),routes:[{path:"/",name:"Index",component:ft},{path:"/news",name:"News",component:bt},{path:"/about",name:"About",component:It},{path:"/gallery",name:"Gallery",component:Ct},{path:"/*",name:"Err404",component:Et},{path:"/error/500",name:"Err5xx",component:Lt}]}),Pt={"en-US":{header:{home:"Home",about:"About",news:"News",gallery:"Gallery"},common:{readMore:"Read More",search:"Search..."}},"zh-CN":{header:{home:"\u9996\u9875",about:"\u5173\u4E8E\u6211\u4EEC",news:"\u65B0\u95FB",gallery:"\u753B\u5ECA"},common:{readMore:"\u4E86\u89E3\u66F4\u591A",search:"\u641C\u7D22..."}}},Tt=q({locale:localStorage.getItem("lang"),fallbackLocal:"en",messages:Pt}),A=D(re);A.use(Vt).use(Tt);A.mount("#app");
