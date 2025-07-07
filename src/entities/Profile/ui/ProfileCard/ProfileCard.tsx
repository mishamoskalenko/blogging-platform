import { useTranslation } from 'react-i18next';
import { Country, CountrySelect } from '@/entities/Country';
import { Currency, CurrencySelect } from '@/entities/Currency';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Avatar } from '@/shared/ui/Avatar';
import { Input } from '@/shared/ui/Input';
import { Text } from '@/shared/ui/Text';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Profile } from '../../model/types/profile';
import cls from './ProfileCard.module.scss';
import { Card } from '@/shared/ui/Card';
import { Skeleton } from '@/shared/ui/Skeleton';

interface ProfileCardProps {
    className?: string;
    data?: Profile;
    error?: string;
    isLoading?: boolean;
    readonly?: boolean;
    onChangeFirstName?: (value: string) => void;
    onChangeLastName?: (value: string) => void;
    onChangeAge?: (value: string) => void;
    onChangeCity?: (value: string) => void;
    onChangeUsername?: (value: string) => void;
    onChangeAvatar?: (value: string) => void;
    onChangeCurrency?: (currency: Currency) => void;
    onChangeCountry?: (country: Country) => void;
}

export const ProfileCard = (props: ProfileCardProps) => {
    const {
        className,
        data,
        error,
        isLoading,
        onChangeFirstName,
        onChangeLastName,
        readonly,
        onChangeAge,
        onChangeUsername,
        onChangeAvatar,
        onChangeCurrency,
        onChangeCountry,
        onChangeCity,
    } = props;
    const { t } = useTranslation('profile');

    if (isLoading) {
        return (
            <Card padding="24" max>
                <VStack gap="32">
                    <HStack max justify="center">
                        <Skeleton border="100%" width={128} height={128} />
                    </HStack>
                    <HStack gap="32" max>
                        <VStack gap="16" max>
                            <Skeleton width="100%" height={38} />
                            <Skeleton width="100%" height={38} />
                            <Skeleton width="100%" height={38} />
                            <Skeleton width="100%" height={38} />
                        </VStack>

                        <VStack gap="16" max>
                            <Skeleton width="100%" height={38} />
                            <Skeleton width="100%" height={38} />
                            <Skeleton width="100%" height={38} />
                            <Skeleton width="100%" height={38} />
                        </VStack>
                    </HStack>
                </VStack>
            </Card>
        );
    }

    if (error) {
        return (
            <HStack justify="center" max className={classNames(cls.ProfileCard, {}, [className, cls.error])}>
                <Text theme="error" title={t('An error occurred while loading the profile')} text={t('Try refresh the page')} align="center" />
            </HStack>
        );
    }

    return (
        <VStack gap="16" max className={classNames(cls.ProfileCard, {}, [className])}>
            {data?.avatar && (
                <HStack justify="center" max className={cls.avatarWrapper}>
                    <Avatar src={data?.avatar} alt="avatar" />
                </HStack>
            )}
            <HStack className={classNames(cls.ProfileCardInputs, {}, [className])} gap="24" max>
                <VStack gap="16" max>
                    <Input value={data?.first} label={t('Name:')} placeholder={t('Your name')} className={cls.input} onChange={onChangeFirstName} readonly={readonly} data-testid="ProfileCard.firstname" />
                    <Input value={data?.lastname} label={t('Surname:')} placeholder={t('Your surname')} className={cls.input} onChange={onChangeLastName} readonly={readonly} data-testid="ProfileCard.lastname" />
                    <Input value={data?.age} label={t('Age:')} placeholder={t('Your age')} className={cls.input} onChange={onChangeAge} readonly={readonly} pattern="\d*" />
                    <Input value={data?.city} label={t('City:')} placeholder={t('Your city')} className={cls.input} onChange={onChangeCity} readonly={readonly} />
                </VStack>
                <VStack gap="16" max>
                    <Input value={data?.username} label={t('Username:')} placeholder={t('Your username')} className={cls.input} onChange={onChangeUsername} readonly={readonly} />
                    <Input value={data?.avatar} label={t('Avatar:')} placeholder={t('Your avatar link')} className={cls.input} onChange={onChangeAvatar} readonly={readonly} />
                    <CurrencySelect value={data?.currency} className={cls.input} onChange={onChangeCurrency} readonly={readonly} />
                    <CountrySelect value={data?.country} className={cls.input} onChange={onChangeCountry} readonly={readonly} />
                </VStack>
            </HStack>
        </VStack>
    );
};
