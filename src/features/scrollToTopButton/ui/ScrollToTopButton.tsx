import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Icon } from '@/shared/ui/Icon';
import CircleIcon from '@/shared/assets/icons/circle-up.svg';

interface ScrollToTopButtonProps {
    className?: string;
}

export const ScrollToTopButton = memo((props: ScrollToTopButtonProps) => {
    const { className } = props;

    const onClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <Icon
            Svg={CircleIcon}
            clickable
            onClick={onClick}
            width={32}
            height={32}
            className={classNames('', {}, [className])}
        />
    );
});
