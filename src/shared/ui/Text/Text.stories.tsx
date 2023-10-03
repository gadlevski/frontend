import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { themeDecorator } from 'shared/config/storybook/themeDecorator';
import { Text, TextSize, ThemeText } from './Text';

const meta = {
  title: 'shared/Text',
  component: Text,
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title: 'Title Light',
    text: 'Text Light',
  },
  decorators: [themeDecorator(Theme.LIGHT)],
};

export const PrimaryDark: Story = {
  args: {
    title: 'Title Dark',
    text: 'Text Dark',
  },
  decorators: [themeDecorator(Theme.DARK)],
};

export const OnlyTitle: Story = {
  args: {
    title: 'Title Light',
  },
  decorators: [themeDecorator(Theme.LIGHT)],
};

export const OnlyTitleDark: Story = {
  args: {
    title: 'Title Dark',
  },
  decorators: [themeDecorator(Theme.DARK)],
};

export const OnlyText: Story = {
  args: {
    text: 'Text Light',
  },
  decorators: [themeDecorator(Theme.LIGHT)],
};

export const OnlyTextDark: Story = {
  args: {
    text: 'Text Dark',
  },
  decorators: [themeDecorator(Theme.DARK)],
};

export const Error: Story = {
  args: {
    title: 'Error Title',
    text: 'Error Text',
    theme: ThemeText.ERROR,
  },
  decorators: [themeDecorator(Theme.LIGHT)],
};

export const SizeL: Story = {
  args: {
    title: 'Title Light',
    text: 'Text Light',
    size: TextSize.L,
  },
  decorators: [themeDecorator(Theme.LIGHT)],
};

export const SizeM: Story = {
  args: {
    title: 'Title SizeM',
    text: 'Text SizeM',
    size: TextSize.M,
  },
  decorators: [themeDecorator(Theme.LIGHT)],
};

export const SizeS: Story = {
  args: {
    title: 'Title SizeS',
    text: 'Text SizeS',
    size: TextSize.S,
  },
  decorators: [themeDecorator(Theme.LIGHT)],
};