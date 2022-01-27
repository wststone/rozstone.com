const withTM = require("next-transpile-modules")(["ui"]);
const isProd = process.env.NODE_ENV === "production";

/** @type {import("next").NextConfig} */
const nextConfig = withTM({
	env: {
		STATIC_URL: isProd ? process.env.STATIC_URL : "",
	},
	assetPrefix: isProd ? process.env.STATIC_URL : "",
	reactStrictMode: true,
	eslint: {
		ignoreDuringBuilds: true,
	},
});

module.exports = nextConfig;
