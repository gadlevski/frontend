import type { Meta, StoryObj } from '@storybook/react';
import { AppLink, AppLinkTheme } from './AppLink';

const meta = {
  title: 'shared/AppLink',
  component: AppLink,
  args: {
    to: '/',
  },
  argTypes: {
    theme: {
      control: {
        type: 'radio',
        options: [AppLinkTheme.PRIMARY, AppLinkTheme.SECONDARY],
      },
    },
  },
} satisfies Meta<typeof AppLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Link 1',
    theme: AppLinkTheme.PRIMARY,
  },
};

export const Secondary: Story = {
  args: {
    children: 'Link 2',
    theme: AppLinkTheme.SECONDARY,
  },
};


