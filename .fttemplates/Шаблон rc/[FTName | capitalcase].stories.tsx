import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { themeDecorator } from 'shared/config/storybook/themeDecorator';
import { <FTName | capitalcase> } from './<FTName | capitalcase>';

const meta = {
  title: 'shared/<FTName | capitalcase>',
  component: <FTName | capitalcase>,

} satisfies Meta<typeof <FTName | capitalcase>>;

export default meta;
type Story = StoryObj<typeof meta>;

export const <FTName | capitalcase>Light: Story = {
  args: {

  },
  decorators: [themeDecorator(Theme.LIGHT)],
};

export const <FTName | capitalcase>Dark: Story = {
  args: {

  },
  decorators: [themeDecorator(Theme.DARK)],
};

