const lineClamp = require("@tailwindcss/line-clamp");

/** @type {import('tailwindcss/tailwind-config').TailwindConfig} */
module.exports = {
	content: ["src/**/*.{js,ts,jsx,tsx}"],
	darkMode: "class",
	theme: {
		extend: {
			fontFamily: {
				Comfortaa: ["Comfortaa"],
				League: ["League"],
				Merriweather: ["Merriweather"],
			},
			listStyleType: {
				circle: "circle",
			},
			scale: {
				101: "1.01",
				103: "1.03",
			},
		},
	},
	plugins: [lineClamp],
};
