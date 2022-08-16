import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ReviewForm from './ReviewForm';

describe('Review form testing', () => {
  test('should render review form with his inputs ', () => {
    const handleClick = jest.fn(e => e.preventDefault());

    const values = {};
    const setValues = jest.fn();

    render(
      <ReviewForm
        type="add"
        values={values}
        setValues={setValues}
        handleClick={handleClick}
        title={'Add a review'}
      />,
    );
    const titleValue = screen.getByLabelText('Title :');
    const button = screen.getByText('Submit');

    expect(titleValue).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  test('should submit review form when the button is clicked ', () => {
    const handleClick = jest.fn(e => e.preventDefault());

    const values = {};
    const setValues = jest.fn();

    render(
      <ReviewForm
        type="add"
        title={'Add a review'}
        values={values}
        setValues={setValues}
        handleClick={handleClick}
      />,
    );
    const titleValue = screen.getByLabelText(/Titre/i);
    const button = screen.getByRole('button', { name: /Submit/i });

    userEvent.type(titleValue, 'Développeur full stack js');
    userEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
