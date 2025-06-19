import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticleAdditionalInfo.module.scss';
import { Avatar } from '@/shared/ui/Avatar';
import { VStack, HStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';
import { User } from '@/entities/User';
import { AppLink } from '@/shared/ui/AppLink';
import { getRouteProfile } from '@/shared/const/router';

interface ArticleAdditionalInfoProps {
    className?: string;
    author: User;
    createdAt: string;
    views: number;
}

export const ArticleAdditionalInfo = memo((props: ArticleAdditionalInfoProps) => {
    const {
        className, author, createdAt, views,
    } = props;
    const { t } = useTranslation('article-details');
    return (
        <VStack
            gap="32"
            className={classNames(cls.ArticleAdditionalInfo, {}, [
                className,
            ])}
        >
            <HStack gap="8">
                <AppLink
                    to={getRouteProfile(author.id)}
                    className={cls.link}
                >
                    <Avatar src={author.avatar} size={32} />
                    <Text text={author.username} bold />
                </AppLink>
                <Text text={createdAt} />
            </HStack>
            <Text text={t('{{count}} view', { count: views })} />
        </VStack>
    );
});
