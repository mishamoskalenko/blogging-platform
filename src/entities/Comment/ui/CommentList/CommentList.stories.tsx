import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';
import { CommentList } from './CommentList';

export default {
    title: 'entities/CommentList',
    component: CommentList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CommentList>;

const Template: ComponentStory<typeof CommentList> = (args) => <CommentList {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    comments: [
        {
            id: '1',
            text: 'hi',
            user: { id: '1', username: 'Andrew' },
        },
        {
            id: '2',
            text: 'good',
            user: { id: '1', username: 'Smith' },
        },
    ],
};
Primary.decorators = [StoreDecorator({})];

export const isLoading = Template.bind({});
isLoading.args = {
    comments: [],
    isLoading: true,
};
Primary.decorators = [StoreDecorator({})];
