import React, { useEffect, useState } from 'react';
import { useCooperator } from 'infrastructure/view/hooks/UseCooperators';
import { Cooperator } from 'domain/cooperator/cooperator';

function CooperatorCardDetails({ id }) {
  const contextCooperator: any = useCooperator();
  const [cooperator, setCooperator] = useState<Cooperator>({});

  useEffect(() => {
    const cooperatorSelected = contextCooperator.state.catalog.filter(
      (cooperator: Cooperator) => cooperator.id === id,
    );
    setCooperator(cooperatorSelected[0]);
  }, []);

  return (
    <div className="details__mission">
      <h3>Coopérateur</h3>
      <div className="details__mission__title">
        Prénom : {cooperator.firstName}
      </div>
      <div className="details__mission__profil">Nom: {cooperator.lastName}</div>
      <div className="details__mission__client">
        Numéro de telephone : {cooperator.phoneNumber}
      </div>
      <div className="details__mission__client">Email : {cooperator.email}</div>
      <div className="details__mission__client">
        Practice : {cooperator.practice}
      </div>
      <div className="details__mission__client">M3 : {cooperator.m3}</div>
      <div className="details__mission__client">
        Mentor : {cooperator.mentor}
      </div>
    </div>
  );
}

export default CooperatorCardDetails;
