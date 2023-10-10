import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from '@/app/providers/ThemeProvider';
import { themeDecorator } from '@/shared/config/storybook/themeDecorator';
import { Loader } from './Loader';

const meta = {
  title: 'shared/Loader',
  component: Loader,

} satisfies Meta<typeof Loader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LoaderLight: Story = {
  decorators: [themeDecorator(Theme.LIGHT)],
};

export const LoaderDark: Story = {
  decorators: [themeDecorator(Theme.DARK)],
};

