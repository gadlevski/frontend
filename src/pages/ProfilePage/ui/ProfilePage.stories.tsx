import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { themeDecorator } from 'shared/config/storybook/themeDecorator';
import ProfilePage from './ProfilePage';
import { storeDecorator } from 'shared/config/storybook/storeDecorator';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import avatar from 'shared/assets/test/avatar.png';

const meta = {
  title: 'pages/ProfilePage',
  component: ProfilePage,

} satisfies Meta<typeof ProfilePage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ProfilePageLight: Story = {
  name: 'ProfilePage (Light Theme)',
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

export const ProfilePageDark: Story = {
  name: 'ProfilePage (Dark Theme)',
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