import { Cooperator } from 'domain/cooperator/cooperator';
import React from 'react';
import { LabelInput } from 'infrastructure/view/components/molecules';
import { Button, Title } from '../../../../components/atoms';

type Props = {
  title: string;
  values: Cooperator;
  setValues: (value: React.SetStateAction<object>) => void;
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  type: string;
};

export const CooperatorForm = ({
  values,
  setValues,
  handleClick,
  title,
  type,
}: Props) => {
  const handleChange = (id, value) => {
    setValues({ ...values, [id]: value });
  };

  return (
    <>
      <form className={'cooperator-form'}>
        <Title format="h2" label={title} />

        <div className={'cooperator-form-input-container'}>
          <LabelInput
            label={'Prénom'}
            type={'text'}
            {...(type === 'add' ? { value: values.firstName || '' } : {})}
            onChange={event => handleChange('firstName', event.target.value)}
            placeholder={values.firstName || ''}
          />

          <LabelInput
            label={'Nom'}
            type={'text'}
            {...(type === 'add' ? { value: values.lastName || '' } : {})}
            onChange={event => handleChange('lastName', event.target.value)}
            placeholder={values.lastName || ''}
          />

          <LabelInput
            label={'Téléphone'}
            type={'text'}
            {...(type === 'add' ? { value: values.phoneNumber || '' } : {})}
            onChange={event => handleChange('phoneNumber', event.target.value)}
            placeholder={values.phoneNumber || ''}
          />
          <LabelInput
            label={'Email'}
            type={'text'}
            {...(type === 'add' ? { value: values.email || '' } : {})}
            onChange={event => handleChange('email', event.target.value)}
            placeholder={values.email || ''}
          />
          <LabelInput
            label={'Practice'}
            type={'text'}
            {...(type === 'add' ? { value: values.practice || '' } : {})}
            onChange={event => handleChange('practice', event.target.value)}
            placeholder={values.practice || ''}
          />
          <LabelInput
            label={'M3'}
            type={'text'}
            {...(type === 'add' ? { value: values.m3 || '' } : {})}
            onChange={event => handleChange('m3', event.target.value)}
            placeholder={values.m3 || ''}
          />

          <LabelInput
            label={'Mentor'}
            type={'text'}
            {...(type === 'add' ? { value: values.mentor || '' } : {})}
            onChange={event => handleChange('mentor', event.target.value)}
            placeholder={values.mentor || ''}
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
