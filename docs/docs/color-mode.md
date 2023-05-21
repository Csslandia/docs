# Color mode

---

You can change color mode only, when the `color-mode` property in the [config](config#color-mode) is set to `both`. It is default option.

<div class="mb--10"></div>

## Light mode

<iframe src="/iframes/color-mode/1.html" class="w-100% bd" style="height:120px"></iframe>

```html
<!DOCTYPE html>
<html>
    <head>
        ...
    </head>
    <body>
        <div class="m-6">html tag has no class</div>
    </body>
</html>
```

## Dark mode

<iframe src="/iframes/color-mode/2.html" class="w-100% bd" style="height:120px"></iframe>

```html
<!DOCTYPE html>
<html class="dark">
    <head>
        ...
    </head>
    <body>
        <div class="m-6">html tag has the .dark class</div>
    </body>
</html>
```

## Toggle mode

Learn more about mode togling and the `d:` prefix in [colors](utilities/colors#dark-mode).

### Switch

<div class="h-6"></div>

<iframe src="/iframes/color-mode/3.html" class="w-100% bd" style="height:120px"></iframe>

::: code-group

```html [HTML]
<!DOCTYPE html>
<html>
    <head>
        ...
    </head>
    <body>
        <input type="checkbox" class="switch bd bg-none c-a" id="mode-switch" />

        <script>
            const html = document.documentElement;
            const modeSwitch = document.querySelector("#mode-switch");
            const mode = localStorage.getItem("color-mode");

            if (
                mode === "dark" ||
                (mode === null &&
                    window.matchMedia("(prefers-color-scheme: dark)").matches)
            ) {
                modeSwitch.checked = true;
                html.classList.add("dark");
            }

            modeSwitch.addEventListener("change", (e) => {
                if (e.currentTarget.checked) {
                    html.classList.add("dark");
                    localStorage.setItem("color-mode", "dark");
                } else {
                    html.classList.remove("dark");
                    localStorage.setItem("color-mode", "light");
                }
            });
        </script>
    </body>
</html>
```

```jsx [React]
import { useState, useEffect } from "react";

const Switch = () => {
    const html = document.documentElement;
    const [checked, setChecked] = useState(false);

    useEffect(() => {
        const mode = localStorage.getItem("color-mode");

        if (
            mode === "dark" ||
            (mode === null &&
                window.matchMedia("(prefers-color-scheme: dark)").matches)
        ) {
            html.classList.add("dark");
            setChecked(true);
        }
    }, []);

    useEffect(() => {
        if (checked) {
            html.classList.add("dark");
            localStorage.setItem("color-mode", "dark");
        } else {
            html.classList.remove("dark");
            localStorage.setItem("color-mode", "light");
        }
    }, [checked]);

    const toggle = () => {
        setChecked(!checked);
    };

    return (
        <input
            type="checkbox"
            className="switch bd bg-none c-a"
            onChange={toggle}
            checked={checked}
        />
    );
};

export default Switch;
```

```vue [Vue]
<script setup>
const html = document.documentElement;
const mode = localStorage.getItem("color-mode");
let checked = false;

if (
    mode === "dark" ||
    (mode === null && window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
    html.classList.add("dark");
    checked = true;
}

const toggle = () => {
    checked = !checked;
    if (checked) {
        html.classList.add("dark");
        localStorage.setItem("color-mode", "dark");
    } else {
        html.classList.remove("dark");
        localStorage.setItem("color-mode", "light");
    }
};
</script>

<template>
    <input
        type="checkbox"
        class="switch bd bg-none c-a"
        :checked="checked"
        @change="toggle"
    />
</template>
```

```svelte [Svelte]
<script>
    const html = document.documentElement;
    const mode = localStorage.getItem("color-mode");
    let checked = false;

    if (
        mode === "dark" ||
        (mode === null &&
            window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
        html.classList.add("dark");
        checked = true;
    }

    const toggle = () => {
        checked = !checked;
        if (checked) {
            html.classList.add("dark");
            localStorage.setItem("color-mode", "dark");
        } else {
            html.classList.remove("dark");
            localStorage.setItem("color-mode", "light");
        }
    };
</script>

<input type="checkbox" class="switch bd bg-none c-a" on:change={toggle} bind:checked />
```

:::

### Sun / Moon

<div class="h-6"></div>

<iframe src="/iframes/color-mode/4.html" class="w-100% bd" style="height:120px"></iframe>

::: code-group

```html [HTML]
<!DOCTYPE html>
<html>
    <head>
        ...
    </head>
    <body>
        <button class="lg" id="modeSwitch" />

        <script>
            const html = document.documentElement;
            const modeSwitch = document.querySelector("#modeSwitch");
            const mode = localStorage.getItem("color-mode");

            if (
                mode === "dark" ||
                (mode === null &&
                    window.matchMedia("(prefers-color-scheme: dark)").matches)
            ) {
                html.classList.add("dark");
                modeSwitch.classList.add("i-moon");
            } else {
                modeSwitch.classList.add("i-sun");
            }

            modeSwitch.addEventListener("click", (e) => {
                if (e.target.classList.contains("i-moon")) {
                    html.classList.remove("dark");
                    modeSwitch.classList.remove("i-moon");
                    modeSwitch.classList.add("i-sun");
                    localStorage.setItem("color-mode", "light");
                } else {
                    html.classList.add("dark");
                    modeSwitch.classList.remove("i-sun");
                    modeSwitch.classList.add("i-moon");
                    localStorage.setItem("color-mode", "dark");
                }
            });
        </script>
    </body>
</html>
```

```jsx [React]
import { useState, useEffect } from "react";

const SunMoon = () => {
    const html = document.documentElement;
    const [icon, setIcon] = useState("i-sun");

    useEffect(() => {
        const mode = localStorage.getItem("color-mode");

        if (
            mode === "dark" ||
            (mode === null &&
                window.matchMedia("(prefers-color-scheme: dark)").matches)
        ) {
            html.classList.add("dark");
            setIcon("i-moon");
        }
    }, []);

    useEffect(() => {
        if (icon === "i-moon") {
            html.classList.add("dark");
            localStorage.setItem("color-mode", "dark");
        } else {
            html.classList.remove("dark");
            localStorage.setItem("color-mode", "light");
        }
    }, [icon]);

    const toggle = () => {
        icon === "i-moon" ? setIcon("i-sun") : setIcon("i-moon");
    };

    return <button class={icon + " lg"} onClick={toggle} />;
};

export default SunMoon;
```

```vue [Vue]
<script setup>
import { ref } from "vue";

const html = document.documentElement;
const mode = localStorage.getItem("color-mode");
const icon = ref("i-sun");

if (
    mode === "dark" ||
    (mode === null && window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
    html.classList.add("dark");
    icon.value = "i-moon";
}

const toggle = () => {
    if (icon.value === "i-sun") {
        icon.value = "i-moon";
        html.classList.add("dark");
        localStorage.setItem("color-mode", "dark");
    } else {
        icon.value = "i-sun";
        html.classList.remove("dark");
        localStorage.setItem("color-mode", "light");
    }
};
</script>

<template>
    <button class="lg" :class="icon" @click="toggle" />
</template>
```

```svelte [Svelte]
<script>
    const html = document.documentElement;
    const mode = localStorage.getItem("color-mode");
    let icon = "i-sun";

    if (
        mode === "dark" ||
        (mode === null &&
            window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
        html.classList.add("dark");
        icon = "i-moon";
    }

    const toggle = () => {
        if (icon === "i-sun") {
            icon = "i-moon";
            html.classList.add("dark");
            localStorage.setItem("color-mode", "dark");
        } else {
            icon = "i-sun";
            html.classList.remove("dark");
            localStorage.setItem("color-mode", "light");
        }
    };
</script>

<button class="{icon} lg" on:click={toggle} />
```

:::

### Icon

<div class="h-6"></div>

<iframe src="/iframes/color-mode/5.html" class="w-100% bd" style="height:120px"></iframe>

::: code-group

```html [HTML]
<!DOCTYPE html>
<html>
    <head>
        ...
    </head>
    <body>
        <button class="i-half-circle lg" id="mode-switch" />

        <script>
            const html = document.documentElement;
            const modeSwitch = document.querySelector("#mode-switch");
            let mode = localStorage.getItem("color-mode");

            if (
                mode === "dark" ||
                (mode === null &&
                    window.matchMedia("(prefers-color-scheme: dark)").matches)
            ) {
                html.classList.add("dark");
                mode = "dark";
            }

            modeSwitch.addEventListener("click", () => {
                if (mode === "dark") {
                    html.classList.remove("dark");
                    localStorage.setItem("color-mode", "light");
                    mode = "light";
                } else {
                    html.classList.add("dark");
                    localStorage.setItem("color-mode", "dark");
                    mode = "dark";
                }
            });
        </script>
    </body>
</html>
```

```jsx [React]
import { useState, useEffect } from "react";

const Icon = () => {
    const html = document.documentElement;
    const [mode, setMode] = useState("light");

    useEffect(() => {
        const mode = localStorage.getItem("color-mode");

        if (
            mode === "dark" ||
            (mode === null &&
                window.matchMedia("(prefers-color-scheme: dark)").matches)
        ) {
            html.classList.add("dark");
            setMode("dark");
        }
    }, []);

    useEffect(() => {
        if (mode === "dark") {
            html.classList.add("dark");
            localStorage.setItem("color-mode", "dark");
        } else {
            html.classList.remove("dark");
            localStorage.setItem("color-mode", "light");
        }
    }, [mode]);

    const toggle = () => {
        mode === "dark" ? setMode("light") : setMode("dark");
    };

    return <button className="i-half-circle lg" onClick={toggle} />;
};

export default Icon;
```

```vue [Vue]
<script setup>
const html = document.documentElement;
let mode = localStorage.getItem("color-mode");

if (
    mode === "dark" ||
    (mode === null && window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
    html.classList.add("dark");
    mode = "dark";
}

const toggle = () => {
    if (mode === "dark") {
        mode = "light";
        html.classList.remove("dark");
    } else {
        mode = "dark";
        html.classList.add("dark");
    }
    localStorage.setItem("color-mode", mode);
};
</script>

<template>
    <button class="i-half-circle lg" @click="toggle" />
</template>
```

```svelte [Svelte]
<script>
    const html = document.documentElement;
    let mode = localStorage.getItem("color-mode");

    if (
        mode === "dark" ||
        (mode === null &&
            window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
        html.classList.add("dark");
        mode = "dark";
    }

    const toggle = () => {
        if (mode === "dark") {
            mode = "light";
            html.classList.remove("dark");
        } else {
            mode = "dark";
            html.classList.add("dark");
        }
        localStorage.setItem("color-mode", mode);
    };
</script>

<button class="i-half-circle lg" on:click={toggle} />
```

:::
