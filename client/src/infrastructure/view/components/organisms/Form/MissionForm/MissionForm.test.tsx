import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MissionForm } from './MissionForm';

describe('Mission form testing', () => {
  test('should render mission form with his inputs ', () => {
    const handleClick = jest.fn(e => e.preventDefault());

    const values = {};
    const setValues = jest.fn();

    render(
      <MissionForm
        values={values}
        setValues={setValues}
        handleClick={handleClick}
        title={'Ajouter une mission'}
      />,
    );
    const titleValue = screen.getByLabelText('Titre:');
    const clientValue = screen.getByLabelText('Client:');
    const profilValue = screen.getByLabelText('Profile:');
    const button = screen.getByText('Envoyer');

    expect(titleValue).toBeInTheDocument();
    expect(clientValue).toBeInTheDocument();
    expect(profilValue).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  test('should submit mission form when the button is clicked ', () => {
    const handleClick = jest.fn(e => e.preventDefault());

    const values = {};
    const setValues = jest.fn();

    render(
      <MissionForm
        title={'Ajouter une mission'}
        values={values}
        setValues={setValues}
        handleClick={handleClick}
      />,
    );
    const titleValue = screen.getByLabelText(/Titre/i);
    const clientValue = screen.getByLabelText(/Client/i);
    const profilValue = screen.getByLabelText(/Profile/i);
    const button = screen.getByRole('button', { name: /Envoyer/i });

    userEvent.type(titleValue, 'Développeur full stack js');
    userEvent.type(clientValue, 'Décathlon');
    userEvent.type(profilValue, 'Full stack js');
    userEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
