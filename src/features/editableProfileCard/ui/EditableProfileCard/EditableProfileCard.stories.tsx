import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { EditableProfileCard } from './EditableProfileCard';

export default {
    title: 'features/EditableProfileCard',
    component: EditableProfileCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof EditableProfileCard>;

const Template: ComponentStory<typeof EditableProfileCard> = (args) => <EditableProfileCard {...args} />;

const data = {
    id: '2',
    first: 'John',
    lastname: 'Smith',
    age: 35,
    currency: Currency.USD,
    country: Country.Ukraine,
    city: 'Kyiv',
    username: 'user19815',
    avatar: 'https://cdn1.iconfinder.com/data/icons/user-pictures/100/male3-1024.png',
};

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [StoreDecorator({
    profile: {
        data,
        form: data,
        readonly: false,
    },
})];

export const Readonly = Template.bind({});
Readonly.args = {};
Readonly.decorators = [StoreDecorator({
    profile: {
        data,
        form: data,
        readonly: true,
    },
})];
