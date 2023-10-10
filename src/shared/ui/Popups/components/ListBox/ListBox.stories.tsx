/* eslint-disable i18next/no-literal-string */

import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from '@/app/providers/ThemeProvider';
import { spacingDecorator } from '@/shared/config/storybook/spacingDecorator';
import { themeDecorator } from '@/shared/config/storybook/themeDecorator';
import { ListBox } from './ListBox';

const meta = {
  title: 'shared/ListBox',
  component: ListBox,
  decorators: [spacingDecorator],
} satisfies Meta<typeof ListBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    value: 'value1',
    items: [
      { content: 'content', value: 'value1' },
      { content: 'content', value: 'value2' },
    ],
  },
  decorators: [themeDecorator(Theme.LIGHT)],
};

export const TopLeft: Story = {
  args: {
    direction: 'top left',
    value: 'value1',
    items: [
      { content: 'content', value: 'value1' },
      { content: 'content', value: 'value2' },
    ],
  },
  decorators: [themeDecorator(Theme.LIGHT)],
};

export const TopRight: Story = {
  args: {
    direction: 'top right',
    value: 'value1',
    items: [
      { content: 'content', value: 'value1' },
      { content: 'content', value: 'value2' },
    ],
  },
  decorators: [themeDecorator(Theme.LIGHT)],
};

export const BottomLeft: Story = {
  args: {
    direction: 'bottom left',
    value: 'value1',
    items: [
      { content: 'content', value: 'value1' },
      { content: 'content', value: 'value2' },
    ],
  },
  decorators: [themeDecorator(Theme.LIGHT)],
};

export const BottomRight: Story = {
  args: {
    direction: 'bottom right',
    value: 'value1',
    items: [
      { content: 'content', value: 'value1' },
      { content: 'content', value: 'value2' },
    ],
  },
  decorators: [themeDecorator(Theme.LIGHT)],
};