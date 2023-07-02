import type { Meta, StoryObj } from '@storybook/react';
import { ErrorPage } from './ErrorPage';
import { withTheme } from 'shared/config/storybook/withTheme';
import { Theme } from 'app/providers/ThemeProvider';

const meta = {
  title: 'widget/ErrorPage',
  component: ErrorPage,

} satisfies Meta<typeof ErrorPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ErrorPageLight: Story = {
  args: {
    error: new Error('Sample Error Message'),
    resetErrorBoundary: () => console.log('Reset error boundary'),
  },
  decorators: withTheme(Theme.LIGHT),
};


export const ErrorPageDark: Story = {
  args: {
    error: new Error('Sample Error Message'),
    resetErrorBoundary: () => console.log('Reset error boundary'),
  },
  decorators: withTheme(Theme.DARK),
};

