import { Skeleton } from '@/shared/ui/Skeleton';
import { lazy, Suspense } from 'react';
import { ArticleRatingProps } from './ArticleRating';

// Использование lazy для динамической загрузки компонента
// То есть код компонента будет загружен только при его первом отображении
const ArticleRatingLazy = lazy(() => import('./ArticleRating'));

// Использование Suspense для отображения Skeleton, пока идет загрузка основного компонента.
export const ArticleRatingAsync = (props: ArticleRatingProps) => {
  return (
    <Suspense fallback={<Skeleton width="100%" height={140} />}>
      <ArticleRatingLazy {...props} />
    </Suspense>
  );
};
