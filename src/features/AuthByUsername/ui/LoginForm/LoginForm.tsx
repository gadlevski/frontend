import { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { loginActions } from '../../model/slice/loginSlice';
import cls from './LoginForm.module.scss';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import { Text, ThemeText } from 'shared/ui/Text/Text';

interface LoginFormProps {
  className?: string;
}

export const LoginForm: FC<LoginFormProps> = memo((props) => {
  const { className } = props;
  const { t } = useTranslation('common');
  const dispatch = useAppDispatch();
  const { username, password, error, isLoading } = useSelector(getLoginState);

  const onChangeUserName = useCallback((value: string) => {
    dispatch(loginActions.setUsername(value));
  }, [dispatch]);

  const onChangePassword = useCallback((value: string) => {
    dispatch(loginActions.setPassword(value));
  }, [dispatch]);

  const onLoginClick = useCallback(() => {
    dispatch(loginByUsername({ username, password }));
  }, [dispatch, password, username]);

  return (
    <div className={classNames(cls.LoginForm, {}, [className])}>
      <Text title={t('Authorization form')} />
      {error && <Text text={t('Authorization form error')} theme={ThemeText.ERROR} />}
      <Input
        placeholder={t('Enter username')}
        type="text"
        className={cls.input}
        autofocus
        onChange={onChangeUserName}
        value={username}
      />
      <Input
        placeholder={t('Enter password')}
        type="text"
        className={cls.input}
        onChange={onChangePassword}
        value={password}
      />
      <Button
        theme={ThemeButton.CLEAR}
        className={cls.loginBtn}
        onClick={onLoginClick}
        disabled={isLoading}
      >
        {t('login')}
      </Button>
    </div>
  );
});