import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { themeDecorator } from 'shared/config/storybook/themeDecorator';
import { NotFoundPage } from './NotFoundPage';

const meta = {
  title: 'pages/NotFoundPage',
  component: NotFoundPage,

} satisfies Meta<typeof NotFoundPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NotFoundPageLight: Story = {
  name: 'NotFoundPage (Light Theme)',
  decorators: [themeDecorator(Theme.LIGHT)],
};

export const NotFoundPageDark: Story = {
  name: 'NotFoundPage (Dark Theme)',
  decorators: [themeDecorator(Theme.DARK)],
};

