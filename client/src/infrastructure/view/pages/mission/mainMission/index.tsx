import React from 'react';
import {
  SearchBar,
  ListingMissionCards,
  Button,
  Checkbox,
} from 'infrastructure/view/components';
import { Link } from 'react-router-dom';

const Missions = () => {
  return (
    <>
      <SearchBar placeholder="Chercher une mission" />
      <Link to="/missions/ajouter">
        <Button className="addButton" label="Ajouter une mission" />
      </Link>
      <ListingMissionCards title="Les Missions" cardType="mission" />
    </>
  );
};

export default Missions;
