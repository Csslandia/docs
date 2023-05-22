# Config

---

This option is not available via CDN.

---

Add the following scripts to the `package.json`.

::: code-group

```json [package.json]
{
    "scripts": {
        "compile": "csslandia",
        "watch": "csslandia watch"
    }
}
```

:::

When run for the first time, the script will create a `_csslandia.config.scss` file in the root directory of your project.

```
.
├─ _csslandia.config.scss
└─ package.json
```

After every change in `_csslandia.config.scss` you need to run `compile` script.
To watch for changes and compile after every change in `_csslandia.config.scss` use `watch` script.

::: code-group

```sh [npm]
npm run compile
```

```sh [Yarn]
yarn compile
```

```sh [pnpm]
pnpm run compile
```

:::

::: code-group

```sh [npm]
npm run watch
```

```sh [Yarn]
yarn watch
```

```sh [pnpm]
pnpm run watch
```

:::

## Color mode

-   value: `both | light | dark`
-   default: `both`

By default, a site that uses Csslandia is in light mode. Dark mode is activated when the html tag has the `.dark` class. When the `color-mode` property is set to `light` or `dark`, you cannot change the color mode and use classes with `d=` prefixes, so CSS file is smaller. The color mode is only light or dark.

```scss
$color-mode: both;
```

## Accent

-   value: `color`
-   default: `#999`
-   in docs: `#0c5`

The text color if the element has `.c-a` class, the background color if the element has `.bg-a` class, and the border color if the element has `.bd-a` class.

```scss
$accent: #999;
```

### Accent color

-   value: `color`
-   default: `var(--c-strong)`
-   in docs: `var(--bg-strong)`

The text color if the element has `.bg-a` class.

```scss
$accent-c: var(--c-strong);
```

### Light & Dark mode

You can set different accent color for light and dark mode.

```scss
$light-accent: $accent;
$light-accent-c: $accent-c;

$dark-accent: $accent;
$dark-accent-c: $accent-c;
```

Check the accent color in the [colors](./utilities/colors#accent-color).

## Colors

```scss
$light-c-strong: #222;
$light-c-soft: #333;
$light-bg-strong: #fff;
$light-bg-medium: #eee;
$light-bg-soft: #ddd;
$light-bd: #ccc;

$dark-c-strong: #fff;
$dark-c-soft: #eee;
$dark-bg-strong: #222;
$dark-bg-medium: #333;
$dark-bg-soft: #444;
$dark-bd: #555;
```

## Selection

### Background

-   value: `false | color`
-   default: `false`
-   in docs: `$accent`

### Color

-   value: `false | color`
-   default: `false`
-   in docs: `$accent-c`

```scss
$selection-bg: false;
$selection-c: false;
```

Learn more about [selection](https://developer.mozilla.org/en-US/docs/Web/CSS/::selection).

## Font

-   value: `name of font`
-   default: `Inter`

If you wanna change the font, you must also import the font.

```scss
$font: "Inter";
```

Learn more about [Inter](https://rsms.me/inter/).

### Font family

-   value: `sans-serif | serif | monospace`
-   default: `sans-serif`

```scss
$font-family: sans-serif;
```

### Italic all

-   value: `boolean`
-   default: `false`

```scss
$italic-all: false;
```

## Ratios

-   value: `number`
-   default: `0`

### Padding ratio

```scss
$padding-ratio: 1;
```

Every padding is multiplied by this value.

### Border radius ratio

```scss
$border-radius-ratio: 1;
```

Every border radius is multiplied by this value.

### Transition ratio

```scss
$transition-ratio: 1;
```

Every transition duration is multiplied by this value.

## Anchor

### Color

-   value: `color`
-   default: `var(--c-soft)`

```scss
$a-c: var(--c-soft);
```

### Color hover

-   value: `color`
-   default: `var(--c-strong)`

```scss
$a-hover-c: var(--c-strong);
```

### Decoration

-   value: `none | underline`
-   default: `none`

```scss
$a-decoration: none;
```

### Decoration hover

-   value: `none | underline`
-   default: `none`

```scss
$a-hover-decoration: none;
```

## Buttons

### Shape

-   value: `default | pill | angular`
-   default: `default`

```scss
$button-shape: default;
```

### Color

-   value: `color`
-   default: `inherit`

```scss
$button-c: inherit;
```

### Background color

-   value: `color`
-   default: `transparent`

```scss
$button-bg-color: transparent;
```

### Border color

-   value: `color`
-   default: `transparent`

```scss
$button-bd-color: transparent;
```

### Border width

-   value: `number + css unit`
-   default: `0.1rem`

```scss
$button-bd-width: 0.1rem;
```

## Forms

### Shape

-   value: `default | pill | angular`
-   default: `default`

```scss
$form-shape: default;
```

### Color

-   value: `color`
-   default: `inherit`

```scss
$form-c: inherit;
```

### Background color

-   value: `color`
-   default: `var(--bg-medium)`

```scss
$form-bg-color: var(--bg-medium);
```

### Border color

-   value: `color`
-   default: `transparent`

```scss
$form-bd-color: transparent;
```

### Border width

-   value: `number + css unit`
-   default: `0.1rem`

```scss
$form-bd-width: 0.1rem;
```

### Space

-   value: `number + css unit`
-   default: `8px`

Space between inputs inside `<form class="form"></form>`.

```scss
$form-space: 0.5rem;
```

## Breakpoints

### Mob Tab

-   value: `number + px`
-   default: `600px`

When the screen width is smaller, `.mob` classes are used, if it is bigger, `.tab` classes are used.

```scss
$mob-tab-breakpoint: 600px;
```

### Tab Pc

-   value: `number + px`
-   default: `1000px`

When the screen width is smaller, `.tab` classes are used, if it is bigger, `.pc` classes are used.

```scss
$tab-pc-breakpoint: 1000px;
```

### Frame

```scss
$frame-breakpoint: $mob-tab-breakpoint;
```

Screen width when the [frame](components/frame) breaks from desktop view to mobile view.

### Navbar

```scss
$navbar-breakpoint: $mob-tab-breakpoint;
```

Screen width when the [navbar](components/navbar) breaks from desktop view to mobile view.

### Steps

```scss
$steps-breakpoint: $mob-tab-breakpoint;
```

Screen width when the [steps](components/steps) breaks from desktop view to mobile view.

## Container

```scss
$mob-container-width: 92%;
$tab-container-width: 84%;
$pc-container-width: 76%;
```

The width of the [container](components/container) on different screen sizes.

## Whether contains

### Colors

-   value: `boolean`
-   default: `true`

If the value is `false`, csslandia not contains [colors](utilities/colors).

```scss
$colors: true;
```

### Icons

-   value: `boolean`
-   default: `true`

If the value is `false`, csslandia not contains [icons](/icons/).

```scss
$icons: true;
```

### Margin & Padding

-   value: `boolean`
-   default: `true`

If the value is `false`, csslandia not contains [margin & padding](utilities/margin-padding).

```scss
$margin-padding: true;
```

### Margin & Padding prefixes

-   value: `boolean`
-   default: `false`

If the value is `true`, csslandia contains [margin & padding](utilities/margin-padding) with `.mob`, `.tab` and `.pc` prefixes.

```scss
$margin-padding-prefixes: false;
```

### Width & Height

-   value: `boolean`
-   default: `true`

If the value is `false`, csslandia not contains [width & height](utilities/width-height).

```scss
$width-height: true;
```

### Width & Height prefixes

-   value: `boolean`
-   default: `false`

If the value is `true`, csslandia contains [width & height](utilities/width-height) with `.mob`, `.tab` and `.pc` prefixes.

```scss
$width-height-prefixes: false;
```

## Full config

```scss
$color-mode: both;

$accent: #999;
$accent-c: var(--c-strong);

$light-c-strong: #222;
$light-c-soft: #333;
$light-bg-strong: #fff;
$light-bg-medium: #eee;
$light-bg-soft: #ddd;
$light-bd: #ccc;
$light-accent: $accent;
$light-accent-c: $accent-c;

$dark-c-strong: #fff;
$dark-c-soft: #eee;
$dark-bg-strong: #222;
$dark-bg-medium: #333;
$dark-bg-soft: #444;
$dark-bd: #555;
$dark-accent: $accent;
$dark-accent-c: $accent-c;

$selection-bg: false;
$selection-c: false;

$font: "Inter";
$font-family: sans-serif;
$italic-all: false;

$padding-ratio: 1;
$border-radius-ratio: 1;
$transition-ratio: 1;

$a-c: var(--c-soft);
$a-hover-c: var(--c-strong);
$a-decoration: none;
$a-hover-decoration: none;

$button-shape: default;
$button-c: inherit;
$button-bg-color: transparent;
$button-bd-color: transparent;
$button-bd-width: 0.1rem;

$form-shape: default;
$form-c: inherit;
$form-bg-color: var(--bg-medium);
$form-bd-color: transparent;
$form-bd-width: 0.1rem;
$form-space: 0.5rem;

$mob-tab-breakpoint: 600px;
$tab-pc-breakpoint: 1000px;
$frame-breakpoint: $mob-tab-breakpoint;
$navbar-breakpoint: $tab-pc-breakpoint;
$steps-breakpoint: $mob-tab-breakpoint;

$mob-container-width: 92%;
$tab-container-width: 84%;
$pc-container-width: 76%;

$colors: true;
$icons: true;
$margin-padding: true;
$margin-padding-prefixes: false;
$width-height: true;
$width-height-prefixes: false;
```
