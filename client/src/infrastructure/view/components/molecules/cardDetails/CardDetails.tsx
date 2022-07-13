import React, { useLayoutEffect, useRef, useState } from 'react';
import { useOutsideClick } from 'infrastructure/view/hooks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import MissionCardDetails from '../missionCardDetails/MissionCardDetails';
import CooperatorCardDetails from '../cooperatorCardDetails/CooperatorCardDetails';

export default function CardDetails({ ...props }) {
  const { cardType } = props;
  const wrapperRef = useRef(null);
const [isShown, setIsShown] = useState(true);

const handleClick = event => {
    setIsShown(false);
  }; 
  return (
    <div ref={wrapperRef} className="details">
      <FontAwesomeIcon
         onClick={handleClick}
        className="details__closeButton"
        icon={faXmark}
      />
      {cardType === 'mission' && <MissionCardDetails {...props} />}
      {cardType === 'cooperator' && <CooperatorCardDetails {...props} />}
    </div>
  );
}
