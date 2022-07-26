import React, { useState } from 'react';
import { renderBasedOnLength } from 'utils/renderBasedOnLength';
import { CardMenu } from '..';
import { Status } from '../../../components/atoms';

function CooperatorCard({ cooperator }) {
  const [status, setStatus] = useState<boolean>(cooperator.disponible);
  return (
    <div className="card__content">
      <div className="card__header">
        <CardMenu
          id={cooperator.id}
          setStatus={setStatus}
          status={status}
          cardType="cooperator"
        />
        <h3 className="card__header__title card-header-name">
          {renderBasedOnLength(cooperator)}
        </h3>
      </div>
      <p className="card__practice">{cooperator.practice}</p>
      <img
        className="card__illustration"
        src="/img-cooperator.png"
        alt="illustration"
      />
      <Status state={status} cardType="cooperator" />
    </div>
  );
}

export default CooperatorCard;
