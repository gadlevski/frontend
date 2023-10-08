import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { themeDecorator } from 'shared/config/storybook/themeDecorator';
import { ArticleEnum } from '../../model/consts/consts';
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

