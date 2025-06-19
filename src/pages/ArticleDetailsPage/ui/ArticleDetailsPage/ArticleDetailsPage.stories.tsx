import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Article, ArticleBlockType, ArticleType } from '@/entities/Article';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import ArticleDetailsPage from './ArticleDetailsPage';
import { UserRole } from '@/entities/User';
import { setFeatureFlags } from '@/shared/lib/features';

export default {
    title: 'pages/ArticleDetailsPage',
    component: ArticleDetailsPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleDetailsPage>;

const Template: ComponentStory<typeof ArticleDetailsPage> = (args) => <ArticleDetailsPage {...args} />;

const article: Article = {
    id: '1',
    title: 'Javascript news',
    subtitle: 'Что нового в JS за 2022 год?',
    img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
    views: 1022,
    createdAt: '26.02.2022',
    type: [ArticleType.IT],
    user: {
        id: '1',
        username: 'admin',
    },
    blocks: [
        {
            id: '1',
            type: ArticleBlockType.TEXT,
            title: 'Title of this block',
            paragraphs: [
                'The program traditionally called Hello, world! is very simple. It displays the phrase Hello, world! or something similar using a certain language.',
                'JavaScript is a language that can be used to run programs in different environments. In our case, we are talking about browsers and the Node.js server platform. If you have not written a single line of JS code yet and are reading this text in a browser on a desktop computer, it means that you are literally seconds away from your first JavaScript program.',
                'There are other ways to run JS code in a browser. For example, when it comes to the usual use of JavaScript programmes, they are loaded into the browser to ensure that web pages work properly. As a rule, the code is formatted as separate files with the .js extension, which are linked to web pages, but the programme code can also be included directly in the page code. All this is done using the <script> tag. When the browser detects such code, it executes it. Details about the script tag can be found on w3school.com. In particular, lets look at an example demonstrating how to work with a web page using JavaScript, provided on this resource. This example can be run using the tools provided on this resource (look for the Try it Yourself button), but we will do things a little differently. Specifically, we will create a new file in a text editor (for example, VS Code or Notepad++) and name it hello.html, then add the following code to it:',
            ],
        },
        {
            id: '4',
            type: ArticleBlockType.CODE,
            code: '<!DOCTYPE html>\n<html>\n  <body>\n    <p id="hello"></p>\n\n    <script>\n      document.getElementById("hello").innerHTML = "Hello, world!";\n    </script>\n  </body>\n</html>;',
        },
        {
            id: '5',
            type: ArticleBlockType.TEXT,
            title: 'Title of this block',
            paragraphs: [
                'The program traditionally called Hello, world! is very simple. It displays the phrase Hello, world! or something similar using a certain language.',
                'There are other ways to run JS code in a browser. For example, when it comes to the normal use of JavaScript programmes, they are loaded into the browser to ensure that web pages work properly. As a rule, the code is formatted as separate files with the .js extension, which are linked to web pages, but the programme code can also be included directly in the page code. All this is done using the <script> tag. When the browser detects such code, it executes it. Details about the script tag can be found on w3school.com. In particular, lets look at an example demonstrating how to work with a web page using JavaScript, provided on this resource. This example can be run using the tools provided on this resource (look for the Try it Yourself button), but we will do things a little differently. Specifically, we will create a new file in a text editor (for example, VS Code or Notepad++) and name it hello.html, then add the following code to it:',
            ],
        },
    ],
};

const articleRecommendation: Article[] = [
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

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [
    (Story) => {
        setFeatureFlags({ isArticleRatingEnabled: true });
        return <Story />;
    },
    StoreDecorator({
        articleDetails: {
            data: article,
        },
        user: {
            authData: {
                id: '1',
                username: 'admin',
                roles: [UserRole.ADMIN],
                features: {
                    isArticleRatingEnabled: true,
                },
                avatar: 'https://i.ibb.co/B52J0x4K/image.png',
            },
        },
    }),
];
Primary.parameters = {
    mockData: [
        {
            url: `${__API__}/articles?_limit=4&_expand=user`,
            method: 'GET',
            status: 200,
            response: articleRecommendation,
        },
        {
            url: `${__API__}/article-ratings?userId=1`,
            method: 'GET',
            status: 200,
            response: articleRatings,
        },
    ],
};
