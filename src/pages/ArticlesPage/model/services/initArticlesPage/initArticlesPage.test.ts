import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { articlesPageActions } from '../../slice/articlesPageSlice';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';
import { initArticlesPage } from './initArticlesPage';

jest.mock('../fetchArticlesList/fetchArticlesList');

describe('initArticlesPage.test', () => {
    test('should initialize page if not inited', async () => {
        const thunk = new TestAsyncThunk(initArticlesPage, {
            articlesPage: {
                _inited: false,
            },
        });
        await thunk.callThunk(new URLSearchParams('?order=asc'));

        expect(thunk.dispatch).toHaveBeenCalledWith(articlesPageActions.initState());
        expect(fetchArticlesList).toHaveBeenCalledWith({ page: 1 });
    });

    test('should not initialize page if already inited', async () => {
        const thunk = new TestAsyncThunk(initArticlesPage, {
            articlesPage: {
                _inited: true,
            },
        });

        await thunk.callThunk(new URLSearchParams('?order=asc'));

        expect(thunk.dispatch).not.toHaveBeenCalledWith(articlesPageActions.initState());
        expect(fetchArticlesList).not.toHaveBeenCalled();
    });
});
