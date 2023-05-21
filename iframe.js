import fs from "fs";
import { PurgeCSS } from "purgecss";

const purgeCSSResult = await new PurgeCSS().purge({
    content: ["docs/public/iframes/*/*.html"],
    css: ["node_modules/csslandia/style.min.css"],
});

fs.writeFileSync("docs/public/iframes/style.css", purgeCSSResult[0].css);
