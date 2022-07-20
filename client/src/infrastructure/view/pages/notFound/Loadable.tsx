/**
 * Asynchronously loads the component for NotFoundPage
 */

import { lazyLoad } from 'utils/loadable';

export const NotFound = lazyLoad(
  () => import('./index'),
  module => module.default,
);