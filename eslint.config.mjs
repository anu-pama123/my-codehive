// eslint.config.mjs
import js from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import globals from "globals";

// Remove leading/trailing spaces in globals
const cleanGlobals = {};
for (const key in globals.browser) {
  cleanGlobals[key.trim()] = globals.browser[key];
}

export default [
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    languageOptions: {
      globals: cleanGlobals,
      sourceType: "module",
      parserOptions: {
        ecmaVersion: "latest",
      },
    },
    plugins: {
      js,
      react: pluginReact,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...pluginReact.configs.flat.recommended.rules,
      quotes: ["error", "double", { avoidEscape: true }],
    },
  },
  {
    files: ["**/*.js"],
    languageOptions: { sourceType: "commonjs" },
  },
  ...tseslint.configs.recommended,
];
