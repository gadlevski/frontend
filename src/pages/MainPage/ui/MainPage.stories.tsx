import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from '@/app/providers/ThemeProvider';
import { storeDecorator } from '@/shared/config/storybook/storeDecorator';
import { themeDecorator } from '@/shared/config/storybook/themeDecorator';
import MainPage from './MainPage';

const meta = {
  title: 'pages/MainPage',
  component: MainPage,

} satisfies Meta<typeof MainPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  decorators: [
    themeDecorator(Theme.LIGHT),
    storeDecorator({}),
  ],
};

export const Dark: Story = {
  decorators: [
    themeDecorator(Theme.DARK),
    storeDecorator({}),
  ],
};