import { Country } from 'entities/Country';
import { CountrySelect } from 'entities/Country/ui/CountrySelect/CountrySelect';
import { Currency, CurrencySelect } from 'entities/Currency';
import { Profile } from 'entities/Profile';
import { useTranslation } from 'react-i18next';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Input } from 'shared/ui/Input/Input';
import { Loader } from 'shared/ui/Loader/Loader';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import cls from './ProfileCard.module.scss';

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
            <div className={classNames(cls.ProfileCard, {}, [className, cls.loading])}>
                <Loader />
            </div>
        );
    }

    if (error) {
        return (
            <div className={classNames(cls.ProfileCard, {}, [className, cls.error])}>
                <Text theme={TextTheme.ERROR} title={t('An error occurred while loading the profile')} text={t('Try refresh the page')} align={TextAlign.CENTER} />
            </div>
        );
    }

    const mods: Mods = {
        [cls.editing]: !readonly,
    };

    return (
        <div className={classNames(cls.ProfileCard, mods, [className])}>
            <div className={cls.data}>
                {data?.avatar && (
                    <div className={cls.avatarWrapper}>
                        <Avatar src={data?.avatar} alt="avatar" />
                    </div>
                )}
                <Input value={data?.first} placeholder={t('Your name')} className={cls.input} onChange={onChangeFirstName} readonly={readonly} />
                <Input value={data?.lastname} placeholder={t('Your surname')} className={cls.input} onChange={onChangeLastName} readonly={readonly} />
                <Input value={data?.age} placeholder={t('Your age')} className={cls.input} onChange={onChangeAge} readonly={readonly} pattern="\d*" />
                <Input value={data?.city} placeholder={t('Your city')} className={cls.input} onChange={onChangeCity} readonly={readonly} />
                <Input value={data?.username} placeholder={t('Your username')} className={cls.input} onChange={onChangeUsername} readonly={readonly} />
                <Input value={data?.avatar} placeholder={t('Your avatar link')} className={cls.input} onChange={onChangeAvatar} readonly={readonly} />
                <CurrencySelect value={data?.currency} className={cls.input} onChange={onChangeCurrency} readonly={readonly} />
                <CountrySelect value={data?.country} className={cls.input} onChange={onChangeCountry} readonly={readonly} />
            </div>
        </div>
    );
};
