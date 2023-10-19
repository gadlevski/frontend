import { ArticleEnum } from '@/entities/Article';
import { themeDecorator } from '@/shared/config/storybook/themeDecorator';
import { Theme } from '@/shared/const/theme';
import type { Meta, StoryObj } from '@storybook/react';
import { ArticleTypeTabs } from './ArticleTypeTabs';

const meta = {
  title: 'entities/ArticleTypeTabs',
  component: ArticleTypeTabs,

} satisfies Meta<typeof ArticleTypeTabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: { value: ArticleEnum.ALL },
  decorators: [
    themeDecorator(Theme.LIGHT),
  ],
};

