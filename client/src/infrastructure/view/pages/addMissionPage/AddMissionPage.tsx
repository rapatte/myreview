import React from 'react';
import { useState, useEffect } from 'react';
import { notifyError, notifySuccess } from 'utils/toastify';
import { missionServices } from 'application';
import { useLocalStorage } from 'infrastructure/view/hooks/useLocalStorage';
import { Missions } from '../missionList/missions/Loadable';
import { MissionForm } from 'infrastructure/view/components/organisms/forms/missionForm/MissionForm';
import { Mission } from 'domain/mission/mission';
import './AddMissionPage.scss';
import { Link } from 'react-router-dom';

const AddMissionPage: React.FC = () => {
  const [display, setDisplay] = useState(true);
  const [values, setValues] = useState<Mission>({});

  const [getDataInStorage, setDataInStorage, removeDataInStorage] =
    useLocalStorage('missionFormData', {});

  const handleSubmit = async e => {
    e.preventDefault();
    await missionServices
      .addMission(values)
      .then(res => {
        setDisplay(true);
        setValues({});
        removeDataInStorage('missionFormData');
        notifySuccess('La mission est enregistrée');
      })
      .catch((error: any) => {
        notifyError(error.response.data.message);
      });
  };

  useEffect(() => {
    // const dataJson = getDataInLocalStorage('missionFormData');
    // const mission = JSON.parse(dataJson!);
    setValues(getDataInStorage);
  }, []);

  useEffect(() => {
    setDataInStorage(values);
  }, [values]);

  const handleModals = (e: any) => {
    if (e.target.id === 'AddMission') {
      setDisplay(false);
    } else if (e.target.id === 'goBack') {
      setDisplay(true);
    }
  };

  return (
    <>
      <div className="Home">
        <div className="buttonSwitch">
          <Link to="/missions">
            <img
              id="goBack"
              onClick={handleModals}
              src="../goBack.png"
              alt="go back"
              className={'display'}
            />
          </Link>
        </div>
        <br />
        <div className="add-mission-page">
          <span></span>
          <MissionForm
            title={'Ajouter une mission'}
            values={values}
            setValues={setValues}
            handleClick={handleSubmit}
          />
        </div>
      </div>
    </>
  );
};
export default AddMissionPage;
