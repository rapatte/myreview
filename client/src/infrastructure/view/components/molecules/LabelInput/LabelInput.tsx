import React from 'react';
import { Input } from '../../atoms/Input/Input';
import { Label } from '../../atoms/Label/Label';

export type PropsLabelInput = {
  label: string;
  type?: React.HTMLInputTypeAttribute | undefined;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  className?: string;
  id?: string;
  placeholder?: string;
};

export const LabelInput: React.FC<PropsLabelInput> = ({ ...props }) => {
  return (
    <div className="input-label">
      <Label label={props.label} />
      <Input id={props.label} {...props} />
    </div>
  );
};