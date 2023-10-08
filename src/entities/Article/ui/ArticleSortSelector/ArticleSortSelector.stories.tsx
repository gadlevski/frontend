import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { storeDecorator } from 'shared/config/storybook/storeDecorator';
import { themeDecorator } from 'shared/config/storybook/themeDecorator';
import { ArticleSortField } from '../../model/consts/consts';
import { ArticleSortSelector } from './ArticleSortSelector';

const meta = {
  title: 'entities/ArticleSortSelector',
  component: ArticleSortSelector,

} satisfies Meta<typeof ArticleSortSelector>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: { order: 'asc', sort: ArticleSortField.CREATED },
  decorators: [
    themeDecorator(Theme.LIGHT),
    storeDecorator({}),
  ],
};

