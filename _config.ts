import lume from "lume/mod.ts";
import jsx from "lume/plugins/jsx_preact.ts";
import sitemap from "lume/plugins/sitemap.ts";

import unocss from "lume/plugins/unocss.ts";
import unoConfig from "./uno.config.ts";

const site = lume({
  src: "./src",
  location: new URL("https://kot.pink")
}).copy("img")
  .use(unocss({
    cssFile: "site.css",
    reset: "tailwind",
    options: unoConfig,
  }))
  .use(sitemap())
  .use(jsx());

export default site;
