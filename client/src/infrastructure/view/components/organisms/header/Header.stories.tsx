import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Header } from './Header';
import { MemoryRouter, withRouter } from 'react-router-dom';
import { StoryRouter } from 'storybook-react-router';

export default {
  title: 'Components/organisms',
  component: Header,
} as unknown as ComponentMeta<typeof Header>;

export const header: ComponentStory<typeof Header> = args => (
  <MemoryRouter>
    {' '}
    <Header {...args} />
  </MemoryRouter>
);
