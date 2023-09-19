import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { themeDecorator } from 'shared/config/storybook/themeDecorator';
import { Card } from './Card';
import { Text } from '../Text/Text';

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

