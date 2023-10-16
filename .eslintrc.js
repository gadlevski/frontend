module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb-typescript',
    'plugin:i18next/recommended',
    'plugin:storybook/recommended',
    'plugin:react-hooks/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: ['react', '@typescript-eslint', 'import', 'i18next', 'ga-plugin'],
  rules: {
    '@typescript-eslint/no-unused-vars': ['warn', {
      'argsIgnorePattern': '^_',
    }],
    'indent': [2, 2, { 'SwitchCase': 1 }],
    'react/jsx-indent': [2, 2],
    'react/jsx-indent-props': [2, 2],
    'react/button-has-type': [1, {
      'button': true,
      'submit': true,
      'reset': true,
    }],
    'i18next/no-literal-string': ['warn', {
      mode: 'jsx-text-only',
    }],
    'ga-plugin/path-checker': ['error', { alias: '@' }],
    'ga-plugin/layer-imports': [
      'error',
      {
        alias: '@',
        ignoreImportPatterns: ['**/StoreProvider', '**/testing'],
      },
    ],
    'ga-plugin/public-api-imports': [
      'error',
      {
        alias: '@',
        testFilesPatterns: ['**/*.test.*', '**/*.story.*'],
      },
    ],
    'no-unused-vars': 'off',
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/naming-convention': 'off',
    'import/no-extraneous-dependencies': 'off',
    'react/display-name': 'off',
    'react/prop-types': 'off',
    '@typescript-eslint/lines-between-class-members': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        '': 'never',
        'js': 'never',
        'jsx': 'never',
        'ts': 'never',
        'tsx': 'never',
      },
    ],
  },
  settings: {
    'react': {
      'version': 'detect',
    },
    'import/resolver': {
      'node': {
        'extensions': ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  globals: {
    __IS_DEV__: true,
    __API__: true,
    __PROJECT__: true,
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