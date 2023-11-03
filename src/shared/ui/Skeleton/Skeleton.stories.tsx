import { themeDecorator } from '@/shared/config/storybook/themeDecorator';
import { Theme } from '@/shared/const/theme';
import type { Meta, StoryObj } from '@storybook/react';
import { Skeleton } from './Skeleton';

const meta = {
  title: 'shared/Skeleton',
  component: Skeleton,
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {
    width: '100%',
    height: 200,
  },
  decorators: [themeDecorator(Theme.LIGHT)],
};

export const CircleLight: Story = {
  args: {
    border: '50%',
    width: 100,
    height: 100,
  },
  decorators: [themeDecorator(Theme.LIGHT)],
};

export const Dark: Story = {
  args: {
    width: '100%',
    height: 200,
  },
  decorators: [themeDecorator(Theme.DARK)],
};

export const CircleDark: Story = {
  args: {
    border: '50%',
    width: 100,
    height: 100,
  },
  decorators: [themeDecorator(Theme.DARK)],
};
