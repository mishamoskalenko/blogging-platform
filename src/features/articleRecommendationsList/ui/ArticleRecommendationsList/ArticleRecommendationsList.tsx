import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { ArticleList } from '@/entities/Article';
import { Text } from '@/shared/ui/Text';
import { classNames } from '@/shared/lib/classNames/classNames';
import { VStack } from '@/shared/ui/Stack';
import { useArticleRecommendationsList } from '../../api/articleRecommendationsApi';
import cls from './ArticleRecommendationsList.module.scss';

interface ArticleRecommendationsListProps {
    className: string
}

export const ArticleRecommendationsList = memo((props: ArticleRecommendationsListProps) => {
    const { t } = useTranslation();
    const { className } = props;
    const { isLoading, data: articles, error } = useArticleRecommendationsList(4);
    if (isLoading || error || !articles) {
        return null;
    }
    return (
        <VStack gap="8" className={classNames(cls.ArticleRecommendationsList, {}, [className])} data-testid="ArticleRecommendationsList">
            <Text className={classNames(cls.title, {}, [className])} size="l" title={t('Recommendations')} />
            <ArticleList className={classNames(cls.list, {}, [className])} articles={articles} target="_blank" />
        </VStack>
    );
});
