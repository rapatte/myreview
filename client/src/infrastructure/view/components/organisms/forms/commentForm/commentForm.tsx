import React, { useEffect, useState } from 'react';
import { Button, Title } from '../../../atoms';
import {
  LabelTextarea,
  LabelInput,
} from 'infrastructure/view/components/molecules';
import { Comment } from 'domain/comment/comment';

type Props = {
  title: string;
  values: Comment;
  setValues: (value: React.SetStateAction<object>) => void;
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  type: string;
};

export default function CommentForm({
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
          label={'Author'}
          type={'text'}
          {...(type === 'add' ? { value: values.author || '' } : {})}
          onChange={event => handleChange('author', event.target.value)}
          value={(values && values.author) || ''}
        />

        <LabelTextarea
          label={'Comment'}
          {...(type === 'add' ? { value: values.content || '' } : {})}
          onChange={event => handleChange('content', event.target.value)}
          value={(values && values.content) || ''}
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
