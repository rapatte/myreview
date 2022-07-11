import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Title } from './Title';

export default {
  title: 'Components/atoms',
  component: Title,
} as unknown as ComponentMeta<typeof Title>;

export const title: ComponentStory<typeof Title> = args => <Title {...args} />;
title.args = {
  label: 'test',
  format: 'h1',
};
