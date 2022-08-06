// import { faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { linksData } from 'infrastructure/view/constants/routes';
// import React, { ReactNode } from 'react';
// import { Link } from 'react-router-dom';
// import { Logo } from 'infrastructure/view/components/atoms';
// import { usePathName } from 'infrastructure/view/hooks/UsePathName';

// interface HeaderProps {
//   className?: string;
//   children?: ReactNode;
//   id?: string;
//   pathname?: string;
// }

// export const NavBar = ({ pathname, ...props }: HeaderProps) => {
//   const path = usePathName();

//   return (
//     <>
//       <div className="Menu">
//         <Link to="/">
//           <Logo />
//         </Link>

//         <div className="MenuList">
//           {linksData.map((val, i) => {
//             return (
//               <Link
//                 key={i}
//                 className="MenuItem"
//                 to={val.link}
//                 id={path === val.link ? 'menuLinkActive' : ''}
//               >
//                 <FontAwesomeIcon className="menuIcon" icon={val.icon} />
//                 {val.title}
//               </Link>
//             );
//           })}
//         </div>
//         <div className="MenuFooter">
//           <Link
//             to="/paramètres"
//             id={path === '/paramètres' ? 'menuLinkActive' : ''}
//             className="MenuItem"
//           >
//             <FontAwesomeIcon className="menuIcon" icon={faScrewdriverWrench} />
//             &nbsp;Paramètres
//           </Link>
//         </div>
//       </div>
//     </>
//   );
// };

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { linksData } from 'infrastructure/view/constants/routes';
import { usePathName } from 'infrastructure/view/hooks';
import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';

function NavBar(props) {
  const path = usePathName();
  return (
    <Menu {...props}>
      {linksData.map((val, i) => {
        return (
          <Link
            key={i}
            className="MenuItem"
            to={val.link}
            id={path === val.link ? 'menuLinkActive' : ''}
          >
            <FontAwesomeIcon className="menuIcon" icon={val.icon} />
            {val.title}
          </Link>
        );
      })}
    </Menu>
  );
}

export { NavBar };
