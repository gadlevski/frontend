import { themeDecorator } from '@/shared/config/storybook/themeDecorator';
import { Theme } from '@/shared/const/theme';
import type { Meta, StoryObj } from '@storybook/react';
import { CommentCard } from './CommentCard';

const meta = {
  title: 'entities/CommentCard',
  component: CommentCard,
} satisfies Meta<typeof CommentCard>;

export default meta;
type Story = StoryObj<typeof meta>;

const comment = {
  id: '1',
  text: 'Привет. Как дела?',
  user: { id: '1', username: 'Admin', avatar: '/avatar.png' },
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

export const Loading: Story = {
  args: {
    comment: comment,
    isLoading: true,
  },
  decorators: [themeDecorator(Theme.LIGHT)],
};
