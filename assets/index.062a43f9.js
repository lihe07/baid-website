import{u as G,r as I,a as f,o as r,c as _,b as t,d as n,w as v,e as u,t as c,n as q,p as g,f as b,g as F,F as w,T as W,h as Y,i as K,j as x,k as z,S as X,N as Z,P as Q,A as tt,l as et,m as at,q as y,s as st,v as ot,x as it,y as nt,z as dt,B as lt,C as ct}from"./vendor.9f5031cc.js";const rt=function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const d of a)if(d.type==="childList")for(const l of d.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function s(a){const d={};return a.integrity&&(d.integrity=a.integrity),a.referrerpolicy&&(d.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?d.credentials="include":a.crossorigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function o(a){if(a.ep)return;a.ep=!0;const d=s(a);fetch(a.href,d)}};rt();const _t="modulepreload",H={},ut="/",P=function(i,s){return!s||s.length===0?i():Promise.all(s.map(o=>{if(o=`${ut}${o}`,o in H)return;H[o]=!0;const a=o.endsWith(".css"),d=a?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${d}`))return;const l=document.createElement("link");if(l.rel=a?"stylesheet":_t,a||(l.as="script",l.crossOrigin=""),l.href=o,document.head.appendChild(l),a)return new Promise((m,S)=>{l.addEventListener("load",m),l.addEventListener("error",S)})})).then(()=>i())};var vt="/assets/logo.328b57d6.png";var p=(e,i)=>{const s=e.__vccOpts||e;for(const[o,a]of i)s[o]=a;return s};const E=e=>(g("data-v-05bf7f0f"),e=e(),b(),e),pt={id:"header"},mt={id:"frame"},ht=E(()=>t("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[t("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[t("path",{d:"M4 8h16"}),t("path",{d:"M4 16h16"})])],-1)),ft=[ht],gt={id:"label"},bt={id:"menu"},$t=["placeholder"],yt=E(()=>t("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#000000"},[t("path",{d:"M0 0h24v24H0V0z",fill:"none"}),t("path",{d:"M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z"})],-1)),wt=[yt],xt=E(()=>t("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 32 32"},[t("path",{d:"M24 9.4L22.6 8L16 14.6L9.4 8L8 9.4l6.6 6.6L8 22.6L9.4 24l6.6-6.6l6.6 6.6l1.4-1.4l-6.6-6.6L24 9.4z",fill:"currentColor"})],-1)),kt=[xt],It={setup(e){const{locale:i}=G();function s(){localStorage.getItem("lang")==="en-US"?(localStorage.setItem("lang","zh-CN"),i.value="zh-CN"):(localStorage.setItem("lang","en-US"),i.value="en-US")}const o=I(!1);return(a,d)=>{const l=f("router-link");return r(),_("div",pt,[t("div",mt,[t("div",{id:"menu_icon",class:"icon",onClick:d[0]||(d[0]=m=>{o.value=!0})},ft),t("span",gt,[t("img",{id:"logo",src:vt,alt:"",onClick:d[1]||(d[1]=m=>a.$router.push({name:"Index"}))})]),t("div",bt,[n(l,{id:"home_tab",class:"tab",to:"/"},{default:v(()=>[u(c(a.$t("header.home")),1)]),_:1}),n(l,{id:"about_tab",class:"tab",to:"/about"},{default:v(()=>[u(c(a.$t("header.about")),1)]),_:1}),n(l,{id:"news_tab",class:"tab",to:"/news"},{default:v(()=>[u(c(a.$t("header.news")),1)]),_:1}),n(l,{id:"gallery_tab",class:"tab",to:"/gallery"},{default:v(()=>[u(c(a.$t("header.gallery")),1)]),_:1}),n(l,{id:"contact_tab",class:"tab",to:"/contact"},{default:v(()=>[u(c(a.$t("header.contact")),1)]),_:1}),t("input",{id:"search_bar",placeholder:a.$t("common.search")},null,8,$t),t("div",{id:"translate_icon",class:"icon",onClick:s},wt)])]),t("div",{class:q(["side_menu",{show:o.value,hide:!o.value}])},[t("div",{id:"close_icon",onClick:d[2]||(d[2]=m=>o.value=!1)},kt)],2)])}}};var B=p(It,[["__scopeId","data-v-05bf7f0f"]]),Lt="/assets/footer_logo.8b78e286.png";const St={props:["ICP","copyright","address","contact"]},Et=e=>(g("data-v-3329f7da"),e=e(),b(),e),Ct={id:"footer_container",class:"main"},At=Et(()=>t("div",{id:"img_container"},[t("img",{src:Lt,alt:"logo"})],-1)),Nt={id:"text_container"},qt={style:{border:"none"}},zt={style:{border:"none"}};function Ht(e,i,s,o,a,d){return r(),_("footer",null,[t("div",Ct,[At,t("div",Nt,[t("div",null,[t("span",null,c(s.ICP),1),t("span",qt,c(s.copyright),1)]),t("div",null,[t("span",null,c(s.address),1),t("span",zt,c(s.contact),1)])])])])}var R=p(St,[["render",Ht],["__scopeId","data-v-3329f7da"]]);const Pt={setup(e){if(!localStorage.getItem("lang")){let a=window.navigator.userLanguage||window.navigator.language;localStorage.setItem("lang",a)}const i=I(!1);function s(a){o.value=window.scrollY>window.innerHeight,i.value=a.deltaY<10}const o=I(!1);return F(()=>{window.addEventListener("wheel",s)}),(a,d)=>{const l=f("router-view");return r(),_(w,null,[n(B,{class:q([{show:i.value,hide:!i.value,enable_control:o.value},"header"])},null,8,["class"]),n(l,null,{default:v(({Component:m})=>[n(W,{name:"fade",mode:"out-in"},{default:v(()=>[(r(),Y(K(m)))]),_:2},1024)]),_:1}),n(R,{ICP:"\u4EACICP\u590713051651\u53F7 - 1",copyright:"\u5317\u4EAC\u4E2D\u5B66\u7248\u6743\u6240\u6709 \xA9 2014 BJZX All Rights Reserved.",address:"\u5730\u5740\uFF1A\u5317\u4EAC\u5E02\u671D\u9633\u533A\u897F\u575D\u6CB3\u4E1C\u91CC1\u53F7",contact:"\u8054\u7CFB\u7535\u8BDD\uFF1A 010-50981098\uFF08\u897F\u575D\u6CB3\u6821\u533A\uFF09 010-50951290\uFF08\u4E1C\u575D\u5357\u6821\u533A\uFF09"})],64)}}};var Bt=p(Pt,[["__scopeId","data-v-7feaea04"]]),Rt="/assets/Rocket.5301b9b4.mp4",Tt="/assets/cherry.cf22968d.png";const jt={},$=e=>(g("data-v-ba9a664c"),e=e(),b(),e),Ut={id:"homeAbout"},Jt={id:"bg"},Ot={id:"container",class:"main"},Dt=$(()=>t("div",{id:"video","data-aos":"fade-right","data-aos-duration":"600","data-aos-delay":"300"},[t("video",{controls:""},[t("source",{src:Rt,type:"video/mp4"}),u("Your browser does not support the video tag. ")])],-1)),Vt={id:"information"},Mt={class:"about_title","data-aos":"fade-left","data-aos-duration":"600","data-aos-delay":"300"},Gt={class:"about_text","data-aos":"fade-left","data-aos-duration":"600","data-aos-delay":"300"},Ft=u(" \u5317\u4EAC\u4E2D\u5B66\uFF0C\u4E0E\u9996\u90FD\u540C\u540D\u30022013\u5E74\uFF0C\u7ECF\u5317\u4EAC\u5E02\u653F\u5E9C\u6279\u51C6\u3001\u7531\u671D\u9633\u533A\u653F\u5E9C\u4E3B\u529E\u7684\u5317\u4EAC\u4E2D\u5B66\u6B63\u5F0F\u5EFA\u6821\uFF0C\u5907\u53D7\u793E\u4F1A\u5404\u754C\u5173\u6CE8\u3002 "),Wt=$(()=>t("br",null,null,-1)),Yt=u("2017\u5E74\uFF0C\u4E3A\u4E86\u6EE1\u8DB3\u90E8\u5206\u5B66\u751F\u548C\u5BB6\u957F\u7684\u591A\u5143\u5316\u5347\u5B66\u9700\u6C42\uFF0C\u642D\u5EFA\u6210\u957F\u7684\u7ACB\u4EA4\u6865\uFF0C\u5317\u4EAC\u4E2D\u5B66\u7EC4\u5EFA\u56FD\u9645\u65B9\u5411\u73ED\u7EA7\u3002\u5B66\u6821\u575A\u6301\u4E2D\u56FD\u7ACB\u573A\u3001\u5F00\u653E\u591A\u5143\u3001\u878D\u5408\u521B\u65B0\uFF0C\u57FA\u4E8E\u8BFE\u7A0B\u6539\u9769\u7279\u8272\u5B9E\u8DF5\uFF0C\u548C\u7F8E\u56FD\u683C\u4F26\u7F57\u514B\u9AD8\u4E2D\u5171\u540C\u5F00\u53D1\u4E86\u56FD\u9645\u6559\u80B2\u4F53\u7CFB\u8BFE\u7A0B\u3001\u5305\u62EC\u9AD8\u4E2D\u57FA\u7840\u8BFE\u7A0B\u3001AP\u8BFE\u7A0B\u3001\u7279\u8272\u9009\u4FEE\u8BFE\u7A0B\uFF0C\u6EE1\u8DB3\u5B66\u751F\u4E2A\u6027\u5316\u53D1\u5C55\u9700\u6C42\u3002 "),Kt=x('<div id="principle" class="main" data-v-ba9a664c><div id="principle_speech" data-v-ba9a664c><div id="left" data-aos="fade-right" data-aos-duration="600" data-aos-delay="300" data-v-ba9a664c>\u201C</div><div id="text" data-aos="zoom-in" data-aos-duration="600" data-aos-delay="300" data-v-ba9a664c>STH FROM OUR DEAR CHERRY</div><div id="right" data-aos="fade-left" data-aos-duration="600" data-aos-delay="300" data-v-ba9a664c>\u201D</div><div id="principle_info" data-aos="zoom-in" data-aos-duration="600" data-aos-delay="300" data-v-ba9a664c>\u2014\u2014\u5468\u6167 \u5317\u4EAC\u4E2D\u5B66\u56FD\u9645\u90E8\u6821\u957F</div></div><img class="pic shadow" src="'+Tt+'" alt="Cherry" data-aos="fade-left" data-aos-duration="600" data-aos-delay="300" data-v-ba9a664c></div>',1),Xt={id:"school_info_container",class:"shadow"},Zt={id:"school_info_title",class:"main","data-aos":"zoom-in","data-aos-duration":"600","data-aos-delay":"300"},Qt={id:"school_info",class:"main"},te={id:"idea",class:"info shadow","data-aos":"zoom-in","data-aos-duration":"600","data-aos-delay":"300"},ee={class:"info_container"},ae={class:"info_title"},se={class:"info_text"},oe=u(" 2017\u5E74\uFF0C\u4E3A\u4E86\u6EE1\u8DB3\u90E8\u5206\u5B66\u751F\u548C\u5BB6\u957F\u7684\u591A\u5143\u5316\u5347\u5B66\u9700\u6C42\uFF0C\u642D\u5EFA\u6210\u957F\u7684\u7ACB\u4EA4\u6865\uFF0C\u5317\u4EAC\u4E2D\u5B66\u7EC4\u5EFA\u56FD\u9645\u65B9\u5411\u73ED\u7EA7\u3002\u5B66\u6821\u575A\u6301\u4E2D\u56FD\u7ACB\u573A\u3001\u5F00\u653E\u591A\u5143\u3001\u878D\u5408\u521B\u65B0\u3002 "),ie=$(()=>t("br",null,null,-1)),ne=$(()=>t("br",null,null,-1)),de={id:"courses",class:"info shadow","data-aos":"zoom-in","data-aos-duration":"600","data-aos-delay":"300"},le={class:"info_container"},ce={class:"info_title"},re={class:"info_text"},_e=u(" 2017\u5E74\uFF0C\u4E3A\u4E86\u6EE1\u8DB3\u90E8\u5206\u5B66\u751F\u548C\u5BB6\u957F\u7684\u591A\u5143\u5316\u5347\u5B66\u9700\u6C42\uFF0C\u642D\u5EFA\u6210\u957F\u7684\u7ACB\u4EA4\u6865\uFF0C\u5317\u4EAC\u4E2D\u5B66\u7EC4\u5EFA\u56FD\u9645\u65B9\u5411\u73ED\u7EA7\u3002\u5B66\u6821\u575A\u6301\u4E2D\u56FD\u7ACB\u573A\u3001\u5F00\u653E\u591A\u5143\u3001\u878D\u5408\u521B\u65B0\u3002 "),ue=$(()=>t("br",null,null,-1)),ve=$(()=>t("br",null,null,-1)),pe={id:"faculty",class:"info shadow","data-aos":"zoom-in","data-aos-duration":"600","data-aos-delay":"300"},me={class:"info_container"},he={class:"info_title"},fe={class:"info_text"},ge=u(" 2017\u5E74\uFF0C\u4E3A\u4E86\u6EE1\u8DB3\u90E8\u5206\u5B66\u751F\u548C\u5BB6\u957F\u7684\u591A\u5143\u5316\u5347\u5B66\u9700\u6C42\uFF0C\u642D\u5EFA\u6210\u957F\u7684\u7ACB\u4EA4\u6865\uFF0C\u5317\u4EAC\u4E2D\u5B66\u7EC4\u5EFA\u56FD\u9645\u65B9\u5411\u73ED\u7EA7\u3002\u5B66\u6821\u575A\u6301\u4E2D\u56FD\u7ACB\u573A\u3001\u5F00\u653E\u591A\u5143\u3001\u878D\u5408\u521B\u65B0\u3002 "),be=$(()=>t("br",null,null,-1)),$e=$(()=>t("br",null,null,-1));function ye(e,i){const s=f("router-link");return r(),_("div",Ut,[t("div",Jt,[t("div",Ot,[Dt,t("div",Vt,[t("div",Mt,c(e.$t("homeAbout.about_title")),1),t("div",Gt,[Ft,Wt,Yt,n(s,{class:"link",to:"/about"},{default:v(()=>[u(c(e.$t("common.read_more")),1)]),_:1})])])])]),Kt,t("div",Xt,[t("div",Zt,c(e.$t("homeAbout.school_info_title")),1),t("div",Qt,[t("div",te,[t("div",ee,[t("div",ae,c(e.$t("homeAbout.idea")),1),t("div",se,[oe,ie,ne,n(s,{class:"link",to:"/about"},{default:v(()=>[u(c(e.$t("common.read_more")),1)]),_:1})])])]),t("div",de,[t("div",le,[t("div",ce,c(e.$t("homeAbout.courses")),1),t("div",re,[_e,ue,ve,n(s,{class:"link",to:"/about"},{default:v(()=>[u(c(e.$t("common.read_more")),1)]),_:1})])])]),t("div",pe,[t("div",me,[t("div",he,c(e.$t("homeAbout.faculty")),1),t("div",fe,[ge,be,$e,n(s,{class:"link",to:"/about"},{default:v(()=>[u(c(e.$t("common.read_more")),1)]),_:1})])])])])])])}var we=p(jt,[["render",ye],["__scopeId","data-v-ba9a664c"]]),h="/assets/main.085d8efb.jpg";const xe={class:"main"},ke=x('<h1 class="title" data-v-37af7048>N<span style="color:var(--baid-red);" data-v-37af7048>E</span>WS</h1><div class="box" data-v-37af7048><img alt="" src="'+h+'" data-v-37af7048><div class="blocker" data-v-37af7048></div><div class="content" data-v-37af7048><h2 class="n-title" data-v-37af7048>TITLE</h2><p class="n-note" data-v-37af7048> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p></div><br data-v-37af7048><div class="content" data-v-37af7048><h2 class="n-title" data-v-37af7048>TITLE</h2><p class="n-note" data-v-37af7048> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p></div><div class="blocker" data-v-37af7048></div><img alt="" src="'+h+'" data-v-37af7048></div>',2),Ie=[ke],Le={setup(e){return(i,s)=>(r(),_("div",xe,Ie))}};var Se=p(Le,[["__scopeId","data-v-37af7048"]]);const Ee=e=>(g("data-v-7d3d09be"),e=e(),b(),e),Ce={class:"bg"},Ae={class:"main"},Ne=Ee(()=>t("h1",{class:"title"},"GALLERY",-1)),qe={class:"grid"},ze=["src"],He={props:{images:Array},setup(e){return(i,s)=>(r(),_("div",Ce,[t("div",Ae,[Ne,t("div",qe,[(r(!0),_(w,null,z(e.images,o=>(r(),_("img",{src:o,key:o,class:"item"},null,8,ze))),128))])])]))}};var T=p(He,[["__scopeId","data-v-7d3d09be"]]);var j="/assets/1.a9546687.jpg",U="/assets/2.e277ca29.jpg",J="/assets/3.c5c1906a.jpg",O="/assets/4.5ad55502.jpg",D="/assets/5.78f810e9.jpg",Pe="/assets/6.cd883367.jpg",Be="/assets/7.e67e9b3f.jpg",Re="/assets/8.b16012cf.jpg",L="/assets/main2.968903f7.jpg",Te="/assets/main3.9d63d882.jpg";X.use([Z,Q,tt]);const je={components:{HomeNews:Se,HomeAbout:we,HomeGallery:T,Swiper:et,SwiperSlide:at},data(){return{title:"\u6B22\u8FCE\u6765\u5230\u5317\u4EAC\u4E2D\u5B66\u56FD\u9645\u90E8",images:[j,U,J,O,D,Pe,Be,Re]}}},C=e=>(g("data-v-1642125e"),e=e(),b(),e),Ue={id:"head"},Je=C(()=>t("img",{src:h,alt:"main1"},null,-1)),Oe=C(()=>t("img",{src:L,alt:"main2"},null,-1)),De=C(()=>t("img",{src:Te,alt:"main3"},null,-1));function Ve(e,i,s,o,a,d){const l=f("swiper-slide"),m=f("swiper"),S=f("HomeAbout"),V=f("HomeNews"),M=f("HomeGallery");return r(),_("div",null,[t("div",Ue,[n(m,{navigation:!0,pagination:{clickable:!0},loop:!0,autoplay:{delay:4e3},class:"mySwiper"},{default:v(()=>[n(l,null,{default:v(()=>[Je]),_:1}),n(l,null,{default:v(()=>[Oe]),_:1}),n(l,null,{default:v(()=>[De]),_:1})]),_:1})]),t("div",null,[n(S),n(V),n(M,{images:a.images},null,8,["images"])])])}var Me=p(je,[["render",Ve],["__scopeId","data-v-1642125e"]]);const Ge=e=>(g("data-v-956307d6"),e=e(),b(),e),Fe={class:"box"},We={class:"content"},Ye={class:"n-title"},Ke={class:"n-subtitle"},Xe=Ge(()=>t("div",{class:"blocker"},null,-1)),Ze=["src"],Qe={props:["content","title","imageurl","subtitle","link"],setup(e){const i=e;return(s,o)=>(r(),_("div",Fe,[t("div",We,[t("h2",Ye,c(e.title),1),t("h3",Ke,c(e.subtitle),1),t("p",{class:"n-note",onClick:o[0]||(o[0]=(...a)=>s.Jump&&s.Jump(...a))},c(e.content),1)]),Xe,t("img",{src:i.imageurl,alt:"\u6D3B\u52A8\u914D\u56FE"},null,8,Ze)]))}};var A=p(Qe,[["__scopeId","data-v-956307d6"]]);const ta=e=>(g("data-v-7d514d4a"),e=e(),b(),e),ea={class:"box"},aa=["src"],sa=ta(()=>t("div",{class:"blocker"},null,-1)),oa={class:"content"},ia={class:"n-title"},na={class:"n-subtitle"},da={props:["content","title","imageurl","subtitle","link"],setup(e){const i=e;return(s,o)=>(r(),_("div",ea,[t("img",{src:i.imageurl,alt:"\u6D3B\u52A8\u914D\u56FE"},null,8,aa),sa,t("div",oa,[t("h2",ia,c(e.title),1),t("h3",na,c(e.subtitle),1),t("p",{class:"n-note",onClick:o[0]||(o[0]=(...a)=>s.Jump&&s.Jump(...a))},c(e.content),1)])]))}};var N=p(da,[["__scopeId","data-v-7d514d4a"]]);const la=e=>(g("data-v-a03a13e8"),e=e(),b(),e),ca=["src"],ra={class:"main"},_a=la(()=>t("h1",{class:"title"},[u("N"),t("span",{style:{color:"var(--baid-red)"}},"E"),u("WS")],-1)),ua={setup(e){return(i,s)=>(r(),_(w,null,[t("img",{src:y(h),alt:"",class:"background"},null,8,ca),t("div",ra,[_a,n(N,{content:"\u5728\u6B64\u8F93\u5165\u6587\u5B57",title:"\u5728\u6B64\u8F93\u5165\u6587\u5B57",imageurl:y(h),subtitle:"\u5E74\u4EFD/\u6708\u4EFD/\u65E5\u671F",link:"\u8FD8\u6CA1\u505A\u8DF3\u8F6C\u529F\u80FD"},null,8,["imageurl"]),n(A,{content:"\u5728\u6B64\u8F93\u5165\u6587\u5B57",title:"\u5728\u6B64\u8F93\u5165\u6587\u5B57",imageurl:y(h),subtitle:"\u5E74\u4EFD/\u6708\u4EFD/\u65E5\u671F",link:"\u8FD8\u6CA1\u505A\u8DF3\u8F6C\u529F\u80FD"},null,8,["imageurl"]),n(N,{content:"\u5728\u6B64\u8F93\u5165\u6587\u5B57",title:"\u5728\u6B64\u8F93\u5165\u6587\u5B57",imageurl:y(h),subtitle:"\u5E74\u4EFD/\u6708\u4EFD/\u65E5\u671F",link:"\u8FD8\u6CA1\u505A\u8DF3\u8F6C\u529F\u80FD"},null,8,["imageurl"]),n(A,{content:"\u5728\u6B64\u8F93\u5165\u6587\u5B57",title:"\u5728\u6B64\u8F93\u5165\u6587\u5B57",imageurl:y(h),subtitle:"\u5E74\u4EFD/\u6708\u4EFD/\u65E5\u671F",link:"\u8FD8\u6CA1\u505A\u8DF3\u8F6C\u529F\u80FD"},null,8,["imageurl"]),n(N,{content:"\u5728\u6B64\u8F93\u5165\u6587\u5B57",title:"\u5728\u6B64\u8F93\u5165\u6587\u5B57",imageurl:y(h),subtitle:"\u5E74\u4EFD/\u6708\u4EFD/\u65E5\u671F",link:"\u8FD8\u6CA1\u505A\u8DF3\u8F6C\u529F\u80FD"},null,8,["imageurl"]),n(A,{content:"\u5728\u6B64\u8F93\u5165\u6587\u5B57",title:"\u5728\u6B64\u8F93\u5165\u6587\u5B57",imageurl:y(h),subtitle:"\u5E74\u4EFD/\u6708\u4EFD/\u65E5\u671F",link:"\u8FD8\u6CA1\u505A\u8DF3\u8F6C\u529F\u80FD"},null,8,["imageurl"])])],64))}};var va=p(ua,[["__scopeId","data-v-a03a13e8"]]);const pa={class:"main"},ma=x('<div class="box" data-v-3f48334a><img alt="" src="'+h+'" data-v-3f48334a><div class="blocker" data-v-3f48334a></div><div class="content" data-v-3f48334a><h2 class="n-title" style="color:white;" data-v-3f48334a>TITLE</h2><p class="n-note" style="color:white;" data-v-3f48334a> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p></div><br data-v-3f48334a><div class="content" data-v-3f48334a><h2 class="n-title" data-v-3f48334a>TITLE</h2><p class="n-note" data-v-3f48334a> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p></div><div class="blocker" data-v-3f48334a></div><img alt="" src="'+h+'" data-v-3f48334a></div>',1),ha=[ma],fa={setup(e){return(i,s)=>(r(),_("div",pa,ha))}};var ga=p(fa,[["__scopeId","data-v-3f48334a"]]),ba="/assets/idea1.05a52f20.svg",$a="/assets/idea1hover.20cf68cf.svg",ya="/assets/idea2.bc438852.svg",wa="/assets/idea2hover.a6128be5.svg",xa="/assets/idea3.25af50f3.svg",ka="/assets/idea3hover.8a33474f.svg",Ia="/assets/idea4.e5776d4a.svg",La="/assets/idea4hover.06032f95.svg";const Sa={components:{HeaderVue:B,UniversalNewsBlock:ga,HomeGallery:T,FooterVue:R}},k=e=>(g("data-v-35cff0b1"),e=e(),b(),e),Ea=x('<h1 id="AboveTitle" data-v-35cff0b1>\u5173<span style="color:#b63f34;" data-v-35cff0b1>\u4E8E</span>\u6211\u4EEC</h1><div id="BodyPart" data-v-35cff0b1><div id="LeftPart" data-v-35cff0b1><div id="Text" data-v-35cff0b1><p class="UnderLine" data-v-35cff0b1>\u6D4B\u8BD5\u6587\u672C\u6D4B\u8BD5\u6587\u672C</p><p class="UnderLine" data-v-35cff0b1>\u6D4B\u8BD5\u6587\u672C\u6D4B\u8BD5\u6587\u672C</p><p class="UnderLine" data-v-35cff0b1>\u6D4B\u8BD5\u6587\u672C\u6D4B\u8BD5\u6587\u672C</p><br data-v-35cff0b1></div><div id="Slogan" data-v-35cff0b1><p style="color:#b63f34;margin:2px;" data-v-35cff0b1>BETTER</p><p style="color:#b63f34;margin:2px;" data-v-35cff0b1>ME</p><p style="color:#2464a4;margin:2px;" data-v-35cff0b1>BETTER</p><p style="color:#2464a4;margin:2px;" data-v-35cff0b1>WORLD</p></div></div><div id="RightPart" data-v-35cff0b1><div id="idea1" data-v-35cff0b1><img src="'+ba+'" class="idea_b" data-v-35cff0b1><img src="'+$a+'" class="idea_child" id="idea1hover" data-v-35cff0b1></div><div id="idea2" data-v-35cff0b1><img src="'+ya+'" class="idea_b" data-v-35cff0b1><img src="'+wa+'" class="idea_child" id="idea2hover" data-v-35cff0b1></div><div id="idea3" data-v-35cff0b1><img src="'+xa+'" class="idea_b" data-v-35cff0b1><img src="'+ka+'" class="idea_child" id="idea3hover" data-v-35cff0b1></div><div id="idea4" data-v-35cff0b1><img src="'+Ia+'" class="idea_b" data-v-35cff0b1><img src="'+La+'" class="idea_child" id="idea4hover" data-v-35cff0b1></div></div></div>',2),Ca={id:"ContentPart"},Aa={id:"ContentPart1"},Na=k(()=>t("div",{style:{width:"100%",height:"360px"}},null,-1)),qa={id:"ContentPart2"},za=k(()=>t("h1",{style:{color:"white","text-align":"center","padding-top":"50px"}},"\u6559\u5E08\u98CE\u91C7",-1)),Ha=k(()=>t("img",{src:L,class:"teachers"},null,-1)),Pa=k(()=>t("img",{src:L,class:"teachers"},null,-1)),Ba=k(()=>t("img",{src:L,class:"teachers"},null,-1)),Ra={class:"teacherstext"},Ta=u("123456789012345678923456789"),ja={class:"teacherstext"},Ua=u("123456789012345678923456789"),Ja={class:"teacherstext"},Oa=u("123456789012345678923456789");function Da(e,i,s,o,a,d){const l=f("UniversalNewsBlock"),m=f("h");return r(),_(w,null,[Ea,t("div",Ca,[t("div",Aa,[n(l)]),Na,t("div",qa,[za,Ha,Pa,Ba,t("div",Ra,[n(m,null,{default:v(()=>[Ta]),_:1})]),t("div",ja,[n(m,null,{default:v(()=>[Ua]),_:1})]),t("div",Ja,[n(m,null,{default:v(()=>[Oa]),_:1})])])])],64)}var Va=p(Sa,[["render",Da],["__scopeId","data-v-35cff0b1"]]);const Ma={name:"Err404"};function Ga(e,i,s,o,a,d){return r(),_("h1",null,"404 Not Found!")}var Fa=p(Ma,[["render",Ga]]);const Wa={name:"Err5xx"};function Ya(e,i,s,o,a,d){return r(),_("h1",null,"5xx Error!")}var Ka=p(Wa,[["render",Ya]]);const Xa={class:"previewModal"},Za={class:"grid"},Qa=["src"],ts={props:{images:{type:Array,default:()=>[j,U,J,O,D]}},setup(e){const i=e,s=I(void 0);return(o,a)=>(r(),_("div",null,[st(t("div",Xa,null,512),[[ot,s.value!==void 0]]),t("div",Za,[(r(!0),_(w,null,z(i.images,d=>(r(),_("img",{class:"item",src:d},null,8,Qa))),256))])]))}};var es=p(ts,[["__scopeId","data-v-f18ebca8"]]);const as={},ss=e=>(g("data-v-5037543d"),e=e(),b(),e),os=ss(()=>t("div",{id:"head_pic"},null,-1)),is={class:"main"},ns={id:"page_title",class:"shadow"},ds=x('<div id="content" data-v-5037543d><div class="title" data-aos="zoom-in" data-aos-duration="600" data-v-5037543d>\u4E00\u4E9B\u6807\u9898</div><div class="text" data-aos="zoom-in" data-aos-duration="600" data-v-5037543d>\u4E00\u4E9B\u6587\u5B57\u4E00\u4E9B\u6587\u5B57\u4E00\u4E9B\u6587\u5B57\u4E00\u4E9B\u6587\u5B57\u4E00\u4E9B\u6587\u5B57\u4E00\u4E9B\u6587\u5B57\u4E00\u4E9B\u6587\u5B57\u4E00\u4E9B\u6587\u5B57\u4E00\u4E9B\u6587\u5B57\u4E00\u4E9B\u6587\u5B57\u4E00\u4E9B\u6587\u5B57\u4E00\u4E9B\u6587\u5B57\u4E00\u4E9B\u6587\u5B57\u4E00\u4E9B\u6587\u5B57\u4E00\u4E9B\u6587\u5B57\u4E00\u4E9B\u6587\u5B57\u4E00\u4E9B\u6587\u5B57\u4E00\u4E9B\u6587\u5B57\u4E00\u4E9B\u6587\u5B57\u4E00\u4E9B\u6587\u5B57\u4E00\u4E9B\u6587\u5B57\u4E00\u4E9B\u6587\u5B57\u4E00\u4E9B\u6587\u5B57\u4E00\u4E9B\u6587\u5B57\u4E00\u4E9B\u6587\u5B57\u4E00\u4E9B\u6587\u5B57\u4E00\u4E9B\u6587\u5B57\u4E00\u4E9B\u6587\u5B57\u4E00\u4E9B\u6587\u5B57\u4E00\u4E9B\u6587\u5B57</div><div class="text" data-aos="zoom-in" data-aos-duration="600" data-v-5037543d>\u4E00\u4E9B\u6587\u5B57</div><div class="title" data-aos="zoom-in" data-aos-duration="600" data-v-5037543d>\u4E00\u4E9B\u6807\u9898</div><div class="text" data-aos="zoom-in" data-aos-duration="600" data-v-5037543d>\u4E00\u4E9B\u6587\u5B57\u4E00\u4E9B\u6587\u5B57\u4E00\u4E9B\u6587\u5B57\u4E00\u4E9B\u6587\u5B57\u4E00\u4E9B\u6587\u5B57\u4E00\u4E9B\u6587\u5B57\u4E00\u4E9B\u6587\u5B57\u4E00\u4E9B\u6587\u5B57\u4E00\u4E9B\u6587\u5B57\u4E00\u4E9B\u6587\u5B57\u4E00\u4E9B\u6587\u5B57\u4E00\u4E9B\u6587\u5B57\u4E00\u4E9B\u6587\u5B57\u4E00\u4E9B\u6587\u5B57\u4E00\u4E9B\u6587\u5B57\u4E00\u4E9B\u6587\u5B57\u4E00\u4E9B\u6587\u5B57\u4E00\u4E9B\u6587\u5B57\u4E00\u4E9B\u6587\u5B57\u4E00\u4E9B\u6587\u5B57\u4E00\u4E9B\u6587\u5B57\u4E00\u4E9B\u6587\u5B57\u4E00\u4E9B\u6587\u5B57\u4E00\u4E9B\u6587\u5B57\u4E00\u4E9B\u6587\u5B57\u4E00\u4E9B\u6587\u5B57\u4E00\u4E9B\u6587\u5B57\u4E00\u4E9B\u6587\u5B57\u4E00\u4E9B\u6587\u5B57\u4E00\u4E9B\u6587\u5B57</div><div class="text" data-aos="zoom-in" data-aos-duration="600" data-v-5037543d>\u4E00\u4E9B\u6587\u5B57</div></div>',1);function ls(e,i){return r(),_("div",null,[os,t("div",is,[t("div",ns,c(e.$t("contact.title")),1),ds])])}var cs=p(as,[["render",ls],["__scopeId","data-v-5037543d"]]);const rs=it({history:nt(),routes:[{path:"/",name:"Index",component:Me},{path:"/news",name:"News",component:va},{path:"/about",name:"About",component:Va},{path:"/gallery",name:"Gallery",component:es},{path:"/*",name:"Err404",component:Fa},{path:"/error/500",name:"Err5xx",component:Ka},{path:"/contact",name:"Contact",component:cs}]});Promise.all([P(()=>import("./en-us.7bd71e26.js"),[]),P(()=>import("./zh-cn.e88f6c0c.js"),[])]).then(e=>{const i={"en-US":e[0],"zh-CN":e[1]},s=dt({locale:localStorage.getItem("lang"),fallbackLocal:"en",messages:i}),o=lt(Bt);o.use(rs).use(s).use(ct.init()),o.mount("#app")});
