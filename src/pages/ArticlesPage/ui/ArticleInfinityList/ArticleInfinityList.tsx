import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ArticleList } from '@/entities/Article';
import { Text } from '@/shared/ui/Text';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getArticles } from '../../model/slice/articlesPageSlice';
import { getArticlesPageError, getArticlesPageIsLoading, getArticlesPageView } from '../../model/selectors/articlesPageSelectors';

interface ArticleInfinityListProps {
    className?: string;
}

export const ArticleInfinityList = memo(({ className }: ArticleInfinityListProps) => {
    const { t } = useTranslation('articles');
    const articles = useSelector(getArticles.selectAll);
    const isLoading = useSelector(getArticlesPageIsLoading);
    const view = useSelector(getArticlesPageView);
    const error = useSelector(getArticlesPageError);
    const dispatch = useAppDispatch();

    if (error) {
        return (
            <Text title={t('Error has occured')} theme="error" />
        );
    }

    return (
        <div className={classNames('', {}, [className])}>
            <ArticleList
                isLoading={isLoading}
                view={view}
                articles={articles}
                className={classNames('', {}, [])}
            />
        </div>
    );
});
