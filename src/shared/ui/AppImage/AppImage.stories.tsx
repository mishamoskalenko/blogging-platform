import { StoryFn, Meta } from '@storybook/react';
import { AppImage } from './AppImage';
import { Icon } from '../Icon/Icon';
import { Skeleton } from '../Skeleton';
import userIcon from '../../assets/icons/user-filled.svg';

export default {
    title: 'shared/AppImage',
    component: AppImage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        to: '/',
    },
} as Meta<typeof AppImage>;

const Template: StoryFn<typeof AppImage> = (args) => <AppImage {...args} />;

const avatarImage = 'https://i.ibb.co/B52J0x4K/image.png';

const fallback = <Skeleton width="100px" height="100px" border="50%" />;
const errorFallback = <Icon Svg={userIcon} width="200px" height="200px" />;

export const Primary = Template.bind({});
Primary.args = {
    src: avatarImage,
    alt: 'avatar',
    fallback,
    errorFallBack: errorFallback,
    width: '100px',
    height: '100px',
};
Primary.parameters = {
    loki: { skip: true },
};

export const ErrorFallback = Template.bind({});
ErrorFallback.args = {
    alt: 'avatar',
    fallback,
    errorFallBack: errorFallback,
};
