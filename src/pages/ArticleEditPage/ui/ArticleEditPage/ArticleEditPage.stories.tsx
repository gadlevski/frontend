import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from '@/app/providers/ThemeProvider';
import { themeDecorator } from '@/shared/config/storybook/themeDecorator';
import ArticleEditPage from './ArticleEditPage';
import { storeDecorator } from '@/shared/config/storybook/storeDecorator';

const meta = {
  title: 'pages/ArticleEditPage',
  component: ArticleEditPage,

} satisfies Meta<typeof ArticleEditPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {},
  decorators: [
    themeDecorator(Theme.LIGHT),
    storeDecorator({}),
  ],
};

export const Dark: Story = {
  args: {},
  decorators: [
    themeDecorator(Theme.DARK),
    storeDecorator({}),
  ],
};

