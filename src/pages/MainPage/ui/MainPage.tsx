import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';

function MainPage() {
    const { t } = useTranslation('main');
    return (
        <Page data-testid="MainPage">
            {t('MAIN PAGE')}
        </Page>
    );
}

export default MainPage;
