import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { Button } from '@/shared/ui/Button';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { counterActions } from '../model/slice/counterSlice';

export const Counter: FC = () => {
  const dispatch = useAppDispatch();
  const counterValue = useSelector(getCounterValue);
  const { t } = useTranslation('common');

  const increment = () => {
    dispatch(counterActions.increment());
  };

  const decrement = () => {
    dispatch(counterActions.decrement());
  };
  return (
    <div>
      <h1 data-testid="value-title">
        {t('value')}: {counterValue}
      </h1>
      <Button data-testid="increment-btn" onClick={increment}>
        {t('increment')}
      </Button>
      <Button data-testid="decrement-btn" onClick={decrement}>
        {t('decrement')}
      </Button>
    </div>
  );
};
