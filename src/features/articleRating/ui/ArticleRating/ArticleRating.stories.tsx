import { ComponentStory, ComponentMeta } from '@storybook/react';
import withMock from 'storybook-addon-mock';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import ArticleRating from './ArticleRating';

export default {
    title: 'features/ArticleRating',
    component: ArticleRating,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [withMock],
} as ComponentMeta<typeof ArticleRating>;

const Template: ComponentStory<typeof ArticleRating> = (args) => <ArticleRating {...args} />;

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

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [
    StoreDecorator({
        user: {
            authData: {
                id: '1',
                username: 'testuser',
            },
        },
    }),
];
Normal.parameters = {
    mockData: [
        {
            url: `${__API__}/article-ratings?userId=1`,
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
