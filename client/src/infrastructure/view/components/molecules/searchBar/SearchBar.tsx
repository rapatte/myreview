import React, { useEffect, useState } from 'react';

import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useCooperator } from 'infrastructure/view/hooks/UseCooperators';
import { useReview } from 'infrastructure/view/hooks/UseReviews';

import { reviewFilter } from 'infrastructure/view/store/review/review.actions';

import { Button, Input, Tags } from '../../../components/atoms';
import { reviewServices } from 'application';

export const SearchBar = ({ placeholder }) => {
  const [tags, setTags] = useState<string[]>([]);
  const [error, setError] = useState<string>();
  const review = useReview();

  const addTag = async input => {
    input.length > 0 && setTags([...tags, input]);
  };
  const removeTag = tagToRemove => {
    setTags(tags.filter(tag => tag !== tagToRemove));
  };

  const getSearchedData = async () => {
    try {
      await reviewServices
        .reviewFiltred(tags)
        .then(data => review.dispatch(reviewFilter(data)));
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
