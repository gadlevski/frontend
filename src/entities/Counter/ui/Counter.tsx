import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'shared/ui/Button/Button';
import { counterActions } from '../model/slice/counterSlice';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { useTranslation } from 'react-i18next';

export const Counter: FC = () => {
  const dispath = useDispatch();
  const counterValue = useSelector(getCounterValue);
  const { t } = useTranslation('common');

  const increment = () => {
    dispath(counterActions.increment());
  };

  const decrement = () => {
    dispath(counterActions.decrement());
  };
  return (
    <div>
      <h1 data-testid="value-title">{t('value')}: {counterValue}</h1>
      <Button data-testid="increment-btn" onClick={increment}>{t('increment')}</Button>
      <Button data-testid="decrement-btn" onClick={decrement}>{t('decrement')}</Button>
    </div>
  );
};