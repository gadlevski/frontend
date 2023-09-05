import { Country } from '../../model/types/country';
import { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Select } from 'shared/ui/Select/Select';

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
  const { value, onChange, readonly, className } = props;
  const { t } = useTranslation('common');

  const onChangeHandler = useCallback((valueSelect: string) => {
    onChange?.(valueSelect as Country);
  }, [onChange]);

  return (
    <Select
      className={classNames('', {}, [className])}
      label={t('сountry')}
      options={options}
      value={value}
      onChange={onChangeHandler}
      readonly={readonly}
    />
  );
});