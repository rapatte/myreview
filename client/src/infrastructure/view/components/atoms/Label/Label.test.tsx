import { render, screen } from '@testing-library/react';
import React from 'react';
import { Label } from './Label';

describe('Label component testing', () => {
  it('Should render a label with "Email" label', () => {
    render(<Label label={'Email'} />);
    const label = screen.getByText(/Email/i);
    expect(label).toBeInTheDocument();
  });
});
