module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    "plugin:react/recommended",
    "airbnb-typescript",
    "plugin:i18next/recommended",
    "plugin:storybook/recommended",
    "plugin:react-hooks/recommended"
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: "latest",
    sourceType: "module",
    project: "./tsconfig.json"
  },
  plugins: ["react", "@typescript-eslint", "import", "i18next"],
  rules: {
    "@typescript-eslint/no-unused-vars": ["warn", {
      "argsIgnorePattern": "^_"
    }],
    "indent": [2, 2],
    "react/jsx-indent": [2, 2],
    "react/jsx-indent-props": [2, 2],
    "react/button-has-type": [1, {
      "button": true,
      "submit": true,
      "reset": true
    }],
    "i18next/no-literal-string": ["warn", {
      mode: "jsx-text-only"
    }],
    "no-unused-vars": "off",
    "react/react-in-jsx-scope": "off",
    "@typescript-eslint/naming-convention": "off",
    "import/no-extraneous-dependencies": "off",
    "react/display-name": "off",
    "react/prop-types": "off",
    "@typescript-eslint/lines-between-class-members": "off"
  },
  settings: {
    "react": {
      "version": "detect"
    }
  },
  globals: {
    __IS_DEV__: true,
    __API__: true,
    __PROJECT__: true
  },
  overrides: [
    {
      files: ['**/src/**/*.{test,stories}.{ts,tsx}'],
      rules: {
        'max-len': 'off',
      },
    },
  ],
};