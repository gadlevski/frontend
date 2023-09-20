import { FC, Suspense, memo, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonSize, ThemeButton } from 'shared/ui/Button/Button';
import { LangSwitcher } from 'shared/ui/LangSwitcher';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { getSidebarItems } from 'widgets/Sidebar/model/selectors/getSidebarItems';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import cls from './Sidebar.module.scss';
import MenuOpen from 'shared/assets/icons/menu-open.svg';
import MenuClose from 'shared/assets/icons/menu-close.svg';
import { Icon } from 'shared/ui/Icon/Icon';

interface SidebarProps {
  className?: string;
}

export const Sidebar: FC<SidebarProps> = memo(({ className }) => {
  const [isCollapsed, setCollapsed] = useState<boolean>(false);
  const sidebarItemsList = useSelector(getSidebarItems);

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  const itemsList = useMemo(() => sidebarItemsList.map((item) => (
    <SidebarItem
      item={item}
      isCollapsed={isCollapsed}
      key={item.path}
    />
  )), [isCollapsed, sidebarItemsList]);

  return (
    <div
      data-testid='sidebar'
      className={classNames(cls.Sidebar, { [cls.collapsed]: isCollapsed }, [
        className,
      ])}
    >
      <div className={cls.items}>
        {itemsList}
      </div>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <Suspense fallback="">
          <LangSwitcher className={cls.lang} short={isCollapsed} />
        </Suspense>
      </div>
      <Button
        data-testid='sidebar-toggle'
        type='button'
        onClick={onToggle}
        className={cls.collapseBtn}
        theme={ThemeButton.BACKGROUND_INVERTED}
        size={ButtonSize.L}
      >
        <Icon Svg={isCollapsed ? MenuClose : MenuOpen} />
      </Button>
    </div>
  );
});
