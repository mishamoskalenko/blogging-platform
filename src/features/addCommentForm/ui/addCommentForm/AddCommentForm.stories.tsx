import { ComponentStory, ComponentMeta } from '@storybook/react';
import { AddCommentForm } from 'features/addCommentForm';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';
import { action } from '@storybook/addon-actions';
import { Suspense } from 'react';

export default {
    title: 'features/AddCommentForm',
    component: AddCommentForm,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof AddCommentForm>;

const Template: ComponentStory<typeof AddCommentForm> = (args) => (
    <Suspense fallback={null}>
        <AddCommentForm {...args} />
    </Suspense>
);

export const Primary = Template.bind({});
Primary.args = {
    onSendComment: action('onSendComment'),
};
Primary.decorators = [
    StoreDecorator({}),
];
