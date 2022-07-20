import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { LabelTextarea } from './LabelTextarea';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/molecules',
  component: LabelTextarea,
} as ComponentMeta<typeof LabelTextarea>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const label_textarea: ComponentStory<typeof LabelTextarea> = args => (
  <LabelTextarea {...args} />
);

label_textarea.args = {
  label: 'Description',
};
