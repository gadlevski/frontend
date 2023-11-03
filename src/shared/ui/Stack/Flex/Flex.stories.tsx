/* eslint-disable i18next/no-literal-string */
import { themeDecorator } from '@/shared/config/storybook/themeDecorator';
import { Theme } from '@/shared/const/theme';
import type { Meta, StoryObj } from '@storybook/react';
import { Flex } from './Flex';

const meta = {
  title: 'shared/Flex',
  component: Flex,
} satisfies Meta<typeof Flex>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Row: Story = {
  args: {
    children: (
      <>
        <div>first</div>
        <div>first</div>
        <div>first</div>
        <div>first</div>
      </>
    ),
  },
  decorators: [themeDecorator(Theme.LIGHT)],
};

export const RowGap4: Story = {
  args: {
    gap: '4',
    children: (
      <>
        <div>first</div>
        <div>first</div>
        <div>first</div>
        <div>first</div>
      </>
    ),
  },
  decorators: [themeDecorator(Theme.LIGHT)],
};

export const RowGap8: Story = {
  args: {
    gap: '8',
    children: (
      <>
        <div>first</div>
        <div>first</div>
        <div>first</div>
        <div>first</div>
      </>
    ),
  },
  decorators: [themeDecorator(Theme.LIGHT)],
};

export const RowGap16: Story = {
  args: {
    gap: '16',
    children: (
      <>
        <div>first</div>
        <div>first</div>
        <div>first</div>
        <div>first</div>
      </>
    ),
  },
  decorators: [themeDecorator(Theme.LIGHT)],
};

export const Column: Story = {
  args: {
    direction: 'column',
    children: (
      <>
        <div>first</div>
        <div>first</div>
        <div>first</div>
        <div>first</div>
      </>
    ),
  },
  decorators: [themeDecorator(Theme.LIGHT)],
};

export const Column16: Story = {
  args: {
    gap: '16',
    direction: 'column',
    children: (
      <>
        <div>first</div>
        <div>first</div>
        <div>first</div>
        <div>first</div>
      </>
    ),
  },
  decorators: [themeDecorator(Theme.LIGHT)],
};

export const ColumnAlignEnd: Story = {
  args: {
    direction: 'column',
    align: 'end',
    children: (
      <>
        <div>first</div>
        <div>first</div>
        <div>first</div>
        <div>first</div>
      </>
    ),
  },
  decorators: [themeDecorator(Theme.LIGHT)],
};
