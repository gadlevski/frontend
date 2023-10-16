import { storeDecorator } from '@/shared/config/storybook/storeDecorator';
import { themeDecorator } from '@/shared/config/storybook/themeDecorator';
import { Theme } from '@/shared/const/theme';
import type { Meta, StoryObj } from '@storybook/react';
import { NotificationList } from './NotificationList';

const meta = {
  title: 'entities/NotificationList',
  component: NotificationList,

} satisfies Meta<typeof NotificationList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {},
  parameters: {
    mockData: [
      {
        url: `${__API__}/notifications`,
        method: 'GET',
        status: 200,
        response: [
          {
            id: '1',
            title: 'Уведомление',
            description: 'Описание',
          },
          {
            id: '2',
            title: 'Уведомление 2',
            description: 'Описание',
          },
          {
            id: '3',
            title: 'Уведомление 3',
            description: 'Описание',
          },
        ],
      },
    ],
  },
  decorators: [
    themeDecorator(Theme.LIGHT),
    storeDecorator({}),
  ],
};