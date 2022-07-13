import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ListingMissionCards from './ListingMissionCards';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/organisms',
  component: ListingMissionCards,
} as ComponentMeta<typeof ListingMissionCards>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Mission_List: ComponentStory<typeof ListingMissionCards> = () => {
  const data = [
    {
      id: '8df730c1-5b14-404e-88b2-b632fac8882b',
      title: 'Développeur back-end',
      client: 'BNP Paribas',
      profile: 'Java Kotlin',
      description:
        'tempus vel pede morbi porttitor lorem id ligula suspendisse',
      isActive: true,
    },
    {
      id: '8df730c1-5b14-404e-88b2-b632fac8882c',
      title: 'Développeur back-end',
      client: 'BNP Paribas',
      profile: 'Java Kotlin',
      description:
        'tempus vel pede morbi porttitor lorem id ligula suspendisse',
      isActive: true,
    },
    {
      id: '8df730c1-5b14-404e-88b2-b632fac8882d',
      title: 'Développeur back-end',
      client: 'BNP Paribas',
      profile: 'Java Kotlin',
      description:
        'tempus vel pede morbi porttitor lorem id ligula suspendisse',
      isActive: false,
    },
    {
      id: '8df730c1-5b14-404e-88b2-b632fac8882e',
      title: 'Développeur back-end',
      client: 'BNP Paribas',
      profile: 'Java Kotlin',
      description:
        'tempus vel pede morbi porttitor lorem id ligula suspendisse',
      isActive: true,
    },
  ];
  const [position, setPosition] = useState({ xPos: 0, yPos: 0 });
  const [idMenuList, setIdMenuList] = useState<any>([]);
  const [status, setStatus] = useState<boolean>();
  const [idList, setIdList] = useState<any>([]);

  const details = {
    ids: idList,
    addId: (el: any) => {
      idList.push(el);
      setIdList([...idList]);
    },
    removeId: (el: any) => {
      const index = idList.indexOf(el);
      idList.splice(index, 1);
      setIdList([...idList]);
    },
  };

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
      setPosition({ xPos: e.pageX - 130, yPos: e.pageY + 10 });
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

  const setProp = () => console.log('Les missions : ', data);
  const setDisplay = () => console.log('Redirection vers formulaire.');

  const deleteMission = async () => {
    console.log('Mission deleted');
  };
  return (
    <ListingMissionCards
      cardType="mission"
      props={data}
      position={position}
      contextMenu={contextMenu}
      details={details}
      setDisplay={setDisplay}
      setProp={setProp}
    />
  );
};
