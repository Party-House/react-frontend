import { createSelector } from 'reselect';

/**
 * Direct selector to the overallDebt state domain
 */
const selectOverallDebtDomain = state => state.get('overallDebt');

/**
 * Other specific selectors
 */


/**
 * Default selector used by OverallDebt
 */

const makeSelectOverallDebt = () => createSelector(
  selectOverallDebtDomain,
  substate => substate.toJS()
);

export default makeSelectOverallDebt;
export {
  makeSelectOverallDebt,
};
