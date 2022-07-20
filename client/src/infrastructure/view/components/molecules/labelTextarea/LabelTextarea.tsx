import React, { ReactNode } from 'react';
import { Label, Textarea } from 'infrastructure/view/components/atoms';

interface LabelTextareaProps {
  type?: string;
  className?: string;
  children?: ReactNode;
  label: string;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
  id?: string;
  placeholder?: string;
}

export const LabelTextarea: React.FC<LabelTextareaProps> = ({ ...props }) => {
  return (
    <div className="textarea-label">
      <Label label={props.label} />
      <Textarea {...props} />
    </div>
  );
};
