import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import Menu from './NavBar';

export default {
  title: 'Components/organisms',
  component: Menu,
} as unknown as ComponentMeta<typeof Menu>;

export const menu: ComponentStory<typeof Menu> = args => (
  <MemoryRouter>
    {' '}
    <Menu {...args} />
  </MemoryRouter>
);
