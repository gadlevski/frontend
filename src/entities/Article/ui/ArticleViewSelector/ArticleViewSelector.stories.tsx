import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { themeDecorator } from 'shared/config/storybook/themeDecorator';
import { ArticleViewSelector } from './ArticleViewSelector';
import { ArticleView } from '../../model/types/article';

const meta = {
  title: 'entities/ArticleViewSelector',
  component: ArticleViewSelector,

} satisfies Meta<typeof ArticleViewSelector>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Normal: Story = {
  args: {
    view: ArticleView.BIG,
  },
  decorators: [themeDecorator(Theme.LIGHT)],
};

