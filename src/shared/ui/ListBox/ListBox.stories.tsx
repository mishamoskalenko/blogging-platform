import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Currency } from 'entities/Currency';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { ListBox } from './ListBox';

export default {
    title: 'shared/ListBox',
    component: ListBox,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ListBox>;

const Template: ComponentStory<typeof ListBox> = (args) => <ListBox {...args} />;

const options = [
    { value: Currency.EUR, content: Currency.EUR },
    { value: Currency.USD, content: Currency.USD },
    { value: Currency.UAH, content: Currency.UAH },
];

export const Light = Template.bind({});
Light.args = {
    label: 'Enter currency',
    items: options,
    value: 'EUR',
    direction: 'bottom',
};

export const TopDirection = Template.bind({});
TopDirection.args = {
    label: 'Enter currency',
    items: options,
    value: 'EUR',
    direction: 'top',
};

export const Readonly = Template.bind({});
Readonly.args = {
    label: 'Enter currency',
    items: options,
    value: 'EUR',
    direction: 'top',
    readonly: true,
};
