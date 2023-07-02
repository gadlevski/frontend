import type { Meta, StoryObj } from '@storybook/react';
import { Navbar } from './Navbar';
import { withTheme } from 'shared/config/storybook/withTheme';
import { Theme } from 'app/providers/ThemeProvider';

const meta = {
  title: 'widget/Navbar',
  component: Navbar,

} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NavbarLight: Story = {
  decorators: withTheme(Theme.LIGHT),
};

export const NavbarDark: Story = {
  decorators: withTheme(Theme.DARK),
};

