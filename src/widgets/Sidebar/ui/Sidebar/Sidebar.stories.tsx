import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { withTheme } from 'shared/config/storybook/withTheme';
import { Sidebar } from './Sidebar';

const meta = {
  title: 'widget/Sidebar',
  component: Sidebar,

} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SidebarLight: Story = {
  decorators: withTheme(Theme.LIGHT),
};

export const SidebarDark: Story = {
  decorators: withTheme(Theme.DARK),
};

