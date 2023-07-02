import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { withTheme } from 'shared/config/storybook/withTheme';
import MainPage from './MainPage';

const meta = {
  title: 'pages/MainPage',
  component: MainPage,

} satisfies Meta<typeof MainPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MainPageLight: Story = {
  decorators: withTheme(Theme.LIGHT),
};

export const MainPageDark: Story = {
  decorators: withTheme(Theme.DARK),
};

