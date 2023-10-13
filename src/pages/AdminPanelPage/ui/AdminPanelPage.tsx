import { Page } from '@/widgets/Page';
import { useTranslation } from 'react-i18next';

const AdminPanelPage = () => {
  const { t } = useTranslation('link');

  return (
    <Page>
      {t('admin panel')}
    </Page>
  );
};

export default AdminPanelPage;
