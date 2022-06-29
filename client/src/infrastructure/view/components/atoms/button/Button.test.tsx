import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('Button component testing', () => {
  it('Should render a button with "Send" label', () => {
    render(<Button label={'Send'} />);
    const element = screen.getByText('Send');
    expect(element).toBeInTheDocument();
  });
});
