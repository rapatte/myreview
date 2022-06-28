import React from 'react';
import './option.scss';

interface Props {
  name: string;
  className?: string;
  onClick?: (e: React.MouseEvent) => void;
}

function ContextMenuOption({
  name = 'Option',
  className = 'option',
  ...props
}: Props) {
  return (
    <div className={className} {...props}>
      {name}
    </div>
  );
}

export default ContextMenuOption;
