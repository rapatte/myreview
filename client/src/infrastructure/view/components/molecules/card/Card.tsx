import React from 'react';
import { useHistory } from 'react-router-dom';
// import { CardDetails } from '../../../components/molecules';

function Card({ children, id }) {
  const history = useHistory();
  return (
    <li>
      <div className="container">
        <div
          className="card"
          onClick={() => history.push(`reviews/details/${id}`)}
        >
          {children}
        </div>
      </div>
    </li>
  );
}

export default Card;
