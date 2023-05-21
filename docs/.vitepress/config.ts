import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vitepress'


export default defineConfig({
    title: "Csslandia",
    description: "Csslandia is a free and open source CSS framework carefully crafted with attention to every detail.",
    lang: "en-US",
    lastUpdated: true,
    head: [
        ["link", { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" }],
        ["link", { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png" }],
        ["link", { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png" }],
        ["link", { rel: "manifest", href: "/site.webmanifest" }],
        ["link", { rel: "mask-icon", href: "/safari-pinned-tab.svg", color: "#00cc55" }],
        ["meta", { name: "msapplication-TileColor", content: "#00a300" }],
        ["meta", { name: "theme-color", content: "#222222" }],
        ["script", { src: "/script.js" }],
    ],

    themeConfig: {
        logo: "/csslandia.svg",
        search: {
            provider: 'local'
        },
        editLink: {
            pattern: "https://github.com/csslandia/docs/edit/main/docs/:path",
            text: "Edit this page on GitHub",
        },
        nav: [
            { text: "Docs", link: "/docs/", activeMatch: "/docs/" },
            { text: "Catalog", link: "/catalog/" },
            { text: "Icons", link: "/icons/" },
        ],
        sidebar: {
            "/docs/": [
                {
                    items: [
                        { text: "Get started", link: "/docs/" },
                        { text: "Config", link: "/docs/config" },
                        { text: "Unused CSS", link: "/docs/unused-css" },
                        { text: "Color mode", link: "/docs/color-mode" },
                        { text: "Responsivity", link: "/docs/responsivity" },
                        { text: "Effects", link: "/docs/effects" },
                    ],
                },
                {
                    text: "Utilities",
                    collapsed: false,
                    items: [
                        { text: "Align", link: "/docs/utilities/align" },
                        { text: "Border", link: "/docs/utilities/border" },
                        { text: "Colors", link: "/docs/utilities/colors" },
                        { text: "Cursor", link: "/docs/utilities/cursor" },
                        { text: "Flexbox", link: "/docs/utilities/flexbox" },
                        {
                            text: "Margin & Padding",
                            link: "/docs/utilities/margin-padding",
                        },
                        {
                            text: "Overflow & White space",
                            link: "/docs/utilities/overflow-white-space",
                        },
                        {
                            text: "Position & Display",
                            link: "/docs/utilities/position-display",
                        },
                        { text: "Scroll snap", link: "/docs/utilities/scroll-snap" },
                        { text: "Shadow", link: "/docs/utilities/shadow" },
                        { text: "Typography", link: "/docs/utilities/typography" },
                        {
                            text: "Width & Height",
                            link: "/docs/utilities/width-height",
                        },
                        { text: "Z index", link: "/docs/utilities/z" },
                    ],
                },
                {
                    text: "Forms",
                    collapsed: false,
                    items: [
                        { text: "Overview", link: "/docs/forms/overview" },
                        { text: "Button", link: "/docs/forms/button" },
                        {
                            text: "Checkbox, Radio & Switch",
                            link: "/docs/forms/checkbox-radio-switch",
                        },
                        { text: "Color", link: "/docs/forms/color" },
                        { text: "File", link: "/docs/forms/file" },
                        { text: "Group", link: "/docs/forms/group" },
                        {
                            text: "Keyboard inputs",
                            link: "/docs/forms/keyboard-inputs",
                        },
                        { text: "Range", link: "/docs/forms/range" },
                        { text: "Select", link: "/docs/forms/select" },
                        { text: "Textarea", link: "/docs/forms/textarea" },
                    ],
                },
                {
                    text: "Components",
                    collapsed: false,
                    items: [
                        { text: "Alert", link: "/docs/components/alert" },
                        { text: "Badge", link: "/docs/components/badge" },
                        { text: "Canvas", link: "/docs/components/canvas" },
                        { text: "Card", link: "/docs/components/card" },
                        { text: "Chat", link: "/docs/components/chat" },
                        {
                            text: "Container",
                            link: "/docs/components/container",
                        },
                        { text: "Dropdown", link: "/docs/components/dropdown" },
                        { text: "Folder", link: "/docs/components/folder" },
                        { text: "Footer", link: "/docs/components/footer" },
                        { text: "Frame", link: "/docs/components/frame" },
                        {
                            text: "Hamburger",
                            link: "/docs/components/hamburger",
                        },
                        {
                            text: "Icon list",
                            link: "/docs/components/icon-list",
                        },
                        { text: "List", link: "/docs/components/list" },
                        { text: "Marquee", link: "/docs/components/marquee" },
                        { text: "Modal", link: "/docs/components/modal" },
                        { text: "Navbar", link: "/docs/components/navbar" },
                        {
                            text: "Notice",
                            link: "/docs/components/notice",
                        },
                        {
                            text: "Pagination",
                            link: "/docs/components/pagination",
                        },
                        {
                            text: "Progress",
                            link: "/docs/components/progress",
                        },
                        {
                            text: "Responsive image",
                            link: "/docs/components/responsive-image",
                        },
                        {
                            text: "Responsive table",
                            link: "/docs/components/responsive-table",
                        },
                        {
                            text: "Side scroll",
                            link: "/docs/components/side-scroll",
                        },
                        { text: "Skew", link: "/docs/components/skew" },
                        { text: "Spinner", link: "/docs/components/spinner" },
                        { text: "Steps", link: "/docs/components/steps" },
                        { text: "Tabs", link: "/docs/components/tabs" },
                        { text: "Tooltip", link: "/docs/components/tooltip" },
                        { text: "Viewer", link: "/docs/components/viewer" },
                    ],
                },
            ],
        },
        socialLinks: [
            { icon: "github", link: "https://github.com/csslandia/" },
        ]
    },
    vite: {
        resolve: {
            alias: [
                {
                    find: /^.*\/VPNavBar\.vue$/,
                    replacement: fileURLToPath(
                        new URL('./components/NavBar.vue', import.meta.url)
                    )
                },
                {
                    find: /^.*\/VPHome\.vue$/,
                    replacement: fileURLToPath(
                        new URL('./components/Home.vue', import.meta.url)
                    )
                },
                {
                    find: /^.*\/VPFeatures\.vue$/,
                    replacement: fileURLToPath(
                        new URL('./components/Features.vue', import.meta.url)
                    )
                },
                {
                    find: /^.*\/VPSidebar\.vue$/,
                    replacement: fileURLToPath(
                        new URL('./components/Sidebar.vue', import.meta.url)
                    )
                },
                {
                    find: /^.*\/VPMenu\.vue$/,
                    replacement: fileURLToPath(
                        new URL('./components/Menu.vue', import.meta.url)
                    )
                },
                {
                    find: /^.*\/VPNavBarExtra\.vue$/,
                    replacement: fileURLToPath(
                        new URL('./components/NavBarExtra.vue', import.meta.url)
                    )
                },
                {
                    find: /^.*\/VPNavBarTitle\.vue$/,
                    replacement: fileURLToPath(
                        new URL('./components/NavBarTitle.vue', import.meta.url)
                    )
                },
                {
                    find: /^.*\/base\.css$/,
                    replacement: fileURLToPath(
                        new URL('./base.css', import.meta.url)
                    )
                }
            ]
        }
    }
})
