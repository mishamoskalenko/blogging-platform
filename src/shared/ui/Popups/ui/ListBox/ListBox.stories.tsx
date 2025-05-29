import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Currency } from '@/entities/Currency';
import { Theme } from '@/app/providers/ThemeProvider';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { ListBox } from './ListBox';

export default {
    title: 'shared/ListBox',
    component: ListBox,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [
        (Story) => <div style={{ padding: 50 }}><Story /></div>,
    ],
} as ComponentMeta<typeof ListBox>;

const Template: ComponentStory<typeof ListBox> = (args) => <ListBox {...args} />;

const options = [
    { value: Currency.EUR, content: Currency.EUR },
    { value: Currency.USD, content: Currency.USD },
    { value: Currency.UAH, content: Currency.UAH },
];

export const BottomLeft = Template.bind({});
BottomLeft.args = {
    label: 'Enter currency',
    items: options,
    value: 'EUR',
    direction: 'bottom left',
};

export const BottomRight = Template.bind({});
BottomRight.args = {
    label: 'Enter currency',
    items: options,
    value: 'EUR',
    direction: 'bottom right',
};

export const TopLeft = Template.bind({});
TopLeft.args = {
    label: 'Enter currency',
    items: options,
    value: 'EUR',
    direction: 'top left',
};

export const TopRight = Template.bind({});
TopRight.args = {
    label: 'Enter currency',
    items: options,
    value: 'EUR',
    direction: 'top right',
};
