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
				"svg-register": "url('/src/assets/svg-register.svg')",
			},
			keyframes: {
				fadeIn: {
					"0%": { opacity: "0" },
					"50%": { opacity: "0.5" },
					"100%": { opacity: "1" },
				},
			},
			animation: {
				fadeIn: "fadeIn 0.3s ease-in-out",
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
						secondary: {
							DEFAULT: "#3ABEFF",
							foreground: "white",
						},
					},
				},
			},
		}),
	],
};
