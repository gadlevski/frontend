import { storeDecorator } from '@/shared/config/storybook/storeDecorator';
import { themeDecorator } from '@/shared/config/storybook/themeDecorator';
import { Theme } from '@/shared/const/theme';
import type { Meta, StoryObj } from '@storybook/react';
import LoginForm from './LoginForm';

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