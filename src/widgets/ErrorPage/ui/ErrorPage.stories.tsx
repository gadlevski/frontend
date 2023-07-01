import type { Meta, StoryObj } from '@storybook/react';
import { ErrorPage } from './ErrorPage';

const meta = {
  title: 'widget/ErrorPage',
  component: ErrorPage,

} satisfies Meta<typeof ErrorPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ErrorPageStory: Story = {
  args: {
    error: new Error('Sample Error Message'),
    resetErrorBoundary: () => console.log('Reset error boundary'),
  },
};

