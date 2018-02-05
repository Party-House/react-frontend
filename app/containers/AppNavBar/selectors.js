import { createSelector } from 'reselect';

/**
 * Direct selector to the appNavBar state domain
 */
const selectAppNavBarDomain = (state) => state.get('appNavBar');

/**
 * Other specific selectors
 */


/**
 * Default selector used by AppNavBar
 */

const makeSelectAppNavBar = () => createSelector(
  selectAppNavBarDomain,
  (substate) => substate.toJS()
);

export default makeSelectAppNavBar;
export {
  selectAppNavBarDomain,
};
