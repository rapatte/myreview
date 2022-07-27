import React from 'react';
import { useState, useEffect } from 'react';
import { notifyError, notifySuccess } from 'utils/toastify';
import { missionServices } from 'application';
import { useLocalStorage } from 'infrastructure/view/hooks/useLocalStorage';
import { MissionForm } from 'infrastructure/view/components/organisms';
import { Mission } from 'domain/mission/mission';
import { Link, useHistory, useParams } from 'react-router-dom';
import { missionPosted } from 'infrastructure/view/store/Mission/mission.actions';
import { useMission } from 'infrastructure/view/hooks/UseMissions';

const AddMissions: React.FC = () => {
  const [values, setValues] = useState<Mission>({});
  const history = useHistory();
  const params: { id: string } = useParams();
  const missionStore = useMission();
  const [getDataInStorage, setDataInStorage, removeDataInStorage] =
    useLocalStorage('mission-add-form', {});

  const handleSubmit = async e => {
    try {
      e.preventDefault();
      await missionServices.addMission(values);
      missionStore.dispatch(missionPosted(values));
      setValues({});
      removeDataInStorage('mission-add-form');
      history.push('/missions/');
      notifySuccess('La mission est enregistrée');
    } catch (error: any) {
      notifyError(error.response.data.message);
    }
  };

  const getMissionById = () => {
    const catalog = missionStore.state.catalog;
    const missionSelected = catalog.filter(mission => mission.id === params.id);
    const [mission] = missionSelected;
    delete mission.id;
    return mission;
  };

  useEffect(() => {
    if (params.id) {
      const mission = getMissionById();
      setValues(mission);
    } else {
      setValues(getDataInStorage);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setDataInStorage(values);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [values]);

  return (
    <>
      <div className="add-mission-page">
        <div className="buttonSwitch">
          <Link to="/missions">
            <img
              id="goBack"
              src="/goBack.png"
              alt="go back"
              className={'back-button-mission'}
            />
          </Link>
        </div>
        <div>
          <MissionForm
            type="add"
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

export default AddMissions;
