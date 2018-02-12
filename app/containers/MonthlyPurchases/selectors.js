import { createSelector } from 'reselect';

/**
 * Direct selector to the monthlyPurchases state domain
 */
const selectMonthlyPurchasesDomain = (state) => state.get('monthlyPurchases');

/**
 * Other specific selectors
 */


/**
 * Default selector used by MonthlyPurchases
 */

const makeSelectMonthlyPurchases = () => createSelector(
  selectMonthlyPurchasesDomain,
  (substate) => substate.toJS()
);

export default makeSelectMonthlyPurchases;
export {
  selectMonthlyPurchasesDomain,
};
