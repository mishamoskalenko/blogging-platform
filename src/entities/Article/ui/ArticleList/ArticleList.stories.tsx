import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Article } from '../../model/types/article';
import { ArticleView } from '../../model/consts/articleConsts';
import { ArticleList } from './ArticleList';

export default {
    title: 'entities/ArticleList',
    component: ArticleList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleList>;

const Template: ComponentStory<typeof ArticleList> = (args) => <ArticleList {...args} />;

const article = {
    id: '1',
    title: 'Javascript news',
    subtitle: 'What`s new in JS for 2022?',
    img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
    views: 1022,
    createdAt: '21.04.2025',
    user: {
        id: '1',
        username: 'Andrew',
        avatar: 'https://cdn1.iconfinder.com/data/icons/user-pictures/100/male3-1024.png',
    },
    type: [
        'IT',
        'SCIENCE',
        'POLITICS',
        'ECONOMICS',
    ],
    blocks: [
        {
            id: '1',
            type: 'TEXT',
            title: 'The title of this block is',
            paragraphs: [
                'JavaScript is a language that can be executed in different environments. In our case, we`re talking about browsers and the Node.js server platform. If you haven`t written a single line of JS code so far and you`re reading this text in a browser, on a desktop computer, it means that you`re literally seconds away from your first JavaScript program.',
            ],
        },
        {
            id: '4',
            type: 'CODE',
            code: '<!DOCTYPE html>\n<html>\n  <body>\n    <p id="hello"></p>\n\n    <script>\n      document.getElementById("hello").innerHTML = "Hello, world!";\n    </script>\n  </body>\n</html>;',
        },
        {
            id: '5',
            type: 'TEXT',
            title: 'The title of this block is',
            paragraphs: [
                'The programme traditionally called ‘Hello, world!’ is very simple. It outputs somewhere the phrase ‘Hello, world!’, or another similar phrase, using some language.',
            ],
        },
        {
            id: '2',
            type: 'IMAGE',
            src: 'https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png',
            title: 'Figure 1 - screenshot of the site',
        },
        {
            id: '3',
            type: 'CODE',
            code: "const path = require('path');\n\nconst server = jsonServer.create();\n\nconst router = jsonServer.router(path.resolve(__dirname, 'db.json'));\n\nserver.use(jsonServer.defaults({}));\nserver.use(jsonServer.bodyParser);",
        },
        {
            id: '7',
            type: 'TEXT',
            title: 'The title of this block is',
            paragraphs: [
                'JavaScript is a language that can be executed in different environments. In our case, we`re talking about browsers and the Node.js server platform. If you haven`t written a single line of JS code so far and you`re reading this text in a browser, on a desktop computer, it means that you`re literally seconds away from your first JavaScript program.',
            ],
        },
        {
            id: '8',
            type: 'IMAGE',
            src: 'https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png',
            title: 'Figure 1 - screenshot of the site',
        },
        {
            id: '9',
            type: 'TEXT',
            title: 'The title of this block is',
            paragraphs: [
                'JavaScript is a language that can be executed in different environments. In our case, we`re talking about browsers and the Node.js server platform. If you haven`t written a single line of JS code so far and you`re reading this text in a browser, on a desktop computer, it means that you`re literally seconds away from your first JavaScript program.',
            ],
        },
    ],
} as Article;

export const PrimaryBig = Template.bind({});
PrimaryBig.args = {
    articles: new Array(9)
        .fill(0)
        .map((item, index) => ({
            ...article,
            id: String(index),
        })),
    isLoading: false,
    view: ArticleView.BIG,
};

export const PrimarySmall = Template.bind({});
PrimarySmall.args = {
    articles: new Array(9)
        .fill(0)
        .map((item, index) => ({
            ...article,
            id: String(index),
        })),
    isLoading: false,
    view: ArticleView.SMALL,
};

export const isLoadingBig = Template.bind({});
isLoadingBig.args = {
    articles: [],
    isLoading: true,
    view: ArticleView.BIG,
};

export const isLoadingSmall = Template.bind({});
isLoadingSmall.args = {
    articles: [],
    isLoading: true,
    view: ArticleView.SMALL,
};
