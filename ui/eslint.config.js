import js from '@eslint/js';
import globals from 'globals';
import tseslint from '@typescript-eslint/eslint-plugin';
import eslintReact from 'eslint-plugin-react';
import eslintReactHooks from 'eslint-plugin-react-hooks';
import eslintReactRefresh from 'eslint-plugin-react-refresh';
import prettierPlugin from 'eslint-plugin-prettier';
import airbnbBase from "eslint-config-airbnb-base/rules/all";
import airbnbHooks from "eslint-config-airbnb/rules/react-hooks";
import airbnbReact from "eslint-config-airbnb/rules/react";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    plugins: {
      '@typescript-eslint': tseslint,
      'react': eslintReact,
      'react-hooks': eslintReactHooks,
      'react-refresh': eslintReactRefresh,
      prettier: prettierPlugin,
    },
    overrides: [
      {
        files: ['**/*.{js,ts,jsx,tsx}'],
        parser: '@typescript-eslint/parser',
        parserOptions: {
          ecmaVersion: 'latest',
          sourceType: 'module',
          project: ['tsconfig.json', 'tsconfig.node.json'],
        },
        rules: {
          ...airbnbBase.rules,
          ...airbnbReact.rules,
          ...airbnbHooks.rules,
          ...prettierPlugin.configs.recommended.rules,
          'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
          'prefer-const': 'error',
          'react/jsx-curly-brace-presence': ['warn', { props: 'never', children: 'never' }],
          'react/function-component-definition': ['warn', { namedComponents: 'arrow-function' }],
          'react/self-closing-comp': ['error', { component: true, html: true }],
          'max-lines': ['warn', { max: 124 }],
        },
      },
      {
        files: ['**/*.{js,ts,jsx,tsx}'],
        ignores: ['dist', 'node_modules', 'eslint.config.js'],
      },
      js.configs.recommended,
    ],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2020,
      },
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
  },
];