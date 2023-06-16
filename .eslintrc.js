module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'airbnb-typescript',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: "./tsconfig.json"
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'import'
  ],
  rules: {
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": ["error", { "argsIgnorePattern": "^_" }],
    "indent": [2, 2],
    "react/jsx-indent": [2, 2],
    "react/jsx-indent-props": [2, 2],
    "react/react-in-jsx-scope": "off",
    "react/button-has-type": [1, {
      "button": true,
      "submit": true,
      "reset": true
    }],
    'import/no-extraneous-dependencies': "off",
    '@typescript-eslint/naming-convention': "off"
  },
  settings: {
    "react": {
      "version": "detect"
    }
  }
};
