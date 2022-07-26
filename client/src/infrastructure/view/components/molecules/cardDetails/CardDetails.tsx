/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { useOutsideClick } from 'infrastructure/view/hooks';
import { MissionCardDetails, CooperatorCardDetails } from '../../molecules';

export default function CardDetails({ id, cardType, setIsShown, isShown }) {
  const ref = React.useRef<HTMLDivElement>(null);

  const handleIsShownInvisible = () => {
    if (isShown) setIsShown(false);
  };

  useOutsideClick(ref, handleIsShownInvisible);
  return (
    <div ref={ref} className="details">
      <FontAwesomeIcon
        onClick={() => setIsShown(false)}
        className="details__closeButton"
        icon={faXmark}
      />
      {cardType === 'mission' && <MissionCardDetails id={id} />}
      {cardType === 'cooperator' && <CooperatorCardDetails id={id} />}
    </div>
  );
}
