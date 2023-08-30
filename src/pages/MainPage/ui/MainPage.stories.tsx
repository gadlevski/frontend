import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { themeDecorator } from 'shared/config/storybook/themeDecorator';
import MainPage from './MainPage';

const meta = {
  title: 'pages/MainPage',
  component: MainPage,

} satisfies Meta<typeof MainPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MainPageLight: Story = {
  name: 'MainPage (Светлая тема)',
  decorators: [themeDecorator(Theme.LIGHT)],
};

export const MainPageDark: Story = {
  name: 'MainPage (Темная тема)',
  decorators: [themeDecorator(Theme.DARK)],
};