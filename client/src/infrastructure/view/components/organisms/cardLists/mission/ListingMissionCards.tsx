import React, { useEffect, useState } from 'react';
import { Review } from 'domain/mission/mission';
import { useMission } from 'infrastructure/view/hooks/UseMissions';
import {
  missionFiltred,
  missionList,
} from 'infrastructure/view/store/Mission/mission.actions';
import sortingById from 'utils/sortingArrays';
import { Checkbox, Title } from 'infrastructure/view/components/atoms';
import { Card, MissionCard } from '../../../../components/molecules';
import { missionServices, reviewServices } from 'application';

function ListingMissionCards() {
  const contextMission = useMission();
  const [catalog, setCatalog] = useState<Review[]>([]);
  const [checked, setChecked] = useState(false);
  const [data, setData] = useState<any>();
  const [error, setError] = useState('');

  const handleChange = () => {
    setChecked(!checked);
  };

  const getMoviesOnly = async () => {
    if (checked) {
      try {
        await missionServices
          .getAvailableMissions()
          .then(data => contextMission.dispatch(missionFiltred(data)));
        setError('');
      } catch (error: any) {
        setError(error.response.data.message);
      }
    } else {
      await missionServices
        .getMissions()
        .then(data => contextMission.dispatch(missionList(data)));
      setError('');
    }
  };

  useEffect(() => {
    getMoviesOnly();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [checked]);

  useEffect(() => {
    setCatalog(contextMission.state.catalog);
  }, [contextMission.state.catalog]);

  return (
    <div className="container">
      <Title label="Les Reviews" format="h2" />
      <Checkbox
        checked={checked}
        onChange={handleChange}
        error={error}
        label="Only movies"
      />
      <ul className="container__cards">
        {catalog && catalog.length > 0
          ? catalog.sort(sortingById).map((mission, index) => (
              <Card key={index} id={mission.id} cardType="mission">
                <MissionCard key={mission.id} mission={mission} />
              </Card>
            ))
          : 'Chargement'}
      </ul>
    </div>
  );
}

export default ListingMissionCards;
