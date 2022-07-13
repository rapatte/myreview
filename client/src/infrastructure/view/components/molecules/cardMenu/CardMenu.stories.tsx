import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import './cardMenu.scss';
import CardMenu from './CardMenu';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'components/molecules',
  component: CardMenu,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof CardMenu>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const CardMenuComponent: ComponentStory<typeof CardMenu> = args => {
  const data = {
    id: '8df730c1-5b14-404e-88b2-b632fac8882b',
    title: 'Développeur back-end',
    client: 'BNP Paribas',
    profile: 'Java Kotlin',
    description: 'tempus vel pede morbi porttitor lorem id ligula suspendisse',
    isActive: false,
  };
  const [position, setPosition] = useState({ xPos: 0, yPos: 0 });
  const [idMenuList, setIdMenuList] = useState<any>([]);
  const [status, setStatus] = useState<boolean>(data.isActive);

  const contextMenu = {
    ids: idMenuList,
    addId: el => {
      idMenuList.push(el);
      setIdMenuList([...idMenuList]);
    },
    removeId: el => {
      const index = idMenuList.indexOf(el);
      idMenuList.splice(index, 1);
      setIdMenuList([...idMenuList]);
    },
    position: (e: React.MouseEvent) => {
      e.preventDefault();
      setPosition({ xPos: e.pageX + 10, yPos: e.pageY + 10 });
    },
    changeStatus: async () => {
      setStatus(!status);
      console.log(status);
    },
    handleClickDelete: async () => {
      if (window.confirm('Êtes-vous sur de vouloir supprimer cette mission ?'))
        deleteMission();
      setIdMenuList([]);
    },
  };

  const setProp = () => console.log('La mission : ', data);
  const setDisplay = () => console.log('Redirection vers formulaire.');

  const deleteMission = async () => {
    console.log('Mission deleted');
  };

  return (
    <CardMenu
      className="card__header__menu"
      cardType="mission"
      data={data}
      position={position}
      contextMenu={contextMenu}
      setProp={setProp}
      setDisplay={setDisplay}
      setStatus={setStatus}
      status={status}
    />
  );
};
