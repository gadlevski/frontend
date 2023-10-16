import { storeDecorator } from '@/shared/config/storybook/storeDecorator';
import { themeDecorator } from '@/shared/config/storybook/themeDecorator';
import { Theme } from '@/shared/const/theme';
import type { Meta, StoryObj } from '@storybook/react';
import { ArticleDetailsComments } from './ArticleDetailsComments';

const meta = {
  title: 'pages/ArticleDetailsComments',
  component: ArticleDetailsComments,

} satisfies Meta<typeof ArticleDetailsComments>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    id: '1',
  },
  decorators: [
    themeDecorator(Theme.LIGHT),
    storeDecorator({}),
  ],
};