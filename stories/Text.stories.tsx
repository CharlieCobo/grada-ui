import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Text, TextProps } from '../src/components/formElements';

const Person = (
  <svg
    width="46"
    height="46"
    fill="none"
    stroke="currentColor"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width="1.5"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M16.125 6.75c-.184 2.478-2.063 4.5-4.125 4.5-2.063 0-3.945-2.021-4.125-4.5-.188-2.578 1.64-4.5 4.125-4.5 2.484 0 4.312 1.969 4.125 4.5Z"></path>
    <path d="M12 14.25c-4.078 0-8.217 2.25-8.983 6.497-.092.512.197 1.003.733 1.003h16.5c.536 0 .826-.491.734-1.003C20.217 16.5 16.078 14.25 12 14.25Z"></path>
  </svg>
);

const meta: Meta = {
  title: 'Form Elements/Text',
  component: Text,
  argTypes: {
    label: {
      control: {
        type: 'text',
      },
    },
    onIconClick: { action: 'clicked' },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<TextProps> = args => <Text {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default: { args: TextProps } = Template.bind({});

Default.args = {
  label: 'Username',
  icon: Person,
  placeholder: 'Enter the username',
  helpText: 'Field Instructions go right here',
  isValid: true,
  touched: true,
};
