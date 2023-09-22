import { getUserAuthData } from 'entities/User';
import { userActions } from 'entities/User/model/slice/userSlice';
import { LoginModal } from 'features/AuthByUsername';
import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
  const { t } = useTranslation('link');
  const [isAuthModal, setIsAuthModal] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const authData = useSelector(getUserAuthData);

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false);
  }, []);

  const onShowModal = useCallback(() => {
    setIsAuthModal(true);
  }, []);

  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
    // setIsAuthModal(true);
  }, [dispatch]);


  if (authData) {
    return (
      <header className={classNames(cls.Navbar, {}, [className])}>
        <Button onClick={onLogout} theme={ThemeButton.OUTLINE} className={cls.links}>
          {t('log out')}
        </Button>
        <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />

      </header>
    );
  }
  return (
    <header className={classNames(cls.Navbar, {}, [className])}>
      <Button onClick={onShowModal} theme={ThemeButton.OUTLINE} className={cls.links}>
        {t('login')}
      </Button>
      {isAuthModal && <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />}

    </header>
  );
});
