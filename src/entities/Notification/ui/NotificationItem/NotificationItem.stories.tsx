import { StoryFn, Meta } from '@storybook/react';
import { NotificationItem } from './NotificationItem';

export default {
    title: 'entities/Notification/NotificationItem',
    component: NotificationItem,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta<typeof NotificationItem>;

const Template: StoryFn<typeof NotificationItem> = (args) => <NotificationItem {...args} />;

const data = {
    id: '1',
    title: 'Notification 1',
    description: 'You have received a new message',
};

export const Primary = Template.bind({});
Primary.args = {
    item: data,
};
