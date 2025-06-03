import { ComponentMeta, ComponentStory } from '@storybook/react';
import { UserRole } from '@/entities/User';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import { AvatarDropdown } from './AvatarDropdown';

export default {
    title: 'features/AvatarDropdown',
    component: AvatarDropdown,
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
} as ComponentMeta<typeof AvatarDropdown>;

const Template: ComponentStory<typeof AvatarDropdown> = (args) => <AvatarDropdown {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [StoreDecorator({
    user: {
        authData: {
            id: '1',
            username: 'Admin',
            avatar: 'https://i.ibb.co/B52J0x4K/image.png',
            roles: [UserRole.ADMIN],
        },
    },
})];
Normal.parameters = {
    loki: { skip: true },
};
