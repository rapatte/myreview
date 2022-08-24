import { faUserAltSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { linksData } from 'infrastructure/view/constants/routes';
import { usePathName } from 'infrastructure/view/hooks';
import { UseUser } from 'infrastructure/view/hooks/UseUsers';
import { userDelete } from 'infrastructure/view/store/user/user.actions';
import React, { useState } from 'react';
import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';
import { notifySuccess } from 'utils/toastify';

function NavBar(props) {
  const userContext = UseUser();
  const path = usePathName();
  const [isMenuOpen, handleMenu] = useState(false);
  const handleCloseMenu = () => {
    handleMenu(false);
  };
  const handleStateChange = state => {
    handleMenu(state.isOpen);
  };

  return (
    <Menu isOpen={isMenuOpen} onStateChange={handleStateChange} {...props}>
      {linksData.map((val, i) => {
        return (
          <Link
            key={i}
            className="MenuItem"
            to={val.link}
            id={path === val.link ? 'menuLinkActive' : ''}
            onClick={() => handleCloseMenu()}
          >
            <FontAwesomeIcon className="menuIcon" icon={val.icon} />
            {val.title}
          </Link>
        );
      })}
      <Link
        title="Logout"
        to="/reviews"
        className="MenuItem"
        id="/reviews"
        onClick={() => {
          localStorage.removeItem('token');
          handleCloseMenu();
          userContext.dispatch(userDelete(userContext.state.catalog[0]?.sub));
          notifySuccess('You have been logged out');
        }}
      >
        <FontAwesomeIcon className="menuIcon" icon={faUserAltSlash} />
        Logout
      </Link>
    </Menu>
  );
}

export { NavBar };
