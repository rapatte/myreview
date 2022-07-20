import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { useOutsideClick } from 'infrastructure/view/hooks';

import MissionCardDetails from '../missionCardDetails/MissionCardDetails';
import CooperatorCardDetails from '../cooperatorCardDetails/CooperatorCardDetails';

export default function CardDetails({ ...props }) {
  const { cardType } = props;
  const [showDetail, setShowDetail] = useState(true);
  const ref = React.useRef<HTMLDivElement>(null);

  useOutsideClick(ref, () => {
    if (showDetail) setShowDetail(false);
  });
  return (
    <>
      {showDetail && (
        <div ref={ref} className="details">
          <FontAwesomeIcon
            onClick={() => setShowDetail(true)}
            className="details__closeButton"
            icon={faXmark}
          />
          {cardType === 'mission' && <MissionCardDetails {...props} />}
          {cardType === 'cooperator' && <CooperatorCardDetails {...props} />}
        </div>
      )}
    </>
  );
}
