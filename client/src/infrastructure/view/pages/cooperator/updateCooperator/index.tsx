import React from 'react';
import { useState, useEffect } from 'react';
import { notifyError, notifySuccess } from 'utils/toastify';
import { cooperatorServices } from 'application';
import { Link, useHistory, useParams } from 'react-router-dom';
import { CooperatorForm } from 'infrastructure/view/components/organisms';
import { Cooperator } from 'domain/cooperator/cooperator';
import { useCooperator } from 'infrastructure/view/hooks/UseCooperators';
import { updateCooperator } from 'infrastructure/view/store/Cooperator/cooperator.actions';

const UpdateCooperators: React.FC = () => {
  const [values, setValues] = useState<Cooperator>({});
  const history = useHistory();
  const params: { id: string } = useParams();
  const cooperatorStore = useCooperator();

  const handleSubmit = async e => {
    try {
      e.preventDefault();
      await cooperatorServices.updateCooperator(params.id, values);
      cooperatorStore.dispatch(updateCooperator(values));
      setValues({});
      history.push('/cooperateurs/');
      notifySuccess('Le coopérateur est mis à jour');
    } catch (error: any) {
      notifyError(error.response.data.message);
    }
  };

  const getCooperatorById = () => {
    const catalog = cooperatorStore.state.catalog;
    const data = catalog.filter(data => data.id === params.id);
    const [cooperator] = data;
    return cooperator;
  };

  useEffect(() => {
    const cooperator = getCooperatorById();
    setValues(cooperator);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="update-cooperator-page">
        <div className="buttonSwitch">
          <Link to="/cooperateurs">
            <img
              id="goBack"
              src="/goBack.png"
              alt="go back"
              className={'back-button-cooperator'}
            />
          </Link>
        </div>
        <div>
          <CooperatorForm
            type="update"
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
