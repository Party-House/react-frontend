/**
 *
 * Asynchronously loads the component for AddPurchase
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
