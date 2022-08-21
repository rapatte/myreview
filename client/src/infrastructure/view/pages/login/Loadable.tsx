/**
 * Asynchronously loads the component for NotFoundPage
 */

import { lazyLoad } from 'utils/loadable';

export const Login = lazyLoad(
  () => import('./index'),
  module => module.default,
);
