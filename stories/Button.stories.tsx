import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Button, ButtonProps } from '../src/components/Button';

const meta: Meta = {
  title: 'Atoms/Button',
  component: Button,
  argTypes: {
    label: {
      control: {
        type: 'text',
      },
    },
    onClick: { action: 'clicked' },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<ButtonProps> = args => <Button {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default: { args: ButtonProps } = Template.bind({});

Default.args = {
  label: 'Primary Call to Action',
  variant: false,
  small: false,
  disabled: true,
};
