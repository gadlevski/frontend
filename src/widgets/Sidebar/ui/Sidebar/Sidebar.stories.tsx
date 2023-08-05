import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { themeDecorator } from 'shared/config/storybook/themeDecorator';
import { Sidebar } from './Sidebar';

const meta = {
  title: 'widget/Sidebar',
  component: Sidebar,

} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SidebarLight: Story = {
  decorators: [themeDecorator(Theme.LIGHT)],
};

export const SidebarDark: Story = {
  decorators: [themeDecorator(Theme.DARK)],
};

