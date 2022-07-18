import { Details } from '@material-ui/icons';
import React, { useLayoutEffect, useState } from 'react';
import { CardDetails } from '..';

function Card({...props }) {
  const [idList, setIdList] = useState<any>([]);
  const [scroll, setScroll] = useState<any>({ scrollx: 0, scrolly: 0 });
  const [status, setStatus] = useState<boolean>();
  const [isShown, setIsShown] = useState(false);
  const { data, children } = props;


  return (
    <li>
      <div className="container">
      <div  className="card"
      onClick= {()=> setIsShown(current => !current)}        >
      {isShown && (
        <div>
       <CardDetails  {...props} /></div>
      )}
          {children}
        </div>
      </div>
    </li>
  );
}

export default Card;


