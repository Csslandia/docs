# Navbar

---

<div class="navbar">
    <div>
        <a href="#" class="nn">
            <img src="https://csslandia.com/csslandia.svg" alt="logo" />
            <div class="fw-6 ml-6">Csslandia</div>
        </a>
        <button class="hamburger sm" onclick="toggleNavbar(this)">
            <span></span>
        </button>
    </div>
    <nav>
        <a href="#about" class="nn">About</a>
        <a href="#our-team" class="nn">Our Team</a>
        <a href="#contact" class="nn">Contact</a>
    </nav>
</div>

::: code-group

```html [HTML]
<div class="navbar">
    <div>
        <a href="#">
            <img src="https://csslandia.com/csslandia.svg" alt="logo" />
            <div class="fw-6 ml-6">Csslandia</div>
        </a>
        <button class="hamburger sm" onclick="toggleNavbar(this)">
            <span></span>
        </button>
    </div>
    <nav>
        <a href="#about">About</a>
        <a href="#our-team">Our Team</a>
        <a href="#contact">Contact</a>
    </nav>
</div>

<script>
    const toggleNavbar = (x) => {
        const nav = x.closest(".navbar").querySelector("nav");
        x.classList.toggle("open");

        if (x.classList.contains("open")) {
            nav.classList.add("open");
        } else {
            nav.classList.remove("open");
        }
    };
</script>
```

```jsx [React]
import { useState } from "react";

const Navbar = () => {
    const [isOpen, setOpen] = useState(false);

    const toggle = () => {
        setOpen(!isOpen);
    };

    return (
        <div className="navbar">
            <div>
                <a href="#">
                    <img src="https://csslandia.com/csslandia.svg" alt="logo" />
                    <div className="fw-6 ml-6">Csslandia</div>
                </a>

                <button
                    className={"hamburger sm " + (isOpen ? "open" : "")}
                    onClick={toggle}
                >
                    <span />
                </button>
            </div>
            <nav className={isOpen ? "open" : ""}>
                <a href="#about">About</a>
                <a href="#our-team">Our Team</a>
                <a href="#contact">Contact</a>
            </nav>
        </div>
    );
};

export default Navbar;
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
    <div class="navbar">
        <div>
            <a href="#">
                <img src="https://csslandia.com/csslandia.svg" alt="logo" />
                <div class="fw-6 ml-6">Csslandia</div>
            </a>
            <button
                class="hamburger sm"
                :class="isOpen && 'open'"
                @click="toggle"
            >
                <span />
            </button>
        </div>
        <nav :class="isOpen && 'open'">
            <a href="#about">About</a>
            <a href="#our-team">Our Team</a>
            <a href="#contact">Contact</a>
        </nav>
    </div>
</template>
```

```svelte [Svelte]
<script>
    let isOpen = false;

    const toggle = () => {
        isOpen = !isOpen;
    };
</script>

<div class="navbar">
    <div>
        <a href="#">
            <img src="https://csslandia.com/csslandia.svg" alt="logo" />
            <div class="fw-6 ml-6">Csslandia</div>
        </a>
        <button class="hamburger sm" class:open={isOpen} on:click={toggle}>
            <span />
        </button>
    </div>
    <nav class:open={isOpen}>
        <a href="#about">About</a>
        <a href="#our-team">Our Team</a>
        <a href="#contact">Contact</a>
    </nav>
</div>
```

:::

## Fixed

<button class="btn bg-a" onclick='toggle("#my-navbar")'>Toggle Fixed Navbar</button>

<div class="hide" id="my-navbar">

<div class="navbar fixed top left">
    <div>
        <a href="#" class="nn">
            <img src="https://csslandia.com/csslandia.svg" alt="logo" />
            <div class="fw-6 ml-6">Csslandia</div>
        </a>
        <button class="hamburger sm" onclick="toggleNavbar(this)">
            <span></span>
        </button>
    </div>
    <nav>
        <a href="#about" class="nn">About</a>
        <a href="#our-team" class="nn">Our Team</a>
        <a href="#contact" class="nn">Contact</a>
    </nav>
</div>

</div>

<!-- prettier-ignore -->
```html
<div class="navbar fixed top left">// [!code focus]
    <div>
        <a href="#">
            <img src="https://csslandia.com/csslandia.svg" alt="logo" />
            <div class="fw-6 ml-6">Csslandia</div>
        </a>
        <button class="hamburger sm" onclick="toggleNavbar(this)">
            <span></span>
        </button>
    </div>
    <nav>
        <a href="#about">About</a>
        <a href="#our-team">Our Team</a>
        <a href="#contact">Contact</a>
    </nav>
</div>
```

## Color

<div class="navbar bg-a">
    <div>
        <a href="#" class="fw-6 nn">Csslandia</a>
        <button class="hamburger sm" onclick="toggleNavbar(this)">
            <span></span>
        </button>
    </div>
    <nav>
        <a href="#about" class="nn">About</a>
        <a href="#our-team" class="nn">Our Team</a>
        <a href="#contact" class="nn">Contact</a>
    </nav>
</div>

```html
<div class="navbar bg-a">
    <div>
        <a href="#" class="fw-6">Csslandia</a>
        <button class="hamburger sm" onclick="toggleNavbar(this)">
            <span></span>
        </button>
    </div>
    <nav>
        <a href="#about">About</a>
        <a href="#our-team">Our Team</a>
        <a href="#contact">Contact</a>
    </nav>
</div>

<script>
    const toggleNavbar = (x) => {
        const nav = x.closest(".navbar").querySelector("nav");
        x.classList.toggle("open");

        if (x.classList.contains("open")) {
            nav.classList.add("open");
        } else {
            nav.classList.remove("open");
        }
    };
</script>
```

---

You can change breakpoint value in the [config](../config#other-brakpoints).
