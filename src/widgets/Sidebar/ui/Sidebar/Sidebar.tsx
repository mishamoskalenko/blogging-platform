import { memo, useState } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { VStack } from '@/shared/ui/Stack';
import { getSidebarItems } from '../../model/selectors/getSidebarItems';
import cls from './Sidebar.module.scss';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import { LangSwitcher } from '@/features/LangSwitcher';
import { ThemeSwitcher } from '@/features/ThemeSwitcher';
import { Icon } from '@/shared/ui/Icon';
import ArrowIcon from '@/shared/assets/icons/arrow-icon.svg';

interface SidebarProps {
    className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const sidebarItemsList = useSelector(getSidebarItems);

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <aside data-testid="sidebar" className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}>
            {collapsed ? <h1 className={classNames(cls.appNameShort, { [cls.collapsed]: collapsed })}>B</h1> : <h1 className={classNames(cls.appName)}>Blogging platform</h1>}
            <VStack role="navigation" className={cls.items} gap="8">
                {sidebarItemsList.map((item) => (
                    <SidebarItem key={item.path} item={item} collapsed={collapsed} />
                ))}
            </VStack>
            <Icon
                data-testid="sidebar-toogle"
                onClick={onToggle}
                className={cls.collapsedBtn}
                Svg={ArrowIcon}
                clickable
                width={40}
                height={40}
            />
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={cls.lang} short={collapsed} />
            </div>
        </aside>
    );
});
