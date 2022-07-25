import React from 'react';
import sortingById from 'utils/sortingArrays';
import { Checkbox, Title } from 'infrastructure/view/components/atoms';
import { Card, CooperatorCard } from '../../../../components/molecules';

function ListingCooperatorCards({ ...props }) {
  return (
    <div className="container">
      <Title format="h2" label="Les Coopérateurs" />
      <Checkbox label="Disponibles uniquement" />
      <ul className="container__cards">
        {props.props && props.props.length > 0
          ? props.props.sort(sortingById).map(prop => (
              <Card key={prop.id} data={prop} {...props}>
                <CooperatorCard cardType="cooperator" data={prop} {...props} />
              </Card>
            ))
          : 'Chargement'}
      </ul>
    </div>
  );
}

export default ListingCooperatorCards;
