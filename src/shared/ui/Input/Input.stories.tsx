import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { themeDecorator } from 'shared/config/storybook/themeDecorator';
import { Input } from './Input';

const meta = {
  title: 'shared/Input',
  component: Input,

} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const InputLight: Story = {
  args: {
    placeholder: 'Label',
    value: 'Some text InputLight',
  },
  decorators: [themeDecorator(Theme.LIGHT)],
};

export const InputDark: Story = {
  args: {
    placeholder: 'Label',
    value: 'Some text InputDark',
  },
  decorators: [themeDecorator(Theme.DARK)],
};

