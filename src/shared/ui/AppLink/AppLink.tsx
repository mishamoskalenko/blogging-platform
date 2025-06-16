import { memo, ReactNode } from 'react';
import { LinkProps, NavLink } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './AppLink.module.scss';

export type AppLinkTheme = 'primary' | 'red';

interface AppLinkProps extends LinkProps {
    className?: string;
    theme?: AppLinkTheme;
    children?: ReactNode;
    activeClassName?: string;
}

export const AppLink = memo((props: AppLinkProps) => {
    const {
        to, className, children, theme = 'primary', activeClassName = '', ...otherProps
    } = props;
    return (
        <NavLink
            className={({ isActive }) => classNames(cls.AppLink, { [activeClassName]: isActive }, [className, cls[theme]])}
            to={to}
            {...otherProps}
        >
            {children}
        </NavLink>
    );
});
