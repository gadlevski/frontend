import { FC, Suspense, memo, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import MenuClose from 'shared/assets/icons/menu-close.svg';
import MenuOpen from 'shared/assets/icons/menu-open.svg';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonSize, ThemeButton } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';
import { LangSwitcher } from 'shared/ui/LangSwitcher';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { getSidebarItems } from '../../model/selectors/getSidebarItems';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import cls from './Sidebar.module.scss';
import { VStack } from 'shared/ui/Stack';

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
    <aside
      data-testid='sidebar'
      className={classNames(cls.Sidebar, { [cls.collapsed]: isCollapsed }, [
        className,
      ])}
    >
      <VStack role="navigation" gap="16" className={cls.items}>
        {itemsList}
      </VStack>
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
    </aside>
  );
});
