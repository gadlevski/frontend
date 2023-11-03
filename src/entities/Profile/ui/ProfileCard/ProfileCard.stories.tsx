import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import avatar from '@/shared/assets/test/avatar.png';
import { themeDecorator } from '@/shared/config/storybook/themeDecorator';
import { Theme } from '@/shared/const/theme';
import type { Meta, StoryObj } from '@storybook/react';
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
  decorators: [themeDecorator(Theme.LIGHT)],
};

export const WithError: Story = {
  args: {
    error: 'Некорректные данные',
  },
  decorators: [themeDecorator(Theme.LIGHT)],
};

export const Loading: Story = {
  args: {
    isLoading: true,
  },
  decorators: [themeDecorator(Theme.LIGHT)],
};
