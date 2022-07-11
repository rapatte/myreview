import React from 'react';
import { Button } from '../atoms/button/Button';
import Title from '../atoms/Title';
import { LabelInput } from '../molecules/LabelInput/LabelInput';

export type FormProps = {
  formStructure: FormStructure;
  children?: React.ReactNode;
};

export type FormStructure = {
  title: string;
  titleFormat: React.ElementType;
  className: string;
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  form: InputType[];
};

export type InputType = {
  label: string;
  type: string;
  value: string;
  onChange: (value: React.SetStateAction<string>) => void;
  className?: string;
  placeholder?: string;
};

export const Form: React.FC<FormProps> = ({ formStructure, children }) => {
  return (
    <>
      <div className={formStructure.className}>
        <form noValidate>
          <Title
            format={formStructure.titleFormat}
            label={formStructure.title}
          />
          {formStructure.form.map((val, i) => {
            return (
              <LabelInput
                key={i}
                label={val.label}
                type={val.type}
                value={val.value || ''}
                onChange={event => val.onChange(event.target.value)}
                placeholder={val.placeholder}
              />
            );
          })}
          {children}
          <Button
            label={'Envoyer'}
            className={'active-btn width-btn'}
            id={'sendedForm'}
            type={'submit'}
            onClick={event => formStructure.handleClick(event)}
          />
        </form>
      </div>
    </>
  );
};
