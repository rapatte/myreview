/**
 * Asynchronously loads the component for Missions
 */

import { lazyLoad } from 'utils/loadable';

export const UpdateMissions = lazyLoad(
  () => import('./index'),
  module => module.default,
);
