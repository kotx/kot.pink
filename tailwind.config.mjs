import typography from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
export default {
	darkMode: "class",
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			colors: {
				purpler: {
					900: "#2F0C4C",
					950: "#1E0532",
				},
			},
		},
	},
	plugins: [typography],
};
