import { useTranslation } from 'react-i18next';
import { Page } from 'widgets/Page/Page';

const ForbiddenPage = () => {
  const { t } = useTranslation('common');

  return (
    <Page>
      {t('forbidden')}
    </Page>
  );
};

export default ForbiddenPage;
