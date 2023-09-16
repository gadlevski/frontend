import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { themeDecorator } from 'shared/config/storybook/themeDecorator';
import { CommentList } from './CommentList';

const meta = {
  title: 'shared/CommentList',
  component: CommentList,

} satisfies Meta<typeof CommentList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {

  },
  decorators: [themeDecorator(Theme.LIGHT)],
};

export const Dark: Story = {
  args: {

  },
  decorators: [themeDecorator(Theme.DARK)],
};

