import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import avatar from '@/shared/assets/test/avatar.png';
import { storeDecorator } from '@/shared/config/storybook/storeDecorator';
import { themeDecorator } from '@/shared/config/storybook/themeDecorator';
import { Theme } from '@/shared/const/theme';
import type { Meta, StoryObj } from '@storybook/react';
import ProfilePage from './ProfilePage';

const meta = {
  title: 'pages/ProfilePage',
  component: ProfilePage,

} satisfies Meta<typeof ProfilePage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  decorators: [
    themeDecorator(Theme.LIGHT),
    storeDecorator({
      profile: {
        form: {
          avatar: avatar,
          first: 'Andrei',
          lastname: 'Gadlevski',
          age: 33,
          city: 'Kazan',
          username: 'admin',
          country: Country.Russia,
          currency: Currency.RUB,
        },
      },
    }),
  ],
};

export const Dark: Story = {
  decorators: [
    themeDecorator(Theme.DARK),
    storeDecorator({
      profile: {
        form: {
          avatar: avatar,
          first: 'Andrei',
          lastname: 'Gadlevski',
          age: 33,
          city: 'Kazan',
          username: 'admin',
          country: Country.Russia,
          currency: Currency.RUB,
        },
      },
    }),
  ],
};