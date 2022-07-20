import React from 'react';
import { SearchBar, ListingMissionCards } from 'infrastructure/view/components';
import { Link } from 'react-router-dom';
import { Button } from 'infrastructure/view/components/atoms/button/Button';

export const Missions = () => {
  return (
    <>
      <SearchBar placeholder="Chercher une mission" />
      <Link to="/missions/ajouter">
        <Button label="Ajouter une mission" />
      </Link>
      <ListingMissionCards title="Les Missions" cardType="mission" />
    </>
  );
};
