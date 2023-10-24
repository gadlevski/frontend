import { Article } from '@/entities/Article';
import articlelogo from '@/shared/assets/test/articlelogo.png';
import { storeDecorator } from '@/shared/config/storybook/storeDecorator';
import { themeDecorator } from '@/shared/config/storybook/themeDecorator';
import { Theme } from '@/shared/const/theme';
import type { Meta, StoryObj } from '@storybook/react';
import { ArticleRecommendationsList } from './ArticleRecommendationsList';


const article: Article = {
  id: '1',
  img: articlelogo,
  createdAt: '',
  views: 123,
  user: { id: '1', username: '123' },
  blocks: [],
  type: [],
  title: 'Заголовок',
  subtitle: 'Подзаголовок',
};

const meta = {
  title: 'features/ArticleRecommendationsList',
  component: ArticleRecommendationsList,
  parameters: {
    mockData: [
      {
        url: `${__API__}/articles?_limit=3`,
        method: 'GET',
        status: 200,
        response: [
          { ...article, id: '1' },
          { ...article, id: '2' },
          { ...article, id: '3' },
        ],
      },
    ],
  },

} satisfies Meta<typeof ArticleRecommendationsList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {},
  decorators: [
    themeDecorator(Theme.LIGHT),
    storeDecorator({}),
  ],
};