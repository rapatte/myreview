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
  const [values, setValues] = useState({});

  const handleClick = e => {
    e.preventDefault();
    console.group('Data submitted');
    console.log('Values: ', values);
    console.groupEnd();
  };

  return (
    <CooperatorForm
      title="Ajouter un coopérateur"
      values={values}
      setValues={setValues}
      handleClick={handleClick}
    />
  );
};
