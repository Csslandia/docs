# Hamburger

---

<button class="hamburger" onclick="this.classList.toggle('open')"><span></span></button>

::: code-group

```html [HTML]
<button class="hamburger" onclick="this.classList.toggle('open')">
    <span></span>
</button>
```

```jsx [React]
import { useState } from "react";

const Hamburger = () => {
    const [isOpen, setOpen] = useState(false);

    const toggle = () => {
        setOpen(!isOpen);
    };

    return (
        <button
            className={"hamburger " + (isOpen ? "open" : "")}
            onClick={toggle}
        >
            <span />
        </button>
    );
};

export default Hamburger;
```

```vue [Vue]
<script setup>
import { ref } from "vue";

let isOpen = ref(false);

const toggle = () => {
    isOpen.value = !isOpen.value;
};
</script>

<template>
    <button class="hamburger" :class="isOpen && 'open'" @click="toggle">
        <span />
    </button>
</template>
```

```svelte [Svelte]
<script>
    let isOpen = false;

    const toggle = () => {
        isOpen = !isOpen;
    };
</script>

<button class="hamburger {isOpen && 'open'}" on:click={toggle}>
    <span />
</button>
```

:::

## Size

<div class="flexbox x-between">
<button class="hamburger xs" onclick='this.classList.toggle("open")'><span></span></button>
<button class="hamburger sm" onclick='this.classList.toggle("open")'><span></span></button>
<button class="hamburger" onclick='this.classList.toggle("open")'><span></span></button>
<button class="hamburger lg" onclick='this.classList.toggle("open")'><span></span></button>
<button class="hamburger xl" onclick='this.classList.toggle("open")'><span></span></button>
</div>

```html
<button class="hamburger xs" onclick='this.classList.toggle("open")'>
    <span></span>
</button>
<button class="hamburger sm" onclick='this.classList.toggle("open")'>
    <span></span>
</button>
<button class="hamburger" onclick='this.classList.toggle("open")'>
    <span></span>
</button>
<button class="hamburger lg" onclick='this.classList.toggle("open")'>
    <span></span>
</button>
<button class="hamburger xl" onclick='this.classList.toggle("open")'>
    <span></span>
</button>
```

## Color

<button class="hamburger c-a" onclick='this.classList.toggle("open")'><span></span></button>

```html
<button class="hamburger c-a" onclick='this.classList.toggle("open")'>
    <span></span>
</button>
```

---

Check also [navbar](navbar) component which uses hamburger in mobile view.
