import React, { useEffect, useState } from 'react';
import sortingById from 'utils/sortingArrays';
import { Checkbox, Title } from 'infrastructure/view/components/atoms';
import { Card, CooperatorCard } from '../../../../components/molecules';
import { useCooperator } from 'infrastructure/view/hooks/UseCooperators';
import { Cooperator } from 'domain/cooperator/cooperator';
import { cooperatorServices } from 'application';
import {
  cooperatorFiltred,
  cooperatorList,
} from 'infrastructure/view/store/Cooperator/cooperator.actions';

function ListingCooperatorCards({ ...props }) {
  const contextCooperator = useCooperator();
  const [checked, setChecked] = useState(false);
  const [error, setError] = useState('');
  const [catalog, setCatalog] = useState<Cooperator[]>([]);

  useEffect(() => {
    setCatalog(contextCooperator.state.catalog);
  }, [contextCooperator.state.catalog]);

  const handleChange = () => {
    setChecked(!checked);
  };

  const getAvailableCooperators = async () => {
    if (checked) {
      try {
        await cooperatorServices
          .getAvailableCooperators()
          .then(data => contextCooperator.dispatch(cooperatorFiltred(data)));
        setError('');
      } catch (error: any) {
        setError(error.response.data.message);
      }
    } else {
      await cooperatorServices
        .getCooperators()
        .then(data => contextCooperator.dispatch(cooperatorList(data)));
      setError('');
    }
  };

  useEffect(() => {
    getAvailableCooperators();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [checked]);

  return (
    <div className="container">
      <Title format="h2" label="Les Coopérateurs" />
      <Checkbox
        checked={checked}
        onChange={handleChange}
        error={error}
        label="Disponibles uniquement"
      />
      <ul className="container__cards">
        {catalog && catalog.length > 0
          ? catalog.sort(sortingById).map((cooperator, index) => (
              <Card key={index} id={cooperator.id} cardType="cooperator">
                <CooperatorCard key={cooperator.id} cooperator={cooperator} />
              </Card>
            ))
          : 'Chargement'}
      </ul>
    </div>
  );
}

export default ListingCooperatorCards;
