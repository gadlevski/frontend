import { ArticleList } from '@/entities/Article';
import { classNames } from '@/shared/lib/classNames/classNames';
import { VStack } from '@/shared/ui/Stack';
import { Text, TextSize } from '@/shared/ui/Text';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useArticleRecommendationsList } from '../../api/aritcleRecommendationsApi';

interface ArticleRecommendationsListProps {
  className?: string;
}

export const ArticleRecommendationsList = memo(
  (props: ArticleRecommendationsListProps) => {
    const { className } = props;
    const { t } = useTranslation('article');
    const {
      isLoading,
      data: articles,
      error,
    } = useArticleRecommendationsList(3);

    if (isLoading || error || !articles) {
      return null;
    }

    return (
      <VStack
        gap="8"
        className={classNames('', {}, [className])}
        data-testid="ArticleRecommendationsList"
      >
        <Text size={TextSize.L} title={t('recommended')} />
        <ArticleList articles={articles} target="_blank" />
      </VStack>
    );
  },
);
