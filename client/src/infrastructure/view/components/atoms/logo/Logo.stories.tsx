import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Logo } from './Logo';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/atoms',
  component: Logo,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} as ComponentMeta<typeof Logo>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const logo: ComponentStory<typeof Logo> = args => <Logo {...args} />;
