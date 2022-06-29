import React from 'react';

type PropsButton = {
  className?: string;
  id?: string;
  type?: 'button' | 'submit' | 'reset' | undefined;
  label?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export const Button: React.FC<PropsButton> = ({
  label,
  ...props
}: PropsButton) => {
  return (
    <>
      <button {...props}>{label}</button>
    </>
  );
};
