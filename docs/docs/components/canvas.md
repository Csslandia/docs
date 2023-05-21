# Canvas

---

<button class="btn bg-a" onclick='showCanvas("#my-canvas")'>Open Canvas</button>

<div class="canvas" id="my-canvas">
    <div class="w-80% max-w-17 p-8">This is Canvas!</div>
    <div onclick="hideCanvas()" aria-hidden="true"></div>
</div>

::: code-group

```html [HTML]
<button class="btn bg-a" onclick='showCanvas("#my-canvas")'>Open Canvas</button>

<div class="canvas" id="my-canvas">
    <div class="w-80% max-w-17 p-8">This is Canvas!</div>
    <div onclick="hideCanvas()" aria-hidden="true"></div>
</div>

<script>
    let canvas;

    const showCanvas = (x) => {
        canvas = document.querySelector(x);
        canvas.classList.add("open");
        document.addEventListener("keydown", keyDownCanvas);
    };

    const hideCanvas = () => {
        canvas.classList.remove("open");
        document.removeEventListener("keydown", keyDownCanvas);
    };

    const keyDownCanvas = (e) => {
        if (e.key === "Escape") hideCanvas();
    };
</script>
```

```jsx [React]
import { useState } from "react";

const Canvas = ({ btnText, children }) => {
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
            <button className="btn bg-a" onClick={open}>
                {btnText}
            </button>

            <div className={"canvas " + (isOpen ? "open" : "")}>
                <div className="w-80% max-w-17 p-8">{children}</div>
                <div onClick={close} aria-hidden="true" />
            </div>
        </>
    );
};

export default Canvas;
```

```vue [Vue]
<script setup>
import { ref } from "vue";

defineProps(["btnText"]);

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
    <button class="btn bg-a" @click="open">{{ btnText }}</button>

    <div class="canvas" :class="isOpen && 'open'">
        <div class="w-80% max-w-17 p-8"><slot /></div>
        <div @click="close" aria-hidden="true" />
    </div>
</template>
```

```svelte [Svelte]
<script>
    export let btnText;

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

<button class="btn bg-a" on:click={open}>{btnText}</button>

<div class="canvas" class:open={isOpen}>
    <div class="w-80% max-w-17 p-8"><slot /></div>
    <div on:click={close} aria-hidden="true" />
</div>
```

:::

## Direction

To change the direction of the animation, add a `.right`, `.top` or `.bottom` class to the canvas.

<button class="btn bg-a m-3" onclick='showCanvas(".canvas.right")'>Open right Canvas</button>
<button class="btn bg-a m-3" onclick='showCanvas(".canvas.top")'>Open top Canvas</button>
<button class="btn bg-a m-3" onclick='showCanvas(".canvas.bottom")'>Open bottom Canvas</button>

<div class="canvas right">
    <div class="w-80% max-w-18 p-8">This is right Canvas!</div>
    <div onclick='hideCanvas(".canvas.right")' aria-hidden="true"></div>
</div>

<div class="canvas top">
    <div class="p-8">This is top Canvas!</div>
    <div onclick='hideCanvas(".canvas.top")' aria-hidden="true"></div>
</div>

<div class="canvas bottom">
    <div class="h-16 p-8">This is bottom Canvas!</div>
    <div onclick='hideCanvas(".canvas.bottom")' aria-hidden="true"></div>
</div>

<!-- prettier-ignore -->
```html
<button class="btn bg-a m-3" onclick='showCanvas(".canvas.right")'>
    Open right Canvas
</button>

<div class="canvas right">// [!code focus]
    <div class="w-80% max-w-18 p-8">This is right Canvas!</div>
    <div onclick='hideCanvas(".canvas.right")' aria-hidden="true"></div>
</div>
```

<!-- prettier-ignore -->
```html
<button class="btn bg-a m-3" onclick='showCanvas(".canvas.top")'>
    Open top Canvas
</button>

<div class="canvas top">// [!code focus]
    <div class="p-8">This is top Canvas!</div>
    <div onclick='hideCanvas(".canvas.top")' aria-hidden="true"></div>
</div>
```

<!-- prettier-ignore -->
```html
<button class="btn bg-a m-3" onclick='showCanvas(".canvas.bottom")'>
    Open bottom Canvas
</button>

<div class="canvas bottom">// [!code focus]
    <div class="h-16 p-8">This is bottom Canvas!</div>
    <div onclick='hideCanvas(".canvas.bottom")' aria-hidden="true"></div>
</div>
```
