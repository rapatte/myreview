import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import dataColor from '../../../../../utils/tagsColor.json';

function Tags({ tags, removeTag }) {
  const divRef = React.useRef<HTMLDivElement>(null);
  for (const [key, value] of Object.entries(dataColor)) {
    if (tags.includes(key) && divRef.current?.textContent === key) {
      divRef.current.style.backgroundColor = value;
    }
  }

  return (
    <div className="tags" id="tags">
      {tags.map((tag, index) => (
        <div
          onClick={() => removeTag(tag)}
          key={index}
          ref={divRef}
          className="tag"
        >
          {tag}
          <span>
            <FontAwesomeIcon icon={faXmark} />
          </span>
        </div>
      ))}
    </div>
  );
}

export default Tags;
