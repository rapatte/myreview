import {
  faClapperboard,
  faBellConcierge,
  faPlusCircle,
  faUser,
} from '@fortawesome/free-solid-svg-icons';

export const linksData: any = [
  {
    title: 'Accueil',
    icon: faBellConcierge,
    link: '/',
  },

  {
    title: 'Reviews',
    icon: faClapperboard,
    link: '/reviews',
  },

  {
    title: 'Add a review',
    icon: faPlusCircle,
    link: '/reviews/add',
  },

  {
    title: 'Login',
    icon: faUser,
    link: '/login',
  },
];
