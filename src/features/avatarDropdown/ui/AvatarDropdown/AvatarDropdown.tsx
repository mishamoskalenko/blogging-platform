import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { getRouteAdmin, getRouteProfile } from '@/shared/const/router';
import { Avatar } from '@/shared/ui/Avatar';
import { Dropdown } from '@/shared/ui/Popups';
import {
    getUserAuthData, isUserAdmin, isUserManager, userActions,
} from '@/entities/User';

interface AvatarDropdownProps {
    className?: string;
}

export const AvatarDropdown = memo(({ className }: AvatarDropdownProps) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const isAdmin = useSelector(isUserAdmin);
    const isManager = useSelector(isUserManager);
    const authData = useSelector(getUserAuthData);

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    const isAdminPanelAvailable = isAdmin || isManager;

    if (!authData) {
        return null;
    }

    const items = [
        ...(isAdminPanelAvailable ? [{
            content: t('Admin'),
            href: getRouteAdmin(),
        }] : []),
        {
            content: t('Profile'),
            href: getRouteProfile(authData.id),
        },
        {
            content: t('Logout'),
            onClick: onLogout,
        },
    ];

    return (
        <Dropdown
            className={classNames('', {}, [className])}
            items={items}
            direction="bottom left"
            trigger={<Avatar size={40} src={authData.avatar} fallbackInverted alt="avatar" />}
        />
    );
});
