import { useTranslation } from 'react-i18next';
import { Page } from 'widgets/Page/Page';

function MainPage() {
    const { t } = useTranslation('main');
    return (
        <Page>
            {t('MAIN PAGE')}
        </Page>
    );
}

export default MainPage;
