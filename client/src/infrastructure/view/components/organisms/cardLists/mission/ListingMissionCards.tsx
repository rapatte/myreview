import React, { useEffect, useState } from 'react';
import { missionServices } from 'application';
import { Mission } from 'domain/mission/mission';
import { Title } from 'infrastructure/view/components/atoms/title/Title';
import { useMission } from 'infrastructure/view/hooks/UseMissions';
import { missionList } from 'infrastructure/view/store/Mission/mission.actions';
import sortingById from 'utils/sortingArrays';
import { Card, MissionCard } from '../../../molecules';

function ListingMissionCards({ ...props }) {
  const { state, dispatch } = useMission();
  const [catalog, setCatalog] = useState<Mission[]>([]);

  useEffect(() => {
    missionServices.getMissions().then(data => dispatch(missionList(data)));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setCatalog(state.catalog);
  }, [state.catalog]);

  return (
    <div className="container">
      <Title label="Les Missions" format="h2" />
      <ul className="container__cards">
        {catalog && catalog.length > 0
          ? catalog.sort(sortingById).map(prop => (
              <Card key={prop.id} data={prop} {...props}>
                <MissionCard cardType="mission" data={prop} {...props} />
              </Card>
            ))
          : 'Chargement'}
      </ul>
    </div>
  );
}

export default ListingMissionCards;
