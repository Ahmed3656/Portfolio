import pluginJs from '@eslint/js';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import pluginReact from 'eslint-plugin-react';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default [
  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
  { languageOptions: { globals: { ...globals.node, ...globals.browser } } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  eslintPluginPrettierRecommended,
  {
    rules: {
      'no-undef': 'error',
      'prettier/prettier': 'error',
      'spaced-comment': 'off',
      'consistent-return': 'off',
      'func-names': 'off',
      'object-shorthand': 'off',
      'no-process-exit': 'off',
      'no-param-reassign': 'off',
      'no-return-await': 'off',
      'no-underscore-dangle': 'off',
      'class-methods-use-this': 'off',
      "indent": ["error", 2],
      'prefer-destructuring': ['error', { object: true, array: false }],
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    },
  },
];
