import{_ as D,o as F,c as y,C as a,V as r}from"./chunks/framework.828158bf.js";const i={data(){return{cols:["","","","","",""],gray_cols:["","","","","","",""]}},mounted(){let t="05af".split(""),n="0123456789abcdef".split("");for(let o=3;o>=0;o--)for(let l=3;l>=0;l--)for(let s=3;s>=0;s--){let p=t[s],e=t[l],c=t[o];this.cols[5-o]+=`<div class="bg-${p}${e}${c} c-${s+l+o<5?"fff":"000"} w-25% text-center py-9">#${p}${e}${c}</div>`}for(let o=0;o<n.length;o++){let l=Math.floor(o/4),s=n[n.length-1-o];this.gray_cols[l]+=`<div class="bg-${s}${s}${s} c-${o<n.length/2?"000":"fff"} w-25% text-center py-9">#${s}${s}${s}</div>`}}},k=JSON.parse('{"title":"Colors","description":"","frontmatter":{},"headers":[],"relativePath":"docs/utilities/colors.md","filePath":"docs/utilities/colors.md","lastUpdated":1684657166000}'),d=r("",5),b={class:"flexbox"},u=["innerHTML"],g=["innerHTML"],f=["innerHTML"],h=["innerHTML"],v=["innerHTML"],C=["innerHTML"],m=["innerHTML"],A=["innerHTML"],q=["innerHTML"],_=["innerHTML"],w=r("",30);function x(t,n,o,l,s,p){return F(),y("div",null,[d,a("div",b,[a("div",{class:"flexbox w-50% mob:w-100%",innerHTML:s.cols[0]},null,8,u),a("div",{class:"flexbox w-50% mob:w-100%",innerHTML:s.cols[1]},null,8,g),a("div",{class:"flexbox w-50% mob:w-100%",innerHTML:s.cols[2]},null,8,f),a("div",{class:"flexbox w-50% mob:w-100%",innerHTML:s.cols[3]},null,8,h),a("div",{class:"flexbox w-50% mob:w-100%",innerHTML:s.cols[4]},null,8,v),a("div",{class:"flexbox w-50% mob:w-100%",innerHTML:s.cols[5]},null,8,C),a("div",{class:"flexbox w-50% mob:w-100%",innerHTML:s.gray_cols[0]},null,8,m),a("div",{class:"flexbox w-50% mob:w-100%",innerHTML:s.gray_cols[1]},null,8,A),a("div",{class:"flexbox w-50% mob:w-100%",innerHTML:s.gray_cols[2]},null,8,q),a("div",{class:"flexbox w-50% mob:w-100%",innerHTML:s.gray_cols[3]},null,8,_)]),w])}const T=D(i,[["render",x]]);export{k as __pageData,T as default};
