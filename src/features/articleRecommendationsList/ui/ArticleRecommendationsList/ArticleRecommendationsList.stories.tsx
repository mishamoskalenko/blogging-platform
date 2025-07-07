import { StoryFn, Meta } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import { Article } from '@/entities/Article';
import { ArticleRecommendationsList } from './ArticleRecommendationsList';

export default {
    title: 'features/ArticleRecommendationsList',
    component: ArticleRecommendationsList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta<typeof ArticleRecommendationsList>;

const Template: StoryFn<typeof ArticleRecommendationsList> = (args) => <ArticleRecommendationsList {...args} />;

const article: Article[] = [
    {
        id: '1',
        title: 'Javascript news',
        subtitle: "What's new in JS for 2025?",
        img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
        views: 1022,
        createdAt: '15.04.2025',
        type: [],
        blocks: [],
        user: { id: '1', username: '123' },
    },
    {
        id: '2',
        title: 'Python news',
        subtitle: "What's new in Python for 2025?",
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/640px-Python-logo-notext.svg.png',
        views: 573,
        createdAt: '16.04.2025',
        type: [],
        blocks: [],
        user: { id: '2', username: '123' },
    },
    {
        id: '3',
        title: 'C# news',
        subtitle: "What's new in C# for 2025?",
        img: 'https://www.jetbrains.com/guide/assets/csharp-logo-265a149e.svg',
        views: 1053,
        createdAt: '17.04.2025',
        type: [],
        blocks: [],
        user: { id: '3', username: '123' },
    },
    {
        id: '4',
        title: 'C++ news',
        subtitle: "What's new in C++ for 2025?",
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1200px-ISO_C%2B%2B_Logo.svg.png',
        views: 203,
        createdAt: '18.04.2025',
        type: [],
        blocks: [],
        user: { id: '4', username: '123' },
    },
];

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [StoreDecorator({})];
Normal.parameters = {
    mockData: [
        {
            url: `${__API__}/articles?_limit=4&_expand=user`,
            method: 'GET',
            status: 200,
            response: article,
        },
    ],
};
