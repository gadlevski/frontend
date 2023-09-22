import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { themeDecorator } from 'shared/config/storybook/themeDecorator';
import { Page } from './Page';

const meta = {
  title: 'shared/Page',
  component: Page,

} satisfies Meta<typeof Page>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: { children: <></> },
  decorators: [themeDecorator(Theme.LIGHT)],
};


