import React, { useState } from 'react';
import { CardDetails } from '..';

function Card({ ...props }) {
  const [isShown, setIsShown] = useState(false);
  const { children } = props;

  return (
    <li>
      <div className="container">
        <div className="card" onClick={() => setIsShown(current => !current)}>
          {isShown && (
            <div>
              <CardDetails {...props} />
            </div>
          )}
          {children}
        </div>
      </div>
    </li>
  );
}

export default Card;
