import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { withTheme } from 'shared/config/storybook/withTheme';
import { NotFoundPage } from './NotFoundPage';

const meta = {
  title: 'pages/NotFoundPage',
  component: NotFoundPage,

} satisfies Meta<typeof NotFoundPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NotFoundPageLight: Story = {
  name: 'NotFoundPage (Светлая тема)',
  decorators: withTheme(Theme.LIGHT),
};

export const NotFoundPageDark: Story = {
  name: 'NotFoundPage (Темная тема)',
  decorators: withTheme(Theme.DARK),
};

