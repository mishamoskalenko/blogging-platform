import { StateSchema } from '@/app/providers/StoreProvider';
import { getArticleCommentsIsLoading, getArticleCommentsError } from './comments';

describe('articleDetailsPage.test', () => {
    test('should return isLoading', () => {
        const state: DeepPartial<StateSchema> = {
            articlesDetailsPage: {
                comments: {
                    isLoading: true,
                },
            },
        };
        expect(getArticleCommentsIsLoading(state as StateSchema)).toEqual(true);
    });

    test('should return error', () => {
        const state: DeepPartial<StateSchema> = {
            articlesDetailsPage: {
                comments: {
                    error: 'error',
                },
            },
        };
        expect(getArticleCommentsError(state as StateSchema)).toEqual('error');
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getArticleCommentsError(state as StateSchema)).toEqual(undefined);
    });
});
