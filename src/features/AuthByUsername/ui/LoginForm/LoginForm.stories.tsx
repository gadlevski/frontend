import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { themeDecorator } from 'shared/config/storybook/themeDecorator';
import LoginForm from './LoginForm';
import { storeDecorator } from 'shared/config/storybook/storeDecorator';

const meta = {
  title: 'features/LoginForm',
  component: LoginForm,
} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  decorators: [
    themeDecorator(Theme.LIGHT),
    storeDecorator({ loginForm: { username: 'admin', password: '123' } }),
  ],
};

export const Dark: Story = {
  decorators: [
    themeDecorator(Theme.DARK),
    storeDecorator({ loginForm: { username: 'admin', password: '123' } }),
  ],
};

export const WithError: Story = {
  decorators: [
    themeDecorator(Theme.LIGHT),
    storeDecorator({ loginForm: { username: 'admin', password: '123', error: 'error' } }),
  ],
};

export const Loading: Story = {
  decorators: [
    themeDecorator(Theme.LIGHT),
    storeDecorator({ loginForm: { isLoading: true } }),
  ],
};