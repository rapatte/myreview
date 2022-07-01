import * as React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from './Button';

describe('Button component testing', () => {
  it('Should render a button with "Send" label', () => {
    render(<Button label={'Send'} />);
    const element = screen.getByText('Send');
    expect(element).toBeInTheDocument();
  });

  it('Should click on the button', () => {
    const onClick = jest.fn(e => e.preventDefault());
    render(<Button label={'Send'} onClick={onClick} />);
    const button = screen.getByRole('button', { name: /Send/i });
    userEvent.click(button);
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
