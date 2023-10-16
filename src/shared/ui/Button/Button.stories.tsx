import { themeDecorator } from '@/shared/config/storybook/themeDecorator';
import { Theme } from '@/shared/const/theme';
import type { Meta, StoryObj } from '@storybook/react';
import { Button, ButtonSize, ThemeButton } from './Button';

const meta = {
  title: 'shared/Button',
  component: Button,
  argTypes: {
    theme: {
      control: {
        type: 'radio',
        options: Object.values(ThemeButton),
      },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Button Primary',
    theme: undefined,
  },
};

export const Clear: Story = {
  args: {
    children: 'Button Clear',
    theme: ThemeButton.CLEAR,
  },
  decorators: [themeDecorator(Theme.LIGHT)],
};

export const ClearInverted: Story = {
  args: {
    children: 'Button Clear Inverted',
    theme: ThemeButton.CLEAR_INVERTED,
  },
  decorators: [themeDecorator(Theme.DARK)],
};

export const Outline: Story = {
  args: {
    children: 'Button Outline',
    theme: ThemeButton.OUTLINE,
  },
  decorators: [themeDecorator(Theme.LIGHT)],
};

export const OutlineSizeL: Story = {
  args: {
    children: 'Button Outline L',
    theme: ThemeButton.OUTLINE,
    size: ButtonSize.L,
  },
  decorators: [themeDecorator(Theme.LIGHT)],
};

export const OutlineSizeXl: Story = {
  args: {
    children: 'Button Outline Xl',
    theme: ThemeButton.OUTLINE,
    size: ButtonSize.XL,
  },
  decorators: [themeDecorator(Theme.LIGHT)],
};

export const OutlineDark: Story = {
  args: {
    children: 'Button Outline Dark',
    theme: ThemeButton.OUTLINE,
  },
  decorators: [themeDecorator(Theme.DARK)],
};

export const BackgroundTheme: Story = {
  args: {
    children: 'Button BackgroundTheme',
    theme: ThemeButton.BACKGROUND,
  },
  decorators: [themeDecorator(Theme.LIGHT)],
};

export const BackgroundInverted: Story = {
  args: {
    children: 'Button BackgroundInverted',
    theme: ThemeButton.BACKGROUND_INVERTED,
  },
  decorators: [themeDecorator(Theme.LIGHT)],
};

export const Square: Story = {
  args: {
    children: '>',
    theme: ThemeButton.BACKGROUND_INVERTED,
    square: true,
  },
  decorators: [themeDecorator(Theme.LIGHT)],
};

export const SquareSizeL: Story = {
  args: {
    children: '>',
    theme: ThemeButton.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.L,
  },
  decorators: [themeDecorator(Theme.LIGHT)],
};

export const SquareSizeXl: Story = {
  args: {
    children: '>',
    theme: ThemeButton.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.XL,
  },
  decorators: [themeDecorator(Theme.LIGHT)],
};

export const Disabled: Story = {
  args: {
    children: 'Button Disabled',
    theme: ThemeButton.CLEAR,
    disabled: true,
  },
  decorators: [themeDecorator(Theme.LIGHT)],
};
