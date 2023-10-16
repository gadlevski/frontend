import { storeDecorator } from '@/shared/config/storybook/storeDecorator';
import { themeDecorator } from '@/shared/config/storybook/themeDecorator';
import { Theme } from '@/shared/const/theme';
import type { Meta, StoryObj } from '@storybook/react';
import { Sidebar } from './Sidebar';

const meta = {
  title: 'widget/Sidebar',
  component: Sidebar,

} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  decorators: [
    themeDecorator(Theme.LIGHT),
    storeDecorator({
      user: {
        authData: {},
      },
    })],
};

export const Dark: Story = {
  decorators: [
    themeDecorator(Theme.DARK),
    storeDecorator({
      user: {
        authData: {},
      },
    })],
};

export const SidebarNoAuthLight: Story = {
  decorators: [themeDecorator(Theme.LIGHT), storeDecorator({ user: {} })],
};

export const SidebarNoAuthDark: Story = {
  decorators: [themeDecorator(Theme.DARK), storeDecorator({ user: {} })],
};

