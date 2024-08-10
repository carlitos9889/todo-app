/** @type {import('tailwindcss').Config} */

const { nextui } = require("@nextui-org/react");
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
		"./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"svg-red": "url('/src/assets/svg-red.svg')",
				"svg-login": "url('/src/assets/svg-login.svg')",
			},
		},
	},
	darkMode: "class",
	plugins: [
		nextui({
			themes: {
				light: {
					colors: {
						primary: {
							DEFAULT: "#FF6767",
							foreground: "white",
						},
					},
				},
			},
		}),
	],
};
