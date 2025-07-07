import { StoryFn, Meta } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import { NotificationButton } from './NotificationButton';

export default {
    title: 'features/NotificationButton',
    component: NotificationButton,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [
        (Story) => (
            <div style={{
                padding: 50,
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
            }}
            >
                <Story />
            </div>
        ),
    ],
} as Meta<typeof NotificationButton>;

const Template: StoryFn<typeof NotificationButton> = (args) => <NotificationButton {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [StoreDecorator({})];
Normal.parameters = {
    mockData: [
        {
            url: `${__API__}/notifications`,
            method: 'GET',
            status: 200,
            response: [
                {
                    id: '1',
                    title: 'Notification 1',
                    description: 'You have received a new message',
                },
                {
                    id: '2',
                    title: 'Notification 2',
                    description: 'You have received a new message',
                },
                {
                    id: '3',
                    title: 'Notification 3',
                    description: 'You have received a new message',
                },
            ],
        },
    ],
};
