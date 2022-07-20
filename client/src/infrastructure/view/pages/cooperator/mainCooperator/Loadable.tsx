/**
 * Asynchronously loads the component for MissionList
 */

import { lazyLoad } from 'utils/loadable';

export const Cooperators = lazyLoad(
  () => import('./index'),
  module => module.Cooperators,
);
