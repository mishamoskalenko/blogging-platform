import { useTranslation } from 'react-i18next';
import { memo, ReactElement } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './StickyContentLayout.module.scss';

interface StickyContentLayoutProps {
    className?: string;
    left?: ReactElement;
    content?: ReactElement;
    right?: ReactElement;
}

export const StickyContentLayout = memo((props: StickyContentLayoutProps) => {
    const {
        className, content, right, left,
    } = props;
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.MainLayout, {}, [className])}>
            {left && <div className={cls.left}>{left}</div>}
            <div className={cls.content}>{content}</div>
            {right && <div className={cls.right}>{right}</div>}
        </div>
    );
});
