import React from 'react';

type PropsLabel = {
  label: string;
  className?: string;
  id?: string;
};

export const Label: React.FC<PropsLabel> = ({ label }) => {
  return (
    <>
      <label htmlFor={label}>{`${label}:`}</label>
    </>
  );
};
