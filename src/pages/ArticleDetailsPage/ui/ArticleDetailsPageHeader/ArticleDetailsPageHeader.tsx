import { getArticleDetailsData } from '@/entities/Article';
import { getRouteArticleEdit, getRouteArticles } from '@/shared/const/router';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ThemeButton } from '@/shared/ui/Button';
import { HStack } from '@/shared/ui/Stack';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getCanEditArticle } from '../../model/selectors/article';

interface ArticleDetailsPageHeaderProps {
  className?: string;
}

export const ArticleDetailsPageHeader = memo(
  (props: ArticleDetailsPageHeaderProps) => {
    const { className } = props;
    const { t } = useTranslation('article');
    const navigate = useNavigate();
    const canEdit = useSelector(getCanEditArticle);
    const article = useSelector(getArticleDetailsData);

    const onBackToList = useCallback(() => {
      navigate(getRouteArticles());
    }, [navigate]);

    const onEditArticle = useCallback(() => {
      if (article) {
        navigate(getRouteArticleEdit(article.id));
      }
    }, [article, navigate]);

    return (
      <HStack max justify="between" className={classNames('', {}, [className])}>
        <Button theme={ThemeButton.OUTLINE} onClick={onBackToList}>
          {t('back')}
        </Button>
        {canEdit && (
          <Button theme={ThemeButton.OUTLINE} onClick={onEditArticle}>
            {t('edit')}
          </Button>
        )}
      </HStack>
    );
  },
);
