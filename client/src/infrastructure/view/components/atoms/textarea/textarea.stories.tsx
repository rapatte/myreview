import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Textarea } from './Textarea';

export default {
  title: 'Components/atoms',
  component: Textarea,
} as ComponentMeta<typeof Textarea>;

export const textarea: ComponentStory<typeof Textarea> = args => (
  <Textarea {...args} />
);
