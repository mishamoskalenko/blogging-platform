import { ComponentStory, ComponentMeta } from '@storybook/react';
import AvatarImg from '@/shared/assets/tests/storybook.png';
import { Avatar } from './Avatar';

export default {
    title: 'shared/Avatar',
    component: Avatar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    alt: 'avatar',
    size: 150,
    src: AvatarImg,
};

export const Small = Template.bind({});
Small.args = {
    alt: 'avatar',
    size: 50,
    src: AvatarImg,
};
