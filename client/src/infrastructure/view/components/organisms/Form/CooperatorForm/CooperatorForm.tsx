import React from 'react';
import { Button } from '../../../atoms/Button/Button';
import { LabelInput } from '../../../molecules/LabelInput/LabelInput';

type FormProps = {
  setFormTitle?: string;
  className?: string;
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  setTitle: (value: React.SetStateAction<string>) => void;
  setClient: (value: React.SetStateAction<string>) => void;
  setProfil: (value: React.SetStateAction<string>) => void;
  title: string;
  client: string;
  profil: string;
};

export const CooperatorForm = ({ ...props }: FormProps) => {
  return (
    <>
      <form className={props.className}>
        <h2>{props.setFormTitle}</h2>

        <LabelInput
          label={'Prénom'}
          type={'text'}
          value={props.title}
          onChange={event => props.setTitle(event.target.value)}
          placeholder={''}
        />

        <LabelInput
          label={'Client'}
          type={'text'}
          value={props.client}
          onChange={event => props.setClient(event.target.value)}
          placeholder={''}
        />

        <LabelInput
          label={'Profile'}
          type={'text'}
          value={props.profil}
          onChange={event => props.setProfil(event.target.value)}
          placeholder={''}
        />

        <textarea name="" id=""></textarea>

        <Button
          label={'Envoyer'}
          className={'active-btn width-btn'}
          id={'sendedForm'}
          type={'submit'}
          onClick={event => props.handleClick(event)}
        />
      </form>
    </>
  );
};
