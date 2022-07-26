import React, { useEffect } from 'react';
import {
  SearchBar,
  ListingMissionCards,
  Button,
  Checkbox,
} from 'infrastructure/view/components';
import { Link } from 'react-router-dom';
import { useMission } from 'infrastructure/view/hooks/UseMissions';
import { missionServices } from 'application';
import { missionList } from 'infrastructure/view/store/Mission/mission.actions';

const Missions = () => {
  const { dispatch } = useMission();
  useEffect(() => {
    missionServices.getMissions().then(data => dispatch(missionList(data)));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <SearchBar placeholder="Chercher une mission" />
      <Link to="/missions/ajouter">
        <Button className="addButton" label="Ajouter une mission" />
      </Link>
      <ListingMissionCards />
    </>
  );
};

export default Missions;
