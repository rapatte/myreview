import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MissionForm } from './MissionForm';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/organisms',
  component: MissionForm,
} as ComponentMeta<typeof MissionForm>;

export type FormProps = {
  title: string;
  className: string;
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  setTitle: (value: React.SetStateAction<string>) => void;
  setClient: (value: React.SetStateAction<string>) => void;
  setProfil: (value: React.SetStateAction<string>) => void;
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Mission_Form: ComponentStory<typeof MissionForm> = () => {
  const [title, setTitle] = useState('');
  const [client, setClient] = useState('');
  const [profil, setProfil] = useState('');

  const handleClick = e => {
    e.preventDefault();
    console.group('Data submitted');
    console.log('title: ', title);
    console.log('client: ', client);
    console.log('profil: ', profil);
    console.groupEnd();
  };

  return (
    <MissionForm
      setFormTitle="Ajouter une mission"
      className="mission-form"
      setTitle={setTitle}
      setClient={setClient}
      setProfil={setProfil}
      title={title}
      client={client}
      profil={profil}
      handleClick={handleClick}
    />
  );
};
