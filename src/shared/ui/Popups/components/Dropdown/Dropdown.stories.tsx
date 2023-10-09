/* eslint-disable i18next/no-literal-string */

import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { themeDecorator } from 'shared/config/storybook/themeDecorator';
import { Button } from '../../../Button/Button';
import { Dropdown } from './Dropdown';

const meta = {
  title: 'shared/Dropdown',
  component: Dropdown,
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    trigger: <Button>Open</Button>,
    items: [
      {
        content: 'first',
      },
      {
        content: 'second',
      },
      {
        content: 'third',
      },
    ],
  },
  decorators: [themeDecorator(Theme.LIGHT)],
};