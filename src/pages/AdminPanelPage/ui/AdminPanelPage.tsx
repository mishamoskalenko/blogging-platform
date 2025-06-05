import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text } from '@/shared/ui/Text';
import cls from './AdminPanelPage.module.scss';
import { Page } from '@/widgets/Page';

interface AdminPanelPageProps {
    className?: string;
}

const AdminPanelPage = memo(({ className }: AdminPanelPageProps) => {
    const { t } = useTranslation();
    return (
        <Page data-testid="AdminPanelPage" className={classNames(cls.AdminPanelPage, {}, [className])}>
            <Text title={t('Admin panel')} />
        </Page>
    );
});

export default AdminPanelPage;
