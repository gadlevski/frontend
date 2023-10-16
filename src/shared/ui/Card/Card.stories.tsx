import { themeDecorator } from '@/shared/config/storybook/themeDecorator';
import { Theme } from '@/shared/const/theme';
import type { Meta, StoryObj } from '@storybook/react';
import { Text } from '../Text/Text';
import { Card } from './Card';

const meta = {
  title: 'shared/Card',
  component: Card,
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {
    children: <Text title="Заголовок карточки" text="Текст внутри карточки" />,
  },
  decorators: [themeDecorator(Theme.LIGHT)],
};

export const Dark: Story = {
  args: {
    children: <Text title="Заголовок карточки" text="Текст внутри карточки" />,
  },
  decorators: [themeDecorator(Theme.DARK)],
};

