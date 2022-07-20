/**
 * Asynchronously loads the component for MissionList
 */

import { lazyLoad } from 'utils/loadable';

export const AddCooperators = lazyLoad(
  () => import('./index'),
  module => module.default,
);
