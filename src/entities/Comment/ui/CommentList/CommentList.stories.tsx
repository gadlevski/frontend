import { themeDecorator } from '@/shared/config/storybook/themeDecorator';
import { Theme } from '@/shared/const/theme';
import type { Meta, StoryObj } from '@storybook/react';
import { CommentList } from './CommentList';

const meta = {
  title: 'entities/CommentList',
  component: CommentList,
} satisfies Meta<typeof CommentList>;

export default meta;
type Story = StoryObj<typeof meta>;

const comments = [
  {
    id: '1',
    text: 'Привет',
    user: { id: '1', username: 'Андрей', avatar: '/avatar.png' },
  },
  {
    id: '2',
    text: 'Как дела?',
    user: { id: '1', username: 'Олег', avatar: '/avatar2.png' },
  },
];

export const Normal: Story = {
  args: {
    comments,
  },
  decorators: [themeDecorator(Theme.LIGHT)],
};

export const Loading: Story = {
  args: {
    isLoading: true,
  },
  decorators: [themeDecorator(Theme.LIGHT)],
};
