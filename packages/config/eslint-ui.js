/** @type {import("eslint").Linter.Config} */
module.exports = {
	env: {
		browser: true,
	},
	extends: ["eslint:recommended"],
	// plugins: ["plugin:react-hooks"],
	ignorePatterns: ["node_modules", ".turbo", "**/*.js"],
};
