module.exports = {
  parser: '@babel/eslint-parser',
  env: {
    browser: false,
    commonjs: true,
    es6: true,
    node: true,
    jest: true,
    es2020: true
  },
  extends: ['eslint:recommended'],
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: false,
      browser: false,
      node: true,
      es2020: true,
      jquery: false
    },
    sourceType: 'module'
  },
  rules: {
    indent: ['error', 2, { SwitchCase: 1 }],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'no-console': ['warn', { allow: ['info', 'error'] }],
    'no-multiple-empty-lines': 'warn',
    'no-var': 'error',
    'prefer-const': 'error'
  }
};
