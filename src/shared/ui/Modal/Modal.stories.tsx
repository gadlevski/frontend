import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from '@/app/providers/ThemeProvider';
import { themeDecorator } from '@/shared/config/storybook/themeDecorator';
import { Modal } from './Modal';

const meta = {
  title: 'shared/Modal',
  component: Modal,
  argTypes: {
    isOpen: {
      defaultValue: true,
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {
    isOpen: true,
    children: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem',
  },
  decorators: [themeDecorator(Theme.LIGHT)],
};

export const Dark: Story = {
  args: {
    isOpen: true,
    children: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem ',
  },
  decorators: [themeDecorator(Theme.DARK)],
};
