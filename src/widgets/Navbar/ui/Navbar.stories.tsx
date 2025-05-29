import { ComponentStory, ComponentMeta } from '@storybook/react';
import withMock from 'storybook-addon-mock';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import { Navbar } from './Navbar';

export default {
    title: 'widgets/Navbar',
    component: Navbar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [withMock],
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

const notifications = [
    {
        id: '1',
        title: 'Notification 1',
        description: 'There was an event',
        userId: '1',
    },
    {
        id: '2',
        title: 'Notification 2',
        description: 'There was an event',
        userId: '1',
        href: 'http://localhost:3000/admin',
    },
    {
        id: '3',
        title: 'Notification 3',
        description: 'There was an event',
        userId: '1',
        href: 'http://localhost:3000/admin',
    },
];

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [StoreDecorator({})];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];

export const AuthNavbar = Template.bind({});
AuthNavbar.args = {};
AuthNavbar.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
    user: { authData: {} },
})];
AuthNavbar.parameters = {
    mockData: [
        {
            url: `${__API__}/notifications`,
            method: 'GET',
            status: 200,
            response: notifications,
        },
    ],
};
