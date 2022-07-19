import React from 'react';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import dataColor from '../../../../../utils/tagsColor.json';
import './tags.scss';

function Tags({ tags, removeTag }) {
  const divRef = React.useRef<HTMLDivElement>(null);
  for (const [key, value] of Object.entries(dataColor)) {
    if (tags.includes(key) && divRef.current?.textContent === key) {
      divRef.current.style.backgroundColor = value;
    }
  }

  return (
    <div className="search__tags">
      {tags.map((tag, index) => (
        <div
          onClick={() => removeTag(tag)}
          key={index}
          ref={divRef}
          className="search__tags__tag"
        >
          {tag}
          <FontAwesomeIcon
            className="search__tags__tag__cross"
            icon={faXmark}
          />
        </div>
      ))}
    </div>
  );
}

export default Tags;
