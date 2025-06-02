import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { Article, ArticleType } from '@/entities/Article';
import { addQueryParams } from '@/shared/lib/url/addQueryParams/addQueryParams';
import {
    getArticlesPageLimit, getArticlesPageNumber, getArticlesPageOrder, getArticlesPageSearch, getArticlesPageSort, getArticlesPageType,
} from '../../selectors/articlesPageSelectors';

interface FetchArticlesListProps {
    page?: number
    replace?: boolean;
}

export const fetchArticlesList = createAsyncThunk<Article[], FetchArticlesListProps, ThunkConfig<string>>(
    'articlesPage/fetchArticlesList',
    async (props, thunkAPI) => {
        const { extra, rejectWithValue, getState } = thunkAPI;
        const limit = getArticlesPageLimit(getState());
        const page = getArticlesPageNumber(getState());
        const order = getArticlesPageOrder(getState());
        const sort = getArticlesPageSort(getState());
        const search = getArticlesPageSearch(getState());
        const type = getArticlesPageType(getState());

        try {
            addQueryParams({
                sort, order, search,
            });
            const response = await extra.api.get<Article[]>('/articles/', {
                params: {
                    _expand: 'user',
                    _limit: limit,
                    _page: page,
                    _sort: sort,
                    _order: order,
                    q: search,
                    type: type === ArticleType.ALL ? undefined : type,
                },
            });
            if (!response.data) {
                throw new Error();
            }
            return response.data;
        } catch (e) {
            return rejectWithValue('error');
        }
    },
);
