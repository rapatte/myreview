import React from 'react';
import { useHistory } from 'react-router-dom';
// import { CardDetails } from '../../../components/molecules';

function Card({ children, id }) {
  const history = useHistory();
  // const [isShown, setIsShown] = useState(false);

  // const handleIsShownVisible = () => {
  //   if (!isShown) setIsShown(true);
  // };

  return (
    <li>
      <div className="container">
        <div className="card" onClick={() => history.push(`reviews/${id}`)}>
          {/* {isShown && (
            <CardDetails id={id} setIsShown={setIsShown} isShown={isShown} />
          )} */}
          {children}
        </div>
      </div>
    </li>
  );
}

export default Card;
