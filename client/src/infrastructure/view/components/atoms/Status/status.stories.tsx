import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Status from './Status';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'components/atoms',
  component: Status,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Status>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const status: ComponentStory<typeof Status> = args => (
  <Status {...args} />
);
