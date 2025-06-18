import { useTranslation } from 'react-i18next';
import { HTMLAttributeAnchorTarget, memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text } from '@/shared/ui/Text';
import { Icon } from '@/shared/ui/Icon';
import EyeIcon from '@/shared/assets/icons/eye.svg';
import { Card } from '@/shared/ui/Card';
import { Avatar } from '@/shared/ui/Avatar';
import { Button } from '@/shared/ui/Button';
import { getRouteArticleDetails } from '@/shared/const/router';
import { AppLink } from '@/shared/ui/AppLink';
import {
    ArticleTextBlock, Article,
} from '../../model/types/article';
import { ArticleBlockType, ArticleView } from '../../model/consts/articleConsts';
import cls from './ArticleListItem.module.scss';
import { AppImage } from '@/shared/ui/AppImage';
import { Skeleton } from '@/shared/ui/Skeleton';
import { HStack, VStack } from '@/shared/ui/Stack';

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

    const views = (
        <HStack gap="8">
            <Icon Svg={EyeIcon} width={32} height={32} />
            <Text className={cls.views} text={String(article.views)} />
        </HStack>
    );

    if (view === ArticleView.BIG) {
        const textBlock = article.blocks.find((block) => block.type === ArticleBlockType.TEXT) as ArticleTextBlock;
        return (
            <Card className={classNames(cls.ArticleListItem, {}, [className, cls[view]])} max padding="24">
                <VStack max gap="16">
                    <HStack gap="8">
                        <Avatar size={32} src={article.user.avatar} />
                        <Text bold className={cls.username} text={article.user.username} />
                        <Text className={cls.date} text={article.createdAt} />
                    </HStack>
                    <Text className={cls.title} bold title={article.title} />
                    <Text className={cls.subtitle} bold size="s" title={article.title} />
                    <AppImage className={cls.img} src={article.img} alt={article.title} fallback={<Skeleton width="100%" height="250px" />} />
                    {textBlock?.paragraphs && (
                        <Text className={cls.textBlock} text={textBlock.paragraphs.slice(0, 2).join('')} />
                    )}
                    <HStack max justify="between" align="center">
                        <AppLink className={cls.footer} to={getRouteArticleDetails(article.id)} target={target}>
                            <Button theme="outline">
                                {t('Read more...')}
                            </Button>
                        </AppLink>
                        {views}
                    </HStack>
                </VStack>
            </Card>
        );
    }

    return (
        <AppLink
            target={target}
            to={getRouteArticleDetails(article.id)}
            className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}
            data-testid="ArticleListItem"
        >
            <Card className={cls.card} border="round">
                <AppImage className={cls.img} src={article.img} alt={article.title} fallback={<Skeleton width="200px" height="200px" />} />
                <VStack className={cls.info} gap="4">
                    <Text title={article.title} className={cls.title} />
                    <VStack gap="4" className={cls.footer} max>
                        <HStack justify="between" max>
                            <Text className={cls.date} text={article.createdAt} />
                            {views}
                        </HStack>
                        <HStack gap="4">
                            <Avatar size={32} src={article.user.avatar} />
                            <Text bold text={article.user.username} />
                        </HStack>
                    </VStack>
                </VStack>
            </Card>
        </AppLink>
    );
});
