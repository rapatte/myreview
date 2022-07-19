import Title from 'infrastructure/view/components/atoms/Title';
import React from 'react';
import sortingById from 'utils/sortingArrays';
import { Card, CooperatorCard } from '../../../molecules';

function ListingCooperatorCards({ ...props }) {
  return (
    <div className="container">
      <Title format="h2" label="Les Coopérateurs" />
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
