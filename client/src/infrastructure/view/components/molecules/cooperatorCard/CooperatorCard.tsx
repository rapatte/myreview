import React, { useState } from 'react';
import { renderBasedOnLength } from 'utils/renderBasedOnLength';
import { CardMenu } from '..';
import { Status } from '../../../components/atoms';

function CooperatorCard({ ...props }) {
  const { data, cardType } = props;
  const [status, setStatus] = useState<boolean>(data.disponible);
  return (
    <div className="card__content">
      <div className="card__header">
        <CardMenu
          key={data.id}
          setStatus={setStatus}
          status={status}
          cardType={cardType}
          {...props}
        />
        <h3 className="card__header__title card-header-name">
          {renderBasedOnLength(data)}
        </h3>
      </div>
      <p className="card__practice">{data.practice}</p>
      <img
        className="card__illustration"
        src="/img-cooperator.png"
        alt="illustration"
      />
      <Status state={status} cardType={cardType} />
    </div>
  );
}

export default CooperatorCard;
