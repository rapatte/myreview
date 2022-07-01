import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { LabelInput } from './LabelInput';

describe('LabelInput component testing', () => {
  it('Should render an atomic input', () => {
    const setValue = jest.fn();

    render(<LabelInput label={'Email'} type={'text'} onChange={setValue} />);

    const labelInput = screen.getByLabelText(/Email/i);

    expect(labelInput).toBeInTheDocument();
  });

  it('Should change value of the input after a user inserted his email "user@gmail.com"', () => {
    const setValue = jest.fn();

    render(<LabelInput label={'Email'} type={'text'} onChange={setValue} />);

    const labelInput = screen.getByLabelText(/Email/i);

    userEvent.type(labelInput, 'user@gmail.com');

    expect(labelInput).toHaveValue('user@gmail.com');
  });
});
