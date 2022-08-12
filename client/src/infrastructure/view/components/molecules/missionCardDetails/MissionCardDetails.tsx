import React, { useEffect, useState } from 'react';
import { useReview } from 'infrastructure/view/hooks/UseReviews';
import { Review } from 'domain/mission/mission';

function MissionCardDetails({ id }) {
  const contextMission: any = useReview();
  const [mission, setMission] = useState<Review>({});

  useEffect(() => {
    const missionSelected = contextMission.state.catalog.filter(
      (mission: Review) => mission.id === id,
    );
    setMission(missionSelected[0]);
  }, []);

  return (
    <div className="details__mission">
      <h3>Mission</h3>
      <div className="details__mission__title">Titre : {mission.title}</div>
      <div className="details__mission__profil">
        Profil recherché : {mission.score}
      </div>
      <div className="details__mission__client">Client : {mission.poster}</div>
      <div className="details__mission__description">
        Description : {mission.synopsis}
      </div>
    </div>
  );
}

export default MissionCardDetails;
