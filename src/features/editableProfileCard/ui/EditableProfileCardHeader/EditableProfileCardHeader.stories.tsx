import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from '@/app/providers/ThemeProvider';
import { storeDecorator } from '@/shared/config/storybook/storeDecorator';
import { themeDecorator } from '@/shared/config/storybook/themeDecorator';
import { EditableProfileCardHeader } from './EditableProfileCardHeader';

const meta = {
  title: 'features/EditableProfileCardHeader',
  component: EditableProfileCardHeader,

} satisfies Meta<typeof EditableProfileCardHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {},
  decorators: [
    themeDecorator(Theme.LIGHT),
    storeDecorator({}),
  ],
};