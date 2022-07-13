import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { LabelInput } from './LabelInput';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/molecules',
  component: LabelInput,
} as ComponentMeta<typeof LabelInput>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const label_input: ComponentStory<typeof LabelInput> = args => (
  <LabelInput {...args} />
);

label_input.args = {
  label: 'Email',
};
