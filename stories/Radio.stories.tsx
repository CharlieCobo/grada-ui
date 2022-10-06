import React from 'react';
import { Meta, Story } from '@storybook/react';
import {
  Radio,
  RadioProps,
  RadioGroup as RadioGroupComponent,
  RadioGroupProps,
} from '../src/components/formElements';

const meta: Meta = {
  title: 'Form Elements/Radio Buttons',
  component: RadioGroupComponent,
  argTypes: {},
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<RadioProps> = args => <Radio {...args} />;
const TemplateRadioGroup: Story<RadioGroupProps> = args => (
  <RadioGroupComponent {...args} />
);

export const Single: { args: RadioProps } = Template.bind({});
export const Group: { args: RadioGroupProps } = TemplateRadioGroup.bind({});

Single.args = {
  label: 'Im a single Radio',
  id: 'test',
  name: 'test',
  checked: true,
};

Group.args = {
  label: 'Select one',
  radioOpts: [
    {
      id: 'first',
      label: 'First Radio',
      name: 'test',
    },
    {
      id: 'second',
      label: 'Secondary Radio',
      name: 'test',
    },
    {
      id: 'tertiary',
      label: 'Tertiary Radio',
      name: 'test',
    },
  ],
};
