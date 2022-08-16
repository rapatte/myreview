/**
 * Asynchronously loads the component for Missions
 */

import { lazyLoad } from 'utils/loadable';

export const AddReviews = lazyLoad(
  () => import('./index'),
  module => module.default,
);
