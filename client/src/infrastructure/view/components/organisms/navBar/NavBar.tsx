import { faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { linksData } from 'infrastructure/view/constants/routes';
import { usePathName } from 'infrastructure/view/hooks';
import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '../../atoms/logo-wemanity';
import './navBar.scss';

interface HeaderProps {
  className?: string;
  children?: ReactNode;
  id?: string;
  pathname?: string;
}

export const Menu = ({ pathname, ...props }: HeaderProps) => {
  return (
    <>
      <nav>
        <Link to={'/'}>
          <Logo />
        </Link>

        <div className="MenuList">
          {linksData.map((val, i) => {
            return (
              <Link
                key={i}
                className="MenuItem "
                id={val.link ? 'menuLinkActive' : ''}
                to={val.link}
                data-testid="link"
              >
                <FontAwesomeIcon className="menuIcon" icon={val.icon} />
                {val.title}
              </Link>
            );
          })}
        </div>
        <div className="MenuFooter">
          <Link
            to={{ pathname: `/paramètres` }}
            id={pathname === '/paramètres' ? 'menuLinkActive' : ''}
            data-testid="parametre"
          >
            <FontAwesomeIcon className="menuIcon" icon={faScrewdriverWrench} />
            <span>Paramètres</span>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Menu;
