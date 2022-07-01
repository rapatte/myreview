import React from 'react';
import { CardDetails } from '..';

function Card({ ...props }) {
  const { data, details, children } = props;
  const displayedDetails = details.ids.includes(data.id);
  function displayDetail() {
    details.addId(data.id);
  }

  return (
    <li>
      <div className="container">
        {displayedDetails && <CardDetails {...props} />}
        <div
          onClick={() => {
            displayDetail();
          }}
          className="card"
        >
          {children}
        </div>
      </div>
    </li>
  );
}

export default Card;
