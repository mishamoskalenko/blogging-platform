import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { addCommentForArticle } from './addCommentForArticle';

const comment = {
    id: '1',
    text: 'Test comment',
    user: {
        id: '1',
        username: 'testuser',
    },
};

describe('addCommentForArticle.test', () => {
    test('success', async () => {
        const thunk = new TestAsyncThunk(addCommentForArticle, {
            user: {
                authData: {
                    id: '1',
                    username: 'testuser',
                },
            },
            articleDetails: {
                data: {
                    id: '1',
                },
            },
        });
        thunk.api.post.mockReturnValue(Promise.resolve({ data: comment }));
        const result = await thunk.callThunk('Test comment');

        expect(thunk.api.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(comment);
    });

    test('error', async () => {
        const thunk = new TestAsyncThunk(addCommentForArticle);
        thunk.api.post.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk('Test comment');
        expect(result.meta.requestStatus).toEqual('rejected');
    });
});
