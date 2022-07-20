import { Cooperator } from 'domain/cooperator/cooperator';
import React from 'react';
import { LabelInput } from 'infrastructure/view/components/molecules';
import { Button } from '../../../../components/atoms';

type Props = {
  title: string;
  values: Cooperator;
  setValues: (value: React.SetStateAction<object>) => void;
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export const CooperatorForm = ({
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
      <form className={'cooperator-form'}>
        <h2>{title}</h2>

        <div className={'cooperator-form-input-container'}>
          <LabelInput
            label={'Prénom'}
            type={'text'}
            value={values.firstName || ''}
            onChange={event => handleChange('firstName', event.target.value)}
            placeholder={''}
          />

          <LabelInput
            label={'Nom'}
            type={'text'}
            value={values.lastName || ''}
            onChange={event => handleChange('lastName', event.target.value)}
            placeholder={''}
          />

          <LabelInput
            label={'Téléphone'}
            type={'text'}
            value={values.phoneNumber || ''}
            onChange={event => handleChange('phoneNumber', event.target.value)}
            placeholder={''}
          />
          <LabelInput
            label={'Email'}
            type={'text'}
            value={values.email || ''}
            onChange={event => handleChange('email', event.target.value)}
            placeholder={''}
          />
          <LabelInput
            label={'Practice'}
            type={'text'}
            value={values.practice || ''}
            onChange={event => handleChange('practice', event.target.value)}
            placeholder={''}
          />
          <LabelInput
            label={'M3'}
            type={'text'}
            value={values.m3 || ''}
            onChange={event => handleChange('m3', event.target.value)}
            placeholder={''}
          />

          <LabelInput
            label={'Mentor'}
            type={'text'}
            value={values.mentor || ''}
            onChange={event => handleChange('mentor', event.target.value)}
            placeholder={''}
          />
        </div>

        <Button
          label={'Envoyer'}
          // className={'active-btn width-btn'}
          id={'sendedForm'}
          type={'submit'}
          onClick={event => handleClick(event)}
        />
      </form>
    </>
  );
};
