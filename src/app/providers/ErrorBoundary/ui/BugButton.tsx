import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';

export const BugButton = () => {
  const [error, setError] = useState(false);
  const { t } = useTranslation('common');
  useEffect(() => {
    if (error) {
      throw new Error();
    }
  }, [error]);

  return (
    <Button
      onClick={() => setError(true)}
    >
      {t('generateError')}
    </Button>
  );
};