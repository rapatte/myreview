import React from 'react';
import './status.scss';

type Props = {
  state: boolean;
  cardType: string;
};

function Status({ ...props }: Props) {
  const { state, cardType } = props;
  return (
    <div className={`card__status `}>
      {state ? (
        <>
          <img className="card__status__logo" src={'/check.png'} alt="check" />
          <span>{cardType === 'mission' ? 'Active' : 'Disponible'}</span>
        </>
      ) : (
        <>
          <img className="card__status__logo" src={'/close.png'} alt="check" />
          <span>{cardType === 'mission' ? 'Inactive' : 'Indisponible'}</span>
        </>
      )}
    </div>
  );
}

export default Status;
