import { Theme } from '@/app/providers/ThemeProvider';
import { storeDecorator } from '@/shared/config/storybook/storeDecorator';
import { themeDecorator } from '@/shared/config/storybook/themeDecorator';
import type { Meta, StoryObj } from '@storybook/react';
import ArticleRating from './ArticleRating';

const meta = {
  title: 'features/ArticleRating',
  component: ArticleRating,

} satisfies Meta<typeof ArticleRating>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: { articleId: '1' },
  parameters: {
    mockData: [
      {
        url: `${__API__}/article-ratings?userId=1&articleId=1`,
        method: 'GET',
        status: 200,
        response: [
          {
            rate: 4,
          },
        ],
      },
    ],
  },
  decorators: [
    themeDecorator(Theme.LIGHT),
    storeDecorator({
      user: {
        authData: { id: '1' },
      },
    }),
  ],
};

export const WithoutRate: Story = {
  args: { articleId: '1' },
  parameters: {
    mockData: [
      {
        url: `${__API__}/article-ratings?userId=1&articleId=1`,
        method: 'GET',
        status: 200,
        response: [],
      },
    ],
  },
  decorators: [
    themeDecorator(Theme.LIGHT),
    storeDecorator({
      user: {
        authData: { id: '1' },
      },
    }),
  ],
};