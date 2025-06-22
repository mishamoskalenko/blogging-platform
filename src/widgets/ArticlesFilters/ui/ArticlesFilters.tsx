import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticlesFilters.module.scss';
import { VStack } from '@/shared/ui/Stack';
import { ArticleSortField, ArticleType } from '@/entities/Article';
import { ArticleSortSelector } from '@/features/ArticleSortSelector';
import { ArticleTypeTabs } from '@/features/ArticleTypeTabs';
import { SortOrder } from '@/shared/types/sort';
import { Input } from '@/shared/ui/Input';
import { Card } from '@/shared/ui/Card';
import { Icon } from '@/shared/ui/Icon';
import SearchIcon from '@/shared/assets/icons/search.svg';

interface ArticlesFiltersProps {
    className?: string;
    sort: ArticleSortField,
    order: SortOrder,
    type: ArticleType;
    search: string;
    onChangeSearch: (value: string) => void;
    onChangeOrder: (newOrder: SortOrder) => void,
    onChangeSort: (newSort: ArticleSortField) => void
    onChangeType: (type: ArticleType) => void;
}

export const ArticlesFilters = memo((props: ArticlesFiltersProps) => {
    const {
        className, sort, order, type, search, onChangeSearch, onChangeOrder, onChangeSort, onChangeType,
    } = props;
    const { t } = useTranslation('articles');
    return (
        <Card className={classNames(cls.ArticlesFilters, {}, [className])} padding="24">
            <VStack gap="32">
                <Input value={search} onChange={onChangeSearch} placeholder={t('Search')} addonLeft={<Icon Svg={SearchIcon} width={32} height={32} />} />
                <ArticleTypeTabs className={cls.tabs} value={type} onChangeType={onChangeType} />
                <ArticleSortSelector order={order} sort={sort} onChangeOrder={onChangeOrder} onChangeSort={onChangeSort} />
            </VStack>
        </Card>
    );
});
