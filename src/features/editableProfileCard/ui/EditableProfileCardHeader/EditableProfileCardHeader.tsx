import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { getUserAuthData } from '@/entities/User';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';
import { HStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text/Text';
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData';
import { profileActions } from '../../model/slice/profileSlice';

interface EditableProfileCardHeaderProps {
    className?: string;
}

export const EditableProfileCardHeader = memo(({ className }: EditableProfileCardHeaderProps) => {
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
                            <Button theme={ButtonTheme.OUTLINE} onClick={onEdit} data-testid="EditableProfileCardHeader.EditButton">
                                {t('Edit')}
                            </Button>
                        )
                        : (
                            <HStack gap="8">
                                <Button theme={ButtonTheme.OUTLINE_RED} onClick={onCancelEdit} data-testid="EditableProfileCardHeader.CancelButton">
                                    {t('Cancel')}
                                </Button>
                                <Button theme={ButtonTheme.OUTLINE} onClick={onSave} data-testid="EditableProfileCardHeader.SaveButton">
                                    {t('Save')}
                                </Button>
                            </HStack>
                        )}
                </div>
            )}
        </HStack>
    );
});
