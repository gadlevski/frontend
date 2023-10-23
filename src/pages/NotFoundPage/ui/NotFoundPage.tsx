import { classNames } from '@/shared/lib/classNames/classNames';
import { Page } from '@/widgets/Page';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import cls from './NotFoundPage.module.scss';

interface NotFoundPageProps {
  className?: string;
}

export const NotFoundPage: FC<NotFoundPageProps> = (props) => {
  const { className } = props;
  const { t } = useTranslation('common');
  return (
    <Page data-testid="NotFoundPage" className={classNames(cls.NotFoundPage, {}, [className])}>
      {t('notFound')}
    </Page>
  );
};  