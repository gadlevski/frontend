import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { withTheme } from 'shared/config/storybook/withTheme';
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

export const ModalLight: Story = {
  args: {
    isOpen: true,
    children: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem',
  },
  decorators: withTheme(Theme.LIGHT),
};

export const ModalDark: Story = {
  args: {
    isOpen: true,
    children: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem ',
  },
  decorators: withTheme(Theme.DARK),
};
