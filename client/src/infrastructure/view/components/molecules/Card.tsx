import React from 'react';
import { Status } from '../atoms';
import { CardMenu } from '../molecules';
import CardDetails from './CardDetails';

function Card({ ...props }) {
  const { data, details, cardType } = props;
  function renderNames() {
    if (data.firstName && data.lastName) {
      const names = `${data.lastName} ${data.firstName}`;
      return names.length > 15 ? names.substr(0, 13) + '...' : names;
    }
  }

  return (
    <li>
      <div className="container">
        {details.ids.includes(data.id) && (
          <CardDetails
            key={data.id}
            cardType={cardType === 'mission' ? 'mission' : 'cooperator'}
            {...props}
          />
        )}

        <div
          onClick={() => {
            if (details.ids.includes(data.id)) {
              details.removeId(data.id);
              return;
            }
            details.addId(data.id);
            return;
          }}
          className="card"
        >
          <div className="card__content">
            <div className="card__header">
              <CardMenu
                key={data.id}
                cardType={cardType === 'mission' ? 'mission' : 'cooperator'}
                {...props}
              />
              {cardType === 'mission' && (
                <h3 className="card__header__title">
                  {data.title && data.title.length > 15
                    ? data.title.substr(0, 13) + '...'
                    : data.title}
                </h3>
              )}
              {cardType === 'cooperator' && (
                <h3 className="card__header__title card-header-name">
                  {renderNames()}
                </h3>
              )}
            </div>
            {cardType === 'cooperator' && (
              <p className="card__practice">{data.practice}</p>
            )}
            {cardType === 'mission' && (
              <p className="card__client">
                {data.client && data.client.length > 20
                  ? data.client.substr(0, 20) + '...'
                  : data.client}
              </p>
            )}
            <img
              className="card__illustration"
              src={
                cardType === 'mission'
                  ? '/mission_illustration.png'
                  : '/img-cooperator.png'
              }
              alt="illustration"
            />
            <Status
              state={cardType === 'mission' ? data.isActive : data.disponible}
              cardType={cardType === 'mission' ? 'mission' : 'cooperator'}
            />
          </div>
        </div>
      </div>
    </li>
  );
}

export default Card;
