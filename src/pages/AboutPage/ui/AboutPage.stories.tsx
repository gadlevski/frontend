import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { themeDecorator } from 'shared/config/storybook/themeDecorator';
import AboutPage from './AboutPage';

const meta = {
  title: 'pages/AboutPage',
  component: AboutPage,

} satisfies Meta<typeof AboutPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AboutPageLight: Story = {
  name: 'AboutPage (Light Theme)',
  decorators: [themeDecorator(Theme.LIGHT)],
};

export const AboutPageDark: Story = {
  name: 'AboutPage (Dark Theme)',
  decorators: [themeDecorator(Theme.DARK)],
};

