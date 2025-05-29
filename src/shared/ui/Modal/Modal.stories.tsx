import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { Modal } from './Modal';

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pulvinar vehicula enim, a finibus nunc. Nam sit amet odio lacinia, ullamcorper diam in, fringilla erat.',
};

export const Dark = Template.bind({});
Dark.args = {
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pulvinar vehicula enim, a finibus nunc. Nam sit amet odio lacinia, ullamcorper diam in, fringilla erat.',
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
