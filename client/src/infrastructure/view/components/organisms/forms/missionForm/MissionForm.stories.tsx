import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ReviewForm from './MissionForm';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/organisms',
  component: ReviewForm,
} as ComponentMeta<typeof ReviewForm>;

export type FormProps = {
  title: string;
  className: string;
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  setTitle: (value: React.SetStateAction<string>) => void;
  setClient: (value: React.SetStateAction<string>) => void;
  setProfil: (value: React.SetStateAction<string>) => void;
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Mission_Form: ComponentStory<typeof ReviewForm> = () => {
  const [values, setValues] = useState({});

  const handleClick = e => {
    e.preventDefault();
    console.group('Data submitted');
    console.log('values: ', values);

    console.groupEnd();
  };

  return (
    <ReviewForm
      type="add"
      title={'Ajouter une mission'}
      values={values}
      setValues={setValues}
      handleClick={handleClick}
    />
  );
};
