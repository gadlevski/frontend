import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { themeDecorator } from 'shared/config/storybook/themeDecorator';
import ArticlesPage from './ArticlesPage';
import { storeDecorator } from 'shared/config/storybook/storeDecorator';

const meta = {
  title: 'pages/ArticlesPage',
  component: ArticlesPage,

} satisfies Meta<typeof ArticlesPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {

  },
  decorators: [
    themeDecorator(Theme.LIGHT),
    storeDecorator({
      articleDetails: {},
    }),
  ],
};

export const Dark: Story = {
  args: {

  },
  decorators: [
    themeDecorator(Theme.DARK),
    storeDecorator({
      articleDetails: {},
    }),
  ],
};

