import React, { useEffect, useState } from 'react';
import sortingById from 'utils/sortingArrays';
import { Checkbox, Title } from 'infrastructure/view/components/atoms';
import { Card, CooperatorCard } from '../../../../components/molecules';
import { cooperatorServices } from 'application';
import {
  cooperatorFiltred,
  cooperatorList,
} from 'infrastructure/view/store/Cooperator/cooperator.actions';
import { useCooperator } from 'infrastructure/view/hooks/UseCooperators';

function ListingCooperatorCards({ ...props }) {
  const [checked, setChecked] = useState(false);
  const cooperator = useCooperator();
  const [error, setError] = useState('');

  const handleChange = () => {
    setChecked(!checked);
  };

  const getAvailableCooperators = async () => {
    if (checked) {
      try {
        await cooperatorServices
          .getAvailableCooperators()
          .then(data => cooperator.dispatch(cooperatorFiltred(data)));
        setError('');
      } catch (error: any) {
        setError(error.response.data.message);
      }
    } else {
      await cooperatorServices
        .getCooperators()
        .then(data => cooperator.dispatch(cooperatorList(data)));
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
        {props.props && props.props.length > 0
          ? props.props.sort(sortingById).map(prop => (
              <Card key={prop.id} data={prop} {...props}>
                <CooperatorCard cardType="cooperator" data={prop} {...props} />
              </Card>
            ))
          : 'Chargement'}
      </ul>
    </div>
  );
}

export default ListingCooperatorCards;
