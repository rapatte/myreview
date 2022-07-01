import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MissionForm } from './MissionForm';

describe('Mission form testing', () => {
  test('should render mission form with his inputs ', () => {
    const handleClick = jest.fn(e => e.preventDefault());

    const setTitle = jest.fn();
    const setClient = jest.fn();
    const setProfil = jest.fn();
    const title = '';
    const client = '';
    const profil = '';

    render(
      <MissionForm
        handleClick={handleClick}
        setTitle={setTitle}
        setClient={setClient}
        setProfil={setProfil}
        title={title}
        client={client}
        profil={profil}
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

    const setTitle = jest.fn();
    const setClient = jest.fn();
    const setProfil = jest.fn();
    const title = '';
    const client = '';
    const profil = '';

    render(
      <MissionForm
        handleClick={handleClick}
        setTitle={setTitle}
        setClient={setClient}
        setProfil={setProfil}
        title={title}
        client={client}
        profil={profil}
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
