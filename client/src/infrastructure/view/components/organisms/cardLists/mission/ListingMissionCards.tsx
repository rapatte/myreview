import Title from 'infrastructure/view/components/atoms/Title';
import React from 'react';
import sortingById from 'utils/sortingArrays';
import { Card, MissionCard } from '../../../molecules';

function ListingMissionCards({ ...props }) {
  return (
    <div className="container">
      <Title label="Les Missions" format="h2" />
      <ul className="container__cards">
        {props && props.props.length > 0
          ? props.props.sort(sortingById).map(prop => (
              <Card key={prop.id} data={prop} {...props}>
                <MissionCard cardType="mission" data={prop} {...props} />
              </Card>
            ))
          : 'Chargement'}
      </ul>
    </div>
  );
}

export default ListingMissionCards;
