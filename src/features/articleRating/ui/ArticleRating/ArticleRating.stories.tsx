import { StoryFn, Meta } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import ArticleRating from './ArticleRating';

export default {
    title: 'features/ArticleRating',
    component: ArticleRating,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta<typeof ArticleRating>;

const Template: StoryFn<typeof ArticleRating> = (args) => <ArticleRating {...args} />;

const articleRatings = [
    {
        id: '1',
        rate: 4,
        feedback: 'Good article',
        userId: '1',
        articleId: '1',
    },
    {
        id: '2',
        rate: 5,
        feedback: 'Good article',
        userId: '1',
        articleId: '2',
    },
];

export const WithRate = Template.bind({});
WithRate.args = {
    articleId: '1',
};
WithRate.decorators = [
    StoreDecorator({
        user: {
            authData: {
                id: '1',
                username: 'testuser',
            },
        },
    }),
];
WithRate.parameters = {
    mockData: [
        {
            url: `${__API__}/article-ratings?userId=1&articleId=1`,
            method: 'GET',
            status: 200,
            response: articleRatings,
        },
        {
            url: `${__API__}/article-ratings`,
            method: 'POST',
            status: 200,
            response: { success: true },
        },
    ],
};

export const WithoutRate = Template.bind({});
WithoutRate.args = {
    articleId: '1',
};
WithoutRate.decorators = [
    StoreDecorator({
        user: {
            authData: {
                id: '1',
                username: 'testuser',
            },
        },
    }),
];
WithoutRate.parameters = {
    mockData: [
        {
            url: `${__API__}/article-ratings?userId=1&articleId=1`,
            method: 'GET',
            status: 200,
            response: [],
        },
    ],
};
