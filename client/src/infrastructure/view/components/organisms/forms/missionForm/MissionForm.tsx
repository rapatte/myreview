import { Mission } from 'domain/mission/mission';
import React from 'react';
import { Button, Title } from '../../../../components/atoms';
import {
  LabelTextarea,
  LabelInput,
} from 'infrastructure/view/components/molecules';

type Props = {
  title: string;
  values: Mission;
  setValues: (value: React.SetStateAction<object>) => void;
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export default function MissionForm({
  values,
  setValues,
  handleClick,
  title,
}: Props) {
  const handleChange = (id, value) => {
    setValues({ ...values, [id]: value });
  };

  return (
    <>
      <form className={'mission-form'}>
        <Title label={title} format="h2"></Title>

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
          value={values.profile || ''}
          onChange={event => handleChange('profile', event.target.value)}
          placeholder={''}
        />

        <LabelTextarea
          label={'Description'}
          value={values.description || ''}
          onChange={event => handleChange('description', event.target.value)}
          placeholder={''}
        />

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
}
