import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Card } from '@/shared/ui/Card';
import { Skeleton } from '@/shared/ui/Skeleton';
import { ArticleView } from '../../model/consts/articleConsts';
import cls from './ArticleListItem.module.scss';
import { VStack, HStack } from '@/shared/ui/Stack';

interface ArticleListItemSkeletonProps {
    className?: string;
    view: ArticleView
}

export const ArticleListItemSkeleton = memo((props: ArticleListItemSkeletonProps) => {
    const { className, view } = props;
    if (view === ArticleView.BIG) {
        return (
            <Card className={classNames(cls.ArticleListItem, {}, [className, cls[view]])} max padding="24">
                <VStack max gap="16">
                    <HStack gap="8">
                        <Skeleton border="50%" width={32} height={32} />
                        <Skeleton width={57} height={22} />
                        <Skeleton width={85} height={22} />
                    </HStack>
                    <Skeleton className={cls.title} height={50} />
                    <Skeleton className={cls.subtitle} height={28} />
                    <Skeleton className={cls.img} height="420px" />
                    <Skeleton className={cls.textBlock} />
                    <HStack max justify="between" align="center">
                        <Skeleton width={112} height={22} className={cls.footer} />
                        <Skeleton width={88} height={22} />
                    </HStack>
                </VStack>
            </Card>
        );
    }

    return (
        <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
            <Card className={cls.card} border="round">
                <Skeleton className={cls.img} border="25%" width="220px" height="200px" />
                <VStack className={cls.info} gap="4">
                    <Skeleton className={cls.title} height="40px" width="205px" />
                    <VStack gap="8" className={cls.footer} max>
                        <HStack justify="between" max>
                            <Skeleton className={cls.date} width={84} height={22} />
                            <Skeleton className={cls.date} width={84} height={22} />
                        </HStack>
                        <HStack gap="4">
                            <Skeleton border="50%" width={32} height={32} />
                            <Skeleton width={60} height={12} />
                        </HStack>
                    </VStack>
                </VStack>
            </Card>
        </div>
    );
});

// <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
//     <Card className={cls.card}>
//         <div className={cls.header}>
//             <Skeleton border="50%" height={30} width={30} />
//             <Skeleton width={150} height={16} className={cls.username} />
//             <Skeleton width={150} height={16} className={cls.date} />
//         </div>
//         <Skeleton width={250} height={24} className={cls.title} />
//         <Skeleton height={200} className={cls.img} />
//         <div className={cls.footer}>
//             <Skeleton height={36} width={200} />
//         </div>
//     </Card>
// </div>
