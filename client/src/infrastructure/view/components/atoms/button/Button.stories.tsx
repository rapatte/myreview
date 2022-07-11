import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import  {Button}  from './Button'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/atoms',
  component: Button,
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const button: ComponentStory<typeof Button> = args => (
  <Button {...args} />
);

button.args = {
  label: 'Envoyer',
};
