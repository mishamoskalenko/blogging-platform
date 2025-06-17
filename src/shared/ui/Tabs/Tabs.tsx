import { memo, ReactNode, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Tabs.module.scss';
import { Card } from '../Card/Card';
import { Flex, FlexDirection } from '../Stack/Flex/Flex';

export interface TabItem {
    value: string;
    content: ReactNode;
}

interface TabsProps {
    className?: string;
    tabs: TabItem[];
    value: string;
    onTabClick: (tab: TabItem) => void;
    direction?: FlexDirection
}

export const Tabs = memo((props: TabsProps) => {
    const {
        className, tabs, value, onTabClick, direction = 'row',
    } = props;

    const clickHandle = useCallback((tab: TabItem) => () => {
        onTabClick(tab);
    }, [onTabClick]);

    return (
        <Flex className={classNames(cls.Tabs, {}, [className])} direction={direction} gap="8" align="start">
            {tabs.map((tab) => (
                <Card
                    className={cls.tab}
                    key={tab.value}
                    theme={tab.value === value ? 'light' : 'normal'}
                    onClick={clickHandle(tab)}
                    border="round"
                >
                    {tab.content}
                </Card>
            ))}
        </Flex>
    );
});
