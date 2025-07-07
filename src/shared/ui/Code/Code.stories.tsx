import { StoryFn, Meta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Code } from './Code';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'shared/Code',
    component: Code,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta<typeof Code>;

const Template: StoryFn<typeof Code> = (args) => <Code {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    text: 'export const ArticleCodeBlockComponent = memo((props: ArticleCodeBlockComponentProps) => {\n'
        + '    const { className, block } = props;\n'
        + '    return (\n'
        + '        <div className={classNames(cls.ArticleCodeBlockComponent, {}, [className])}>\n'
        + '            ArticleCodeBlockComponent\n'
        + '        </div>\n'
        + '    );\n'
        + '});\n',
};

export const Dark = Template.bind({});
Dark.args = {
    text: 'export const ArticleCodeBlockComponent = memo((props: ArticleCodeBlockComponentProps) => {\n'
        + '    const { className, block } = props;\n'
        + '    return (\n'
        + '        <div className={classNames(cls.ArticleCodeBlockComponent, {}, [className])}>\n'
        + '            ArticleCodeBlockComponent\n'
        + '        </div>\n'
        + '    );\n'
        + '});\n',
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
