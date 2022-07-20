import React from 'react';
import { useState, useEffect } from 'react';
import { notifyError, notifySuccess } from 'utils/toastify';
import { cooperatorServices } from 'application';
import { useLocalStorage } from 'infrastructure/view/hooks/useLocalStorage';
import './UpdateCooperatorPage.scss';
import { Link, useHistory } from 'react-router-dom';
import { CooperatorForm } from 'infrastructure/view/components/organisms/forms/cooperatorForm/CooperatorForm';
import { Cooperator } from 'domain/cooperator/cooperator';
import { useCooperator } from 'infrastructure/view/hooks/UseCooperators';
import { cooperatorPosted } from 'infrastructure/view/store/Cooperator/cooperator.actions';

const UpdateCooperators: React.FC = () => {
  const [values, setValues] = useState<Cooperator>({});
  const history = useHistory();
  const cooperatorStore = useCooperator();
  const [getDataInStorage, setDataInStorage, removeDataInStorage] =
    useLocalStorage('coooperator-update-form', {});

  const handleSubmit = async e => {
    try {
      e.preventDefault();
      await cooperatorServices.updateCooperator('', values);
      cooperatorStore.dispatch(cooperatorPosted(values));
      setValues({});
      removeDataInStorage('cooperator-update-form');
      history.push('/cooperateurs/');
      notifySuccess('Le coopérateur est mis à jour');
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
      <div className="update-cooperator-page">
        <div className="buttonSwitch">
          <Link to="/cooperateurs">
            <img
              id="goBack"
              src="../goBack.png"
              alt="go back"
              className={'back-button-cooperator'}
            />
          </Link>
        </div>
        <div>
          <CooperatorForm
            title={'Modifier un coopérateur'}
            values={values}
            setValues={setValues}
            handleClick={handleSubmit}
          />
        </div>
      </div>
    </>
  );
};

export default UpdateCooperators;
