import React, { useState } from 'react';
import { renderBasedOnLength } from 'utils/renderBasedOnLength';
import { CardMenu } from '..';
import { Status } from '../../../components/atoms';

function MissionCard({ mission }) {
  const [status, setStatus] = useState<boolean>(mission.isActive);
  return (
    <div className="card__content">
      <div className="card__header">
        <CardMenu
          setStatus={setStatus}
          status={status}
          id={mission.id}
          cardType="mission"
        />
        <h3 className="card__header__title">{renderBasedOnLength(mission)}</h3>
      </div>
      <p className="card__client">
        {mission.client.length > 20
          ? mission.client.substr(0, 20) + '...'
          : mission.client}
      </p>
      <img
        className="card__illustration"
        src="/mission_illustration.png"
        alt="illustration"
      />
      <Status state={status} cardType="mission" />
    </div>
  );
}

export default MissionCard;
