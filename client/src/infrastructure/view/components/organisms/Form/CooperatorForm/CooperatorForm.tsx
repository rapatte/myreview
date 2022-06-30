import React from 'react';
import { Button } from '../../../atoms/Button/Button';
import { LabelInput } from '../../../molecules/LabelInput/LabelInput';

type FormProps = {
  setFormTitle?: string;
  className?: string;
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  setFirstName: (value: React.SetStateAction<string>) => void;
  setLastName: (value: React.SetStateAction<string>) => void;
  setPhoneNumber: (value: React.SetStateAction<string>) => void;
  setEmail: (value: React.SetStateAction<string>) => void;
  setPractice: (value: React.SetStateAction<string>) => void;
  setM3: (value: React.SetStateAction<string>) => void;
  setMentor: (value: React.SetStateAction<string>) => void;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  practice: string;
  m3: string;
  mentor: string;
};

export const CooperatorForm = ({ ...props }: FormProps) => {
  return (
    <>
      <form className={props.className}>
        <h2>{props.setFormTitle}</h2>

        <div className={'cooperator-form-input-container'}>
          <LabelInput
            label={'Prénom'}
            type={'text'}
            value={props.firstName}
            onChange={event => props.setFirstName(event.target.value)}
            placeholder={''}
          />

          <LabelInput
            label={'Nom'}
            type={'text'}
            value={props.lastName}
            onChange={event => props.setLastName(event.target.value)}
            placeholder={''}
          />

          <LabelInput
            label={'Téléphone'}
            type={'text'}
            value={props.phoneNumber}
            onChange={event => props.setPhoneNumber(event.target.value)}
            placeholder={''}
          />
          <LabelInput
            label={'Email'}
            type={'text'}
            value={props.email}
            onChange={event => props.setEmail(event.target.value)}
            placeholder={''}
          />
          <LabelInput
            label={'Practice'}
            type={'text'}
            value={props.practice}
            onChange={event => props.setPractice(event.target.value)}
            placeholder={''}
          />
          <LabelInput
            label={'M3'}
            type={'text'}
            value={props.m3}
            onChange={event => props.setM3(event.target.value)}
            placeholder={''}
          />

          <LabelInput
            label={'Mentor'}
            type={'text'}
            value={props.mentor}
            onChange={event => props.setMentor(event.target.value)}
            placeholder={''}
          />
        </div>

        <Button
          label={'Envoyer'}
          // className={'active-btn width-btn'}
          id={'sendedForm'}
          type={'submit'}
          onClick={event => props.handleClick(event)}
        />
      </form>
    </>
  );
};
