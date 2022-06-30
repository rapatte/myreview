import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CooperatorForm } from './CooperatorForm';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/organisms',
  component: CooperatorForm,
} as ComponentMeta<typeof CooperatorForm>;

export type FormProps = {
  title: string;
  className: string;
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  setTitle: (value: React.SetStateAction<string>) => void;
  setClient: (value: React.SetStateAction<string>) => void;
  setProfil: (value: React.SetStateAction<string>) => void;
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Cooperator_Form: ComponentStory<typeof CooperatorForm> = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [practice, setPractice] = useState('');
  const [m3, setM3] = useState('');
  const [mentor, setMentor] = useState('');

  const handleClick = e => {
    e.preventDefault();
    console.group('Data submitted');
    console.log('Prénom: ', firstName);
    console.log('Nom: ', lastName);
    console.log('Téléphone: ', phoneNumber);
    console.log('Email: ', email);
    console.log('Practice: ', practice);
    console.log('M3: ', m3);
    console.log('mentor: ', mentor);
    console.groupEnd();
  };

  return (
    <CooperatorForm
      setFormTitle="Ajouter un coopérateur"
      className="cooperator-form"
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
      handleClick={handleClick}
    />
  );
};
