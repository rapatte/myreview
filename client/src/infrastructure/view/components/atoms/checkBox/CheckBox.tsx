import { cooperatorServices, missionServices } from 'application';
import { useCooperator } from 'infrastructure/view/hooks/UseCooperators';
import { useMission } from 'infrastructure/view/hooks/UseMissions';
import {
  cooperatorFiltred,
  cooperatorList,
} from 'infrastructure/view/store/Cooperator/cooperator.actions';
import {
  missionFiltred,
  missionList,
} from 'infrastructure/view/store/Mission/mission.actions';
import React, { useState, useEffect } from 'react';

const Checkbox = ({ label }) => {
  const [checked, setChecked] = useState(false);
  const [error, setError] = useState('');
  const cooperator = useCooperator();
  const mission = useMission();

  const handleChange = () => {
    setChecked(!checked);
  };

  const getAvailableData = async () => {
    if (checked) {
      try {
        window.location.pathname === '/cooperateurs' &&
          (await cooperatorServices
            .getAvailableCooperators()
            .then(data => cooperator.dispatch(cooperatorFiltred(data))));
        window.location.pathname === '/missions' &&
          (await missionServices
            .getAvailableMissions()
            .then(data => mission.dispatch(missionFiltred(data))));
        setError('');
      } catch (error: any) {
        setError(error.response.data.message);
      }
    } else {
      window.location.pathname === '/cooperateurs' &&
        (await cooperatorServices
          .getCooperators()
          .then(data => cooperator.dispatch(cooperatorList(data))));
      window.location.pathname === '/missions' &&
        (await missionServices
          .getMissions()
          .then(data => mission.dispatch(missionList(data))));
      setError('');
    }
  };

  useEffect(() => {
    getAvailableData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [checked]);

  return (
    <div className="checkbox__wrapper">
      <label>
        <input type="checkbox" checked={checked} onChange={handleChange} />
        {label}
      </label>
      <div className="error">{error}</div>
    </div>
  );
};

export default Checkbox;
