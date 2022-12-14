/**
 * Asynchronously loads the component for Missions
 */

import { lazyLoad } from 'utils/loadable';

export const AddReview = lazyLoad(
  () => import('./index'),
  module => module.default,
);
