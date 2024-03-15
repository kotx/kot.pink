import typography from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
export default {
	darkMode: "media",
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			colors: {
				purple: {
					960: "#2F0C4C",
					970: "#1E0532",
				},
			},
		},
	},
	plugins: [typography],
};
