import { fetchCommentsByArticleId } from '../../services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { ArticleDetailsCommentsSchema } from '../../types/ArticleDetailsCommentsSchema';
import { articleDetailsCommentsReducer } from './articleDetailsCommentsSlice';

describe('articleDetailsCommentsSlice.test', () => {
    test('test fetch comments by article id', async () => {
        const state: DeepPartial<ArticleDetailsCommentsSchema> = {
            isLoading: false,
            error: undefined,
        };
        expect(articleDetailsCommentsReducer(state as ArticleDetailsCommentsSchema, fetchCommentsByArticleId.pending)).toEqual({ isLoading: true, error: undefined });
    });
});
