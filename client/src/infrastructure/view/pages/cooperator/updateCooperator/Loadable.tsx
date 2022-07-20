/**
 * Asynchronously loads the component for MissionList
 */

import { lazyLoad } from 'utils/loadable';

export const UpdateCooperators = lazyLoad(
  () => import('./index'),
  module => module.default,
);
