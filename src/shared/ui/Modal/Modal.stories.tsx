import { StoryFn, Meta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Modal } from './Modal';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta<typeof Modal>;

const Template: StoryFn<typeof Modal> = (args) => (
    <div style={{ height: '100vh' }}>
        <Modal {...args} />
    </div>
);

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
