import React from 'react';
import {
  ListingCooperatorCards,
  SearchBar,
  Button,
} from 'infrastructure/view/components';
import { Link } from 'react-router-dom';

export const Cooperators = () => {
  return (
    <>
      <SearchBar placeholder="Chercher un coopérateur" />
      <Link to="/cooperateurs/ajouter">
        <Button className="addButton" label="Ajouter un coopérateur" />
      </Link>
      <ListingCooperatorCards title="Les coopérateurs" cardType="cooperator" />
    </>
  );
};
