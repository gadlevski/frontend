import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button } from '@/shared/ui/Button';
import cls from './ErrorPage.module.scss';
import { FallbackProps } from 'react-error-boundary';

interface ErrorPageProps extends FallbackProps {
  className?: string;
  error: Error;
  resetErrorBoundary: () => void;
}

export const ErrorPage: FC<ErrorPageProps> = (props) => {
  const { className, error } = props;
  console.log('error', error);

  const { t } = useTranslation('common');

  const reloadPage = () => {
    location.reload();
  };

  return (
    <div className={classNames(cls.ErrorPage, {}, [className])}>
      {t('error')}
      <Button onClick={reloadPage}>{t('reload')}</Button>
    </div>
  );
};
