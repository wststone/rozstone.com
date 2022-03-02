/** @type {import("next-i18next").UserConfig} */
const nextI18NextConfig = {
	i18n: {
		defaultLocale: "en",
		locales: ["en", "zh"],
		// localeDetection: false,
	},
	localeExtension: "js",
};
module.exports = nextI18NextConfig;
