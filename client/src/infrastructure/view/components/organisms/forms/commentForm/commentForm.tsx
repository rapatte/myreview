/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { Button } from '../../../atoms';
import { LabelTextarea } from 'infrastructure/view/components/molecules';
import { Comment } from 'domain/comment/comment';
import { UseUser } from 'infrastructure/view/hooks/UseUsers';
type Props = {
  title?: string;
  values: Comment;
  setValues: (value: React.SetStateAction<object>) => void;
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  type: string;
  id: string;
};

export default function CommentForm({
  values,
  setValues,
  handleClick,
  type,
  id,
}: Props) {
  const userContext = UseUser();
  const handleChange = (id, value) => {
    setValues({ ...values, [id]: value });
  };

  useEffect(() => {
    setValues({
      author: userContext.state.user?.username,
      reviewId: id,
    });
  }, []);

  return (
    <>
      <form className={'review-form'}>
        <LabelTextarea
          label={'Post a comment '}
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
