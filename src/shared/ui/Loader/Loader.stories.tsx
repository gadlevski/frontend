import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { withTheme } from 'shared/config/storybook/withTheme';
import { Loader } from './Loader';

const meta = {
  title: 'shared/Loader',
  component: Loader,

} satisfies Meta<typeof Loader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LoaderLight: Story = {
  decorators: withTheme(Theme.LIGHT),
};

export const LoaderDark: Story = {
  decorators: withTheme(Theme.DARK),
};

