import React, { useEffect, useState } from 'react';
import { missionServices } from 'application';
import { useMission } from 'infrastructure/view/hooks/UseMissions';
import { Mission } from 'domain/mission/mission';
import { missionList } from 'infrastructure/view/store/Mission/mission.actions';
import { SearchBar, ListingMissionCards } from 'infrastructure/view/components';
import { Link } from 'react-router-dom';
import { Button } from 'infrastructure/view/components/atoms/button/Button';

export const Missions = ({ setDisplay, setProp }) => {
  const { state, dispatch } = useMission();
  const [catalog, setCatalog] = useState<Mission[]>([]);

  useEffect(() => {
    const missions: any = missionServices
      .getMissions()
      .then(data => dispatch(missionList(data)));
    setCatalog(missions);
  }, []);

  useEffect(() => {
    setCatalog(state.catalog);
  }, [state.catalog]);

  return (
    <>
      <SearchBar />
      <Link to="/missions/ajouter">
        <Button label="Ajouter une mission" />
      </Link>
      <ListingMissionCards
        setProp={setProp}
        title="Les Missions"
        cardType="mission"
        props={catalog}
        setDisplay={setDisplay}
      />
    </>
  );
};
