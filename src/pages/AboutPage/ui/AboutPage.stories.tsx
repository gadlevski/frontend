import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { withTheme } from 'shared/config/storybook/withTheme';
import AboutPage from './AboutPage';

const meta = {
  title: 'pages/AboutPage',
  component: AboutPage,

} satisfies Meta<typeof AboutPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AboutPageLight: Story = {
  name: 'AboutPage (Светлая тема)',
  decorators: withTheme(Theme.LIGHT),
};

export const AboutPageDark: Story = {
  name: 'AboutPage (Темная тема)',
  decorators: withTheme(Theme.DARK),
};

