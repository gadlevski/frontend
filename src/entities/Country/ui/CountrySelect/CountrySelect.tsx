import { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { ListBox } from 'shared/ui/ListBox/ListBox';
import { Country } from '../../model/types/country';

interface CountrySelectProps {
  className?: string;
  value?: Country;
  onChange?: (value: Country) => void;
  readonly?: boolean;
}

const options = [
  { value: Country.Russia, content: Country.Russia },
  { value: Country.USA, content: Country.USA },
  { value: Country.Armenia, content: Country.Armenia },
];

export const CountrySelect: FC<CountrySelectProps> = memo((props) => {
  const { value, onChange, readonly } = props;
  const { t } = useTranslation('common');

  const onChangeHandler = useCallback((valueSelect: string) => {
    onChange?.(valueSelect as Country);
  }, [onChange]);

  return (
    <ListBox
      onChange={onChangeHandler}
      value={value}
      defaultValue={t('country')}
      label={t('country')}
      items={options}
      readonly={readonly}
      direction="top right"
    />
  );
});