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
  type: string;
};

export default function MissionForm({
  values,
  setValues,
  handleClick,
  title,
  type,
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
          {...(type === 'add' ? { value: values.title || '' } : {})}
          onChange={event => handleChange('title', event.target.value)}
          value={values.title || ''}
        />

        <LabelInput
          label={'Client'}
          type={'text'}
          {...(type === 'add' ? { value: values.client || '' } : {})}
          onChange={event => handleChange('client', event.target.value)}
          value={values.client || ''}
        />

        <LabelInput
          label={'Profile'}
          type={'text'}
          {...(type === 'add' ? { value: values.profile || '' } : {})}
          onChange={event => handleChange('profile', event.target.value)}
          value={values.profile || ''}
        />

        <LabelTextarea
          label={'Description'}
          {...(type === 'add' ? { value: values.description || '' } : {})}
          onChange={event => handleChange('description', event.target.value)}
          value={values.description || ''}
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
