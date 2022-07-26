import React, { useEffect, useState } from 'react';
import sortingById from 'utils/sortingArrays';
import { Title } from 'infrastructure/view/components/atoms';
import { Card, CooperatorCard } from '../../../../components/molecules';
import { useCooperator } from 'infrastructure/view/hooks/UseCooperators';

function ListingCooperatorCards({ ...props }) {
  const contextCooperator = useCooperator();
  const [catalog, setCatalog] = useState<any[]>([]);

  useEffect(() => {
    setCatalog(contextCooperator.state.catalog);
  }, [contextCooperator.state.catalog]);

  return (
    <div className="container">
      <Title format="h2" label="Les Coopérateurs" />
      <ul className="container__cards">
        {catalog && catalog.length > 0
          ? catalog.sort(sortingById).map(cooperator => (
              <Card
                key={cooperator.id}
                id={cooperator.id}
                cardType="cooperator"
              >
                <CooperatorCard cooperator={cooperator} />
              </Card>
            ))
          : 'Chargement'}
      </ul>
    </div>
  );
}

export default ListingCooperatorCards;
