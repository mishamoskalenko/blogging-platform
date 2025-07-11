import { memo } from 'react';
import { MainLayout } from '../MainLayout';
import { Skeleton } from '@/shared/ui/Skeleton';
import { HStack, VStack } from '@/shared/ui/Stack';
import cls from './AppLoaderLayout.module.scss';

export const AppLoaderLayout = memo(() => (
    <MainLayout
        sidebar={<Skeleton border="32px" width={220} height="100%" />}
        header={(
            <HStack className={cls.header}>
                <Skeleton width={40} height={40} border="50%" />
            </HStack>
        )}
        content={(
            <VStack>
                <Skeleton width="70%" height={32} border="16px" />
                <Skeleton width="40%" height={20} border="16px" />
                <Skeleton width="50%" height={20} border="16px" />
                <Skeleton width="30%" height={32} border="16px" />
                <Skeleton width="80%" height="40%" border="16px" />
                <Skeleton width="80%" height="40%" border="16px" />
            </VStack>
        )}
    />
));
