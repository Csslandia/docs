---
layout: page
title: Overview
---

<script setup>
import { ref, onMounted } from "vue";

let tabs = ref({
    utilities: {
        active: false,
        pages: [
            { name: "Align", image: "align", path: "utilities/align" },
            { name: "Border", image: "border", path: "utilities/border" },
            { name: "Colors", image: "colors", path: "utilities/colors" },
            { name: "Cursor", image: "cursor", path: "utilities/cursor" },
            { name: "Flexbox", image: "flexbox", path: "utilities/flexbox" },
            {
                name: "Margin & Padding",
                image: "margin-padding",
                path: "utilities/margin-padding",
            },
            {
                name: "Overflow & White Space",
                image: "overflow-white-space",
                path: "utilities/overflow-white-space",
            },
            {
                name: "Position & Display",
                image: "position-display",
                path: "utilities/position-display",
            },
            { name: "Shadow", image: "shadow", path: "utilities/shadow" },
            { name: "Typography", image: "typography", path: "utilities/typography" },
            {
                name: "Width & Height",
                image: "width-height",
                path: "utilities/width-height",
            },
            { name: "Z index", image: "z", path: "utilities/z" },
        ],
    },
    forms: {
        active: false,
        pages: [
            { name: "Button", image: "button", path: "forms/button" },
            {
                name: "Checkbox",
                image: "checkbox",
                path: "forms/checkbox-radio-switch#checkbox",
            },
            { name: "Color", image: "color", path: "forms/color" },
            { name: "File", image: "file", path: "forms/file" },
            { name: "Group", image: "group", path: "forms/group" },
            {
                name: "Keyboard Inputs",
                image: "keyboard-inputs",
                path: "forms/keyboard-inputs",
            },
            {
                name: "Radio",
                image: "radio",
                path: "forms/checkbox-radio-switch#radio",
            },
            { name: "Range", image: "range", path: "forms/range" },
            { name: "Select", image: "select", path: "forms/select" },
            {
                name: "Switch",
                image: "switch",
                path: "forms/checkbox-radio-switch#switch",
            },
            { name: "Textarea", image: "textarea", path: "forms/textarea" },
        ],
    },
    components: {
        active: false,
        pages: [
            { name: "Alert", image: "alert", path: "components/alert" },
            { name: "Badge", image: "badge", path: "components/badge" },
            { name: "Canvas", image: "canvas", path: "components/canvas" },
            { name: "Card", image: "card", path: "components/card" },
            { name: "Chat", image: "chat", path: "components/chat" },
            { name: "Container", image: "container", path: "components/container" },
            { name: "Dropdown", image: "dropdown", path: "components/dropdown" },
            { name: "Folder", image: "folder", path: "components/folder" },
            { name: "Footer", image: "footer", path: "components/footer" },
            { name: "Frame", image: "frame", path: "components/frame" },
            { name: "Hamburger", image: "hamburger", path: "components/hamburger" },
            { name: "Icon List", image: "icon-list", path: "components/list" },
            { name: "List", image: "list", path: "components/list" },
            { name: "Marquee", image: "marquee", path: "components/marquee" },
            { name: "Modal", image: "modal", path: "components/modal" },
            { name: "Navbar", image: "navbar", path: "components/navbar" },
            { name: "Notice", image: "notice", path: "components/notice" },
            { name: "Pagination", image: "pagination", path: "components/pagination" },
            { name: "Progress", image: "progress", path: "components/progress" },
            {
                name: "Responsive Image",
                image: "responsive-image",
                path: "components/responsive-image",
            },
            {
                name: "Responsive Table",
                image: "responsive-table",
                path: "components/responsive-table",
            },
            { name: "Side Scroll", image: "side-scroll", path: "components/side-scroll" },
            { name: "Skew", image: "skew", path: "components/skew" },
            { name: "Spinner", image: "spinner", path: "components/spinner" },
            { name: "Steps", image: "steps", path: "components/steps" },
            { name: "Tabs", image: "tabs", path: "components/tabs" },
            { name: "Tooltip", image: "tooltip", path: "components/tooltip" },
            { name: "Viewer", image: "viewer", path: "components/viewer" },
        ],
    },
});

let active = ref();
let mode = ref();

const toggle = (newActive) => {
    Object.keys(tabs.value).forEach((tab) => (tabs.value[tab].active = false));
    tabs.value[newActive].active = true;
    active.value = tabs.value[newActive].pages;
    localStorage.setItem("active-tab", newActive);
};

onMounted(() => {
    const setActiveTab = () => {
        activeTab = "utilities"
        localStorage.setItem("active-tab", activeTab);
    }

    let activeTab = localStorage.getItem("active-tab")

    if (!activeTab) setActiveTab()

    try {
        tabs.value[activeTab].active = true
    } catch {
        setActiveTab()
        tabs.value[activeTab].active = true
    }

    active.value = tabs.value[activeTab].pages;

    const toggle = (newActive) => {
        Object.keys(tabs.value).forEach((tab) => (tabs.value[tab].active = false));
        tabs.value[newActive].active = true;
        active.value = tabs.value[newActive].pages;
        localStorage.setItem("active-tab", newActive);
    };

    mode.value = document.documentElement.classList.contains("dark") ? "dark" : "light";

    const observer = new MutationObserver((mutationsList) => {
        mutationsList.forEach((mutation) => {
        if (
            mutation.type === "attributes" &&
            mutation.attributeName === "class"
        ) {
            mode.value = document.documentElement.classList.contains("dark")
                ? "dark"
                : "light";
            }
        });
    });

    observer.observe(document.documentElement, { attributes: true });
});
</script>

 <div class="container pt-10 pb-12">
    <div class="tabs">
        <div>
            <button
                class="fs-6 fw-6 px-8 py-5"
                :class="tabs.utilities.active && 'bg'"
                @click="toggle('utilities')"
            >
                Utilities
            </button>
            <button
                class="fs-6 fw-6 px-8 py-5"
                :class="tabs.forms.active && 'bg'"
                @click="toggle('forms')"
            >
                Forms
            </button>
            <button
                class="fs-6 fw-6 px-8 py-5"
                :class="tabs.components.active && 'bg'"
                @click="toggle('components')"
            >
                Components
            </button>
        </div>
        <div class="bg p-5 br-9">
            <div class="flexbox">
                <div class="w-25% mob:w-50% p-5" v-for="page in active">
                    <a :href="`../docs/${page.path}`" class="card bg-strong nn">
                        <img
                            :src="`/images/${mode}/${page.image}.svg`"
                            :alt="page.name"
                            class="bd-bottom bw-1"
                        />
                        <div class="fw-5 fs-4 py-6 ellipsis">
                            {{ page.name }}
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
</div>

<style scoped>
@supports not selector(:has(*)) {
    .tabs > :first-child {
        padding-left: 24px;
    }
}
</style>
