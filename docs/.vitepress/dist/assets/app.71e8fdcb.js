import{_ as u,o as l,c as d,C as o,a5 as r,Q as c,a6 as f,a7 as m,a8 as _,a9 as h,aa as g,ab as y,ac as A,ad as v,ae as P,af as w,M as C,d as b,u as E,q as R,k as x,ag as D,ah as L,ai as T}from"./chunks/framework.828158bf.js";import{t as i}from"./chunks/theme.ffdb8644.js";const B={},F={class:"p-8",style:{height:"calc(100svh - 160px)"}},O=o("div",{class:"center"},[o("p",{class:"fs-14 bold"},"404"),o("p",{class:"fs-8 fw-5"},"Page not found")],-1),S=[O];function V(e,t){return l(),d("div",F,S)}const j=u(B,[["render",V]]),k={...i,Layout:()=>r(i.Layout,null,{"not-found":()=>r(j)})};function p(e){if(e.extends){const t=p(e.extends);return{...t,...e,async enhanceApp(a){t.enhanceApp&&await t.enhanceApp(a),e.enhanceApp&&await e.enhanceApp(a)}}}return e}const n=p(k),N=b({name:"VitePressApp",setup(){const{site:e}=E();return R(()=>{x(()=>{document.documentElement.lang=e.value.lang,document.documentElement.dir=e.value.dir})}),D(),L(),T(),n.setup&&n.setup(),()=>r(n.Layout)}});async function $(){const e=M(),t=I();t.provide(m,e);const a=_(e.route);return t.provide(h,a),t.component("Content",g),t.component("ClientOnly",y),Object.defineProperties(t.config.globalProperties,{$frontmatter:{get(){return a.frontmatter.value}},$params:{get(){return a.page.value.params}}}),n.enhanceApp&&await n.enhanceApp({app:t,router:e,siteData:A}),{app:t,router:e,data:a}}function I(){return v(N)}function M(){let e=c,t;return P(a=>{let s=w(a);return e&&(t=s),(e||t===s)&&(s=s.replace(/\.js$/,".lean.js")),c&&(e=!1),C(()=>import(s),[])},n.NotFound)}c&&$().then(({app:e,router:t,data:a})=>{t.go().then(()=>{f(t.route,a.site),e.mount("#app")})});export{$ as createApp};
