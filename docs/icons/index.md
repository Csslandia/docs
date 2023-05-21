---
aside: false
editLink: false
lastUpdated: false
---

# Icons

---

<div class="group bg w-100%">
    <button
        class="btn xl pr-0 cursor-arrow flexbox center"
        style="padding-left: 20px"
    >
        <span class="i-search c-a fs-5"></span>
    </button>
    <input
        type="search"
        class="lg py-7"
        placeholder="Search icons..."
        @input="e => filter(e.target.value)"
    />
</div>

<div
    class="x-center"
    style="width: calc(100vw - 40px); max-width: 1160px"
>
    <div class="flexbox x-between y-center mt-5 mb-4 mx-2">
        <div class="flexbox mob:x-right mob:w-100% my-5">
            <label>
                Show labels
                <input
                    type="checkbox"
                    class="switch sm c-a bg mx-2"
                    @change="toggleLabels"
                    :checked="config.areLabels"
                />
            </label>
        </div>
        <div class="flexbox x-right y-center my-5 mob:w-100%">
            <div class="pointer" @click="setSize('lg')">
                <div class="i-grid-2 m-7"></div>
            </div>
            <div class="pointer" @click="setSize('md')">
                <div class="i-grid-3 m-7"></div>
            </div>
            <div class="pointer" @click="setSize('sm')">
                <div class="i-grid-4 m-7"></div>
            </div>
            <select class="form ml-6 w-fit" :value="config.sortBy" @input="setSort">
                <option>Featured</option>
                <option>Alphabetical</option>
            </select>
        </div>
    </div>
    <div class="flexbox">
        <div
            v-for="icon in icons"
            :class="[`mob:w-${Math.round(100/mobCols)}%`, `tab:w-${Math.round(100/tabCols)}%`, `pc:w-${Math.round(100/pcCols)}%`]"
        >
            <div
                class="m-3 bg pointer flexbox center text-center column"
                @click="open(icon)"
                :style="{'aspect-ratio': 1}"
            >
                <div
                    class="w-100% text-center"
                    :class="[`i-${icon}`]"
                    :style="{'font-size': iconSize}"
                ></div>
                <div
                    v-if="config.areLabels"
                    class="ellipsis"
                    :class="[`fs-${labelSize}`, `px-${labelSize*2}`, `pt-${labelSize*3-5}`, `mb--${labelSize*2}`]"
                >
                    {{icon}}
                </div>
            </div>
        </div>
    </div>
</div>

<div class="modal" :class="state">
    <div class="w-20">
        <div class="fs-6 bold">
            <div>
                {{activeIcon.charAt(0).toUpperCase() +
                activeIcon.slice(1).replaceAll("-", " ")}}
            </div>
            <button @click="close" class="i-close sm"></button>
        </div>
        <div class="flexbox y-center">
            <div class="mob:w-100% tab:w-40% pc:w-33%">
                <div class="py-12">
                    <div
                        class="text-center"
                        :class="`i-${activeIcon}`"
                        style="font-size: calc(4rem + 4vw)"
                    ></div>
                </div>
            </div>
            <div class="mob:w-100% tab:w-60% m-0 p-0 pc:w-67%">
                <div class="flexbox x-right y-center mx-7">
                    <button
                        :data-tooltip="copyText"
                        @click="copy(activeIcon)"
                        @mouseleave="done()"
                        class="px-7 pb-5 pointer"
                    >
                        <div class="i-copy c-888 fs-5"></div>
                    </button>
                    <a
                        :href="`/icons/${activeIcon}.svg`"
                        data-tooltip="download svg"
                        class="px-7 pb-5 pointer"
                        download
                    >
                        <div class="i-download c-888 fs-5"></div>
                    </a>
                </div>
                <div class="language-html m-0">
                    <button title="Copy Code" class="copy"></button>
                    <span class="lang">html</span>
                    <pre class="shiki" ><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">span</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">"</span><span style="color:#C3E88D;">i-{{activeIcon}}</span><span style="color:#89DDFF;">"</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">span</span><span style="color:#89DDFF;">&gt;</span></span></code></pre>
                </div>
            </div>
        </div>
        <div class="x-right">
            <button @click="close" class="btn bd-a c-a">Close</button>
        </div>
    </div>
</div>

<div v-if="!icons.length" class="flexbox x-center">
        <div class="fs-7 bold pb-4 mb-6 mt-8 ellipsis">
            No results for "{{prompt}}"
        </div>
</div>

## Color

<div class="i-close c-a fs-11"></div>

```html
<div class="i-close c-a"></div>
```

## Size

<div class="flexbox x-between y-center">
    <div class="i-close fs-1"></div>
    <div class="i-close fs-2"></div>
    <div class="i-close fs-3"></div>
    <div class="i-close fs-4"></div>
    <div class="i-close"></div>
    <div class="i-close fs-6"></div>
    <div class="i-close fs-7"></div>
    <div class="i-close fs-8"></div>
    <div class="i-close fs-9"></div>
    <div class="i-close fs-10"></div>
    <div class="i-close fs-11"></div>
</div>

```html
<div class="i-close fs-1"></div>
<div class="i-close fs-2"></div>
<div class="i-close fs-3"></div>
<div class="i-close fs-4"></div>
<div class="i-close"></div>
<div class="i-close fs-6"></div>
<div class="i-close fs-7"></div>
<div class="i-close fs-8"></div>
<div class="i-close fs-9"></div>
<div class="i-close fs-10"></div>
<div class="i-close fs-11"></div>
```

## Relative size

<div class="fs-6">
    The size of the icon is relative to the font size of the parent
    <span class="i-close xs"></span>
    <span class="i-close sm"></span>
    <span class="i-close"></span>
    <span class="i-close lg"></span>
    <span class="i-close xl"></span>
</div>

```html
<div class="fs-6">
    The size of the icon is relative to the font size of the parent
    <span class="i-close xs"></span>
    <span class="i-close sm"></span>
    <span class="i-close"></span>
    <span class="i-close lg"></span>
    <span class="i-close xl"></span>
</div>
```

<script>
import allIcons from "./icons.json";
import allIconsAlphabetical from "./iconsAlphabetical.json";

export default {
    data() {
        return {
            state: "",
            prompt: "",
            copyText: "copy svg",
            activeIcon: "",
            iconSize: "calc(1rem + 0.5vw)",
            mobCols: 4,
            tabCols: 6,
            pcCols: 12,
            labelSize: 3,
            config: {},
            icons: []
        }
    },

    mounted() {
       let config = JSON.parse(localStorage.getItem("config"));

        if (!config) {
            config = {areLabels: false, size: "md", sortBy: "Featured"};
            localStorage.setItem("config", JSON.stringify(config));
        }

        this.config = config;

        this.setSize(config.size);

        this.icons = this.config.sortBy == "Alphabetical" ? allIconsAlphabetical : allIcons;
    },

    methods: {
        open(icon) {
            this.activeIcon = icon;
            this.state = "open";
            window.addEventListener("keydown", this.keyDown);
        },
        close() {
            this.state = "close";
            window.removeEventListener("keydown", this.keyDown);
        },
        keyDown(e) {
            if (e.key === "Escape") this.close();
        },
        filter(prompt) {
            this.prompt = prompt;
            if(this.config.sortBy == "Alphabetical") {
                this.icons = allIconsAlphabetical.filter(icon => icon.includes(prompt.toLowerCase().replaceAll(" ", "-")));
            } else {
                this.icons = allIcons.filter(icon => icon.includes(prompt.toLowerCase().replaceAll(" ", "-")));
            }
        },
        copy(icon) {
            this.copyText = "svg copied";
            
            fetch(`/icons/${icon}.svg`)
                .then(res => res.text())
                .then(data => {
                    navigator.clipboard.writeText(data);
                });
        },
        done() {
            this.copyText = "copy svg"
        },
        setSort(e) {
            this.config.sortBy = e.target.value
            localStorage.setItem("config", JSON.stringify(this.config))
            this.filter(this.prompt)
        },
        setSize(size) {
            if (size == "sm") {
                this.iconSize = "calc(0.75rem + 0.25vw)";
                this.mobCols = 6;
                this.tabCols = 10;
                this.pcCols = 16;
                this.labelSize = 2;
                this.config.size = "sm"
            } else if (size == "lg") {
                this.iconSize = "2.25rem";
                this.mobCols = 2;
                this.tabCols = 4;
                this.pcCols = 8;
                this.labelSize = 4;
                this.config.size = "lg"
            }else {
                this.iconSize = "calc(1rem + 0.5vw)";
                this.mobCols = 4;
                this.tabCols = 7;
                this.pcCols = 12;
                this.labelSize = 3;
                this.config.size = "md"
            }
            localStorage.setItem("config", JSON.stringify(this.config))

        },
        toggleLabels(e) {
            this.config.areLabels = e.currentTarget.checked
            localStorage.setItem("config", JSON.stringify(this.config))
        }
    }
}
</script>

<style scoped>
.switch:checked {
    background-color: #0c5 !important;
    color: #fff !important;
}
.xxl {
    width: 40px !important;
    height: 40px !important;
}

@media (width >= 600px) and (width < 1000px) {
    .tab\:w-14\% {
        width: calc(100% / 7) !important;
    }
}

@media (width >= 1000px) {
    .pc\:w-8\% {
        width: calc(25% / 3) !important;
    }
    .pc\:w-6\% {
        width: 6.25% !important;
    }
}
</style>
