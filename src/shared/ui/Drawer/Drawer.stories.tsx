import { StoryFn, Meta } from '@storybook/react';
import { Drawer } from './Drawer';
import { Text } from '../Text/Text';
import { AnimationProvider } from '@/shared/lib/components/AnimationProvider/AnimationProvider';

export default {
    title: 'shared/Drawer',
    component: Drawer,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [
        (Story) => (
            <AnimationProvider>
                <Story />
            </AnimationProvider>
        ),
    ],
} as Meta<typeof Drawer>;

const Template: StoryFn<typeof Drawer> = (args) => <Drawer {...args} />;

const content = (
    <div>
        <Text title="1" />
        <Text title="2" />
        <Text title="3" />
    </div>
);

export const Primary = Template.bind({});
Primary.args = {
    children: content,
    isOpen: true,
};
Primary.parameters = {
    loki: { skip: true },
};
