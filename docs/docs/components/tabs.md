# Tabs

---

<div class="tabs">
    <div>
        <button class="bg">Tab 1</button>
        <button>Tab 2</button>
        <button>Tab 3</button>
    </div>
    <div class="bg">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic
        corporis quod magnam natus recusandae temporibus nesciunt optio,
        ea iusto perferendis, quis ut numquam magni autem excepturi quia
        qui culpa enim?
    </div>
</div>

```html
<div class="tabs">
    <div>
        <button class="bg">Tab 1</button>
        <button>Tab 2</button>
        <button>Tab 3</button>
    </div>
    <div class="bg">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic corporis
        quod magnam natus recusandae temporibus nesciunt optio, ea iusto
        perferendis, quis ut numquam magni autem excepturi quia qui culpa enim?
    </div>
</div>
```

## Color

<div class="tabs">
    <div>
        <button class="bg-a">Tab 1</button>
        <button>Tab 2</button>
        <button>Tab 3</button>
    </div>
    <div class="bg-a">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic
        corporis quod magnam natus recusandae temporibus nesciunt optio,
        ea iusto perferendis, quis ut numquam magni autem excepturi quia
        qui culpa enim?
    </div>
</div>

```html
<div class="tabs">
    <div>
        <button class="bg-a">Tab 1</button>
        <button>Tab 2</button>
        <button>Tab 3</button>
    </div>
    <div class="bg-a">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic corporis
        quod magnam natus recusandae temporibus nesciunt optio, ea iusto
        perferendis, quis ut numquam magni autem excepturi quia qui culpa enim?
    </div>
</div>
```

## Example

<div class="tabs">
    <div>
        <button class="bg" onclick="toggleTabs(this)">Tab 1</button>
        <button onclick="toggleTabs(this)">Tab 2</button>
        <button onclick="toggleTabs(this)">Tab 3</button>
    </div>
    <div class="bg">
        <div>Content 1</div>
        <div class="none">Content 2</div>
        <div class="none">Content 3</div>
    </div>
</div>

::: code-group

```html [HTML]
<div class="tabs">
    <div>
        <button class="bg" onclick="toggleTabs(this)">Tab 1</button>
        <button onclick="toggleTabs(this)">Tab 2</button>
        <button onclick="toggleTabs(this)">Tab 3</button>
    </div>
    <div class="bg">
        <div>Content 1</div>
        <div class="none">Content 2</div>
        <div class="none">Content 3</div>
    </div>
</div>

<script>
    const toggleTabs = (x) => {
        const tabs = x.closest(".tabs");
        const buttons = Array.from(tabs.firstElementChild.children);
        const contents = Array.from(tabs.lastElementChild.children);

        buttons.forEach((button) => button.classList.remove("bg"));
        x.classList.add("bg");

        contents.forEach((content) => content.classList.add("none"));
        contents[buttons.indexOf(x)].classList.remove("none");
    };
</script>
```

```jsx [React]
const Tabs = () => {
    const toggle = (e) => {
        const tabs = e.target.closest(".tabs");
        const buttons = Array.from(tabs.firstElementChild.children);
        const contents = Array.from(tabs.lastElementChild.children);

        buttons.forEach((button) => button.classList.remove("bg"));
        e.target.classList.add("bg");

        contents.forEach((content) => content.classList.add("none"));
        contents[buttons.indexOf(e.target)].classList.remove("none");
    };

    return (
        <div className="tabs">
            <div>
                <button className="bg" onClick={toggle}>
                    Tab 1
                </button>
                <button onClick={toggle}>Tab 2</button>
                <button onClick={toggle}>Tab 3</button>
            </div>
            <div className="bg">
                <div>Content 1</div>
                <div className="none">Content 2</div>
                <div className="none">Content 3</div>
            </div>
        </div>
    );
};

export default Tabs;
```

```vue [Vue]
<script setup>
const toggle = (e) => {
    const tabs = e.target.closest(".tabs");
    const buttons = Array.from(tabs.firstElementChild.children);
    const contents = Array.from(tabs.lastElementChild.children);

    buttons.forEach((button) => button.classList.remove("bg"));
    e.target.classList.add("bg");

    contents.forEach((content) => content.classList.add("none"));
    contents[buttons.indexOf(e.target)].classList.remove("none");
};
</script>

<template>
    <div class="tabs">
        <div>
            <button class="bg" @click="toggle">Tab 1</button>
            <button @click="toggle">Tab 2</button>
            <button @click="toggle">Tab 3</button>
        </div>
        <div class="bg">
            <div>Content 1</div>
            <div class="none">Content 2</div>
            <div class="none">Content 3</div>
        </div>
    </div>
</template>
```

```svelte [Svelte]
<script>
    const toggle = (e) => {
        const tabs = e.target.closest(".tabs");
        const buttons = Array.from(tabs.firstElementChild.children);
        const contents = Array.from(tabs.lastElementChild.children);

        buttons.forEach((button) => button.classList.remove("bg"));
        e.target.classList.add("bg");

        contents.forEach((content) => content.classList.add("none"));
        contents[buttons.indexOf(e.target)].classList.remove("none");
    };
</script>

<div class="tabs">
    <div>
        <button class="bg" on:click={toggle}>Tab 1</button>
        <button on:click={toggle}>Tab 2</button>
        <button on:click={toggle}>Tab 3</button>
    </div>
    <div class="bg">
        <div>Content 1</div>
        <div class="none">Content 2</div>
        <div class="none">Content 3</div>
    </div>
</div>
```

:::
