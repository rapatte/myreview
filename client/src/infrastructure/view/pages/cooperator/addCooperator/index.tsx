import React from 'react';
import { useState, useEffect } from 'react';
import { notifyError, notifySuccess } from 'utils/toastify';
import { cooperatorServices } from 'application';
import { useLocalStorage } from 'infrastructure/view/hooks/useLocalStorage';
import './AddCooperatorPage.scss';
import { Link, useHistory } from 'react-router-dom';
import { CooperatorForm } from 'infrastructure/view/components/organisms/forms/cooperatorForm/CooperatorForm';
import { Cooperator } from 'domain/cooperator/cooperator';
import { useCooperator } from 'infrastructure/view/hooks/UseCooperators';
import { cooperatorPosted } from 'infrastructure/view/store/Cooperator/cooperator.actions';

const AddCooperators: React.FC = () => {
  const [values, setValues] = useState<Cooperator>({});
  const history = useHistory();
  const cooperatorStore = useCooperator();
  const [getDataInStorage, setDataInStorage, removeDataInStorage] =
    useLocalStorage('coooperator-add-form', {});

  const handleSubmit = async e => {
    try {
      e.preventDefault();
      await cooperatorServices.addCooperator(values);
      cooperatorStore.dispatch(cooperatorPosted(values));
      setValues({});
      removeDataInStorage('cooperator-add-form');
      history.push('/cooperateurs/');
      notifySuccess('Le coopérateur est enregistré');
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
      <div className="add-cooperator-page">
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
            title={'Ajouter un coopérateur'}
            values={values}
            setValues={setValues}
            handleClick={handleSubmit}
          />
        </div>
      </div>
    </>
  );
};
export default AddCooperators;
