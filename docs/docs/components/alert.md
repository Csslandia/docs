# Alert

---

<div class="alert">This is Alert</div>

```html
<div class="alert">This is Alert</div>
```

## Color

<div class="alert bg-a">This is Alert</div>

```html
<div class="alert bg-a">This is Alert</div>
```

## Close

<div class="fade open">
    <div class="alert">
        <div>This is Alert</div>
        <button
            class="i-close sm"
            onclick='this.closest(".fade.open").classList.remove("open")'
        ></button>
    </div>
</div>

```html
<div class="fade open">
    <div class="alert">
        <div>This is Alert</div>
        <button
            class="i-close sm"
            onclick='this.closest(".fade.open").classList.remove("open")'
        ></button>
    </div>
</div>
```

## Toggle

<div>
<button class="btn bg-a" onclick='toggle("#my-alert")'>Toggle Alert</button>

<div class="h-6"></div>

<div class="fade" id="my-alert">
    <div class="alert">
        <div>This is Alert</div>
        <button class="i-close sm" onclick='hide("#my-alert")'></button>
    </div>
</div>
</div>

::: code-group

```html [HTML]
<button class="btn bg-a" onclick='toggle("#my-alert")'>Toggle Alert</button>

<div class="fade" id="my-alert">
    <div class="alert">
        <div>This is Alert</div>
        <button class="i-close sm" onclick='hide("#my-alert")'></button>
    </div>
</div>

<script>
    const toggle = (x) => {
        let el = document.querySelector(x);
        el.classList.toggle("open");
    };

    const hide = (x) => {
        let el = document.querySelector(x);
        el.classList.remove("open");
    };
</script>
```

```jsx [React]
import { useState } from "react";

const Alert = ({ btnText, content }) => {
    const [isOpen, setOpen] = useState(false);

    const toggle = () => {
        setOpen(!isOpen);
    };
    const close = () => {
        setOpen(false);
    };

    return (
        <>
            <button className="btn bg-a" onClick={toggle}>
                {btnText}
            </button>

            <div
                className={
                    "fade fixed bottom right w-80% max-w-17 m-7 " +
                    (isOpen ? "open" : "")
                }
            >
                <div className="alert">
                    <div>{content}</div>
                    <button className="i-close sm" onClick={close} />
                </div>
            </div>
        </>
    );
};

export default Alert;
```

```vue [Vue]
<script setup>
import { ref } from "vue";

defineProps(["btnText", "content"]);

let isOpen = ref(false);

const toggle = () => {
    isOpen.value = !isOpen.value;
};
const close = () => {
    isOpen.value = false;
};
</script>

<template>
    <button class="btn bg-a" @click="toggle">{{ btnText }}</button>

    <div
        class="fade fixed bottom right w-80% max-w-17 m-7"
        :class="isOpen && 'open'"
    >
        <div class="alert">
            <div>{{ content }}</div>
            <button class="i-close sm" @click="close" />
        </div>
    </div>
</template>
```

```svelte [Svelte]
<script>
    export let btnText, content;

    let isOpen = false;

    const toggle = () => {
        isOpen = !isOpen;
    };
    const close = () => {
        isOpen = false;
    };
</script>

<button class="btn bg-a" on:click={toggle}>{btnText}</button>

<div class="fade fixed bottom right w-80% max-w-17 m-7" class:open={isOpen}>
    <div class="alert">
        <div>{content}</div>
        <button class="i-close sm" on:click={close} />
    </div>
</div>
```

:::

## Fixed

<button class="btn bg-a" onclick='toggle("#my-fixed-alert")'>
    Toggle Fixed Alert
</button>

<div class="fade fixed bottom right w-80% max-w-17 m-7" id="my-fixed-alert">
    <div class="alert">
        <div>This is fixed alert</div>
        <button class="i-close sm" onclick='hide("#my-fixed-alert")'></button>
    </div>
</div>

<!-- prettier-ignore -->
```html
<button class="btn bg-a" onclick='toggle("#my-fixed-alert")'>
    Toggle Fixed Alert
</button>

<div class="fade fixed bottom right w-80% max-w-17 m-7" id="my-fixed-alert">// [!code focus]
    <div class="alert">
        <div>This is fixed alert</div>
        <button class="i-close sm" onclick='hide("#my-fixed-alert")'></button>
    </div>
</div>
```
