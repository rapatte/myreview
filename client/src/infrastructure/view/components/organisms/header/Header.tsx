import React from 'react';
import { FunctionComponent } from 'react';
import { NavBar } from '../navbar/NavBar';

interface HeaderProps {}

const Header: FunctionComponent<HeaderProps> = () => {
  return (
    <div className="header">
      <NavBar pageWrapId={'page-wrap'} outerContainerId={'App'} />
      <img src="/MyReviewLogo.png" alt="logo" />
    </div>
  );
};

export default Header;
