import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Option from './Option';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'components/atoms',
  component: Option,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Option>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const option: ComponentStory<typeof Option> = args => (
  <Option {...args} />
);
