import React, { useEffect, useState } from 'react';
import {
  ListingCooperatorCards,
  SearchBar,
  Button,
  Checkbox,
} from 'infrastructure/view/components';
import { useCooperator } from 'infrastructure/view/hooks/UseCooperators';
import { Cooperator } from '../../../../../domain/cooperator/cooperator';
import cooperatorServices from 'application/cooperator/cooperator.factory';
import { cooperatorList } from 'infrastructure/view/store/Cooperator/cooperator.actions';
import { Link } from 'react-router-dom';

export const Cooperators = ({ setDisplay, setProp }) => {
  const { state, dispatch } = useCooperator();
  const [catalog, setCatalog] = useState<Cooperator[]>([]);

  useEffect(() => {
    const cooperators: any = cooperatorServices
      .getCooperators()
      .then(data => dispatch(cooperatorList(data)));
    setCatalog(cooperators);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setCatalog(state.catalog);
  }, [state.catalog]);

  return (
    <>
      <SearchBar placeholder="Chercher un coopérateur" />
      <Link to="/cooperateurs/ajouter">
        <Button className="addButton" label="Ajouter un coopérateur" />
      </Link>
      <Checkbox label="Disponibles uniquement" />
      <ListingCooperatorCards
        cardType="cooperator"
        props={catalog}
        setDisplay={setDisplay}
        setProp={setProp}
      />
    </>
  );
};
