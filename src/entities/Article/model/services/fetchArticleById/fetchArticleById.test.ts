import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { ArticleBlockType, ArticleType } from '../../types/article';
import { fetchArticleById } from './fetchArticleById';

const data = {
    id: '1',
    title: '123',
    subtitle: '123',
    img: 'img',
    views: 152,
    createdAt: '19.04.2025',
    type: [ArticleType.IT, ArticleType.SCIENCE],
    blocks: [
        {
            id: '1',
            type: ArticleBlockType.TEXT,
            title: 'Text Block Title',
            paragraphs: ['Paragraph 1', 'Paragraph 2'],
        },
        {
            id: '2',
            type: ArticleBlockType.CODE,
            code: 'console.log("Hello World");',
        },
        {
            id: '3',
            type: ArticleBlockType.IMAGE,
            src: 'https://example.com/image.png',
            title: 'Image Block Title',
        },
    ],
};

describe('fetchArticleById.test', () => {
    test('success', async () => {
        const thunk = new TestAsyncThunk(fetchArticleById);
        thunk.api.get.mockReturnValue(Promise.resolve({ data }));
        const result = await thunk.callThunk('1');

        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(data);
    });

    test('error', async () => {
        const thunk = new TestAsyncThunk(fetchArticleById);
        thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk('1');
        expect(result.meta.requestStatus).toEqual('rejected');
    });
});
