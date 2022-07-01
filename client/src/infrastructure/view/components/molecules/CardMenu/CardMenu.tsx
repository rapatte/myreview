import React, { useRef } from 'react';
import { useOutsideClick } from 'infrastructure/view/hooks';
import { ContextMenuOption } from '../../atoms';
import './cardMenu.scss';

function CardMenu({ ...props }) {
  const { data } = props;
  const wrapperRef = useRef(null);
  useOutsideClick(wrapperRef, props.contextMenu.removeId);
  const isDisplayed = props.contextMenu.ids.includes(data.id);
  return (
    <>
      <img
        src="/menu.png"
        alt="card menu"
        className="card__header__menu"
        onClick={e => {
          e.stopPropagation();
          props.contextMenu.position(e);
          props.contextMenu.addId(data.id);
        }}
      />

      {isDisplayed && (
        <div
          ref={wrapperRef}
          className="custom-context-menu"
          style={{ top: props.position.yPos, left: props.position.xPos }}
        >
          <ContextMenuOption
            name={
              props.cardType === 'mission'
                ? data.isActive
                  ? 'Désactiver'
                  : 'Activer'
                : data.disponible
                ? 'Rendre indisponible'
                : 'Rendre disponible'
            }
            onClick={e => {
              e.stopPropagation();
              props.cardType === 'mission'
                ? props.contextMenu.changeStatus(data.id, data.isActive)
                : props.contextMenu.changeStatus(data.id, data.disponible);
            }}
          />

          <ContextMenuOption
            name="Modifier"
            onClick={e => {
              e.stopPropagation();
              props.setProp(data);
              props.setDisplay('update-form');
            }}
          />

          <ContextMenuOption
            name="Supprimer"
            onClick={e => {
              e.stopPropagation();
              props.contextMenu.handleClickDelete(data.id);
            }}
          />
        </div>
      )}
    </>
  );
}

export default CardMenu;
