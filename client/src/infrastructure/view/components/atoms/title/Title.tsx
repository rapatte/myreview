import React, { ReactNode } from 'react';
import './title.scss';

interface ComponentProps extends React.HTMLAttributes<HTMLOrSVGElement> {
  format?: React.ElementType;
}

interface TitleProps extends ComponentProps {
  className?: string;
  id?: string;
  label?: string;
  children: ReactNode;
}

export const Title = ({
  children,
  label,
  format: Head = 'h1',
  ...props
}: TitleProps) => {
  return <Head {...props}>{children}</Head>;
};
