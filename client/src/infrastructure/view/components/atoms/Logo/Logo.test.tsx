import React from 'react';
import { render, screen } from '@testing-library/react';
import { Logo } from './Logo';

describe('Logo', () => {
  test('Logo must have src = "/logo.svg" and alt = "Logo"', () => {
    render(<Logo />);
    const logo = screen.getByRole('img');
    expect(logo).toHaveAttribute('src', '/logo-wemanity.png');
    expect(logo).toHaveAttribute('alt', 'wemanity');
  });
});
