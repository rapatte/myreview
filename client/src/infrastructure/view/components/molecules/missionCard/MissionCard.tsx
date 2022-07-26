import React, { useState } from 'react';
import { renderBasedOnLength } from 'utils/renderBasedOnLength';
import { CardMenu } from '..';
import { Status } from '../../../components/atoms';

function MissionCard({ ...props }) {
  const { data, cardType } = props;
  const [status, setStatus] = useState<boolean>(data.isActive);
  return (
    <div className="card__content">
      <div className="card__header">
        <CardMenu
          setStatus={setStatus}
          status={status}
          cardType={cardType}
          {...props}
        />
        <h3 className="card__header__title">{renderBasedOnLength(data)}</h3>
      </div>
      <p className="card__client">
        {data.client && data.client.length > 20
          ? data.client.substr(0, 20) + '...'
          : data.client}
      </p>
      <img
        className="card__illustration"
        src="/mission_illustration.png"
        alt="illustration"
      />
      <Status state={status} cardType={cardType} />
    </div>
  );
}

export default MissionCard;
