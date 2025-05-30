import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Rating } from './Rating';

export default {
    title: 'entities/Rating',
    component: Rating,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Rating>;

const Template: ComponentStory<typeof Rating> = (args) => <Rating {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    title: 'Do you like the article?',
    feedbackTitle: 'Leave a feedback please',
};
