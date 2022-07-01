import React from 'react';

function CooperatorCardDetails({ ...props }) {
  const { data } = props;
  return (
    <div className="details__mission">
      <h3>Coopérateur</h3>
      <div className="details__mission__title">Prénom : {data.firstName}</div>
      <div className="details__mission__profil">Nom: {data.lastName}</div>
      <div className="details__mission__client">
        Numéro de telephone : {data.phoneNumber}
      </div>
      <div className="details__mission__client">Email : {data.email}</div>
      <div className="details__mission__client">Practice : {data.practice}</div>
      <div className="details__mission__client">M3 : {data.m3}</div>
      <div className="details__mission__client">Mentor : {data.mentor}</div>
    </div>
  );
}

export default CooperatorCardDetails;
