import {
    getProfileData, getProfileReadonly, profileActions, updateProfileData,
} from 'entities/Profile';
import { getUserAuthData } from 'entities/User';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { HStack } from 'shared/ui/Stack/HStack/HStack';
import { Text } from 'shared/ui/Text/Text';

interface ProfilePageHeaderProps {
    className?: string;
}

export const ProfilePageHeader = ({ className }: ProfilePageHeaderProps) => {
    const { t } = useTranslation('profile');
    const readonly = useSelector(getProfileReadonly);
    const dispacth = useAppDispatch();
    const authData = useSelector(getUserAuthData);
    const profileData = useSelector(getProfileData);
    const canEdit = authData?.id === profileData?.id;

    const onEdit = useCallback(() => {
        dispacth(profileActions.setReadonly(false));
    }, [dispacth]);

    const onCancelEdit = useCallback(() => {
        dispacth(profileActions.cancelEdit());
    }, [dispacth]);

    const onSave = useCallback(() => {
        dispacth(updateProfileData());
    }, [dispacth]);

    return (
        <HStack max justify="between" className={classNames('', {}, [className])}>
            <Text title={t('Profile')} />
            {canEdit && (
                <div>
                    {readonly
                        ? (
                            <Button theme={ButtonTheme.OUTLINE} onClick={onEdit}>
                                {t('Edit')}
                            </Button>
                        )
                        : (
                            <HStack gap="8">
                                <Button theme={ButtonTheme.OUTLINE_RED} onClick={onCancelEdit}>
                                    {t('Cancel')}
                                </Button>
                                <Button theme={ButtonTheme.OUTLINE} onClick={onSave}>
                                    {t('Save')}
                                </Button>
                            </HStack>
                        )}
                </div>
            )}
        </HStack>
    );
};
