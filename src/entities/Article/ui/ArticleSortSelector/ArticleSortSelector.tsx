import { classNames } from '@/shared/lib/classNames/classNames';
import { SortOrder } from '@/shared/types';
import { Select, SelectOption } from '@/shared/ui/Select';
import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { ArticleSortField } from '../../model/consts/consts';
import cls from './ArticleSortSelector.module.scss';

interface ArticleSortSelectorProps {
  className?: string;
  sort: ArticleSortField;
  onChangeSort: (newSort: ArticleSortField) => void;
  order: SortOrder;
  onChangeOrder: (newOrder: SortOrder) => void;
}

// Благодаря memo компонент будет перерендериваться только если его пропсы изменились.
export const ArticleSortSelector = memo((props: ArticleSortSelectorProps) => {
  const { className, onChangeSort, onChangeOrder, order, sort } = props;
  const { t } = useTranslation('filters');

  // useMemo используется для кэширования массивов orderOptions и sortFieldOptions.
  // предотвращает создание нового массива при каждом рендере
  const orderOptions = useMemo<SelectOption<SortOrder>[]>(() => [
    {
      value: 'asc',
      content: t('asc'),
    },
    {
      value: 'desc',
      content: t('desc'),
    },
  ], [t]);

  const sortFieldOptions = useMemo<SelectOption<ArticleSortField>[]>(() => [
    {
      value: ArticleSortField.CREATED,
      content: t('date'),
    },
    {
      value: ArticleSortField.TITLE,
      content: t('name'),
    },
    {
      value: ArticleSortField.VIEWS,
      content: t('views'),
    },
  ], [t]);

  return (
    <div className={classNames(cls.ArticleSortSelector, {}, [className])}>
      <Select<ArticleSortField>
        options={sortFieldOptions}
        label={t('sortBy')}
        value={sort}
        onChange={onChangeSort}
      />
      <Select
        options={orderOptions}
        label={t('by')}
        value={order}
        onChange={onChangeOrder}
        className={cls.order}
      />
    </div>
  );
});
