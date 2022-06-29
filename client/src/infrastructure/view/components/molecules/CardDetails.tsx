import React, { useRef } from 'react';
import { useOutsideClick } from 'infrastructure/view/hooks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

export default function CardDetails({ ...props }) {
  const { data, details, cardType } = props;
  const wrapperRef = useRef(null);
  useOutsideClick(wrapperRef, details.removeId);
  return (
    <div ref={wrapperRef} className="details">
      <FontAwesomeIcon
        onClick={details.removeId}
        className="details__closeButton"
        icon={faXmark}
      />

      {cardType === 'mission' ? (
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
      ) : (
        <div className="details__mission">
          <h3>Coopérateur</h3>
          <div className="details__mission__title">
            Prénom : {data.firstName}
          </div>
          <div className="details__mission__profil">Nom: {data.lastName}</div>
          <div className="details__mission__client">
            Numéro de telephone : {data.phoneNumber}
          </div>
          <div className="details__mission__client">Email : {data.email}</div>
          <div className="details__mission__client">
            Practice : {data.practice}
          </div>
          <div className="details__mission__client">M3 : {data.m3}</div>
          <div className="details__mission__client">Mentor : {data.mentor}</div>
        </div>
      )}
    </div>
  );
}
