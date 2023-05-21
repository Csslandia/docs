# Folder

---

<div class="folder">
    <div onclick="this.closest('.folder').classList.toggle('open')">
        This is Folder
    </div>
    <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit magnam
        esse, labore laudantium suscipit ex iure ad, dignissimos voluptatum
        obcaecati nesciunt quam perferendis ab quibusdam quod et sint maxime
        quaerat!
    </div>
</div>

::: code-group

```html [HTML]
<div class="folder">
    <div onclick="this.closest('.folder').classList.toggle('open')">
        This is Folder
    </div>
    <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit magnam
        esse, labore laudantium suscipit ex iure ad, dignissimos voluptatum
        obcaecati nesciunt quam perferendis ab quibusdam quod et sint maxime
        quaerat!
    </div>
</div>
```

```jsx [React]
import { useState } from "react";

const Folder = ({ title, children }) => {
    const [isOpen, setOpen] = useState(false);

    const toggle = () => {
        setOpen(!isOpen);
    };

    return (
        <div className={"folder " + (isOpen ? "open" : "")}>
            <div onClick={toggle} aria-hidden="true">
                {title}
            </div>
            <div>{children}</div>
        </div>
    );
};

export default Folder;
```

```vue [Vue]
<script setup>
import { ref } from "vue";

defineProps(["title"]);

let isOpen = ref(false);

const toggle = () => {
    isOpen.value = !isOpen.value;
};
</script>

<template>
    <div class="folder" :class="isOpen && 'open'">
        <div @click="toggle" aria-hidden="true">{{ title }}</div>
        <div><slot /></div>
    </div>
</template>
```

```svelte [Svelte]
<script>
    export let title;

    let isOpen = false;

    const toggle = () => {
        isOpen = !isOpen;
    };
</script>

<div class="folder" class:open={isOpen}>
    <div on:click={toggle} aria-hidden="true">{title}</div>
    <div>
        <slot />
    </div>
</div>
```

:::

## Plus Icon

<div class="folder plus">
    <div onclick="this.closest('.folder').classList.toggle('open')">
        This is Folder
    </div>
    <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit magnam
        esse, labore laudantium suscipit ex iure ad, dignissimos voluptatum
        obcaecati nesciunt quam perferendis ab quibusdam quod et sint maxime
        quaerat!
    </div>
</div>

<!-- prettier-ignore -->
```html
<div class="folder plus">// [!code focus]
    <div onclick="this.closest('.folder').classList.toggle('open')">
        This is Folder
    </div>
    <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit magnam
        esse, labore laudantium suscipit ex iure ad, dignissimos voluptatum
        obcaecati nesciunt quam perferendis ab quibusdam quod et sint maxime
        quaerat!
    </div>
</div>
```

## Color

<div class="folder">
    <div class="c-a bd-a" onclick="this.closest('.folder').classList.toggle('open')">
        This is Folder
    </div>
    <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit magnam
        esse, labore laudantium suscipit ex iure ad, dignissimos voluptatum
        obcaecati nesciunt quam perferendis ab quibusdam quod et sint maxime
        quaerat!
    </div>
</div>

```html
<div class="folder">
    <div
        class="c-a bd-a" // [!code focus]
        onclick="this.closest('.folder').classList.toggle('open')"
    >
        This is Folder
    </div>
    <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit magnam
        esse, labore laudantium suscipit ex iure ad, dignissimos voluptatum
        obcaecati nesciunt quam perferendis ab quibusdam quod et sint maxime
        quaerat!
    </div>
</div>
```

## Group

<div class="folder-group">
    <div class="folder">
        <div onclick="toggleFolder(this)">This is Folder</div>
        <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Odit magnam esse, labore laudantium suscipit ex iure ad,
                dignissimos voluptatum obcaecati nesciunt quam perferendis
                ab quibusdam quod et sint maxime quaerat!
        </div>
    </div>
    <div class="folder">
        <div onclick="toggleFolder(this)">This is Folder</div>
        <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Odit magnam esse, labore laudantium suscipit ex iure ad,
                dignissimos voluptatum obcaecati nesciunt quam perferendis
                ab quibusdam quod et sint maxime quaerat!
        </div>
    </div>
    <div class="folder">
        <div onclick="toggleFolder(this)">This is Folder</div>
        <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Odit magnam esse, labore laudantium suscipit ex iure ad,
                dignissimos voluptatum obcaecati nesciunt quam perferendis
                ab quibusdam quod et sint maxime quaerat!
        </div>
    </div>
</div>

::: code-group

```html [HTML]
<div class="folder-group">
    <div class="folder">
        <div onclick="toggleFolder(this)">This is Folder</div>
        <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit magnam
            esse, labore laudantium suscipit ex iure ad, dignissimos voluptatum
            obcaecati nesciunt quam perferendis ab quibusdam quod et sint maxime
            quaerat!
        </div>
    </div>
    <div class="folder">
        <div onclick="toggleFolder(this)">This is Folder</div>
        <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit magnam
            esse, labore laudantium suscipit ex iure ad, dignissimos voluptatum
            obcaecati nesciunt quam perferendis ab quibusdam quod et sint maxime
            quaerat!
        </div>
    </div>
    <div class="folder">
        <div onclick="toggleFolder(this)">This is Folder</div>
        <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit magnam
            esse, labore laudantium suscipit ex iure ad, dignissimos voluptatum
            obcaecati nesciunt quam perferendis ab quibusdam quod et sint maxime
            quaerat!
        </div>
    </div>
</div>

<script>
    const toggleFolder = (x) => {
        const folderGroup = x.closest(".folder-group");
        const folders = folderGroup.querySelectorAll(".folder");

        folders.forEach((folder) => {
            if (folder !== x.closest(".folder")) {
                folder.classList.remove("open");
            } else {
                folder.classList.toggle("open");
            }
        });
    };
</script>
```

```jsx [React]
const FolderGroup = () => {
    const toggle = (e) => {
        const folderGroup = e.target.closest(".folder-group");
        const folders = folderGroup.querySelectorAll(".folder");

        folders.forEach((folder) => {
            if (folder !== e.target.closest(".folder")) {
                folder.classList.remove("open");
            } else {
                folder.classList.toggle("open");
            }
        });
    };

    return (
        <div className="folder-group">
            <div className="folder">
                <div onClick={toggle} aria-hidden="true">
                    This is Folder
                </div>
                <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Odit magnam esse, labore laudantium suscipit ex iure ad,
                    dignissimos voluptatum obcaecati nesciunt quam perferendis
                    ab quibusdam quod et sint maxime quaerat!
                </div>
            </div>
            <div className="folder">
                <div onClick={toggle} aria-hidden="true">
                    This is Folder
                </div>
                <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Odit magnam esse, labore laudantium suscipit ex iure ad,
                    dignissimos voluptatum obcaecati nesciunt quam perferendis
                    ab quibusdam quod et sint maxime quaerat!
                </div>
            </div>
            <div className="folder">
                <div onClick={toggle} aria-hidden="true">
                    This is Folder
                </div>
                <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Odit magnam esse, labore laudantium suscipit ex iure ad,
                    dignissimos voluptatum obcaecati nesciunt quam perferendis
                    ab quibusdam quod et sint maxime quaerat!
                </div>
            </div>
        </div>
    );
};

export default FolderGroup;
```

```vue [Vue]
<script setup>
const toggle = (e) => {
    const folderGroup = e.target.closest(".folder-group");
    const folders = folderGroup.querySelectorAll(".folder");

    folders.forEach((folder) => {
        if (folder !== e.target.closest(".folder")) {
            folder.classList.remove("open");
        } else {
            folder.classList.toggle("open");
        }
    });
};
</script>

<template>
    <div class="folder-group">
        <div class="folder">
            <div @click="toggle">This is Folder</div>
            <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
                magnam esse, labore laudantium suscipit ex iure ad, dignissimos
                voluptatum obcaecati nesciunt quam perferendis ab quibusdam quod
                et sint maxime quaerat!
            </div>
        </div>
        <div class="folder">
            <div @click="toggle">This is Folder</div>
            <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
                magnam esse, labore laudantium suscipit ex iure ad, dignissimos
                voluptatum obcaecati nesciunt quam perferendis ab quibusdam quod
                et sint maxime quaerat!
            </div>
        </div>
        <div class="folder">
            <div @click="toggle">This is Folder</div>
            <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
                magnam esse, labore laudantium suscipit ex iure ad, dignissimos
                voluptatum obcaecati nesciunt quam perferendis ab quibusdam quod
                et sint maxime quaerat!
            </div>
        </div>
    </div>
</template>
```

```svelte [Svelte]
<script>
    const toggle = (e) => {
        const folderGroup = e.target.closest(".folder-group");
        const folders = folderGroup.querySelectorAll(".folder");

        folders.forEach((folder) => {
            if (folder !== e.target.closest(".folder")) {
                folder.classList.remove("open");
            } else {
                folder.classList.toggle("open");
            }
        });
    };
</script>

<div class="folder-group">
    <div class="folder">
        <div on:click={toggle} aria-hidden="true">This is Folder</div>
        <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit magnam
            esse, labore laudantium suscipit ex iure ad, dignissimos voluptatum
            obcaecati nesciunt quam perferendis ab quibusdam quod et sint maxime
            quaerat!
        </div>
    </div>
    <div class="folder">
        <div on:click={toggle} aria-hidden="true">This is Folder</div>
        <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit magnam
            esse, labore laudantium suscipit ex iure ad, dignissimos voluptatum
            obcaecati nesciunt quam perferendis ab quibusdam quod et sint maxime
            quaerat!
        </div>
    </div>
    <div class="folder">
        <div on:click={toggle} aria-hidden="true">This is Folder</div>
        <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit magnam
            esse, labore laudantium suscipit ex iure ad, dignissimos voluptatum
            obcaecati nesciunt quam perferendis ab quibusdam quod et sint maxime
            quaerat!
        </div>
    </div>
</div>
```

:::
