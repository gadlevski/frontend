import { getUserAuthData } from 'entities/User';
import { LoginModal } from 'features/AuthByUsername';
import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import cls from './Navbar.module.scss';
import { userActions } from 'entities/User/model/slice/userSlice';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation('link');
  const [isAuthModal, setIsAuthModal] = useState<boolean>(false);
  const dispath = useAppDispatch();
  const authData = useSelector(getUserAuthData);

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false);
  }, []);

  const onShowModal = useCallback(() => {
    setIsAuthModal(true);
  }, []);

  const onLogout = useCallback(() => {
    dispath(userActions.logout());
    // setIsAuthModal(true);
  }, [dispath]);


  if (authData) {
    return (
      <div className={classNames(cls.Navbar, {}, [className])}>
        <Button onClick={onLogout} theme={ThemeButton.OUTLINE} className={cls.links}>
          {t('log out')}
        </Button>
        <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />

      </div>
    );
  }
  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <Button onClick={onShowModal} theme={ThemeButton.OUTLINE} className={cls.links}>
        {t('login')}
      </Button>
      <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
    </div>
  );
};
