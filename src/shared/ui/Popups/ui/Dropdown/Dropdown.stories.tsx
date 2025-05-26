import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Dropdown } from './Dropdown';
import { Button } from '../../../Button/Button';

export default {
    title: 'shared/Dropdown',
    component: Dropdown,
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
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => <Dropdown {...args} />;

export const DropdownBottomLeft = Template.bind({});
DropdownBottomLeft.args = {
    trigger: <Button>Open</Button>,
    items: [
        { content: '123' },
        { content: '456' },
        { content: '789' },
    ],
    direction: 'bottom left',
};

export const DropdownBottomRight = Template.bind({});
DropdownBottomRight.args = {
    trigger: <Button>Open</Button>,
    items: [
        { content: '123' },
        { content: '456' },
        { content: '789' },
    ],
    direction: 'bottom right',
};

export const DropdownTopLeft = Template.bind({});
DropdownTopLeft.args = {
    trigger: <Button>Open</Button>,
    items: [
        { content: '123' },
        { content: '456' },
        { content: '789' },
    ],
    direction: 'top left',
};

export const DropdownTopRight = Template.bind({});
DropdownTopRight.args = {
    trigger: <Button>Open</Button>,
    items: [
        { content: '123' },
        { content: '456' },
        { content: '789' },
    ],
    direction: 'top right',
};
