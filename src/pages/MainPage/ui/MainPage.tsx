import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';
import { VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';
import { Card } from '@/shared/ui/Card';

function MainPage() {
    const { t } = useTranslation('main');
    return (
        <Page data-testid="MainPage">
            <VStack gap="32" max>
                <Text title={t('MAIN_TITLE')} size="l" />

                <VStack gap="16" max>
                    <Card padding="24" max theme="outlined">
                        <VStack gap="8">
                            <Text title={t('FEATURES_TITLE')} size="m" />
                            <Text text={t('FEATURES_DESC')} />
                        </VStack>
                    </Card>

                    <Card padding="24" max theme="outlined">
                        <VStack gap="8">
                            <Text title={t('PLATFORM_TITLE')} size="m" />
                            <Text text={t('PLATFORM_DESC')} />
                            <a href="https://mishamoskalenko.github.io/blogging-platform" target="_blank" rel="noreferrer">{t('View reports page')}</a>
                        </VStack>
                    </Card>

                    <Card padding="24" max theme="outlined">
                        <VStack gap="8">
                            <Text title={t('COMMUNITY_TITLE')} size="m" />
                            <Text text={t('COMMUNITY_DESC')} />
                        </VStack>
                    </Card>
                </VStack>

                <Card padding="24" max theme="outlined">
                    <VStack gap="16">
                        <Text title={t('TECHNOLOGY_TITLE')} size="m" />
                        <Text text={t('TECHNOLOGY_DESC')} />
                        <VStack gap="8">
                            <Text text={t('TECH_STACK')} />
                        </VStack>
                    </VStack>
                </Card>
            </VStack>
        </Page>
    );
}

export default MainPage;
