import React from 'react';
import { Input, Label } from 'infrastructure/view/components/atoms';

export type PropsLabelInput = {
  label: string;
  type?: React.HTMLInputTypeAttribute | undefined;
  value?: any;
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
