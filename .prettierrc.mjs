/** @type {import("prettier").Config} */
export default {
	semi: true,
	useTabs: true,
	printWidth: 120,
	htmlWhitespaceSensitivity: "ignore",
	plugins: ["prettier-plugin-astro", "prettier-plugin-tailwindcss"],
	overrides: [
		{
			files: "*.astro",
			options: {
				parser: "astro",
			},
		},
	],
};
