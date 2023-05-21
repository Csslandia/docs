import{_ as D,o as F,c as y,C as a,V as r}from"./chunks/framework.828158bf.js";const i={data(){return{cols:["","","","","",""],gray_cols:["","","","","","",""]}},mounted(){let t="05af".split(""),n="0123456789abcdef".split("");for(let o=3;o>=0;o--)for(let l=3;l>=0;l--)for(let s=3;s>=0;s--){let p=t[s],e=t[l],c=t[o];this.cols[5-o]+=`<div class="bg-${p}${e}${c} c-${s+l+o<5?"fff":"000"} w-25% text-center py-9">#${p}${e}${c}</div>`}for(let o=0;o<n.length;o++){let l=Math.floor(o/4),s=n[n.length-1-o];this.gray_cols[l]+=`<div class="bg-${s}${s}${s} c-${o<n.length/2?"000":"fff"} w-25% text-center py-9">#${s}${s}${s}</div>`}}},k=JSON.parse('{"title":"Colors","description":"","frontmatter":{},"headers":[],"relativePath":"docs/utilities/colors.md","filePath":"docs/utilities/colors.md","lastUpdated":1684657166000}'),d=r('<h1 id="colors" tabindex="-1">Colors <a class="header-anchor" href="#colors" aria-label="Permalink to &quot;Colors&quot;">​</a></h1><div class="mb--10"></div><h2 id="basic-colors" tabindex="-1">Basic colors <a class="header-anchor" href="#basic-colors" aria-label="Permalink to &quot;Basic colors&quot;">​</a></h2><div class="flexbox"><div class="bg-fff c-000 w-33% mob:w-50% text-center py-8">white - #fff</div><div class="bg-000 c-fff w-33% mob:w-50% text-center py-8">black - #000</div><div class="bg-888 c-fff w-33% mob:w-50% text-center py-8">gray - #888</div><div class="bg-f00 c-fff w-33% mob:w-50% text-center py-8">red - #f00</div><div class="bg-0f0 c-fff w-33% mob:w-50% text-center py-8">green - #0f0</div><div class="bg-00f c-fff w-33% mob:w-50% text-center py-8">blue - #00f</div><div class="bg-0ff c-000 w-33% mob:w-50% text-center py-8">cyan - #0ff</div><div class="bg-f0f c-000 w-33% mob:w-50% text-center py-8">magenta - #f0f</div><div class="bg-ff0 c-000 w-33% mob:w-50% text-center py-8">yellow - #ff0</div></div><h2 id="all-available-colors" tabindex="-1">All available colors <a class="header-anchor" href="#all-available-colors" aria-label="Permalink to &quot;All available colors&quot;">​</a></h2>',5),b={class:"flexbox"},u=["innerHTML"],g=["innerHTML"],f=["innerHTML"],h=["innerHTML"],v=["innerHTML"],C=["innerHTML"],m=["innerHTML"],A=["innerHTML"],q=["innerHTML"],_=["innerHTML"],w=r(`<h2 id="accent-color" tabindex="-1">Accent color <a class="header-anchor" href="#accent-color" aria-label="Permalink to &quot;Accent color&quot;">​</a></h2><div class="flexbox y-center text-center m--4"><div class="w-33% mob:w-100% p-4"><div class="c-a p-7">accent color</div></div><div class="w-33% mob:w-100% p-4"><div class="bg-a p-7">accent background</div></div><div class="w-33% mob:w-100% p-4"><div class="bd bd-a" style="padding:calc(12px - 0.1rem);">accent border</div></div></div><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">c-a</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">accent color</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">bg-a</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">accent background</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">bd bd-a</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">accent border</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><h3 id="hover" tabindex="-1">Hover <a class="header-anchor" href="#hover" aria-label="Permalink to &quot;Hover&quot;">​</a></h3><div class="h-7"></div><div class="flexbox y-center text-center m--4"><div class="w-33% mob:w-100% p-4"><div class="hover:c-a p-7">accent color</div></div><div class="w-33% mob:w-100% p-4"><div class="hover:bg-a p-7">accent background</div></div><div class="w-33% mob:w-100% p-4"><div class="bd bd-none hover:bd-a" style="padding:calc(12px - 0.1rem);">accent border</div></div></div><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">hover:c-a</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">accent color</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">hover:bg-a</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">accent background</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">bd bd-none hover:bd-a</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">accent border</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><p>Learn more about accent color in the <a href="./../config.html#accent-color">config</a>.</p><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><h3 id="color" tabindex="-1">Color <a class="header-anchor" href="#color" aria-label="Permalink to &quot;Color&quot;">​</a></h3><div class="h-7"></div><div class="m--4"><button class="btn c m-4">default color</button><button class="btn c-a m-4">accent color</button><button class="btn c-05f m-4">blue color</button><button class="btn c-f00 m-4">red color</button><button class="btn c-none m-4">none color</button></div><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">btn c</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">default color</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">btn c-a</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">accent color</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">btn c-05f</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">blue color</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">btn c-f00</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">red color</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">btn c-none</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">none color</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><h3 id="background-color" tabindex="-1">Background color <a class="header-anchor" href="#background-color" aria-label="Permalink to &quot;Background color&quot;">​</a></h3><div class="h-7"></div><div class="m--4"><button class="btn bg m-4">default background</button><button class="btn bg-a m-4">accent background</button><button class="btn bg-05f c-fff m-4">blue background</button><button class="btn bg-f00 c-fff m-4">red background</button><button class="btn bg-none m-4">none background</button></div><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">btn bg</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">default background</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">btn bg-a</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">accent background</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">btn bg-05f c-fff</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">blue background</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">btn bg-f00 c-fff</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">red background</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">btn bg-none</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">none background</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><h3 id="border-color" tabindex="-1">Border color <a class="header-anchor" href="#border-color" aria-label="Permalink to &quot;Border color&quot;">​</a></h3><div class="h-7"></div><div class="m--4"><button class="btn bd m-4">default border</button><button class="btn bd-a m-4">accent border</button><button class="btn bd-05f m-4">blue border</button><button class="btn bd-f00 m-4">red border</button><button class="btn bd-none m-4">none border</button></div><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">btn bd</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">default border</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">btn bd-a</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">accent border</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">btn bd-05f</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">blue border</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">btn bd-f00</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">red border</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">btn bd-none</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">none border</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><h2 id="semi-transparent-background-colors" tabindex="-1">Semi-transparent background colors <a class="header-anchor" href="#semi-transparent-background-colors" aria-label="Permalink to &quot;Semi-transparent background colors&quot;">​</a></h2><div class="flexbox bg-a c text-center p-7"><div class="bg-0.2 w-20% py-8">.bg-0.2</div><div class="bg-0.4 w-20% py-8">.bg-0.4</div><div class="bg-0.6 w-20% py-8">.bg-0.6</div><div class="bg-0.8 w-20% py-8">.bg-0.8</div><div class="bg w-20% py-8">.bg</div></div><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">bg-0.2</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">.bg-0.2</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">bg-0.4</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">.bg-0.4</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">bg-0.6</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">.bg-0.6</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">bg-0.8</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">.bg-0.8</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">bg</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">.bg</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><h2 id="dark-mode" tabindex="-1">Dark mode <a class="header-anchor" href="#dark-mode" aria-label="Permalink to &quot;Dark mode&quot;">​</a></h2><p>Classes with the <code>d:</code> prefix are only applied in dark mode and will override classes without this prefix. If the <code>$color-mode</code> property in the <a href="./../config.html#color-mode">config</a> is set to <code>both</code> (it&#39;s the default), then each color above is also available with the <code>d:</code> prefix.</p><p>To see the effect toggle the color mode. In lignt mode color is blue, in dark it is red.</p><p><button class="btn c-05f d:c-f00 m-4">color</button><button class="btn bg-05f d:bg-f00 c-fff m-4">background</button><button class="btn bd-05f d:bd-f00 m-4">border</button></p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">btn c-05f d:c-f00</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">color</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">btn bg-05f d:bg-f00 c-fff</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">background</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">btn bd-05f d:bd-f00</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">border</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><p>For more informations see <a href="./../color-mode.html">Color mode</a>.</p>`,30);function x(t,n,o,l,s,p){return F(),y("div",null,[d,a("div",b,[a("div",{class:"flexbox w-50% mob:w-100%",innerHTML:s.cols[0]},null,8,u),a("div",{class:"flexbox w-50% mob:w-100%",innerHTML:s.cols[1]},null,8,g),a("div",{class:"flexbox w-50% mob:w-100%",innerHTML:s.cols[2]},null,8,f),a("div",{class:"flexbox w-50% mob:w-100%",innerHTML:s.cols[3]},null,8,h),a("div",{class:"flexbox w-50% mob:w-100%",innerHTML:s.cols[4]},null,8,v),a("div",{class:"flexbox w-50% mob:w-100%",innerHTML:s.cols[5]},null,8,C),a("div",{class:"flexbox w-50% mob:w-100%",innerHTML:s.gray_cols[0]},null,8,m),a("div",{class:"flexbox w-50% mob:w-100%",innerHTML:s.gray_cols[1]},null,8,A),a("div",{class:"flexbox w-50% mob:w-100%",innerHTML:s.gray_cols[2]},null,8,q),a("div",{class:"flexbox w-50% mob:w-100%",innerHTML:s.gray_cols[3]},null,8,_)]),w])}const T=D(i,[["render",x]]);export{k as __pageData,T as default};