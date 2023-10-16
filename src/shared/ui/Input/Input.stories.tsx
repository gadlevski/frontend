import { themeDecorator } from '@/shared/config/storybook/themeDecorator';
import { Theme } from '@/shared/const/theme';
import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';

const meta = {
  title: 'shared/Input',
  component: Input,

} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {
    placeholder: 'Label',
    value: 'Some text InputLight',
  },
  decorators: [themeDecorator(Theme.LIGHT)],
};

export const Dark: Story = {
  args: {
    placeholder: 'Label',
    value: 'Some text InputDark',
  },
  decorators: [themeDecorator(Theme.DARK)],
};

