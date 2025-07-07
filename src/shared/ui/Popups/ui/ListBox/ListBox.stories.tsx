import { StoryFn, Meta } from '@storybook/react';
import { ListBox } from './ListBox';
// eslint-disable-next-line eslint-path-plugin/layer-imports
import { Currency } from '@/entities/Currency';

export default {
    title: 'shared/ListBox',
    component: ListBox,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [
        (Story) => <div style={{ padding: 50 }}><Story /></div>,
    ],
} as Meta<typeof ListBox>;

const Template: StoryFn<typeof ListBox> = (args) => <ListBox {...args} />;

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
