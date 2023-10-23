import { Page } from '@/widgets/Page';
import { useTranslation } from 'react-i18next';

const MainPage = () => {
  const { t } = useTranslation('main');
  return <Page data-testid="MainPage">
    {t('title')}
  </Page>;
};

export default MainPage;
