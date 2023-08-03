import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './LoginForm.module.scss';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';

interface LoginFormProps {
  className?: string;
}

export const LoginForm: FC<LoginFormProps> = (props) => {
  const { className } = props;
  const { t } = useTranslation('link');
  return (
    <div className={classNames(cls.LoginForm, {}, [className])}>
      <Input placeholder='Введите логин' type="text" className={cls.input} autofocus />
      <Input placeholder='Введите пароль' type="text" className={cls.input} />
      <Button className={cls.loginBtn}>{t('login')}</Button>
    </div>
  );
};