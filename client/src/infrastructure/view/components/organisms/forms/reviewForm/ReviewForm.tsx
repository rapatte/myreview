import { Review } from 'domain/review/review';
import React from 'react';
import { Button, Title } from '../../../atoms';
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
          label={'Title'}
          type={'text'}
          {...(type === 'add' ? { value: values.title || '' } : {})}
          onChange={event => handleChange('title', event.target.value)}
          value={(values && values.title) || ''}
        />

        <LabelInput
          label={'Score'}
          type={'text'}
          {...(type === 'add' ? { value: values.score || '' } : {})}
          onChange={event => handleChange('score', event.target.value)}
          value={(values && values.score) || ''}
        />

        <LabelInput
          label={'Poster'}
          type={'text'}
          {...(type === 'add' ? { value: values.poster || '' } : {})}
          onChange={event => handleChange('poster', event.target.value)}
          value={(values && values.poster) || ''}
        />

        <LabelInput
          label={'Trailer'}
          type={'text'}
          {...(type === 'add' ? { value: values.trailer || '' } : {})}
          onChange={event => handleChange('trailer', event.target.value)}
          value={(values && values.trailer) || ''}
        />

        <LabelInput
          label={'Casting'}
          type={'text'}
          {...(type === 'add' ? { value: values.casting || '' } : {})}
          onChange={event => handleChange('casting', event.target.value)}
          value={(values && values.casting) || ''}
        />

        <LabelInput
          label={'Genre'}
          type={'text'}
          {...(type === 'add' ? { value: values.genre || '' } : {})}
          onChange={event => handleChange('genre', event.target.value)}
          value={(values && values.genre) || ''}
        />

        <LabelInput
          label={'Category'}
          type={'text'}
          {...(type === 'add' ? { value: values.category || '' } : {})}
          onChange={event => handleChange('category', event.target.value)}
          value={(values && values.category) || ''}
        />

        <LabelTextarea
          label={'Synopsis'}
          {...(type === 'add' ? { value: values.synopsis || '' } : {})}
          onChange={event => handleChange('synopsis', event.target.value)}
          value={(values && values.synopsis) || ''}
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
