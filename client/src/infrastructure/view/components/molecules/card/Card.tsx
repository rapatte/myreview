import React, { useState } from 'react';
import { CardDetails } from '../../../components/molecules';

function Card({ children, id }) {
  const [isShown, setIsShown] = useState(false);

  const handleIsShownVisible = () => {
    if (!isShown) setIsShown(true);
  };

  return (
    <li>
      <div className="container">
        <div className="card" onClick={() => handleIsShownVisible()}>
          {isShown && (
            <CardDetails id={id} setIsShown={setIsShown} isShown={isShown} />
          )}
          {children}
        </div>
      </div>
    </li>
  );
}

export default Card;
