import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from '@/app/providers/ThemeProvider';
import { storeDecorator } from '@/shared/config/storybook/storeDecorator';
import { themeDecorator } from '@/shared/config/storybook/themeDecorator';
import { NotFoundPage } from './NotFoundPage';

const meta = {
  title: 'pages/NotFoundPage',
  component: NotFoundPage,

} satisfies Meta<typeof NotFoundPage>;

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

