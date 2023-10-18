import type { StorybookConfig } from '@storybook/react-webpack5';
import path from 'path';
import { DefinePlugin, RuleSetRule } from 'webpack';
import { BuildPaths } from '../build/types/config';


const config: StorybookConfig = {
  framework: '@storybook/react-webpack5',
  stories: ['../../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    {
      name: '@storybook/addon-essentials',
      options: {
        backgrounds: false,
      },
    },
    {
      name: '@storybook/addon-styling',
      options: {
        sass: {
          implementation: require('sass'),
        },
      },
    },
    'storybook-addon-mock',
    'storybook-addon-themes',
  ],
  webpackFinal: async (storybookWebpackConfig) => {
    const paths: BuildPaths = {
      build: '',
      html: '',
      entry: '',
      src: path.resolve(__dirname, '..', '..', 'src'),
      locales: '',
      buildLocales: '',
    };
    storybookWebpackConfig.resolve = {
      ...storybookWebpackConfig.resolve,
      alias: {
        ...storybookWebpackConfig!.resolve!.alias,
        entities: path.resolve(__dirname, '..', '..', 'src', 'entities'),
        '@': paths.src,
      },
    };
    storybookWebpackConfig!.resolve!.modules!.push(paths.src);
    storybookWebpackConfig!.resolve!.extensions!.push('.ts', '.tsx');
    //@ts-ignore
    storybookWebpackConfig!.module!.rules = storybookWebpackConfig!.module!.rules!.map((rule: RuleSetRule) => {
      if (/svg/.test(rule.test as string)) {
        return { ...rule, exclude: /\.svg$/i };
      }
      return rule;
    });
    storybookWebpackConfig!.module!.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    storybookWebpackConfig!.plugins!.push(new DefinePlugin({
      __IS_DEV__: JSON.stringify(true),
      __API__: JSON.stringify('http://testapi.ru'),
      __PROJECT__: JSON.stringify('storybook'),
    }));
    return storybookWebpackConfig;
  },
  staticDirs: [path.resolve(__dirname, '..', '..', 'public')],
};

export default config;
