import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { Input } from './Input';

describe('Input component testing', () => {
  it('Should render an atomic input', () => {
    render(<Input />);
    const input = screen.getByRole('textbox');
    expect(input).toBeInTheDocument();
  });

  it('Should change value of the input after a user inserted "Just a simple text"', () => {
    render(<Input />);
    const input = screen.getByRole('textbox');
    userEvent.type(input, 'Just a simple text');
    expect(input).toHaveValue('Just a simple text');
  });
});
