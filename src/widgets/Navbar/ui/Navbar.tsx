import { getUserAuthData } from 'entities/User';
import { userActions } from 'entities/User/model/slice/userSlice';
import { LoginModal } from 'features/AuthByUsername';
import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { Dropdown } from 'shared/ui/Dropdown/Dropdown';
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
  }, [dispatch]);


  if (authData) {
    return (
      <header className={classNames(cls.Navbar, {}, [className])}>
        <AppLink
          to={RoutePath.article_create}
          theme={AppLinkTheme.SECONDARY}
          className={cls.createBtn}
        >
          {t('create article')}
        </AppLink>
        <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
        <Dropdown
          direction="bottom left"
          className={cls.dropdown}
          items={[
            {
              content: t('profile'),
              href: RoutePath.profile + authData.id,
            },
            {
              content: t('log out'),
              onClick: onLogout,
            },
          ]}
          trigger={<Avatar size={30} src={authData.avatar} />}
        />
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
