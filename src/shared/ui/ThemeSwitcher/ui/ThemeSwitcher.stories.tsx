import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { themeDecorator } from 'shared/config/storybook/themeDecorator';
import { ThemeSwitcher } from './ThemeSwitcher';

const meta = {
  title: 'shared/ThemeSwitcher',
  component: ThemeSwitcher,

} satisfies Meta<typeof ThemeSwitcher>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ThemeSwitcherLight: Story = {
  decorators: [themeDecorator(Theme.LIGHT)],
};

export const ThemeSwitcherDark: Story = {
  decorators: [themeDecorator(Theme.DARK)],
};
