module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ['airbnb', 'prettier', 'prettier/react'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    __DEV__: 'readonly',
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': ['warn', { extensions: ['.jsx', '.js'] }],
    'import/prefer-default-export': 'off',
    'no-param-reassign': 'off',
    'no-console': 'off',
    'react/no-unescaped-entities': 'off',
    '@next/next/no-page-custom-font': 'off',
    'import/extensions': 'off',
    'react/forbid-prop-types': 'off',
    'import/no-unresolved': [
      'error',
      {
        ignore: [''],
      },
    ],
  },
};
