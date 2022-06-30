import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { CooperatorForm } from './CooperatorForm';

describe('Cooperator form testing', () => {
  test('should render form with his inputs', () => {
    const handleClick = jest.fn(e => e.preventDefault());
    const setFirstName = jest.fn();
    const setLastName = jest.fn();
    const setPhoneNumber = jest.fn();
    const setEmail = jest.fn();
    const setPractice = jest.fn();
    const setM3 = jest.fn();
    const setMentor = jest.fn();
    const firstName = '';
    const lastName = '';
    const phoneNumber = '';
    const email = '';
    const practice = '';
    const m3 = '';
    const mentor = '';

    render(
      <CooperatorForm
        handleClick={handleClick}
        setFirstName={setFirstName}
        setLastName={setLastName}
        setPhoneNumber={setPhoneNumber}
        setEmail={setEmail}
        setPractice={setPractice}
        setM3={setM3}
        setMentor={setMentor}
        firstName={firstName}
        lastName={lastName}
        phoneNumber={phoneNumber}
        email={email}
        practice={practice}
        m3={m3}
        mentor={mentor}
      />,
    );
    const firstNameValue = screen.getByLabelText('Prénom:');
    const lastNameValue = screen.getByLabelText('Nom:');
    const phoneNumberValue = screen.getByLabelText('Téléphone:');
    const emailValue = screen.getByLabelText('Email:');
    const practiceValue = screen.getByLabelText('Practice:');
    const m3Value = screen.getByLabelText('M3:');
    const mentorValue = screen.getByLabelText('Mentor:');
    const button = screen.getByText('Envoyer');

    expect(firstNameValue).toBeInTheDocument();
    expect(lastNameValue).toBeInTheDocument();
    expect(phoneNumberValue).toBeInTheDocument();
    expect(emailValue).toBeInTheDocument();
    expect(practiceValue).toBeInTheDocument();
    expect(m3Value).toBeInTheDocument();
    expect(mentorValue).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  test('should submit form when the user click on the button', () => {
    const handleClick = jest.fn(e => e.preventDefault());
    const setFirstName = jest.fn();
    const setLastName = jest.fn();
    const setPhoneNumber = jest.fn();
    const setEmail = jest.fn();
    const setPractice = jest.fn();
    const setM3 = jest.fn();
    const setMentor = jest.fn();
    const firstName = '';
    const lastName = '';
    const phoneNumber = '';
    const email = '';
    const practice = '';
    const m3 = '';
    const mentor = '';

    render(
      <CooperatorForm
        handleClick={handleClick}
        setFirstName={setFirstName}
        setLastName={setLastName}
        setPhoneNumber={setPhoneNumber}
        setEmail={setEmail}
        setPractice={setPractice}
        setM3={setM3}
        setMentor={setMentor}
        firstName={firstName}
        lastName={lastName}
        phoneNumber={phoneNumber}
        email={email}
        practice={practice}
        m3={m3}
        mentor={mentor}
      />,
    );
    const firstNameValue = screen.getByLabelText('Prénom:');
    const lastNameValue = screen.getByLabelText('Nom:');
    const phoneNumberValue = screen.getByLabelText('Téléphone:');
    const emailValue = screen.getByLabelText('Email:');
    const practiceValue = screen.getByLabelText('Practice:');
    const m3Value = screen.getByLabelText('M3:');
    const mentorValue = screen.getByLabelText('Mentor:');
    const button = screen.getByText('Envoyer');

    userEvent.type(firstNameValue, 'Jean');
    userEvent.type(lastNameValue, 'Bon');
    userEvent.type(phoneNumberValue, '0000000000');
    userEvent.type(emailValue, 'jbon@gmail.com');
    userEvent.type(practiceValue, 'Tech');
    userEvent.type(m3Value, 'Orelsan');
    userEvent.type(mentorValue, 'Sangoku');
    userEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
