module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
    'cypress/globals': true
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:import/typescript',
    'plugin:cypress/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: [
    'react',
    '@typescript-eslint'
  ],
  rules: {
    'comma-dangle': [2, 'never'],
    'no-underscore-dangle': 0,
    'react/function-component-definition': [2, {
      namedComponents: 'arrow-function',
      unnamedComponents: 'arrow-function'
    }],
    'no-use-before-define': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.tsx', '.jsx'] }],
    'import/extensions': [0, 'never'],
    'react/require-default-props': [0],
    'react/prop-types': [0]

  }
};
