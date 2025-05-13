import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { HTMLAttributeAnchorTarget, memo, useCallback } from 'react';
import { Text } from 'shared/ui/Text/Text';
import { Icon } from 'shared/ui/Icon/Icon';
import EyeIcon from 'shared/assets/icons/eye.svg';
import { Card } from 'shared/ui/Card/Card';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import {
    ArticleBlockType, ArticleTextBlock, Article, ArticleView,
} from '../../model/types/article';
import cls from './ArticleListItem.module.scss';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';

interface ArticleListItemProps {
    className?: string;
    article: Article;
    view: ArticleView
    target?: HTMLAttributeAnchorTarget
}

export const ArticleListItem = memo((props: ArticleListItemProps) => {
    const {
        className, article, view, target,
    } = props;
    const { t } = useTranslation();

    const types = <Text className={cls.types} text={article.type.join(', ')} />;

    const views = (
        <>
            <Text className={cls.views} text={String(article.views)} />
            <Icon Svg={EyeIcon} />
        </>
    );

    if (view === ArticleView.BIG) {
        const textBlock = article.blocks.find((block) => block.type === ArticleBlockType.TEXT) as ArticleTextBlock;
        return (
            <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
                <Card className={cls.card}>
                    <div className={cls.header}>
                        <Avatar size={30} src={article.user.avatar} />
                        <Text className={cls.username} text={article.user.username} />
                        <Text className={cls.date} text={article.createdAt} />
                    </div>
                    <Text className={cls.title} text={article.title} />
                    {types}
                    <img className={cls.img} src={article.img} alt={article.title} />
                    {textBlock && (
                        <ArticleTextBlockComponent className={cls.textBlock} block={textBlock} />
                    )}
                    <AppLink className={cls.footer} to={RoutePath.article_details + article.id} target={target}>
                        <Button theme={ButtonTheme.OUTLINE}>
                            {t('Read more...')}
                        </Button>
                        {views}
                    </AppLink>
                </Card>
            </div>
        );
    }

    return (
        <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
            <AppLink target={target} to={RoutePath.article_details + article.id}>
                <Card className={cls.card}>
                    <div className={cls.imageWrapper}>
                        <img className={cls.img} src={article.img} alt={article.title} />
                        <Text className={cls.date} text={article.createdAt} />
                    </div>
                    <div className={cls.infoWrapper}>
                        {types}
                        {views}
                    </div>
                    <Text className={cls.title} text={String(article.title)} />
                </Card>
            </AppLink>
        </div>
    );
});
