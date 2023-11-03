import {
  Article,
  ArticleEnum,
  ArticleSortField,
  ArticleView,
} from '@/entities/Article';
import { SortOrder } from '@/shared/types/sort';
import { EntityState } from '@reduxjs/toolkit';

export interface ArticlesPageSchema extends EntityState<Article> {
  isLoading?: boolean;
  error?: string;

  // Пагинация
  page: number;
  limit: number;
  hasMore: boolean;

  // Фильтры
  view: ArticleView;
  order: SortOrder;
  sort: ArticleSortField;
  search: string;
  type: ArticleEnum;

  _initedState: boolean;
}
