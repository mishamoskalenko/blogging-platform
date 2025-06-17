import { HTMLAttributes, memo, ReactNode } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Card.module.scss';

export type CardTheme = 'normal' | 'outlined' | 'light';
export type CardPadding = '0' | '8' | '16' | '24';
export type CardBorder = 'normal' | 'round';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    children: ReactNode;
    theme?: CardTheme;
    max?: boolean;
    padding?: CardPadding;
    border?: CardBorder
}

const mapPaddingToClass: Record<CardPadding, string> = {
    0: 'padding_0',
    8: 'padding_8',
    16: 'padding_16',
    24: 'padding_24',
};

export const Card = memo((props: CardProps) => {
    const {
        className, children, theme = 'normal', max, padding = '8', border = 'normal', ...otherProps
    } = props;

    const paddingClass = mapPaddingToClass[padding];

    return (
        <div className={classNames(cls.Card, { [cls.max]: max }, [className, cls[theme], cls[paddingClass], cls[border]])} {...otherProps}>
            {children}
        </div>
    );
});
