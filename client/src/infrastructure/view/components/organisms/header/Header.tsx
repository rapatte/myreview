import React from 'react';
import { FunctionComponent } from 'react';
import { useHistory } from 'react-router-dom';
import { NavBar } from '../navbar/NavBar';

interface HeaderProps {}

const Header: FunctionComponent<HeaderProps> = () => {
  const history = useHistory();
  return (
    <div className="header">
      <NavBar pageWrapId={'page-wrap'} outerContainerId={'App'} />
      <img
        onClick={() => history.push('/reviews')}
        src="/MyReviewLogo.png"
        alt="logo"
      />
    </div>
  );
};

export default Header;
