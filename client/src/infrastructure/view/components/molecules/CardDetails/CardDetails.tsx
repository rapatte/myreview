import React, { useLayoutEffect, useRef, useState } from 'react';
import { useOutsideClick } from 'infrastructure/view/hooks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import MissionCardDetails from '../MissionCardDetails/MissionCardDetails';
import CooperatorCardDetails from '../CooperatorCardDetails/CooperatorCardDetails';

export default function CardDetails({ details, ...props }) {
  const { cardType } = props;
  const wrapperRef = useRef(null);
  useOutsideClick(wrapperRef, details.removeId);
  return (
    <div ref={wrapperRef} className="details">
      <FontAwesomeIcon
        onClick={details.removeId}
        className="details__closeButton"
        icon={faXmark}
      />
      {cardType === 'mission' && <MissionCardDetails {...props} />}
      {cardType === 'cooperator' && <CooperatorCardDetails {...props} />}
    </div>
  );
}
