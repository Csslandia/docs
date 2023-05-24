# Unused CSS

---

Size of minified version of Csslandia is 118kb, it’s equall to atound 9,000 lines of unminified CSS. It’s not a big deal to load this entire file, but if you want to remove unused CSS, you can use [PurgeCSS](https://purgecss.com/).

You can also use any other similar tool like [UnCSS](https://www.npmjs.com/package/uncss) or [PurifyCSS](https://www.npmjs.com/package/purify-css), but we recommend PurgeCSS.

See the [PurgeCSS](https://purgecss.com/getting-started.html) documentation for several usages. If you're not using PostCSS, we believe the best way is to use PurgeCSS via the [Programmatic API](https://purgecss.com/api.html).

We recommend you to do this step when you are ready to deploy your project.

## Guide

1. Install PurgeCSS to your project

::: code-group

```sh [npm]
npm i purgecss -D
```

```sh [Yarn]
yarn add purgecss -D
```

```sh [pnpm]
pnpm add purgecss -D
```

:::

2. Create a `purgecss.js` file in the root directory of your project

::: code-group

```js [Module JS]
import fs from "fs";
import { PurgeCSS } from "purgecss";

const purgeCSSResult = await new PurgeCSS().purge({
    content: ["**/*.html", "**/*.js"],
    css: ["node_modules/csslandia/style.min.css"],
});

fs.writeFileSync("csslandia.css", purgeCSSResult[0].css);
```

```js [Common JS]
const fs = require("fs");
const { PurgeCSS } = require("purgecss");

const compile = async () => {
    const purgeCSSResult = await new PurgeCSS().purge({
        content: ["**/*.html", "**/*.js"],
        css: ["node_modules/csslandia/style.min.css"],
    });

    fs.writeFileSync("csslandia.css", purgeCSSResult[0].css);
};

compile();
```

:::

3. Run `node purgecss.js` in your terminal

::: code-group

```sh [node]
node purgecss.js
```

```sh [nodemon]
# If you want to run it automatically after every change you may use nodemon
npm i nodemon -g

nodemon purgecss.js -e html,js
```

:::

In the root directory of your project you should now have a `csslandia.css` file.

4. Import `csslandia.css`

::: code-group

```html [HTML]
<head>
    <link rel="stylesheet" href="csslandia.css" />
</head>
```

```js [JS]
import "./csslandia.css";
```

:::

5. Remove previously imported Csslandia

If you imported Csslandia into your project before, you should remove it.
