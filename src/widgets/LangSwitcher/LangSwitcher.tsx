import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui/Button/Button';

interface LangSwitcherProps {
    className?: string;
}

export const LangSwitcher = ({ className }: LangSwitcherProps) => {
    const { t, i18n } = useTranslation();
    const toogle = () => {
        i18n.changeLanguage(i18n.language === 'en' ? 'fr' : 'en');
    };

    return (
        <Button className={classNames('', {}, [className])} onClick={toogle} theme={ThemeButton.CLEAR}>
            {t('Language')}
        </Button>
    );
};
