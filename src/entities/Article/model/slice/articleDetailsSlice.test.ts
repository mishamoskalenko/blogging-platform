import { fetchArticleById } from '../services/fetchArticleById/fetchArticleById';
import { ArticleType, ArticleBlockType } from '../types/article';
import { ArticleDetailsSchema } from '../types/articleDetailsSchema';
import { articleDetailsReducer } from './articleDetailsSlice';

const data = {
    id: '1',
    title: '123',
    subtitle: '123',
    img: 'img',
    views: 152,
    createdAt: '19.04.2025',
    type: [ArticleType.IT, ArticleType.SCIENCE],
    user: {
        id: '1',
        username: 'admin',
    },
    blocks: [
        {
            id: '1',
            type: ArticleBlockType.TEXT as ArticleBlockType.TEXT,
            title: 'Text Block Title',
            paragraphs: ['Paragraph 1', 'Paragraph 2'],
        },
        {
            id: '2',
            type: ArticleBlockType.CODE as ArticleBlockType.CODE,
            code: 'console.log("Hello World");',
        },
        {
            id: '3',
            type: ArticleBlockType.IMAGE as ArticleBlockType.IMAGE,
            src: 'https://example.com/image.png',
            title: 'Image Block Title',
        },
    ],
};

describe('articleDetailsSlice.test', () => {
    test('test fetch article by id pending', async () => {
        const state: DeepPartial<ArticleDetailsSchema> = {
            isLoading: false,
            error: undefined,
            data: undefined,
        };
        expect(articleDetailsReducer(state as ArticleDetailsSchema, fetchArticleById.pending)).toEqual({ isLoading: true, error: undefined, data: undefined });
    });

    test('test fetch article by id fulfilled', async () => {
        const state: DeepPartial<ArticleDetailsSchema> = {
            isLoading: false,
            data: undefined,
        };
        expect(articleDetailsReducer(state as ArticleDetailsSchema, fetchArticleById.fulfilled(data, '', 'undefined'))).toEqual({
            isLoading: false, error: undefined, data,
        });
    });
});
