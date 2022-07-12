import React, { useLayoutEffect, useState } from 'react';
import { CardDetails } from '..';

function Card({ ...props }) {
  const [idList, setIdList] = useState<any>([]);
  const [scroll, setScroll] = useState<any>({ scrollx: 0, scrolly: 0 });
  const [status, setStatus] = useState<boolean>();
  const { data, children } = props;
  const details = {
    ids: idList,
    addId: (el: any) => {
      const newList = idList.push(el);
      setIdList([newList, ...idList]);
      setScroll({ scrollx: window.scrollX, scrolly: window.scrollY });
    },
    removeId: (el: any) => {
      setScroll({ scrollx: window.scrollX, scrolly: window.scrollY });
      const newList = idList.splice(el, 1);
      setIdList([newList]);
    },
  };
  const displayedDetails = details.ids.includes(data.id);
  function displayDetail() {
    details.addId(data.id);
  }
  useLayoutEffect(() => {
    window.scrollTo(scroll.scrollx, scroll.scrolly);
  });

  return (
    <li>
      <div className="container">
        {displayedDetails && <CardDetails details={details} {...props} />}
        <div
          onClick={() => {
            displayDetail();
          }}
          className="card"
        >
          {children}
        </div>
      </div>
    </li>
  );
}

export default Card;
