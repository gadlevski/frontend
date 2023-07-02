import type { Meta, StoryObj } from '@storybook/react';
import { AppLink, AppLinkTheme } from './AppLink';
import { withTheme } from 'shared/config/storybook/withTheme';
import { Theme } from 'app/providers/ThemeProvider';

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

export const PrimaryLight: Story = {
  args: {
    children: 'Link 1',
    theme: AppLinkTheme.PRIMARY,
  },
  decorators: withTheme(Theme.LIGHT),
};

export const PrimaryDark: Story = {
  args: {
    children: 'Link 1',
    theme: AppLinkTheme.PRIMARY,
  },
  decorators: withTheme(Theme.DARK),
};

export const SecondaryLight: Story = {
  args: {
    children: 'Link 2',
    theme: AppLinkTheme.SECONDARY,
  },
  decorators: withTheme(Theme.LIGHT),
};

export const SecondaryDark: Story = {
  args: {
    children: 'Link 2',
    theme: AppLinkTheme.SECONDARY,
  },
  decorators: withTheme(Theme.DARK),
};


