import React, { useEffect, useState } from 'react';

import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useCooperator } from 'infrastructure/view/hooks/UseCooperators';
import { useMission } from 'infrastructure/view/hooks/UseMissions';

import { cooperatorFiltred } from 'infrastructure/view/store/Cooperator/cooperator.actions';
import { missionFiltred } from 'infrastructure/view/store/Mission/mission.actions';

import { Button, Input, Tags } from '../../atoms';
import { cooperatorServices, missionServices } from 'application';

export const SearchBar = ({ placeholder }) => {
  const [tags, setTags] = useState<string[]>([]);
  const [error, setError] = useState<string>();
  const mission = useMission();
  const cooperator = useCooperator();

  const addTag = async input => {
    input.length > 0 && setTags([...tags, input]);
  };
  const removeTag = tagToRemove => {
    setTags(tags.filter(tag => tag !== tagToRemove));
  };

  const getSearchedData = async () => {
    try {
      window.location.pathname === '/missions' &&
        (await missionServices
          .missionFiltred(tags)
          .then(data => mission.dispatch(missionFiltred(data))));
      window.location.pathname === '/cooperateurs' &&
        (await cooperatorServices
          .cooperatorFiltred(tags)
          .then(data => cooperator.dispatch(cooperatorFiltred(data))));
      setError('');
    } catch (e: any) {
      setError(e.response.data.message);
    }
  };

  useEffect(() => {
    getSearchedData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tags]);

  const handleSubmit = e => {
    addTag(e.target.childNodes[0].value);
    e.target.childNodes[0].value = '';
    e.preventDefault();
  };

  return (
    <div className="search">
      <form className="search__bar" method="get" onSubmit={handleSubmit}>
        <Input
          type="text"
          className="search__bar__input"
          placeholder={placeholder}
        />
        <Button className="search__bar__button">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </Button>
      </form>
      <Tags tags={tags} removeTag={removeTag} />
      <div className="search__error">{error}</div>
    </div>
  );
};