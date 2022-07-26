import React, { useEffect, useState } from 'react';
import { useMission } from 'infrastructure/view/hooks/UseMissions';
import { Mission } from 'domain/mission/mission';

function MissionCardDetails({ id }) {
  const contextMission: any = useMission();
  const [mission, setMission] = useState<Mission>({});

  useEffect(() => {
    const missionSelected = contextMission.state.catalog.filter(
      (mission: Mission) => mission.id === id,
    );
    setMission(missionSelected[0]);
  }, []);

  return (
    <div className="details__mission">
      <h3>Mission</h3>
      <div className="details__mission__title">Titre : {mission.title}</div>
      <div className="details__mission__profil">
        Profil recherché : {mission.profile}
      </div>
      <div className="details__mission__client">Client : {mission.client}</div>
      <div className="details__mission__description">
        Description : {mission.description}
      </div>
    </div>
  );
}

export default MissionCardDetails;
