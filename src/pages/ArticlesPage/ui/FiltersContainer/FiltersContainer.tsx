import { memo } from 'react';
import { ArticlesFilters } from '@/widgets/ArticlesFilters';
import { useArticleFilters } from '../../lib/hooks/useArticleFilters';

interface FiltersContainerProps {
    className?: string;
}

export const FiltersContainer = memo((props: FiltersContainerProps) => {
    const { className } = props;
    const {
        onChangeOrder, onChangeSort, onChangeSearch, onChangeType, onChangeView, sort, search, type, order,
    } = useArticleFilters();
    return (
        <ArticlesFilters
            className={className}
            type={type}
            order={order}
            sort={sort}
            search={search}
            onChangeOrder={onChangeOrder}
            onChangeSort={onChangeSort}
            onChangeSearch={onChangeSearch}
            onChangeType={onChangeType}
        />
    );
});
