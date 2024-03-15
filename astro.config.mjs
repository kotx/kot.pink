import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import { visit } from "unist-util-visit";
import sitemap from "@astrojs/sitemap";
function remarkSkipHeading() {
	return (tree) => {
		visit(tree, "heading", (node) => {
			node.depth++;
		});
	};
}

// https://astro.build/config
export default defineConfig({
	integrations: [
		tailwind({
			applyBaseStyles: false,
		}),
		sitemap(),
	],
	markdown: {
		remarkPlugins: [remarkSkipHeading],
	},
	image: {
		domains: ["avatars.githubusercontent.com", "cdn.erisa.uk", "joscomputing.space"],
		remotePatterns: [
			{
				protocol: "https",
			},
		],
	},
	site: "https://kot.pink",
});
