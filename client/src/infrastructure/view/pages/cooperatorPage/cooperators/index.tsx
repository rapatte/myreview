import React, { useEffect, useState } from 'react';

import {
  ListingCooperatorCards,
  SearchBar,
} from 'infrastructure/view/components';
import { useCooperator } from 'infrastructure/view/hooks/UseCooperators';
import { Cooperator } from '../../../../../domain/cooperator/cooperator';
import cooperatorServices from 'application/cooperator/cooperator.factory';
import { cooperatorList } from 'infrastructure/view/store/Cooperator/cooperator.actions';
import { Link } from 'react-router-dom';
import { Button } from 'infrastructure/view/components/atoms/button/Button';

export const Cooperators = ({ setDisplay, setProp }) => {
  const { state, dispatch } = useCooperator();
  const [catalog, setCatalog] = useState<Cooperator[]>([]);

  useEffect(() => {
    const cooperators: any = cooperatorServices
      .getCooperators()
      .then(data => dispatch(cooperatorList(data)));
    setCatalog(cooperators);
  }, []);

  useEffect(() => {
    setCatalog(state.catalog);
  }, [state.catalog]);

  return (
    <>
      <SearchBar />
      <Link to="/cooperateurs/ajouter">
        <Button label="Ajouter un coopérateur" />
      </Link>
      <ListingCooperatorCards
        cardType="cooperator"
        props={catalog}
        setDisplay={setDisplay}
        setProp={setProp}
      />
    </>
  );
};
