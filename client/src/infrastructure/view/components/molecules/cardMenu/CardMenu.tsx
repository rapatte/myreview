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

function CardMenu({ setStatus, status, ...props }) {
  const { data, cardType } = props;
  const cooperator = useCooperator();
  const mission = useMission();
  const [position, setPosition] = useState({ xPos: 0, yPos: 0 });
  const [idMenuList, setIdMenuList] = useState<any>([]);
  const [showMenu, setShowMenu ]= useState(false);
  const ref = React.useRef<HTMLDivElement>(null);


  const positionMenu = (e: React.MouseEvent) => {
      e.preventDefault();
      setPosition({ xPos: e.pageX - 130, yPos: e.pageY + 10 });
    };
    const changeStatus= async id => {
      if (cardType === 'cooperator') {
        const newStatus = { disponible: !status };
        await cooperatorServices.updateCooperator(id, newStatus);
        setStatus(newStatus.disponible);
      }
      if (cardType === 'mission') {
        const newStatus = { isActive: !status };
        await missionServices.updateMission(id, newStatus);
        setStatus(newStatus.isActive);
      }
    };
    const handleClickDelete= async id => {
      if (window.confirm('Êtes-vous sur ?')) deleteData(id);
      setIdMenuList([]);
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
  useOutsideClick(ref, () => {
    if (showMenu) setShowMenu(false);
  });

  return (
    <>
      <img
        src="/menu.png"
        alt="card menu"
        className="card__header__menu"
        onClick={e => {
            positionMenu(e)
          e.stopPropagation();
          setShowMenu(true)
        }}
      />

        {showMenu && (

        <div
          ref={ref}
          className="custom-context-menu"
          style={{ top: position.yPos, left: position.xPos }}
        >
          <ContextMenuOption
            name={
              cardType === 'mission'
                ? status
                  ? 'Désactiver'
                  : 'Activer'
                : status
                ? 'Rendre indisponible'
                : 'Rendre disponible'
            }
            onClick={e => {
              e.stopPropagation();
              cardType === 'mission'
                ? changeStatus(data.id)
                : changeStatus(data.id);
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
              handleClickDelete(data.id);
            }}
          />
        </div>
       )}
    </>
  );
}

export default CardMenu;
