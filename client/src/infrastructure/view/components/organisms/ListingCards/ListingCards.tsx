import React from 'react';
import sortingById from 'utils/sortingArrays';
import { Card, MissionCard, CooperatorCard } from '../../molecules';

function ListingCards({ ...props }) {
  return (
    <div className="container">
      <h2>{props.title}</h2>
      <ul className="container__cards">
        {props && props.props.length > 0
          ? props.props.sort(sortingById).map(prop => (
              <Card key={prop.id} data={prop} {...props}>
                {props.cardType === 'mission' && (
                  <MissionCard data={prop} {...props} />
                )}
                {props.cardType === 'cooperator' && (
                  <CooperatorCard data={prop} {...props} />
                )}
              </Card>
            ))
          : 'Chargement'}
      </ul>
    </div>
  );
}

export default ListingCards;
