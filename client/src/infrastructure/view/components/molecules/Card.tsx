import React from 'react';
import { CardMenu } from '../molecules';
import CardDetails from './CardDetails';

function Card({
  data,
  position,
  details,
  contextMenu,
  cardType,
  setDisplay,
  setProp,
}) {
  function renderNames() {
    if (data.firstName && data.lastName) {
      const names = `${data.lastName} ${data.firstName}`;
      return names.length > 15 ? names.substr(0, 13) + '...' : names;
    }
  }

  return (
    <>
      <li>
        <div className="container">
          {details.ids.includes(data.id) &&
            (cardType === 'mission' ? (
              <CardDetails
                key={data.id}
                cardType="mission"
                data={data}
                details={details}
              />
            ) : (
              <CardDetails
                key={data.id}
                cardType="cooperator"
                data={data}
                details={details}
              />
            ))}

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
            {cardType === 'mission' ? (
              <div className="card__content">
                <div className="card__header">
                  <CardMenu
                    key={data.id}
                    data={data}
                    cardType="mission"
                    position={position}
                    contextMenu={contextMenu}
                    setDisplay={setDisplay}
                    setProp={setProp}
                  />
                  <h3 className="card__header__title">
                    {data.title && data.title.length > 15
                      ? data.title.substr(0, 13) + '...'
                      : data.title}
                  </h3>
                </div>
                <p className="card__client">
                  {data.client && data.client.length > 20
                    ? data.client.substr(0, 20) + '...'
                    : data.client}
                </p>
                <img
                  className="card__illustration"
                  src={'/mission_illustration.png'}
                  alt="illustration"
                />

                <div className={`card__status `}>
                  {data.isActive ? (
                    <>
                      <img
                        className="card__status__logo"
                        src={'/check.png'}
                        alt="check"
                      />
                      <span>Active</span>
                    </>
                  ) : (
                    <>
                      <img
                        className="card__status__logo"
                        src={'/close.png'}
                        alt="check"
                      />
                      <span>Inactive</span>
                    </>
                  )}
                </div>
              </div>
            ) : (
              <div className="card__content">
                <div className="card__header">
                  <CardMenu
                    key={data.id}
                    data={data}
                    position={position}
                    contextMenu={contextMenu}
                    setDisplay={setDisplay}
                    setProp={setProp}
                  />
                  <h4 className="card__header__title card-header-name">
                    {renderNames()}
                  </h4>
                </div>
                <p className="card__practice">
                  {data.practice && data.practice}
                </p>

                <img
                  className="card__illustration"
                  src={'/img-cooperator.png'}
                  alt="img cooperator"
                />

                <div className={`card__status`}>
                  {data.disponible ? (
                    <div className={`card__status__disponible`}>
                      <img
                        className="card__status__logo"
                        src={'/check.png'}
                        alt="check"
                      />
                      <span>Disponible</span>
                    </div>
                  ) : (
                    <div className={`card__status__disponible`}>
                      <img
                        className="card__status__logo"
                        src={'/close.png'}
                        alt="check"
                      />
                      <span>Indisponible</span>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </li>
    </>
  );
}

export default Card;
