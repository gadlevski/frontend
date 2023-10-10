import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from '@/app/providers/ThemeProvider';
import { themeDecorator } from '@/shared/config/storybook/themeDecorator';
import { Code } from './Code';

const meta = {
  title: 'shared/Code',
  component: Code,

} satisfies Meta<typeof Code>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {
    text: 'export default {\n'
      + '    title: \'shared/Code\',\n'
      + '    component: Code,\n'
      + '    argTypes: {\n'
      + '        backgroundColor: { control: \'color\' },\n'
      + '    },\n'
      + '} as ComponentMeta<typeof Code>;\n'
      + '\n'
      + 'const Template: ComponentStory<typeof Code> = (args) => <Code {...args} />;\n'
      + '\n'
      + 'export const Normal = Template.bind({});',
  },
  decorators: [themeDecorator(Theme.LIGHT)],
};

export const Dark: Story = {
  args: {
    text: 'export default {\n'
      + '    title: \'shared/Code\',\n'
      + '    component: Code,\n'
      + '    argTypes: {\n'
      + '        backgroundColor: { control: \'color\' },\n'
      + '    },\n'
      + '} as ComponentMeta<typeof Code>;\n'
      + '\n'
      + 'const Template: ComponentStory<typeof Code> = (args) => <Code {...args} />;\n'
      + '\n'
      + 'export const Normal = Template.bind({});',
  },
  decorators: [themeDecorator(Theme.DARK)],
};

