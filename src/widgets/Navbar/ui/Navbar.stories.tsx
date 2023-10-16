import { storeDecorator } from '@/shared/config/storybook/storeDecorator';
import { themeDecorator } from '@/shared/config/storybook/themeDecorator';
import { Theme } from '@/shared/const/theme';
import type { Meta, StoryObj } from '@storybook/react';
import { Navbar } from './Navbar';

const meta = {
  title: 'widget/Navbar',
  component: Navbar,

} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NavbarLight: Story = {
  decorators: [themeDecorator(Theme.LIGHT), storeDecorator({})],
};

export const NavbarDark: Story = {
  decorators: [themeDecorator(Theme.DARK), storeDecorator({})],
};

export const NavbarAuth: Story = {
  decorators: [themeDecorator(Theme.LIGHT), storeDecorator({ user: { authData: {} } })],
};

