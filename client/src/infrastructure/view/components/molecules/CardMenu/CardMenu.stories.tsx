import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import CardMenu from './CardMenu';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'components/molecules',
  component: CardMenu,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof CardMenu>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const AtomicCardMenu: ComponentStory<typeof CardMenu> = args => (
  <CardMenu {...args} />
);
