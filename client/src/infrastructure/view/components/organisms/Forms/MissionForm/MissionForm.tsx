import { Button } from 'infrastructure/view/components/atoms/button/Button';
import React from 'react';
import { LabelInput } from '../../../molecules/labelInput/LabelInput';

type Props = {
  title: string;
  values: { [id: string]: string };
  setValues: (value: React.SetStateAction<object>) => void;
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export const MissionForm = ({
  values,
  setValues,
  handleClick,
  title,
}: Props) => {
  const handleChange = (id, value) => {
    setValues({ ...values, [id]: value });
  };

  return (
    <>
      <form className={'mission-form'}>
        <h2>{title}</h2>

        <LabelInput
          label={'Titre'}
          type={'text'}
          value={values.title || ''}
          onChange={event => handleChange('title', event.target.value)}
          placeholder={''}
        />

        <LabelInput
          label={'Client'}
          type={'text'}
          value={values.client || ''}
          onChange={event => handleChange('client', event.target.value)}
          placeholder={''}
        />

        <LabelInput
          label={'Profile'}
          type={'text'}
          value={values.profil || ''}
          onChange={event => handleChange('profil', event.target.value)}
          placeholder={''}
        />

        <textarea name="" id=""></textarea>

        <Button
          label={'Envoyer'}
          className={'active-btn width-btn'}
          id={'sendedForm'}
          type={'submit'}
          onClick={event => handleClick(event)}
        />
      </form>
    </>
  );
};
