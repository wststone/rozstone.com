/** @type {import('tailwindcss/tailwind-config').TailwindConfig} */
module.exports = {
	content: [
		"src/**/*.{js,ts,jsx,tsx}",
		"../../packages/ui/**/*.{js,ts,jsx,tsx}",
	],
	darkMode: "class",
	theme: {
		extend: {
			scale: {
				101: "1.01",
				103: "1.03",
			},
		},
	},
	plugins: [],
};