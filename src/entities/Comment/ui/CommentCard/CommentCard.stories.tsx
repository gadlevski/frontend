import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { themeDecorator } from 'shared/config/storybook/themeDecorator';
import { CommentCard } from './CommentCard';

const meta = {
  title: 'shared/CommentCard',
  component: CommentCard,

} satisfies Meta<typeof CommentCard>;

export default meta;
type Story = StoryObj<typeof meta>;

const comment = {
  id: '1',
  text: 'text 1111',
  user: { id: '1', username: 'Admin' },
};

export const Light: Story = {
  args: {
    comment: comment,
  },
  decorators: [themeDecorator(Theme.LIGHT)],
};

export const Dark: Story = {
  args: {
    comment: comment,
  },
  decorators: [themeDecorator(Theme.DARK)],
};

