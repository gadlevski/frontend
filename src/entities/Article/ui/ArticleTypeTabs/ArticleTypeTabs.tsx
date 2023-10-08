import { ArticleEnum } from 'entities/Article/model/consts/consts';
import { memo, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { TabItem, Tabs } from 'shared/ui/Tabs/Tabs';

interface ArticleTypeTabsProps {
  className?: string;
  value: ArticleEnum;
  onChangeType: (type: ArticleEnum) => void;
}

export const ArticleTypeTabs = memo((props: ArticleTypeTabsProps) => {
  const { className, value, onChangeType } = props;
  const { t } = useTranslation('article');

  const typeTabs = useMemo<TabItem[]>(() => [
    {
      value: ArticleEnum.ALL,
      content: t('all'),
    },
    {
      value: ArticleEnum.IT,
      content: t('it'),
    },
    {
      value: ArticleEnum.ECONOMICS,
      content: t('economy'),
    },
    {
      value: ArticleEnum.SCIENCE,
      content: t('science'),
    },
  ], [t]);

  const onTabClick = useCallback((tab: TabItem) => {
    onChangeType(tab.value as ArticleEnum);
  }, [onChangeType]);

  return (
    <Tabs
      tabs={typeTabs}
      value={value}
      onTabClick={onTabClick}
      className={classNames('', {}, [className])}
    />
  );
});
