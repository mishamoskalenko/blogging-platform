import { memo } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Card } from '@/shared/ui/Card';
import { getArticleDetailsData } from '@/entities/Article';
import { ArticleAdditionalInfo } from '@/widgets/ArticleAdditionalInfo';

interface AdditionalInfoContainerProps {
    className?: string;
}

export const AdditionalInfoContainer = memo((props: AdditionalInfoContainerProps) => {
    const { className } = props;
    const article = useSelector(getArticleDetailsData);

    if (!article) {
        return null;
    }

    return (
        <Card padding="24" border="round" className={classNames('', {}, [className])}>
            <ArticleAdditionalInfo
                author={article.user}
                createdAt={article.createdAt}
                views={article.views}
            />
        </Card>
    );
});
