# Viewer

---

Click on the image

---

<img
    src="https://picsum.photos/1500/1000"
    alt="random image"
    class="pointer w-17"
    onclick='showViewer("#my-viewer")'
    aria-hidden="true"
/>

<div class="viewer fade" id="my-viewer">
    <button class="i-close lg" onclick='hideViewer("#my-viewer")'></button>
    <img src="https://picsum.photos/1500/1000" alt="random image" />
    <div class="mt-6">This is my superb image</div>
</div>

::: code-group

```html [HTML]
<img
    src="https://picsum.photos/1500/1000"
    alt="random image"
    class="pointer w-17"
    onclick='showViewer("#my-viewer")'
    aria-hidden="true"
/>

<div class="viewer fade" id="my-viewer">
    <button class="i-close lg" onclick='hideViewer("#my-viewer")'></button>
    <img src="https://picsum.photos/1500/1000" alt="random image" />
    <div class="mt-6">This is my superb image</div>
</div>

<script>
    let viewer;

    const showViewer = (x) => {
        viewer = document.querySelector(x);
        viewer.classList.add("open");
        document.addEventListener("keydown", keyDownViewer);
    };

    const hideViewer = () => {
        viewer.classList.remove("open");
        document.removeEventListener("keydown", keyDownViewer);
    };

    const keyDownViewer = (e) => {
        if (e.key === "Escape") hideViewer();
    };
</script>
```

```jsx [React]
import { useState } from "react";

const Viewer = ({ src, alt, text }) => {
    const [isOpen, setOpen] = useState(false);

    const open = () => {
        setOpen(true);
        window.addEventListener("keydown", keyDown);
    };
    const close = () => {
        setOpen(false);
        window.removeEventListener("keydown", keyDown);
    };
    const keyDown = (e) => {
        if (e.key === "Escape") close();
    };

    return (
        <>
            <img
                src={src}
                alt={alt}
                className="pointer"
                onClick={open}
                aria-hidden="true"
            />

            <div className={"viewer fade " + (isOpen ? "open" : "")}>
                <button className="i-close lg" onClick={close} />
                <img src={src} alt={alt} />
                {text && <div className="mt-6">{text}</div>}
            </div>
        </>
    );
};

export default Viewer;
```

```vue [Vue]
<script setup>
import { ref } from "vue";

defineProps(["src", "alt", "text"]);

let isOpen = ref(false);

const open = () => {
    isOpen.value = true;
    document.addEventListener("keydown", keyDown);
};
const close = () => {
    isOpen.value = false;
    document.removeEventListener("keydown", keyDown);
};
const keyDown = (e) => {
    if (e.key === "Escape") close();
};
</script>

<template>
    <img
        :src="src"
        :alt="alt"
        class="pointer"
        @click="open"
        aria-hidden="true"
    />

    <div class="viewer fade" :class="isOpen && 'open'">
        <button class="i-close lg" @click="close" />
        <img :src="src" :alt="alt" />
        <div class="mt-6" v-if="text">{{ text }}</div>
    </div>
</template>
```

```svelte [Svelte]
<script>
    export let src,
        alt,
        text = "";

    let isOpen = false;

    const open = () => {
        isOpen = true;
        window.addEventListener("keydown", keyDown);
    };
    const close = () => {
        isOpen = false;
        window.removeEventListener("keydown", keyDown);
    };
    const keyDown = (e) => {
        if (e.key === "Escape") close();
    };
</script>

<img {src} {alt} class="pointer" on:click={open} aria-hidden="true" />

<div class="viewer fade" class:open={isOpen}>
    <button class="i-close lg" on:click={close} />
    <img {src} {alt} />
    {#if text}
        <div class="mt-6">{text}</div>
    {/if}
</div>
```

:::

## Without text

<img
    src="https://picsum.photos/1500/1000"
    alt="random image"
    class="pointer w-17"
    onclick='showViewer("#my-second-viewer")'
    aria-hidden="true"
/>

<div class="viewer fade" id="my-second-viewer">
    <button class="i-close lg" onclick='hideViewer("#my-second-viewer")'></button>
    <img src="https://picsum.photos/1500/1000" alt="random image" />
</div>

```html [HTML]
<img
    src="https://picsum.photos/1500/1000"
    alt="random image"
    class="pointer w-17"
    onclick='showViewer("#my-second-viewer")'
    aria-hidden="true"
/>

<div class="viewer fade" id="my-second-viewer">
    <button
        class="i-close lg"
        onclick='hideViewer("#my-second-viewer")'
    ></button>
    <img src="https://picsum.photos/1500/1000" alt="random image" />
</div>
```
