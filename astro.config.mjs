import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import { visit } from "unist-util-visit";

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
	],
	markdown: {
		remarkPlugins: [remarkSkipHeading],
	},
	site: "https://kot.pink",
});
