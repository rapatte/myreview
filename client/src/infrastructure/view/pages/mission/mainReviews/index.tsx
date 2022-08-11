import React, { useEffect } from 'react';
import {
  SearchBar,
  ListingMissionCards,
  Button,
} from 'infrastructure/view/components';
import { Link } from 'react-router-dom';
import { useMission } from 'infrastructure/view/hooks/UseMissions';
import { missionServices } from 'application';
import { missionList } from 'infrastructure/view/store/Mission/mission.actions';

const Reviews = () => {
  const { dispatch } = useMission();
  useEffect(() => {
    missionServices.getMissions().then(data => dispatch(missionList(data)));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <SearchBar placeholder="Chercher une review" />
      <Link to="/reviews/ajouter">
        <Button className="addButton" label="Ajouter une review" />
      </Link>
      <ListingMissionCards />
    </>
  );
};

export default Reviews;
