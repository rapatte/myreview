import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Label } from './Label';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/atoms',
  component: Label,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} as ComponentMeta<typeof Label>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const label: ComponentStory<typeof Label> = args => <Label {...args} />;

label.args = {
  label: 'Email',
};
