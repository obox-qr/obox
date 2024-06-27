import js from "@eslint/js";
import globals from "globals";
import eslintReact from "eslint-plugin-react";
import eslintReact from "eslint-plugin-react";
import eslintReactHooks from "eslint-plugin-react-hooks";
import eslintReactRefresh from "eslint-plugin-react-refresh";
import { ESLint } from "@typescript-eslint/eslint-plugin";


export default [
  {
    plugins: {
      react: eslintReact,
      'react-hooks': eslintReactHooks,
      'react-refresh': eslintReactRefresh,
      '@typescript-eslint': ESLint,
    }
  },
  {
    ignores: ['node_modules']
  },
  
 {languageOptions: {
    globals: {
      ...globals.node,
      ...globals.browser,
      ...globals.es2022,

    }
  }}, 

  {files: ["**/*.{js,ts,jsx,tsx}"]},

];

// import { languageOptions } from "eslint-plugin-react/configs/all";
// import { plugins } from "eslint-plugin-react/configs/all";

// import tseslint from "typescript-eslint";
// import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";
// import { fixupConfigRules } from "@eslint/compat";

  // { languageOptions: { parserOptions: { ecmaFeatures: { jsx: true } } } },
  // {languageOptions: { globals: globals.browser }},
  // pluginJs.configs.recommended,
  // ...tseslint.configs.recommended,
  // ...fixupConfigRules(pluginReactConfig),