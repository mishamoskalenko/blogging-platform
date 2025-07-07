import { StoryFn, Meta } from '@storybook/react';
import { Flex } from './Flex';

export default {
    title: 'shared/Flex',
    component: Flex,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta<typeof Flex>;

const Template: StoryFn<typeof Flex> = (args) => <Flex {...args} />;

export const Row = Template.bind({});
Row.args = {
    children: (
        <>
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
        </>
    ),
    direction: 'row',
};

export const RowGap8 = Template.bind({});
RowGap8.args = {
    children: (
        <>
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
        </>
    ),
    direction: 'row',
    gap: '8',
};

export const RowGap16 = Template.bind({});
RowGap16.args = {
    children: (
        <>
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
        </>
    ),
    direction: 'row',
    gap: '16',
};

export const RowGap32 = Template.bind({});
RowGap32.args = {
    children: (
        <>
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
        </>
    ),
    direction: 'row',
    gap: '32',
};

export const Column = Template.bind({});
Column.args = {
    children: (
        <>
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
        </>
    ),
    direction: 'column',
};

export const ColumnGap8 = Template.bind({});
ColumnGap8.args = {
    children: (
        <>
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
        </>
    ),
    direction: 'column',
    gap: '8',
};

export const ColumnGap16 = Template.bind({});
ColumnGap16.args = {
    children: (
        <>
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
        </>
    ),
    direction: 'column',
    gap: '16',
};

export const ColumnGap32 = Template.bind({});
ColumnGap32.args = {
    children: (
        <>
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
        </>
    ),
    direction: 'column',
    gap: '32',
};
