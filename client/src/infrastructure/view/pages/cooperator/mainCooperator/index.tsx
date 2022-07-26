import React, { useEffect } from 'react';
import {
  ListingCooperatorCards,
  SearchBar,
  Button,
} from 'infrastructure/view/components';
import { useCooperator } from 'infrastructure/view/hooks/UseCooperators';
import cooperatorServices from 'application/cooperator/cooperator.factory';
import { cooperatorList } from 'infrastructure/view/store/Cooperator/cooperator.actions';
import { Link } from 'react-router-dom';

export const Cooperators = () => {
  const { dispatch } = useCooperator();

  useEffect(() => {
    cooperatorServices
      .getCooperators()
      .then(data => dispatch(cooperatorList(data)));
  }, []);

  return (
    <>
      <SearchBar placeholder="Chercher un coopérateur" />
      <Link to="/cooperateurs/ajouter">
        <Button className="addButton" label="Ajouter un coopérateur" />
      </Link>
      <ListingCooperatorCards />
    </>
  );
};
