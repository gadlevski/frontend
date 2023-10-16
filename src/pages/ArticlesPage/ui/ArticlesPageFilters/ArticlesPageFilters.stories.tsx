import { storeDecorator } from '@/shared/config/storybook/storeDecorator';
import { themeDecorator } from '@/shared/config/storybook/themeDecorator';
import { Theme } from '@/shared/const/theme';
import type { Meta, StoryObj } from '@storybook/react';
import { ArticlesPageFilters } from './ArticlesPageFilters';

const meta = {
  title: 'pages/ArticlesPageFilters',
  component: ArticlesPageFilters,

} satisfies Meta<typeof ArticlesPageFilters>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {

  },
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

