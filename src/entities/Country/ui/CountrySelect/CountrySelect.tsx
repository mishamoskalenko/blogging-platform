import { Country } from 'entities/Country';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Select } from 'shared/ui/Select/Select';

interface CountrySelectProps {
    className?: string;
    value?: Country;
    onChange?: (value: Country) => void;
    readonly?: boolean
}

const options = [
    { value: Country.France, content: Country.France },
    { value: Country.Ukraine, content: Country.Ukraine },
    { value: Country.Czech_republic, content: Country.Czech_republic },
    { value: Country.Germany, content: Country.Germany },
];

export const CountrySelect = memo(({
    className, value, onChange, readonly,
}: CountrySelectProps) => {
    const { t } = useTranslation();

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Country);
    }, [onChange]);

    return (
        <Select
            className={className}
            label={t('Enter country')}
            options={options}
            value={value}
            onChange={onChangeHandler}
            readonly={readonly}
        />
    );
});
