import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from '../../../Button/Button';
import { Popover } from './Popover';

export default {
    title: 'shared/Popover',
    component: Popover,
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
} as ComponentMeta<typeof Popover>;

const Template: ComponentStory<typeof Popover> = (args) => <Popover {...args} />;

export const PopoverBottomLeft = Template.bind({});
PopoverBottomLeft.args = {
    trigger: <Button>Open</Button>,
    children: '123',
    direction: 'bottom left',
};

export const PopoverBottomRight = Template.bind({});
PopoverBottomRight.args = {
    trigger: <Button>Open</Button>,
    children: '123',
    direction: 'bottom right',
};

export const PopoverTopLeft = Template.bind({});
PopoverTopLeft.args = {
    trigger: <Button>Open</Button>,
    children: '123',
    direction: 'top left',
};

export const PopoverTopRight = Template.bind({});
PopoverTopRight.args = {
    trigger: <Button>Open</Button>,
    children: '123',
    direction: 'top right',
};
