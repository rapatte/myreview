import React, { useEffect, useState } from 'react';
import { missionServices } from 'application';
import { Mission } from 'domain/mission/mission';
import { useMission } from 'infrastructure/view/hooks/UseMissions';
import {
  missionFiltred,
  missionList,
} from 'infrastructure/view/store/Mission/mission.actions';
import sortingById from 'utils/sortingArrays';
import { Checkbox, Title } from 'infrastructure/view/components/atoms';
import { Card, MissionCard } from '../../../../components/molecules';

function ListingMissionCards({ ...props }) {
  const { state, dispatch } = useMission();
  const [catalog, setCatalog] = useState<Mission[]>([]);
  const [checked, setChecked] = useState(false);
  const cooperator = useMission();
  const [error, setError] = useState('');

  const handleChange = () => {
    setChecked(!checked);
  };

  const getAvailableCooperators = async () => {
    if (checked) {
      try {
        await missionServices
          .getAvailableMissions()
          .then(data => cooperator.dispatch(missionFiltred(data)));
        setError('');
      } catch (error: any) {
        setError(error.response.data.message);
      }
    } else {
      await missionServices
        .getMissions()
        .then(data => cooperator.dispatch(missionList(data)));
      setError('');
    }
  };

  useEffect(() => {
    getAvailableCooperators();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [checked]);

  useEffect(() => {
    missionServices.getMissions().then(data => dispatch(missionList(data)));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setCatalog(state.catalog);
  }, [state.catalog]);

  return (
    <div className="container">
      <Title label="Les Missions" format="h2" />
      <Checkbox
        checked={checked}
        onChange={handleChange}
        error={error}
        label="Actives uniquement"
      />
      <ul className="container__cards">
        {catalog && catalog.length > 0
          ? catalog.sort(sortingById).map((prop, key) => (
              <Card key={key} data={prop} {...props}>
                <MissionCard cardType="mission" data={prop} {...props} />
              </Card>
            ))
          : 'Chargement'}
      </ul>
    </div>
  );
}

export default ListingMissionCards;
