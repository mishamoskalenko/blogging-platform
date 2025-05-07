import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ArticleTypeTabs } from 'entities/Article';

export default {
    title: 'entities/ArticleTypeTabs',
    component: ArticleTypeTabs,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleTypeTabs>;

const Template: ComponentStory<typeof ArticleTypeTabs> = (args) => <ArticleTypeTabs {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
