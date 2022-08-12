import { Review } from 'domain/review/review';
import React from 'react';
import { Button, Title } from '../../../../components/atoms';
import {
  LabelTextarea,
  LabelInput,
} from 'infrastructure/view/components/molecules';

type Props = {
  title: string;
  values: Review;
  setValues: (value: React.SetStateAction<object>) => void;
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  type: string;
};

export default function ReviewForm({
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
      <form className={'review-form'}>
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
          {...(type === 'add' ? { value: values.poster || '' } : {})}
          onChange={event => handleChange('client', event.target.value)}
          value={values.poster || ''}
        />

        <LabelInput
          label={'Profile'}
          type={'text'}
          {...(type === 'add' ? { value: values.score || '' } : {})}
          onChange={event => handleChange('profile', event.target.value)}
          value={values.score || ''}
        />

        <LabelTextarea
          label={'Description'}
          {...(type === 'add' ? { value: values.synopsis || '' } : {})}
          onChange={event => handleChange('description', event.target.value)}
          value={values.synopsis || ''}
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
