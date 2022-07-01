import React from 'react';

function MissionCardDetails({ ...props }) {
  const { data } = props;

  return (
    <div className="details__mission">
      <h3>Mission</h3>
      <div className="details__mission__title">Titre : {data.title}</div>
      <div className="details__mission__profil">
        Profil recherché : {data.profile}
      </div>
      <div className="details__mission__client">Client : {data.client}</div>
      <div className="details__mission__description">
        Description : {data.description}
      </div>
    </div>
  );
}

export default MissionCardDetails;
