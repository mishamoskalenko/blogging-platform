import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { VStack } from '@/shared/ui/Stack';
import cls from './ScrollToolbar.module.scss';
import { ScrollToTopButton } from '@/features/scrollToTopButton';

interface ScrollToolbarProps {
    className?: string;
}

export const ScrollToolbar = memo((props: ScrollToolbarProps) => {
    const { className } = props;
    return (
        <VStack justify="center" align="center" className={classNames(cls.ScrollToolbar, {}, [className])}>
            <ScrollToTopButton />
        </VStack>
    );
});
