import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { withTheme } from 'shared/config/storybook/withTheme';
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
  decorators: withTheme(Theme.LIGHT),
};

export const InputDark: Story = {
  args: {
    placeholder: 'Label',
    value: 'Some text InputDark',
  },
  decorators: withTheme(Theme.DARK),
};

