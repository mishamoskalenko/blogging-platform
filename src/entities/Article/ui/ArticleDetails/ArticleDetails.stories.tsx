import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Article, ArticleDetails } from 'entities/Article';
import { ArticleBlockType, ArticleType } from 'entities/Article/model/types/article';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';

export default {
    title: 'entities/ArticleDetails',
    component: ArticleDetails,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleDetails>;

const Template: ComponentStory<typeof ArticleDetails> = (args) => <ArticleDetails {...args} />;

const article: Article = {
    id: '1',
    title: 'Javascript news',
    subtitle: 'Что нового в JS за 2022 год?',
    img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
    views: 1022,
    createdAt: '26.02.2022',
    type: [ArticleType.IT],
    blocks: [
        {
            id: '1',
            type: ArticleBlockType.TEXT,
            title: 'ЗThe title of this block',
            paragraphs: [
                "The program that is traditionally called 'Hello, world!' is very simple. It outputs the phrase 'Hello, world!' somewhere, or something similar, using some language.",
                'JavaScript is a language that can be run in different environments. In our case, we are talking about browsers and the Node.js server platform. If you have not written a single line of JS code yet and are reading this text in a browser, on a desktop computer, this means that you are literally seconds away from your first JavaScript program.',
                "There are other ways to run JS code in a browser. So, if we talk about the usual use of JavaScript programs, they are loaded into the browser to ensure the operation of web pages. As a rule, the code is formatted as separate files with the .js extension, which are included in web pages, but the program code can also be included directly in the page code. All this is done using the <script> tag. When the browser detects such code, it executes it. You can find more details about the script tag on w3school.com. In particular, let's look at an example that demonstrates working with a web page using JavaScript, provided on this resource. This example can also be run using this resource (look for the Try it Yourself button), but we will do it a little differently. Namely, we will create a new file in some text editor (for example, in VS Code or Notepad++), which we will call hello.html, and add the following code to it:",
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
            title: 'The title of this block',
            paragraphs: [
                "The program that is traditionally called 'Hello, world!' is very simple. It outputs the phrase 'Hello, world!' somewhere, or something similar, using some language.",
                "There are other ways to run JS code in a browser. So, if we talk about the usual use of JavaScript programs, they are loaded into the browser to ensure the operation of web pages. As a rule, the code is formatted as separate files with the .js extension, which are connected to web pages, but the program code can also be included directly in the page code. All this is done using the <script> tag. When the browser detects such code, it executes it. Details about the script tag can be found on the w3school.com website. In particular, let's look at an example demonstrating working with a web page using JavaScript, given on this resource. This example can also be run using this resource (look for the Try it Yourself button), but we will do it a little differently. Namely, we will create a text editor (for example, in VS Code or in Notepad++) a new file, which we will call hello.html, and add the following code to it:",
            ],
        },
    ],
};

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [StoreDecorator({
    articleDetails: {
        data: article,
    },
})];

export const Loading = Template.bind({});
Loading.args = {};
Loading.decorators = [StoreDecorator({
    articleDetails: {
        isLoading: true,
    },
})];

export const Error = Template.bind({});
Error.args = {};
Error.decorators = [StoreDecorator({
    articleDetails: {
        error: 'true',
    },
})];
