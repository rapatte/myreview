import { Review } from 'domain/review/review';
import React, { useEffect, useState } from 'react';
import { Button, Input, Title } from '../../../atoms';
import {
  LabelTextarea,
  LabelInput,
} from 'infrastructure/view/components/molecules';
import { reviewServices } from 'application';
import { notifyError } from 'utils/toastify';

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

  const [input, setInput] = useState('');
  const [movie, setMovie] = useState<any>();
  const [trailer, setTrailer] = useState<any>();
  const [error, setError] = useState<any>('');

  const prefillSubmit = async title => {
    try {
      const movie = await reviewServices.getByTitle(title);
      setMovie(movie.data);
    } catch (e: any) {
      notifyError(e.reponse.data.Error);
    }
  };
  const getTrailer = async () => {
    const trailer = await reviewServices.getIdTrailer(movie?.Title);
    const trailerId = trailer.data.items[0].id.videoId;
    setTrailer(`https://www.youtube.com/watch?v=${trailerId}`);
  };
  useEffect(() => {
    setValues({
      title: movie?.Title,
      casting: movie?.Actors,
      poster: movie?.Poster,
      genre: movie?.Genre,
      category: movie?.Type,
      synopsis: movie?.Plot,
      trailer: trailer,
    });
    setError('');
    if (movie?.Error) setError(movie?.Error);
  }, [movie, trailer]);

  useEffect(() => {
    try {
      getTrailer();
    } catch (e) {
      setError(e);
    }
  }, [movie, trailer]);

  return (
    <>
      <form className={'review-form'}>
        <Title label={title} format="h2"></Title>

        <Input
          placeholder="Pre-fill with exact title"
          onChange={e => setInput(e.target.value)}
        ></Input>
        <Button
          onClick={e => {
            prefillSubmit(input);
            e.preventDefault();
          }}
        >
          Go
        </Button>
        {error}

        <LabelInput
          label={'Title'}
          type={'text'}
          {...(type === 'add' ? { value: values.title || '' } : {})}
          onChange={event => handleChange('title', event.target.value)}
          value={(values && values.title) || ''}
        />

        <LabelInput
          label={'Score (on 10)'}
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
