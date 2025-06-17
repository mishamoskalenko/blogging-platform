import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import ListIcon from '@/shared/assets/icons/list.svg';
import TiledIcon from '@/shared/assets/icons/tiled.svg';
import { Icon } from '@/shared/ui/Icon';
import cls from './ArticleViewSelector.module.scss';
import { ArticleView } from '@/entities/Article';
import { Card } from '@/shared/ui/Card';
import { HStack } from '@/shared/ui/Stack';

interface ArticleViewSelectorProps {
    className?: string;
    view: ArticleView,
    onViewClick?: (view: ArticleView) => void
}

const viewTypes = [
    {
        view: ArticleView.BIG,
        icon: ListIcon,
    },
    {
        view: ArticleView.SMALL,
        icon: TiledIcon,
    },
];

export const ArticleViewSelector = memo((props: ArticleViewSelectorProps) => {
    const { className, view, onViewClick } = props;

    const onClick = (newView: ArticleView) => () => {
        onViewClick?.(newView);
    };

    return (
        <Card className={classNames(cls.ArticleViewSelector, {}, [className])} border="round">
            <HStack gap="16">
                {viewTypes.map((viewType) => (
                    <Icon
                        clickable
                        key={viewType.view}
                        onClick={onClick(viewType.view)}
                        className={classNames('ViewSelector', { [cls.notSelected]: viewType.view !== view })}
                        Svg={viewType.icon}
                        width={18}
                        height={18}
                    />
                ))}
            </HStack>
        </Card>
    );
});
