/** @type {import("eslint").Linter.Config} */
module.exports = {
	env: {
		browser: true,
		node: true,
	},
	extends: ["next"],
	settings: {
		next: {
			rootDir: ["apps/*/", "packages/*/"],
		},
	},
	rules: {
		"@next/next/no-html-link-for-pages": "off",
		"react/no-unescaped-entities": ["warn"],
	},
	ignorePatterns: ["**/*.js", "node_modules", ".turbo", ".next", "public"],
};
