import type { Meta, StoryObj } from '@storybook/react';
import { Button, ThemeButton } from './Button';

const meta = {
  title: 'shared/Button',
  component: Button,
  argTypes: {
    theme: {
      control: {
        type: 'radio',
        options: [ThemeButton.CLEAR, ThemeButton.OUTLINE],
      },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Button Primary',
    theme: undefined,
  },
};

export const Clear: Story = {
  args: {
    children: 'Button Clear',
    theme: ThemeButton.CLEAR,
  },
};

export const Outline: Story = {
  args: {
    children: 'Button Outline',
    theme: ThemeButton.OUTLINE,
  },
};
