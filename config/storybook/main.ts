import type { StorybookConfig } from '@storybook/react-webpack5';
import path from 'path';
import { RuleSetRule } from 'webpack';
import { BuildPaths } from '../build/types/config';


const config: StorybookConfig = {
  framework: '@storybook/react-webpack5',
  stories: ['../../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-essentials',
    {
      name: '@storybook/addon-styling',
      options: {
        sass: {
          implementation: require('sass'),
        },
      },
    },
  ],
  webpackFinal: async (storybookWebpackConfig) => {
    const paths: BuildPaths = {
      build: '',
      html: '',
      entry: '',
      src: path.resolve(__dirname, '..', '..', 'src'),
    };
    storybookWebpackConfig.resolve.modules.push(paths.src);
    storybookWebpackConfig.resolve.extensions.push('.ts', '.tsx');
    storybookWebpackConfig.module.rules = storybookWebpackConfig.module.rules.map((rule: RuleSetRule) => {
      if (/svg/.test(rule.test as string)) {
        return { ...rule, exclude: /\.svg$/i };
      }
      return rule;
    });
    storybookWebpackConfig.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return storybookWebpackConfig;
  },
};

export default config;
