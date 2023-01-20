/** @type { import('eslint').Linter.Config } */
const config = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    // necessary for some airbnb ts stuff
    project: './tsconfig.json'
  },
  env: { es6: true },
  plugins: ['@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'airbnb-base',
    'airbnb-typescript/base',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  rules: {
    'max-len': ["error", { "ignoreComments": true, code: 120 }],
    'no-multiple-empty-lines': ["error", { max: 2, maxEOF: 0, maxBOF: 0 }],
    '@typescript-eslint/type-annotation-spacing': ["error", { after: true }],
    'space-in-parens': ['error', 'always'],
    'import/prefer-default-export': 'off'
  }
};

// eslint-disable-next-line no-undef
module.exports = config;
