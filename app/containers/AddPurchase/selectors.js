import { createSelector } from 'reselect';

/**
 * Direct selector to the addPurchase state domain
 */
const selectAddPurchaseDomain = state => state.get('addPurchase');

/**
 * Other specific selectors
 */


/**
 * Default selector used by AddPurchase
 */

const makeSelectAddPurchase = () => createSelector(
  selectAddPurchaseDomain,
  substate => substate.toJS()
);

export default makeSelectAddPurchase;
export {
  makeSelectAddPurchase,
};
