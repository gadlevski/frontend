import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { withTheme } from 'shared/config/storybook/withTheme';
import { LoginForm } from './LoginForm';

const meta = {
  title: 'features/LoginForm',
  component: LoginForm,

} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LoginFormLight: Story = {
  decorators: withTheme(Theme.LIGHT),
};

export const LoginFormDark: Story = {
  decorators: withTheme(Theme.DARK),
};

