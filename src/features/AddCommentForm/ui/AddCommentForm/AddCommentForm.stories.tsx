import { storeDecorator } from '@/shared/config/storybook/storeDecorator';
import { themeDecorator } from '@/shared/config/storybook/themeDecorator';
import { action } from '@storybook/addon-actions';
import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from '@/shared/const/theme';
import AddCommentForm from './AddCommentForm';

const meta = {
  title: 'features/AddCommentForm',
  component: AddCommentForm,
} satisfies Meta<typeof AddCommentForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {
    onSendComment: action('onSendComment'),
  },
  decorators: [themeDecorator(Theme.LIGHT), storeDecorator({})],
};

export const Dark: Story = {
  args: {
    onSendComment: action('onSendComment'),
  },
  decorators: [themeDecorator(Theme.DARK), storeDecorator({})],
};
