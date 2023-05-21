# Modal

---

<button class="btn bg-a" onclick='showModal("#my-modal")'>Open Modal</button>

<div class="modal" id="my-modal">
    <div>
        <div class="fs-6 bold">
            <h5>This is the title of the modal</h5>
            <button class="i-close sm" onclick="hideModal()"></button>
        </div>
        <div>This is Modal!</div>
        <div class="x-right">
            <button class="btn bd-a c-a mr-5" onclick="hideModal()">Close</button>
            <input type="submit" class="btn bg-a">
        </div>
    </div>
</div>

::: code-group

```html [HTML]
<button class="btn bg-a" onclick='showModal("#my-modal")'>Open Modal</button>

<div class="modal" id="my-modal">
    <div>
        <div class="fs-6 bold">
            <h5>This is the title of the modal</h5>
            <button class="i-close sm" onclick="hideModal()"></button>
        </div>
        <div>This is Modal!</div>
        <div class="x-right">
            <button class="btn bd-a c-a mr-5" onclick="hideModal()">
                Close
            </button>
            <input type="submit" class="btn bg-a" />
        </div>
    </div>
</div>

<script>
    let modal;

    const showModal = (x) => {
        modal = document.querySelector(x);
        modal.classList.add("open");
        document.addEventListener("keydown", keyDownModal);
    };

    const hideModal = () => {
        modal.classList.remove("open");
        document.removeEventListener("keydown", keyDownModal);
    };

    const keyDownModal = (e) => {
        if (e.key === "Escape") hideModal();
    };
</script>
```

```jsx [React]
import { useState } from "react";

const Modal = ({ btnText, title, children }) => {
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

            <div className={"modal " + (isOpen ? "open" : "")}>
                <div>
                    <div className="fs-6 bold">
                        <h5>{title}</h5>
                        <button className="i-close sm" onClick={close} />
                    </div>
                    <div>{children}</div>
                    <div className="x-right">
                        <button className="btn bd-a c-a mr-5" onClick={close}>
                            Close
                        </button>
                        <input type="submit" className="btn bg-a" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Modal;
```

```vue [Vue]
<script setup>
import { ref } from "vue";

defineProps(["btnText", "title"]);

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

    <div class="modal" :class="isOpen && 'open'">
        <div>
            <div class="fs-6 bold">
                <h5>{{ title }}</h5>
                <button class="i-close sm" @click="close" />
            </div>
            <div><slot /></div>
            <div class="x-right">
                <button class="btn bd-a c-a mr-5" @click="close">Close</button>
                <input type="submit" class="btn bg-a" />
            </div>
        </div>
    </div>
</template>
```

```svelte [Svelte]
<script>
    export let btnText, title;

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

<div class="modal" class:open={isOpen}>
    <div>
        <div class="fs-6 bold">
            <h5>{title}</h5>
            <button class="i-close sm" on:click={close} />
        </div>
        <div><slot /></div>
        <div class="x-right">
            <button class="btn bd-a c-a mr-5" on:click={close}>Close</button>
            <input type="submit" class="btn bg-a" />
        </div>
    </div>
</div>
```

:::

## Width

<button class="btn bg-a" onclick='showModal("#my-wide-modal")'>Open Modal</button>

<div class="modal" id="my-wide-modal">
    <div class="w-20">
        <div class="fs-6 bold">
            <h5>This is the title of the modal</h5>
            <button class="i-close sm" onclick="hideModal()"></button>
        </div>
        <div>This is Modal!</div>
        <div class="x-right">
            <button class="btn bd-a c-a mr-5" onclick="hideModal()">Close</button>
            <input type="submit" class="btn bg-a">
        </div>
    </div>
</div>

<!-- prettier-ignore -->
```html
<button class="btn bg-a" onclick='showModal("#my-wide-modal")'>
    Open Modal
</button>

<div class="modal" id="my-wide-modal">
    <div class="w-20">// [!code focus]
        <div class="fs-6 bold">
            <h5>This is the title of the modal</h5>
            <button class="i-close sm" onclick="hideModal()"></button>
        </div>
        <div>This is Modal!</div>
        <div class="x-right">
            <button class="btn bd-a c-a mr-5" onclick="hideModal()">
                Close
            </button>
            <input type="submit" class="btn bg-a" />
        </div>
    </div>
</div>
```

## Center

<button class="btn bg-a" onclick='showModal("#my-center-modal")'>Open Modal</button>

<div class="modal center" id="my-center-modal">
    <div>
        <div class="fs-6 bold">
            <h5>This is the title of the modal</h5>
            <button class="i-close sm" onclick="hideModal()"></button>
        </div>
        <div>This is Modal!</div>
        <div class="x-right">
            <button class="btn bd-a c-a mr-5" onclick="hideModal()">Close</button>
            <input type="submit" class="btn bg-a">
        </div>
    </div>
</div>

<!-- prettier-ignore -->
```html
<button class="btn bg-a" onclick='showModal("#my-center-modal")'>
    Open Modal
</button>

<div class="modal center" id="my-center-modal">// [!code focus]
    <div>
        <div class="fs-6 bold">
            <h5>This is the title of the modal</h5>
            <button class="i-close sm" onclick="hideModal()"></button>
        </div>
        <div>This is Modal!</div>
        <div class="x-right">
            <button class="btn bd-a c-a mr-5" onclick="hideModal()">
                Close
            </button>
            <input type="submit" class="btn bg-a" />
        </div>
    </div>
</div>
```
