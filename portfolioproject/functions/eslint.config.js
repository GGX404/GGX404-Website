const js = require("@eslint/js");
const globals = require("globals");
const pluginReact = require("eslint-plugin-react");

module.exports = [
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    plugins: { react: pluginReact },
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "commonjs",
      globals: globals.node,
    },
    rules: {
      ...js.configs.recommended.rules, // Include recommended rules from @eslint/js
      ...pluginReact.configs.recommended.rules, // Include recommended rules from eslint-plugin-react
    },
  },
];