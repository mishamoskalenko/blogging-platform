import { StoryFn, Meta } from '@storybook/react';
import { RatingCard } from './RatingCard';

export default {
    title: 'entities/Rating',
    component: RatingCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta<typeof RatingCard>;

const Template: StoryFn<typeof RatingCard> = (args) => <RatingCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    title: 'Rate the article?',
    feedbackTitle: 'Leave a feedback please',
};

export const AfterReview = Template.bind({});
AfterReview.args = {
    title: 'Rate the article?',
    feedbackTitle: 'Leave a feedback please',
    rate: 3,
};
