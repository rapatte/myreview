import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import { NavBar } from './NavBar';

export default {
  title: 'Components/organisms',
  component: NavBar,
} as unknown as ComponentMeta<typeof NavBar>;

export const menu: ComponentStory<typeof NavBar> = args => (
  <MemoryRouter>
    {' '}
    <NavBar {...args} />
  </MemoryRouter>
);
