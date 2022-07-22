import React, { useEffect, useState } from 'react';
import sortingById from 'utils/sortingArrays';
import { Title } from 'infrastructure/view/components/atoms';
import { Card, CooperatorCard } from '../../../../components/molecules';
import { useCooperator } from 'infrastructure/view/hooks/UseCooperators';
import { Cooperator } from 'domain/cooperator/cooperator';
import { cooperatorServices } from 'application';
import { cooperatorList } from 'infrastructure/view/store/Cooperator/cooperator.actions';

function ListingCooperatorCards({ ...props }) {
  const { state, dispatch } = useCooperator();
  const [catalog, setCatalog] = useState<Cooperator[]>([]);

  useEffect(() => {
    cooperatorServices
      .getCooperators()
      .then(data => dispatch(cooperatorList(data)));
  }, []);

  useEffect(() => {
    setCatalog(state.catalog);
  }, [state.catalog]);

  return (
    <div className="container">
      <Title format="h2" label="Les Coopérateurs" />
      <ul className="container__cards">
        {catalog && catalog.length > 0
          ? catalog.sort(sortingById).map((prop, key) => (
              <Card key={key} data={prop} {...props}>
                <CooperatorCard cardType="cooperator" data={prop} {...props} />
              </Card>
            ))
          : 'Chargement'}
      </ul>
    </div>
  );
}

export default ListingCooperatorCards;
