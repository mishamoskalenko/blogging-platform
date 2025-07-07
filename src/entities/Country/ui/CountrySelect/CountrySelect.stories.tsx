import { StoryFn, Meta } from '@storybook/react';
import { CountrySelect } from './CountrySelect';
import { Country } from '../../model/types/country';

export default {
    title: 'entities/CountrySelect',
    component: CountrySelect,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta<typeof CountrySelect>;

const Template: StoryFn<typeof CountrySelect> = (args) => <CountrySelect {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    value: Country.France,
};
