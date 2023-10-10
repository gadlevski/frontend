import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from '@/app/providers/ThemeProvider';
import { themeDecorator } from '@/shared/config/storybook/themeDecorator';
import AboutPage from './AboutPage';
import { storeDecorator } from '@/shared/config/storybook/storeDecorator';

const meta = {
  title: 'pages/AboutPage',
  component: AboutPage,

} satisfies Meta<typeof AboutPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  decorators: [
    themeDecorator(Theme.LIGHT),
    storeDecorator({}),
  ],
};

export const Dark: Story = {
  decorators: [
    themeDecorator(Theme.DARK),
    storeDecorator({}),
  ],
};

