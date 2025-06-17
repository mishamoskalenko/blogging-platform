import { useTranslation } from 'react-i18next';
import { memo, useMemo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { SelectOption } from '@/shared/ui/Select';
import { SortOrder } from '@/shared/types/sort';
import { ArticleSortField } from '../../../entities/Article/model/consts/articleConsts';
import cls from './ArticleSortSelector.module.scss';
import { ListBox } from '@/shared/ui/Popups';
import { VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';

interface ArticleSortSelectorProps {
    className?: string;
    sort: ArticleSortField,
    order: SortOrder,
    onChangeOrder: (newOrder: SortOrder) => void,
    onChangeSort: (newSort: ArticleSortField) => void
}

export const ArticleSortSelector = memo((props: ArticleSortSelectorProps) => {
    const {
        className, sort, order, onChangeOrder, onChangeSort,
    } = props;
    const { t } = useTranslation('articles');

    const sortFieldOptions = useMemo<SelectOption<ArticleSortField>[]>(() => [
        {
            value: ArticleSortField.CREATED,
            content: t('date of creation'),
        },
        {
            value: ArticleSortField.TITLE,
            content: t('title'),
        },
        {
            value: ArticleSortField.VIEWS,
            content: t('views'),
        },
    ], [t]);

    const orderOptions = useMemo<SelectOption<SortOrder>[]>(() => [
        {
            value: 'asc',
            content: t('ascending order'),
        },
        {
            value: 'desc',
            content: t('descending order'),
        },
    ], [t]);

    return (
        <div className={classNames(cls.ArticleSortSelector, {}, [className])}>
            <VStack gap="8">
                <Text title="Sort by:" />
                <ListBox
                    value={sort}
                    items={sortFieldOptions}
                    onChange={onChangeSort}
                />
                <ListBox
                    value={order}
                    items={orderOptions}
                    onChange={onChangeOrder}
                    className={cls.order}
                />
            </VStack>
        </div>
    );
});
