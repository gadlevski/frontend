import type { Meta, StoryObj } from '@storybook/react';
import { ErrorPage } from './ErrorPage';
import { themeDecorator } from 'shared/config/storybook/themeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta = {
  title: 'widget/ErrorPage',
  component: ErrorPage,

} satisfies Meta<typeof ErrorPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {
    error: new Error('Sample Error Message'),
    resetErrorBoundary: () => console.log('Reset error boundary'),
  },
  decorators: [themeDecorator(Theme.LIGHT)],
};


export const Dark: Story = {
  args: {
    error: new Error('Sample Error Message'),
    resetErrorBoundary: () => console.log('Reset error boundary'),
  },
  decorators: [themeDecorator(Theme.DARK)],
};

