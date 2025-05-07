import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ArticleSortSelector, ArticleViewSelector } from 'entities/Article';

export default {
    title: 'entities/ArticleViewSelector',
    component: ArticleSortSelector,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleViewSelector>;

const Template: ComponentStory<typeof ArticleViewSelector> = (args) => <ArticleViewSelector {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
