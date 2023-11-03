import { Page } from '@/widgets/Page';
import { useTranslation } from 'react-i18next';

const ForbiddenPage = () => {
  const { t } = useTranslation('common');

  return <Page data-testid="ForbiddenPage">{t('forbidden')}</Page>;
};

export default ForbiddenPage;
