import React, { useRef, useState } from 'react';
import { useOutsideClick } from 'infrastructure/view/hooks';
import { ContextMenuOption } from '../../atoms';
import './cardMenu.scss';
import { notifySuccess } from 'utils/toastify';
import { cooperatorServices, missionServices } from 'application';
import { cooperatorList } from 'infrastructure/view/store/Cooperator/cooperator.actions';
import { useCooperator } from 'infrastructure/view/hooks/UseCooperators';
import { missionList } from 'infrastructure/view/store/Mission/mission.actions';
import { useMission } from 'infrastructure/view/hooks/UseMissions';

function CardMenu({ ...props }) {
  const { data, cardType } = props;
  const cooperator = useCooperator();
  const mission = useMission();
  const [position, setPosition] = useState({ xPos: 0, yPos: 0 });
  const [idMenuList, setIdMenuList] = useState<any>([]);
  const [scroll, setScroll] = useState<any>({ scrollx: 0, scrolly: 0 });
  const [status, setStatus] = useState<boolean>();
  const contextMenu = {
    ids: idMenuList,
    addId: el => {
      idMenuList.push(el);
      setIdMenuList([...idMenuList]);
      setScroll({ scrollx: window.scrollX, scrolly: window.scrollY });
    },
    removeId: el => {
      setScroll({ scrollx: window.scrollX, scrolly: window.scrollY });
      const index = idMenuList.indexOf(el);
      idMenuList.splice(index, 1);
      setIdMenuList([...idMenuList]);
    },
    position: (e: React.MouseEvent) => {
      e.preventDefault();
      setPosition({ xPos: e.pageX - 130, yPos: e.pageY + 10 });
    },
    changeStatus: async (id, propStatus) => {
      setScroll({ scrollx: window.scrollX, scrolly: window.scrollY });
      setStatus(propStatus);
      if (cardType === 'cooperator') {
        const newStatus = { disponible: !propStatus };
        await cooperatorServices.updateCooperator(id, newStatus);
        setStatus(newStatus.disponible);
      }
      if (cardType === 'mission') {
        const newStatus = { isActive: !propStatus };
        await missionServices.updateMission(id, newStatus);
        setStatus(newStatus.isActive);
      }
    },
    handleClickDelete: async id => {
      if (window.confirm('Êtes-vous sur ?')) deleteData(id);
      setIdMenuList([]);
    },
  };
  const deleteData = async id => {
    if (cardType === 'cooperator') {
      const deletedMsg = await cooperatorServices.deleteCooperator(id);
      notifySuccess(deletedMsg);
      cooperatorServices
        .getCooperators()
        .then(cooperators => cooperator.dispatch(cooperatorList(cooperators)));
    }
    if (cardType === 'mission') {
      const deletedMsg = await missionServices.deleteMission(id);
      notifySuccess(deletedMsg);

      missionServices
        .getMissions()
        .then(missions => mission.dispatch(missionList(missions)));
    }
  };
  const wrapperRef = useRef(null);
  useOutsideClick(wrapperRef, contextMenu.removeId);
  const isDisplayed = contextMenu.ids.includes(data.id);
  return (
    <>
      <img
        src="/menu.png"
        alt="card menu"
        className="card__header__menu"
        onClick={e => {
          e.stopPropagation();
          contextMenu.position(e);
          contextMenu.addId(data.id);
        }}
      />

      {isDisplayed && (
        <div
          ref={wrapperRef}
          className="custom-context-menu"
          style={{ top: position.yPos, left: position.xPos }}
        >
          <ContextMenuOption
            name={
              cardType === 'mission'
                ? data.isActive
                  ? 'Désactiver'
                  : 'Activer'
                : data.disponible
                ? 'Rendre indisponible'
                : 'Rendre disponible'
            }
            onClick={e => {
              e.stopPropagation();
              cardType === 'mission'
                ? contextMenu.changeStatus(data.id, data.isActive)
                : contextMenu.changeStatus(data.id, data.disponible);
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
              contextMenu.handleClickDelete(data.id);
            }}
          />
        </div>
      )}
    </>
  );
}

export default CardMenu;
