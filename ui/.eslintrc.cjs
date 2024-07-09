module.exports = {
  env: { browser: true, es2020: true, node: true },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs', 'node_modules'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'react', 'react-refresh', 'prettier'],
  rules: {
    // Disallow the use of console, but allow the use of console.error
    'no-console': [
      'error',
      {
        allow: ['error'],
      },
    ],
    // Disable the rule that requires React to be in scope when using JSX
    'react/react-in-jsx-scope': 'off',
    // Disable the warning about missing displayName in React components
    'react/display-name': 'off',
    // Enforce 2-space indentation
    indent: ['error', 2],
    // Enforce Unix line endings (LF)
    'linebreak-style': ['error', 'unix'],
    // Enforce the use of single quotes for strings
    quotes: ['error', 'single'],
    // Enforce the use of semicolons at the end of statements
    semi: ['error', 'always'],
    // Rules for defining functional components
    'react/function-component-definition': [
      'error',
      {
        // Require the use of arrow functions for named components
        namedComponents: 'arrow-function',
        // Require the use of arrow functions for unnamed components
        unnamedComponents: 'arrow-function',
      },
    ],
    // Enforce newline at the end of file, with no multiple empty lines
    'eol-last': ['error', 'always'],
  },
};
