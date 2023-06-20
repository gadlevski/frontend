import { FC, Suspense, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import { LangSwitcher } from 'shared/ui/LangSwitcher';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import cls from './Sidebar.module.scss';
import { useTranslation } from 'react-i18next';

interface SidebarProps {
  className?: string;
}

export const Sidebar: FC<SidebarProps> = ({ className }) => {
  const [isCollapsed, setCollapsed] = useState<boolean>(false);
  const { t } = useTranslation('common');
  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };
  return (
    <div
      className={classNames(cls.Sidebar, { [cls.collapsed]: isCollapsed }, [
        className,
      ])}
    >
      <Button type='button' onClick={onToggle}>{t('toggle')}</Button>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <Suspense fallback="">
          <LangSwitcher className={cls.lang} />
        </Suspense>
      </div>
    </div>
  );
};
