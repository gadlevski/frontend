import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import avatar from 'shared/assets/test/avatar.png';
import { themeDecorator } from 'shared/config/storybook/themeDecorator';
import { ProfileCard } from './ProfileCard';

const meta = {
  title: 'entities/ProfileCard',
  component: ProfileCard,
} satisfies Meta<typeof ProfileCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ProfileCardLight: Story = {
  args: {
    data: {
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
  decorators: [
    themeDecorator(Theme.LIGHT),
  ],
};

export const ProfileCardWithError: Story = {
  args: {
    error: 'Некорректные данные',
  },
  decorators: [
    themeDecorator(Theme.LIGHT),
  ],
};

export const ProfileCardLoading: Story = {
  args: {
    isLoading: true,
  },
  decorators: [
    themeDecorator(Theme.LIGHT),
  ],
};