/** @type {import("eslint").Linter.Config} */
module.exports = {
	...require("config/eslint-next"),
	parserOptions: {
		root:true,
		tsconfigRootDir:__dirname,
		project:["tsconfig.json"],
	}
};
