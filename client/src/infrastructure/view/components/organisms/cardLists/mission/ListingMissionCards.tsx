import React, { useEffect, useState } from 'react';
import { Mission } from 'domain/mission/mission';
import { useMission } from 'infrastructure/view/hooks/UseMissions';
import sortingById from 'utils/sortingArrays';
import { Title } from 'infrastructure/view/components/atoms';
import { Card, MissionCard } from '../../../../components/molecules';

function ListingMissionCards() {
  const contextMission = useMission();
  const [catalog, setCatalog] = useState<Mission[]>([]);

  useEffect(() => {
    setCatalog(contextMission.state.catalog);
  }, [contextMission.state.catalog]);

  return (
    <div className="container">
      <Title label="Les Missions" format="h2" />
      <ul className="container__cards">
        {catalog && catalog.length > 0
          ? catalog.sort(sortingById).map(mission => (
              <Card key={mission.id} id={mission.id} cardType="mission">
                <MissionCard mission={mission} />
              </Card>
            ))
          : 'Chargement'}
      </ul>
    </div>
  );
}

export default ListingMissionCards;
