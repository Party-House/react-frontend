/**
 *
 * Asynchronously loads the component for AppNavBar
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
