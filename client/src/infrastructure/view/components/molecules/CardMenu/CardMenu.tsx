import React, { useRef } from 'react';
import { useOutsideClick } from 'infrastructure/view/hooks';
import ContextMenuOption from '../../atoms/option/Option';

function CardMenu({ prop, position, contextMenu, setDisplay, setProp }) {
  const wrapperRef = useRef(null);
  useOutsideClick(wrapperRef, contextMenu.removeId);
  return (
    <>
      <img
        onClick={e => {
          e.stopPropagation();
          contextMenu.position(e);
          contextMenu.addId(prop.id);
        }}
        className="card__header__menu"
        src={'/menu.png'}
        alt="menu"
      />
      {contextMenu.ids.includes(prop.id) && (
        <div
          ref={wrapperRef}
          className="custom-context-menu"
          style={{ top: position.yPos, left: position.xPos }}
        >
          {prop.isActive !== undefined ? (
            <ContextMenuOption
              name={prop.isActive ? 'Désactiver' : 'Activer'}
              onClick={e => {
                e.stopPropagation();
                contextMenu.changeStatus(prop.id, prop.isActive);
              }}
            />
          ) : (
            <ContextMenuOption
              name={
                prop.disponible ? 'Rendre indisponible' : 'Rendre disponible'
              }
              onClick={e => {
                e.stopPropagation();
                contextMenu.changeStatus(prop.id, prop.disponible);
              }}
            />
          )}

          <ContextMenuOption
            name="Modifier"
            onClick={() => {
              setProp(prop);
              setDisplay('update-form');
            }}
          />

          <ContextMenuOption
            name="Supprimer"
            onClick={e => {
              e.stopPropagation();
              contextMenu.handleClickDelete(prop.id);
            }}
          />
        </div>
      )}
    </>
  );
}

export default CardMenu;
