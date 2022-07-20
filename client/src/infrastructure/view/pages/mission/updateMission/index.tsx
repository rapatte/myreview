import React from 'react';
import { useState, useEffect } from 'react';
import { notifyError, notifySuccess } from 'utils/toastify';
import { missionServices } from 'application';
import { useLocalStorage } from 'infrastructure/view/hooks/useLocalStorage';
import { MissionForm } from 'infrastructure/view/components/organisms/forms/missionForm/MissionForm';
import { Mission } from 'domain/mission/mission';
import './UpdateMissionPage.scss';
import { Link, useHistory } from 'react-router-dom';
import { missionPosted } from 'infrastructure/view/store/Mission/mission.actions';
import { useMission } from 'infrastructure/view/hooks/UseMissions';

const UpdateMissions: React.FC = () => {
  const [values, setValues] = useState<Mission>({});
  const history = useHistory();
  const missionStore = useMission();
  const [getDataInStorage, setDataInStorage, removeDataInStorage] =
    useLocalStorage('mission-update-form', {});

  const handleSubmit = async e => {
    try {
      e.preventDefault();
      await missionServices.updateMission('', values);
      missionStore.dispatch(missionPosted(values));
      setValues({});
      removeDataInStorage('mission-update-form');
      history.push('/missions/');
      notifySuccess('La mission est mise à jour');
    } catch (error: any) {
      notifyError(error.response.data.message);
    }
  };

  useEffect(() => {
    setValues(getDataInStorage);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setDataInStorage(values);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [values]);

  return (
    <>
      <div className="update-mission-page">
        <div className="buttonSwitch">
          <Link to="/missions">
            <img
              id="goBack"
              src="../goBack.png"
              alt="go back"
              className={'back-button-mission'}
            />
          </Link>
        </div>
        <div>
          <MissionForm
            title={'Modifier une mission'}
            values={values}
            setValues={setValues}
            handleClick={handleSubmit}
          />
        </div>
      </div>
    </>
  );
};
export default UpdateMissions;
